import React, { useEffect, useMemo, useState } from 'react';
import { FOODS, CATEGORIES, MEALS } from '../data/foodData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ENTRIES_KEY = 'tt-entries-v1';
const TARGET_KEY = 'tt-target-v1';

function todayKey() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function loadEntries() {
  try {
    const raw = localStorage.getItem(ENTRIES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function Tracker() {
  useScrollAnimation();
  const [entries, setEntries] = useState(loadEntries);
  const [target, setTarget] = useState(() => Number(localStorage.getItem(TARGET_KEY)) || 2000);
  const [activeDate, setActiveDate] = useState(todayKey());
  const [search, setSearch] = useState('');
  // Multi-select category filter. Empty set = "All" (no category restriction).
  const [categories, setCategories] = useState([]);

  const toggleCategory = (id) => {
    if (id === 'all') {
      setCategories([]);
      return;
    }
    setCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };
  const [modalFood, setModalFood] = useState(null);
  const [modalQty, setModalQty] = useState(1);
  const [modalMeal, setModalMeal] = useState('lunch');
  // Raw text of the daily-target field, so the user can type freely.
  // The numeric `target` is only committed (and clamped) on blur / Enter.
  const [targetInput, setTargetInput] = useState(() => String(target));

  const commitTarget = () => {
    const clamped = Math.max(800, Math.min(5000, Number(targetInput) || 2000));
    setTarget(clamped);
    setTargetInput(String(clamped));
  };

  useEffect(() => {
    localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem(TARGET_KEY, String(target));
  }, [target]);

  const filteredFoods = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FOODS.filter((f) => {
      if (categories.length > 0 && !categories.includes(f.category)) return false;
      if (!q) return true;
      return f.name.toLowerCase().includes(q);
    });
  }, [search, categories]);

  const todaysEntries = useMemo(
    () => entries.filter((e) => e.date === activeDate),
    [entries, activeDate]
  );

  const totals = useMemo(() => {
    const t = { calories: 0, carbs: 0, protein: 0, fat: 0 };
    todaysEntries.forEach((e) => {
      t.calories += e.calories;
      t.carbs += e.carbs;
      t.protein += e.protein;
      t.fat += e.fat;
    });
    return t;
  }, [todaysEntries]);

  const byMeal = useMemo(() => {
    const map = { breakfast: [], lunch: [], snacks: [], dinner: [] };
    todaysEntries.forEach((e) => {
      if (map[e.meal]) map[e.meal].push(e);
    });
    return map;
  }, [todaysEntries]);

  const openModal = (food) => {
    setModalFood(food);
    setModalQty(1);
    const hour = new Date().getHours();
    if (hour < 11) setModalMeal('breakfast');
    else if (hour < 15) setModalMeal('lunch');
    else if (hour < 18) setModalMeal('snacks');
    else setModalMeal('dinner');
  };

  const closeModal = () => setModalFood(null);

  const confirmAdd = () => {
    if (!modalFood) return;
    const entry = {
      id: `e-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      foodId: modalFood.id,
      foodName: modalFood.name,
      emoji: modalFood.emoji,
      serving: modalFood.serving,
      meal: modalMeal,
      servings: modalQty,
      calories: Math.round(modalFood.calories * modalQty),
      carbs: +(modalFood.carbs * modalQty).toFixed(1),
      protein: +(modalFood.protein * modalQty).toFixed(1),
      fat: +(modalFood.fat * modalQty).toFixed(1),
      date: activeDate,
      createdAt: Date.now(),
    };
    setEntries((prev) => [...prev, entry]);
    closeModal();
  };

  const removeEntry = (id) => setEntries((prev) => prev.filter((e) => e.id !== id));

  const shiftDate = (days) => {
    const [y, m, d] = activeDate.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + days);
    const pad = (n) => String(n).padStart(2, '0');
    setActiveDate(`${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`);
  };

  const friendlyDate = useMemo(() => {
    const [y, m, d] = activeDate.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((dt - today) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Today';
    if (diff === -1) return 'Yesterday';
    if (diff === 1) return 'Tomorrow';
    return dt.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  }, [activeDate]);

  // Calorie ring math
  const pct = Math.min(100, Math.round((totals.calories / target) * 100));
  const remaining = target - totals.calories;
  const circumference = 2 * Math.PI * 66;
  const ringOffset = circumference - (Math.min(totals.calories, target) / target) * circumference;

  const macroTotal = totals.carbs * 4 + totals.protein * 4 + totals.fat * 9 || 1;
  const macroPct = {
    carb: (totals.carbs * 4 * 100) / macroTotal,
    protein: (totals.protein * 4 * 100) / macroTotal,
    fat: (totals.fat * 9 * 100) / macroTotal,
  };

  return (
    <section style={{ paddingTop: 140 }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-kicker">Daily tracker</span>
          <h1>
            Log your <span className="spice-text">thali, chai, and chaat</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '0 auto', fontSize: '1.05rem' }}>
            Search 80+ real Indian dishes, log your meal, and see your calories and macros
            come together. Your data stays on your device.
          </p>
        </div>

        <div className="tracker-layout">
          {/* MAIN */}
          <div className="tracker-main glass">
            <div className="tracker-head">
              <div>
                <h2>{friendlyDate}'s meals</h2>
                <p style={{ color: 'var(--text-soft)' }}>
                  {todaysEntries.length === 0
                    ? 'Nothing logged yet — search a dish below to get started.'
                    : `${todaysEntries.length} item${todaysEntries.length === 1 ? '' : 's'} logged · ${totals.calories} kcal`}
                </p>
              </div>
              <div className="date-picker">
                <button onClick={() => shiftDate(-1)} aria-label="Previous day">‹</button>
                <span className="today">{friendlyDate}</span>
                <button
                  onClick={() => shiftDate(1)}
                  aria-label="Next day"
                  disabled={activeDate >= todayKey()}
                  style={activeDate >= todayKey() ? { opacity: 0.3, cursor: 'not-allowed' } : undefined}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="search-wrap">
              <span className="search-ico">🔍</span>
              <input
                type="search"
                placeholder="Search dosa, dal, biryani, paratha..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search foods"
              />
            </div>

            <div className="category-pills">
              {CATEGORIES.map((c) => {
                const isActive =
                  c.id === 'all' ? categories.length === 0 : categories.includes(c.id);
                return (
                  <button
                    key={c.id}
                    className={isActive ? 'active' : ''}
                    aria-pressed={isActive}
                    onClick={() => toggleCategory(c.id)}
                  >
                    {c.emoji} {c.label}
                  </button>
                );
              })}
            </div>

            {filteredFoods.length > 0 && (
              <div className="food-grid">
                {filteredFoods.map((f) => (
                  <button key={f.id} className="food-card" onClick={() => openModal(f)}>
                    <span className="food-emoji">{f.emoji}</span>
                    <h4>{f.name}</h4>
                    <span className="serving">{f.serving}</span>
                    <span className="cal">
                      <strong>{f.calories} kcal</strong>
                      <span>C{f.carbs} P{f.protein} F{f.fat}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}
            {filteredFoods.length === 0 && (
              <div className="log-empty">
                <div className="big">🔎</div>
                <h3>No matches</h3>
                <p>Try a different term, or help us add this dish from the contact page.</p>
              </div>
            )}

            <h3 style={{ margin: '30px 0 16px', fontFamily: 'var(--font-heading)' }}>
              Logged for {friendlyDate.toLowerCase()}
            </h3>

            {todaysEntries.length === 0 ? (
              <div className="log-empty">
                <div className="big">🍽️</div>
                <h3>Empty plate</h3>
                <p>Tap any dish above to log it. Breakfast counts too.</p>
              </div>
            ) : (
              MEALS.map((meal) => {
                const list = byMeal[meal.id];
                if (list.length === 0) return null;
                const mealTotal = list.reduce((s, e) => s + e.calories, 0);
                return (
                  <div key={meal.id} className="meal-section">
                    <div className="meal-title">
                      <h3>{meal.emoji} {meal.label}</h3>
                      <span className="total">{mealTotal} kcal</span>
                    </div>
                    {list.map((e) => (
                      <div key={e.id} className="log-entry">
                        <span className="emoji">{e.emoji}</span>
                        <div className="meta">
                          <strong>{e.foodName}</strong>
                          <span>
                            {e.servings === 1 ? e.serving : `${e.servings}× ${e.serving}`}
                            {' · '}
                            C{e.carbs}g · P{e.protein}g · F{e.fat}g
                          </span>
                        </div>
                        <span className="kcal">{e.calories} kcal</span>
                        <button
                          type="button"
                          className="remove"
                          onClick={() => removeEntry(e.id)}
                          aria-label={`Remove ${e.foodName}`}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                );
              })
            )}
          </div>

          {/* SIDEBAR SUMMARY */}
          <aside className="summary glass">
            <div className="calorie-chart">
              <svg width="160" height="160" viewBox="0 0 160 160">
                <defs>
                  <linearGradient id="calGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="66" fill="none" stroke="var(--surface-strong)" strokeWidth="12" />
                <circle
                  cx="80" cy="80" r="66"
                  fill="none"
                  stroke="url(#calGrad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={ringOffset}
                  transform="rotate(-90 80 80)"
                  style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              </svg>
              <div className="consumed">{totals.calories}</div>
              <div className="target">of {target} kcal · {pct}%</div>
              <div className={`remaining ${remaining < 0 ? 'over' : ''}`}>
                {remaining >= 0 ? `${remaining} kcal remaining` : `${Math.abs(remaining)} kcal over target`}
              </div>
            </div>

            <div className="target-input">
              <label htmlFor="target">Daily target</label>
              <input
                id="target"
                type="number"
                min={800}
                max={5000}
                step={50}
                value={targetInput}
                onChange={(e) => {
                  const v = e.target.value;
                  setTargetInput(v);
                  // Live recalc: update the ring/remaining as soon as a valid
                  // number is typed. Range-clamping is deferred to onBlur.
                  const n = Number(v);
                  if (v !== '' && !Number.isNaN(n)) setTarget(n);
                }}
                onBlur={commitTarget}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.currentTarget.blur();
                }}
              />
            </div>

            <div>
              <div className="macro-bar" aria-label="Macro split">
                <span className="seg carb"    style={{ width: `${macroPct.carb}%` }} />
                <span className="seg protein" style={{ width: `${macroPct.protein}%` }} />
                <span className="seg fat"     style={{ width: `${macroPct.fat}%` }} />
              </div>
              <div className="macros" style={{ marginTop: 12 }}>
                <div className="macro carb">
                  <div className="dot" />
                  <div className="name">Carbs</div>
                  <div className="grams">{Math.round(totals.carbs)}g</div>
                  <div className="pct">{Math.round(macroPct.carb)}%</div>
                </div>
                <div className="macro protein">
                  <div className="dot" />
                  <div className="name">Protein</div>
                  <div className="grams">{Math.round(totals.protein)}g</div>
                  <div className="pct">{Math.round(macroPct.protein)}%</div>
                </div>
                <div className="macro fat">
                  <div className="dot" />
                  <div className="name">Fat</div>
                  <div className="grams">{Math.round(totals.fat)}g</div>
                  <div className="pct">{Math.round(macroPct.fat)}%</div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: 16,
                borderRadius: 16,
                background: 'var(--gradient-spice)',
                color: '#1f1206',
                fontSize: '0.85rem',
              }}
            >
              <strong style={{ display: 'block', marginBottom: 4 }}>💡 Today's tip</strong>
              Balance is bigger than any single meal. A samosa at 4pm is not a sin — it's data.
            </div>
          </aside>
        </div>
      </div>

      {/* QUANTITY MODAL */}
      {modalFood && (
        <div
          className="qty-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Log ${modalFood.name}`}
        >
          <div className="qty-modal glass" onClick={(e) => e.stopPropagation()}>
            <h3>{modalFood.emoji} {modalFood.name}</h3>
            <div className="sub">{modalFood.serving} · {modalFood.calories} kcal per serving</div>

            <div className="meal-picker">
              {MEALS.map((m) => (
                <button
                  key={m.id}
                  className={modalMeal === m.id ? 'active' : ''}
                  onClick={() => setModalMeal(m.id)}
                >
                  {m.emoji} {m.label}
                </button>
              ))}
            </div>

            <div className="qty-controls">
              <button onClick={() => setModalQty((q) => Math.max(0.5, +(q - 0.5).toFixed(1)))} aria-label="Decrease">−</button>
              <div className="qty-value">{modalQty}</div>
              <button onClick={() => setModalQty((q) => Math.min(10, +(q + 0.5).toFixed(1)))} aria-label="Increase">+</button>
            </div>

            <div className="qty-summary">
              <span>
                C {(modalFood.carbs * modalQty).toFixed(1)}g ·
                P {(modalFood.protein * modalQty).toFixed(1)}g ·
                F {(modalFood.fat * modalQty).toFixed(1)}g
              </span>
              <span className="preview-kcal">
                {Math.round(modalFood.calories * modalQty)} kcal
              </span>
            </div>

            <div className="qty-actions">
              <button className="btn btn-ghost btn-sm" onClick={closeModal}>Cancel</button>
              <button className="btn btn-primary btn-sm" onClick={confirmAdd}>Add to log ✨</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
