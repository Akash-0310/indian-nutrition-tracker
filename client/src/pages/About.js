import React from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const values = [
  { icon: '🫶', title: 'Made for our own families',      body: 'We built this because our mothers, siblings, and runner friends were all frustrated with the same foreign-first trackers. Our dogfood is dal-fed.' },
  { icon: '🧭', title: 'Accuracy over aesthetics',        body: 'Our data comes from real home recipes, not restaurant averages. When we don\'t know, we say so. When a user knows better, we update it.' },
  { icon: '🤐', title: 'Never guilt-driven',              body: 'No streaks to protect, no "you failed today" messages, no red highlights on high-calorie dishes. A samosa is a snack, not a sin.' },
  { icon: '📖', title: 'Transparent forever',             body: 'Every calorie and gram-of-protein figure is an approximation — we own that. Our methodology page explains exactly how we landed on each number.' },
];

const team = [
  { name: 'Ananya Venkatesh', role: 'Co-founder, Product', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=75&auto=format&fit=crop', bio: 'Former nutrition consultant in Bangalore. Built the original spreadsheet with 800 dishes. Still believes curd rice is the answer to almost any question.' },
  { name: 'Rohit Menon',       role: 'Co-founder, Engineering', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=75&auto=format&fit=crop', bio: 'Ten years of building consumer apps in Mumbai. Cooks the household\'s biryani. Believes "serving size" is a love language.' },
  { name: 'Dr. Kavya Rao',     role: 'Head of Nutrition Research', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=75&auto=format&fit=crop', bio: 'PhD in food science, Chennai. Responsible for every number in our database. Suspicious of any app that claims to know how much ghee is in your thepla.' },
  { name: 'Aarav Joshi',       role: 'Community Lead',        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75&auto=format&fit=crop', bio: 'Runs our WhatsApp community of 12,000+ users. Former marathon coach. Answers every message himself within 12 hours.' },
];

const story = [
  { year: '2023', title: 'The spreadsheet era',        body: 'Ananya builds a 40-sheet calorie doc for her consulting clients. Demand far outstrips her ability to email updates.' },
  { year: '2024', title: 'Prototype weekend',          body: 'Rohit and Ananya build a working app over a four-day weekend. 30 friends sign up in a week.' },
  { year: '2024', title: 'Community launch',          body: 'Beta opened to 500 users via a single Instagram post. The WhatsApp group fills up in 72 hours.' },
  { year: '2025', title: 'Dr. Kavya joins',            body: 'Our entire database is re-validated, region by region. South Indian, Gujarati, Punjabi, Bengali variations documented.' },
  { year: '2026', title: 'Here today',                 body: '12,000+ active users. 80+ dishes (and growing every week from user requests). Still free. Still independent.' },
];

export default function About() {
  useScrollAnimation();

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">About us</span>
          <h1>
            We're fixing the calorie tracker <span className="spice-text">for India.</span>
          </h1>
          <p>
            ThaliTrack is a small, independent team obsessed with one thing: making
            nutrition tracking that actually fits Indian food. No more "chicken breast,
            100g" for the hundredth time. No more logging "fried vegetable curry" because
            nothing else matches.
          </p>
          <p>
            We started as a spreadsheet in Bangalore. Today we're used by thousands of
            families, athletes, and professionals across India and the diaspora — and
            we're still built by the same four people who wrote the first row.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="hero-inner">
            <div className="reveal">
              <span className="section-kicker">Our mission</span>
              <h2>Honest food, honest numbers.</h2>
              <p>
                Global nutrition apps treat Indian food as an afterthought — a handful
                of "ethnic" entries bolted onto a database of Western staples. The
                result is users who give up or fake-log a "vegetable curry" for
                dishes as different as palak paneer and avial.
              </p>
              <p>
                We flipped the whole thing. India-first. Category-organized by how
                Indian kitchens actually work (dal, sabzi, rice, chaat, sweets, drinks).
                Serving sizes that match home portions, not lab portions.
              </p>
              <p>
                And every number is reviewed by Dr. Kavya, who will tell you with a
                straight face why regional variation of dal tadka can swing 40 calories
                per bowl — and why we land where we do.
              </p>
            </div>
            <div className="hero-visual reveal delay-2">
              <img
                src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1000&q=80&auto=format&fit=crop"
                alt="Beautifully plated biryani with garnish"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">What we value</span>
              <h2>The four things we <span className="gradient-text">refuse to compromise on.</span></h2>
            </div>
          </div>

          <div className="grid cols-2">
            {values.map((v, i) => (
              <div key={v.title} className={`feature-card glass reveal delay-${(i % 4) + 1}`}>
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Our story</span>
              <h2>From a single spreadsheet to <span className="gradient-text">thousands of thalis tracked.</span></h2>
            </div>
          </div>

          <div className="timeline">
            {story.map((s) => (
              <div key={`${s.year}-${s.title}`} className="tl-item reveal">
                <div className="tl-dot" />
                <div className="tl-content glass">
                  <span className="section-kicker" style={{ marginBottom: 10 }}>{s.year}</span>
                  <h3>{s.title}</h3>
                  <p style={{ marginBottom: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">The team</span>
              <h2>Four people. <span className="gradient-text">One obsession.</span></h2>
            </div>
            <p className="section-subtitle">
              We all work remote across four cities. We meet in Bangalore every quarter
              for a weekend of planning, biryani, and user-research calls.
            </p>
          </div>

          <div className="grid cols-4">
            {team.map((m, i) => (
              <div key={m.name} className={`feature-card glass reveal delay-${(i % 4) + 1}`} style={{ textAlign: 'center' }}>
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  style={{
                    width: 120, height: 120, borderRadius: '50%',
                    objectFit: 'cover', margin: '0 auto 18px',
                    boxShadow: '0 10px 28px rgba(249, 115, 22, 0.3)',
                  }}
                />
                <h3 style={{ marginBottom: 4 }}>{m.name}</h3>
                <span className="section-kicker" style={{ marginBottom: 12 }}>{m.role}</span>
                <p style={{ fontSize: '0.92rem' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Come be part of the story.</h2>
            <p>Start tracking today — and if your favorite dish is missing from the database, drop us a note. We add 5-10 user-requested dishes every week.</p>
            <Link to="/tracker" className="btn btn-ghost">Open the tracker →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
