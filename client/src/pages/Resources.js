import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { ARTICLES } from '../data/articles';

const resources = ARTICLES.map((a) => ({
  slug: a.slug,
  icon: a.icon,
  tag: a.tag,
  category: a.category,
  title: a.title,
  body: a.subtitle,
  time: a.readTime,
}));

const categories = [
  { id: 'all',       label: 'All' },
  { id: 'calc',      label: 'Calculators' },
  { id: 'macros',    label: 'Macros' },
  { id: 'meal-plans', label: 'Meal plans' },
  { id: 'education', label: 'Education' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'fitness',   label: 'Fitness' },
  { id: 'health',    label: 'Health' },
  { id: 'recipes',   label: 'Recipes' },
];

const tools = [
  { emoji: '⚖️', title: 'BMR / TDEE calculator',   body: 'Plug in a few numbers, get your real energy needs — plus an honest recommendation for your daily target.' },
  { emoji: '🛒', title: 'Grocery list generator',  body: 'Pick a meal plan, get a week\'s shopping list. No more forgetting the methi at the sabzi stall.' },
  { emoji: '📸', title: 'Snap-a-plate (beta)',     body: 'Upload a photo of your plate. We identify dishes and offer a quick log estimate. Rolling out 2026.' },
  { emoji: '📤', title: 'Export to CSV / PDF',     body: 'Share your weekly log with a dietitian, doctor, or the spreadsheet-inclined spouse.' },
];

export default function Resources() {
  useScrollAnimation();
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? resources : resources.filter((r) => r.category === active);

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">Resources</span>
          <h1>
            Nutrition guides <span className="spice-text">that actually reference Indian food.</span>
          </h1>
          <p>
            Calculators, deep dives, sample meal plans, and honest answers. Written by
            our research team and reviewed by certified nutritionists. Free to read,
            free to share.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`btn btn-sm ${active === c.id ? 'btn-primary' : 'btn-ghost'}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid cols-3">
            {filtered.map((r, i) => (
              <Link
                key={r.slug}
                to={`/resources/${r.slug}`}
                id={r.category}
                className={`resource-card glass reveal delay-${(i % 4) + 1}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="emoji-icon">{r.icon}</div>
                <span className="tag">{r.tag} · {r.time}</span>
                <h3 style={{ color: 'var(--text)' }}>{r.title}</h3>
                <p>{r.body}</p>
                <span style={{ marginTop: 'auto', color: 'var(--saffron-600)', fontWeight: 600 }}>
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Coming soon</span>
              <h2>More tools <span className="gradient-text">we're working on.</span></h2>
            </div>
            <p className="section-subtitle">
              Our roadmap, in public. If any of these sound exciting (or if you want them
              yesterday), tell us — user priority decides what ships first.
            </p>
          </div>

          <div className="grid cols-4">
            {tools.map((t, i) => (
              <div key={t.title} className={`feature-card glass reveal delay-${(i % 4) + 1}`}>
                <div className="icon" style={{ background: 'var(--gradient-spice)' }}>{t.emoji}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Food inspiration</span>
              <h2>Eat well. <span className="spice-text">Eat beautifully.</span></h2>
            </div>
          </div>

          <div className="grid cols-3">
            {[
              { src: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=900&q=75&auto=format&fit=crop', title: 'Balanced home thali',   sub: 'Veg, dal, rice, roti — all the colors of a good meal' },
              { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=75&auto=format&fit=crop', title: 'Breakfast of champions', sub: 'Dosa, sambar, chutneys — fuel that lasts' },
              { src: 'https://images.unsplash.com/photo-1626132647523-66f6bf9d68c3?w=900&q=75&auto=format&fit=crop', title: 'The magic of chaat',     sub: 'Track it, enjoy it, move on' },
              { src: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=900&q=75&auto=format&fit=crop', title: 'Street-side snacks',    sub: 'Portion-aware pakoras and samosas' },
              { src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=900&q=75&auto=format&fit=crop', title: 'Paneer, done right',    sub: 'Protein that keeps everyone happy' },
              { src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=75&auto=format&fit=crop', title: 'Biryani Sundays',       sub: 'Log it proudly' },
            ].map((g, i) => (
              <div key={g.title} className={`image-card reveal delay-${(i % 4) + 1}`}>
                <img src={g.src} alt={g.title} loading="lazy" />
                <div className="caption">
                  <h4>{g.title}</h4>
                  <span>{g.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Enough reading — time to track.</h2>
            <p>Open the tracker, log today's breakfast, and see what a data-informed thali looks like.</p>
            <Link to="/tracker" className="btn btn-ghost">Launch the tracker →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
