import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FOODS, CATEGORIES } from '../data/foodData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PAGE_SIZE = 12;

export default function CalorieCalculator() {
  useScrollAnimation();
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  // Items added to the current meal: { foodId, qty }
  const [meal, setMeal] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const toggleCategory = (id) => {
    setVisibleCount(PAGE_SIZE);
    if (id === 'all') {
      setCategories([]);
      return;
    }
    setCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filteredFoods = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FOODS.filter((f) => {
      if (categories.length > 0 && !categories.includes(f.category)) return false;
      if (!q) return true;
      return f.name.toLowerCase().includes(q);
    });
  }, [search, categories]);

  const visibleFoods = filteredFoods.slice(0, visibleCount);
  const hasMore = visibleCount < filteredFoods.length;

  const addFood = (food) => {
    setMeal((prev) => {
      const existing = prev.find((m) => m.foodId === food.id);
      if (existing) {
        return prev.map((m) =>
          m.foodId === food.id ? { ...m, qty: +(m.qty + 0.5).toFixed(1) } : m
        );
      }
      return [...prev, { foodId: food.id, qty: 1 }];
    });
  };

  const changeQty = (foodId, delta) => {
    setMeal((prev) =>
      prev
        .map((m) =>
          m.foodId === foodId ? { ...m, qty: +(m.qty + delta).toFixed(1) } : m
        )
        .filter((m) => m.qty > 0)
    );
  };

  const removeFood = (foodId) =>
    setMeal((prev) => prev.filter((m) => m.foodId !== foodId));

  const clearMeal = () => setMeal([]);

  const mealItems = useMemo(
    () =>
      meal
        .map((m) => {
          const food = FOODS.find((f) => f.id === m.foodId);
          return food ? { ...food, qty: m.qty } : null;
        })
        .filter(Boolean),
    [meal]
  );

  const totals = useMemo(() => {
    const t = { calories: 0, carbs: 0, protein: 0, fat: 0 };
    mealItems.forEach((m) => {
      t.calories += m.calories * m.qty;
      t.carbs += m.carbs * m.qty;
      t.protein += m.protein * m.qty;
      t.fat += m.fat * m.qty;
    });
    return {
      calories: Math.round(t.calories),
      carbs: +t.carbs.toFixed(1),
      protein: +t.protein.toFixed(1),
      fat: +t.fat.toFixed(1),
    };
  }, [mealItems]);

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">Calorie Calculator</span>
          <h1>
            Count the calories in <span className="spice-text">your meal.</span>
          </h1>
          <p>
            Pick the dishes on your plate, set how many servings, and get an instant
            calorie and macro total. No sign-up, no saving — just a quick estimate.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="tracker-layout">
            {/* PICKER */}
            <div className="tracker-main glass">
              <div className="search-wrap">
                <span className="search-ico">🔍</span>
                <input
                  type="search"
                  placeholder="Search dosa, dal, biryani, paratha..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(PAGE_SIZE);
                  }}
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

              {filteredFoods.length > 0 ? (
                <>
                  <div className="food-grid">
                    {visibleFoods.map((f) => (
                      <button key={f.id} className="food-card" onClick={() => addFood(f)}>
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
                  {hasMore && (
                    <div className="load-more-wrap">
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                      >
                        Load more ({filteredFoods.length - visibleCount} left)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="log-empty">
                  <div className="big">🔎</div>
                  <h3>No matches</h3>
                  <p>Try a different term or category.</p>
                </div>
              )}
            </div>

            {/* MEAL SUMMARY */}
            <aside className="summary glass">
              <div className="calorie-chart" style={{ paddingBottom: 8 }}>
                <div className="consumed">{totals.calories}</div>
                <div className="target">kcal in this meal</div>
              </div>

              <div className="meal-section">
                <div className="meal-title">
                  <h3>🍽️ Your meal</h3>
                  {mealItems.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={clearMeal}
                    >
                      Clear
                    </button>
                  )}
                </div>

                {mealItems.length === 0 ? (
                  <div className="log-empty">
                    <div className="big">🍽️</div>
                    <h3>Empty plate</h3>
                    <p>Tap any dish to add it to your meal.</p>
                  </div>
                ) : (
                  mealItems.map((m) => (
                    <div key={m.id} className="log-entry">
                      <span className="emoji">{m.emoji}</span>
                      <div className="meta">
                        <strong>{m.foodName || m.name}</strong>
                        <span>
                          {m.qty === 1 ? m.serving : `${m.qty}× ${m.serving}`}
                          {' · '}
                          C{+(m.carbs * m.qty).toFixed(1)}g · P
                          {+(m.protein * m.qty).toFixed(1)}g · F
                          {+(m.fat * m.qty).toFixed(1)}g
                        </span>
                      </div>
                      <div className="qty-controls" style={{ margin: 0 }}>
                        <button onClick={() => changeQty(m.id, -0.5)} aria-label="Decrease">−</button>
                        <div className="qty-value" style={{ minWidth: 32 }}>{m.qty}</div>
                        <button onClick={() => changeQty(m.id, 0.5)} aria-label="Increase">+</button>
                      </div>
                      <span className="kcal">{Math.round(m.calories * m.qty)} kcal</span>
                      <button
                        type="button"
                        className="remove"
                        onClick={() => removeFood(m.id)}
                        aria-label={`Remove ${m.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              {mealItems.length > 0 && (
                <div className="macros" style={{ marginTop: 8 }}>
                  <div className="macro carb">
                    <div className="dot" />
                    <div className="name">Carbs</div>
                    <div className="grams">{Math.round(totals.carbs)}g</div>
                  </div>
                  <div className="macro protein">
                    <div className="dot" />
                    <div className="name">Protein</div>
                    <div className="grams">{Math.round(totals.protein)}g</div>
                  </div>
                  <div className="macro fat">
                    <div className="dot" />
                    <div className="name">Fat</div>
                    <div className="grams">{Math.round(totals.fat)}g</div>
                  </div>
                </div>
              )}

              <div
                style={{
                  padding: 16,
                  borderRadius: 16,
                  background: 'var(--gradient-spice)',
                  color: '#1f1206',
                  fontSize: '0.85rem',
                }}
              >
                <strong style={{ display: 'block', marginBottom: 4 }}>💡 Want to track daily?</strong>
                The <Link to="/tracker" style={{ color: '#1f1206', fontWeight: 700 }}>Daily Tracker</Link> saves
                your meals by day and shows progress against a calorie target.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
