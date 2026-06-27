import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/tracker', label: 'Tracker' },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo" aria-label="ThaliTrack home">
          <span className="logo-mark">🍛</span>
          <span className="logo-text">Thali<span className="accent">Track</span></span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button type="button" className="btn btn-ghost btn-sm nav-cta-mobile" onClick={onLogout}>
              Log out
            </button>
          ) : (
            <Link to="/login" className="btn btn-ghost btn-sm nav-cta-mobile">
              Sign in
            </Link>
          )}
          <Link to="/tracker" className="btn btn-primary btn-sm nav-cta-mobile">
            Start Tracking
          </Link>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className={`tgl-icon ${theme}`}>{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
          {isAuthenticated ? (
            <>
              <span className="nav-user" title={user?.email}>
                Hi, {user?.name?.split(' ')[0] || 'there'}
              </span>
              <button type="button" className="btn btn-ghost btn-sm nav-cta" onClick={onLogout}>
                Log out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-ghost btn-sm nav-cta">
              Sign in
            </Link>
          )}
          <Link to="/tracker" className="btn btn-primary btn-sm nav-cta">
            Start Tracking
          </Link>
          <button
            className={`burger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
