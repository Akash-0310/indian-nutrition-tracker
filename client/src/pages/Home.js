import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const features = [
  { icon: '🍛', title: 'Dishes you actually eat',       body: 'Dal, sabzi, roti, biryani, chaat, dosa, halwa — our database speaks your language (literally). 80+ Indian dishes, growing every week.' },
  { icon: '⚡', title: 'Log a meal in 5 seconds',         body: 'Type "biryani", pick your serving size, pick breakfast/lunch/snacks/dinner. Done. No scanning barcodes, no cross-referencing.' },
  { icon: '📊', title: 'Calories & macros, together',    body: 'A daily calorie ring, a live macro bar, and clean per-meal breakdowns. See not just how much you ate, but what kind of fuel it was.' },
  { icon: '🗓️', title: 'Yesterday, today, tomorrow',    body: 'Jump between days with one tap. Plan ahead, backfill yesterday\'s lunch, review last weekend\'s wedding feast without shame.' },
  { icon: '🎯', title: 'Your target, your call',         body: 'Set any daily calorie goal from 800 to 5000 kcal. Adjust it as your life changes. No "recommended" nags, no guilt trips.' },
  { icon: '🔒', title: 'Private by default',             body: 'Everything saves to your device. No login to start. We don\'t see your meals, sell your data, or ping you with notifications.' },
];

const testimonials = [
  {
    name: 'Rhea, Bangalore',
    role: 'Marathon runner · using 4 months',
    quote: '"Finally — an app that knows puliyogare isn\'t just \'rice.\' I trained for my half-marathon entirely on ThaliTrack. Macros on point, no international food gymnastics."',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=75&auto=format&fit=crop',
  },
  {
    name: 'Arjun, Mumbai',
    role: 'Lost 12 kg in 6 months',
    quote: '"Every other tracker made me feel like my food was wrong. This one just... logs what I actually eat at home. My mom\'s dal makhani included."',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=75&auto=format&fit=crop',
  },
  {
    name: 'Priya, Delhi',
    role: 'Mom of two · meal prepping',
    quote: '"Planning the family\'s meals went from a weekend spreadsheet to a 10-minute task. And my kids ask for the categorized breakfast list now."',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=75&auto=format&fit=crop',
  },
];

const gallery = [
  { src: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=900&q=75&auto=format&fit=crop', title: 'Thali plates',      sub: 'Balanced, colorful, complete' },
  { src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=75&auto=format&fit=crop', title: 'Biryani done right', sub: 'Know exactly what you\'re eating' },
  { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=75&auto=format&fit=crop', title: 'Dosa & chutney',     sub: 'Breakfast you\'ll look forward to' },
  { src: 'https://images.unsplash.com/photo-1626132647523-66f6bf9d68c3?w=900&q=75&auto=format&fit=crop', title: 'Chai & chaat',       sub: 'Snacks, tracked without guilt' },
];

export default function Home() {
  useScrollAnimation();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="reveal">
              <span className="section-kicker eyebrow">🪔 Built for Indian kitchens</span>
              <h1>
                The calorie tracker that actually knows what a
                <br />
                <span className="spice-text">dal makhani is.</span>
              </h1>
              <p className="lead">
                Every other nutrition app makes you count almonds. ThaliTrack counts
                rotis, biryanis, chaats, and chai — in proper portions, with proper macros.
                Because you shouldn't have to translate your food to track it.
              </p>
              <div className="hero-cta">
                <Link to="/tracker" className="btn btn-primary">Start tracking — free ✨</Link>
                <Link to="/about" className="btn btn-ghost">Why we built this</Link>
              </div>

              <div className="stats glass reveal delay-2" style={{ marginTop: 40 }}>
                <div className="stat"><div className="num">80+</div><div className="label">Indian dishes</div></div>
                <div className="stat"><div className="num">11</div><div className="label">Food categories</div></div>
                <div className="stat"><div className="num">4</div><div className="label">Meal slots</div></div>
                <div className="stat"><div className="num">₹0</div><div className="label">To get started</div></div>
              </div>
            </div>

            <div className="hero-visual reveal delay-2">
              <img
                src="https://images.unsplash.com/photo-1630383249896-424e482df921?w=1000&q=80&auto=format&fit=crop"
                alt="A traditional Indian thali with dal, sabzi, rice, roti, raita and sweets"
                loading="eager"
              />
              <div className="hero-badge b1">
                <div className="avatar">🔥</div>
                <div>
                  <strong>1,840 kcal today</strong>
                  <span>160 under target</span>
                </div>
              </div>
              <div className="hero-badge b2">
                <div className="avatar">💪</div>
                <div>
                  <strong>Protein 84g</strong>
                  <span>Crushed it</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Why people switch</span>
              <h2>Built for the way <span className="gradient-text">India actually eats.</span></h2>
            </div>
            <p className="section-subtitle">
              No more logging "mixed vegetables, cooked, 1 cup" and hoping for the best.
              ThaliTrack speaks in dishes — categorized, portioned, and seasoned to taste.
            </p>
          </div>

          <div className="grid cols-3">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card glass reveal delay-${(i % 4) + 1}`}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">How it works</span>
              <h2>From "what did I eat today?" to <span className="gradient-text">"I know exactly."</span></h2>
            </div>
          </div>

          <div className="steps">
            <div className="step glass reveal delay-1">
              <h3>Search a dish</h3>
              <p>
                Type "paratha," "biryani," or browse by category. Our database includes
                everything from dosa to dhokla — with proper Indian serving sizes.
              </p>
            </div>
            <div className="step glass reveal delay-2">
              <h3>Log your portion</h3>
              <p>
                Pick your serving (0.5, 1, 1.5 — we get it, sometimes you have two rotis,
                sometimes four) and slot it into breakfast, lunch, snacks, or dinner.
              </p>
            </div>
            <div className="step glass reveal delay-3">
              <h3>See the picture</h3>
              <p>
                A live ring fills up with calories. Macros split across a colorful bar.
                Flip between days. No judgment, no popups, no "you have a streak to protect."
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal">
            <Link to="/tracker" className="btn btn-primary">Open my tracker →</Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Real food</span>
              <h2>Every dish, <span className="spice-text">properly cataloged.</span></h2>
            </div>
            <p className="section-subtitle">
              Breakfast, lunch, snacks, thali — the full spread of Indian meals, each
              with accurate nutrition so you never have to guess again.
            </p>
          </div>

          <div className="grid cols-4">
            {gallery.map((g, i) => (
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

      {/* TESTIMONIALS */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Real users</span>
              <h2>Loved by <span className="gradient-text">runners, moms, desi hostel-dwellers &amp; everyone between.</span></h2>
            </div>
          </div>

          <div className="grid cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial glass reveal delay-${i + 1}`}>
                <div className="stars">★ ★ ★ ★ ★</div>
                <blockquote>{t.quote}</blockquote>
                <div className="author">
                  <img src={t.img} alt={t.name} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to track your real food?</h2>
            <p>
              No sign-up, no credit card, no 14-day trial. Just a tracker that speaks
              your kitchen's language. Open it and start logging.
            </p>
            <Link to="/tracker" className="btn btn-ghost">Launch the tracker 🍛</Link>
          </div>
        </div>
      </section>
    </>
  );
}
