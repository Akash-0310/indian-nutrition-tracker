import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const categories = [
  {
    id: 'getting-started',
    title: 'Getting started',
    emoji: '🌱',
    items: [
      {
        q: 'Do I need an account to start tracking?',
        a: 'No. Zero sign-up. Open the tracker, log your dal, done. Your data saves to your device right away. Cloud sync is optional and coming soon for users who want it.',
      },
      {
        q: 'How much does ThaliTrack cost?',
        a: 'The tracker itself is free forever — all 80+ dishes, the daily log, the progress ring, macros, everything. We sustain ourselves through an upcoming premium meal-plans tier (₹199/month) for users who want custom weekly plans.',
      },
      {
        q: 'How accurate are the calorie numbers?',
        a: 'They\'re honest approximations based on common home recipes — usually within ±10% of your actual meal. Every Indian dish has regional variation; ghee/oil quantities change; serving sizes differ. We document our methodology openly and update numbers as users and our research lead flag improvements.',
      },
      {
        q: 'Which dishes are in the database?',
        a: 'Over 80 across 11 categories: breads (roti, paratha, naan), rice (biryani, pulao, curd rice), dal, sabzi, non-veg curries, South Indian (idli, dosa, vada), snacks (chaat, samosa, pav bhaji), breakfast, sweets, and drinks. We add 5-10 new user-requested dishes each week.',
      },
    ],
  },
  {
    id: 'features',
    title: 'Features & how it works',
    emoji: '✨',
    items: [
      {
        q: 'Can I log custom portions?',
        a: 'Yes. When you tap a dish, you pick the number of servings in 0.5 increments (0.5, 1, 1.5, 2, and so on up to 10). Calories and macros scale automatically.',
      },
      {
        q: 'Can I change my daily calorie target?',
        a: 'Yes. Set any target from 800 to 5000 kcal in the sidebar. Your target is yours — we don\'t recommend or judge, and we don\'t ask for weight, height, age, or BMI at all.',
      },
      {
        q: 'Can I log yesterday\'s meals?',
        a: 'Absolutely. Use the date selector at the top of the tracker to move back to any previous day and log (or review) your meals. You can\'t log into the future, though — we\'re a tracker, not a time machine.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. Because the food database is bundled into the app and your logs save locally, everything works fully offline — on a flight, in the metro, anywhere.',
      },
      {
        q: 'Is there a dark mode?',
        a: 'There is. Tap the moon icon in the top-right. We also match your system preference by default.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Nutrition & data methodology',
    emoji: '🧪',
    items: [
      {
        q: 'Where do your calorie numbers come from?',
        a: 'Each number is derived from common home-kitchen recipes validated by our research lead, Dr. Kavya Rao (PhD, food science). We cross-reference 3-5 recipes per dish, calculate per-serving macros, and document our assumptions for transparency.',
      },
      {
        q: 'Why do the numbers differ from other apps?',
        a: 'Most apps use restaurant-style entries ("butter chicken, 1 serving = vague") or foreign databases. Our servings reflect home cooking — which typically uses less oil but more ghee/cream in specific dishes. We err on the side of realism over under-counting.',
      },
      {
        q: 'My dish isn\'t in the database. Can I request it?',
        a: 'Please do! Head to the Contact page and drop us a note with the dish name and (if you can) a rough recipe. We prioritize frequently-requested dishes and ship 5-10 new entries per week.',
      },
      {
        q: 'Can I edit a dish\'s calorie value for my version?',
        a: 'Custom overrides are on our roadmap. Today, if your mom\'s dal tadka is richer than ours, you can compensate by increasing the serving size slightly — 1.2 or 1.3 servings gets you very close.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & data',
    emoji: '🔒',
    items: [
      {
        q: 'Where is my data stored?',
        a: 'Everything lives in your browser\'s local storage by default. We can\'t see it. If you opt into (future) cloud sync, we store only your log entries and calorie target — encrypted at rest, never shared.',
      },
      {
        q: 'Do you sell data or run ads?',
        a: 'No data is ever sold. We will show light, relevant ads in the future to help keep the core app free — but never weight-loss scam ads or anything privacy-invasive. Premium subscribers get an ad-free experience.',
      },
      {
        q: 'What happens if I clear my browser?',
        a: 'Your log resets. Export-to-CSV is coming soon as a backup option.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Support & feedback',
    emoji: '💌',
    items: [
      {
        q: 'Something is broken. How do I report it?',
        a: 'Use our Contact page with "Bug" in the subject. Aarav reads every one and typically replies within 12 hours.',
      },
      {
        q: 'I want a feature — will you build it?',
        a: 'Maybe! Many of our features (date-shift, meal grouping, macro bar) came from user requests. Send it in and we\'ll tell you honestly.',
      },
      {
        q: 'Can I partner with you?',
        a: 'We\'re open to collaborations with dietitians, trainers, and wellness brands who share our values. Reach out via the contact page with "Partnership" in the subject line.',
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item glass ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={isOpen}>
        <span>{q}</span>
        <span className="plus" aria-hidden>+</span>
      </button>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState('getting-started-0');
  useScrollAnimation();

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">FAQ</span>
          <h1>
            Everything you're wondering, <span className="spice-text">answered honestly.</span>
          </h1>
          <p>
            Real answers from the team — methodology, privacy, pricing, and the stuff
            no other tracker will tell you upfront. If your question isn't here, head
            to <Link to="/contact">Contact</Link> and we'll reply personally.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          {categories.map((cat, ci) => (
            <div key={cat.id} style={{ marginBottom: 56 }} className="reveal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                <div
                  style={{
                    width: 54, height: 54, borderRadius: 18,
                    display: 'grid', placeItems: 'center',
                    background: 'var(--gradient-spice)',
                    fontSize: '1.5rem',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  {cat.emoji}
                </div>
                <div>
                  <span className="section-kicker" style={{ marginBottom: 4, display: 'block' }}>
                    Category {ci + 1}
                  </span>
                  <h2 style={{ margin: 0 }}>{cat.title}</h2>
                </div>
              </div>

              {cat.items.map((item, i) => {
                const key = `${cat.id}-${i}`;
                return (
                  <FAQItem
                    key={key}
                    q={item.q}
                    a={item.a}
                    isOpen={openKey === key}
                    onToggle={() => setOpenKey(openKey === key ? null : key)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Still have questions?</h2>
            <p>We reply to every message. No chatbot, no ticket queue — just Aarav and a steaming cup of chai.</p>
            <Link to="/contact" className="btn btn-ghost">Send us a note →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
