import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="fm">🍛</span>
              <span>Thali<em>Track</em></span>
            </Link>
            <p>
              India's friendliest calorie tracker — built around the food you actually eat,
              not a database of "chicken breast, 100g" for the hundredth time.
            </p>
            <div className="socials">
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#youtube" aria-label="YouTube">📺</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
              <a href="#whatsapp" aria-label="WhatsApp community">💬</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Track</h4>
            <Link to="/tracker">Daily Tracker</Link>
            <Link to="/resources#meal-plans">Meal Plans</Link>
            <Link to="/resources#calorie-calc">Calorie Calculator</Link>
            <Link to="/resources#macros">Macro Guide</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resources">Resources</Link>
          </div>

          <div className="footer-col">
            <h4>Weekly macros in your inbox</h4>
            <p className="tiny">
              Recipes, nutrition deep-dives, and "how bad is this chaat, really?" —
              delivered every Sunday morning with your chai.
            </p>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="your@email.com" aria-label="Email address" />
              <button type="submit" className="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} ThaliTrack. Made in India, with <span className="heart">♥</span> and plenty of chai.</p>
          <div className="footer-meta">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
