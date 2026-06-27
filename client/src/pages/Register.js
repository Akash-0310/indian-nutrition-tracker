import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useScrollAnimation from '../hooks/useScrollAnimation';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  useScrollAnimation();
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setStatus({ state: 'error', message: 'Please fill in your name, email, and password.' });
      return;
    }
    if (!emailRegex.test(form.email)) {
      setStatus({ state: 'error', message: "That email doesn't look right — mind giving it another try?" });
      return;
    }
    if (form.password.length < 6) {
      setStatus({ state: 'error', message: 'Password must be at least 6 characters.' });
      return;
    }
    if (form.password !== form.confirm) {
      setStatus({ state: 'error', message: "Passwords don't match." });
      return;
    }

    setStatus({ state: 'loading', message: '' });
    try {
      await register({ name: form.name, email: form.email, password: form.password });
      navigate('/tracker', { replace: true });
    } catch (err) {
      setStatus({
        state: 'error',
        message: err.response?.data?.error || 'Could not create your account. Please try again.',
      });
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">Get started</span>
          <h1>
            Create your <span className="spice-text">ThaliTrack</span> account
          </h1>
          <p>Track your thali, chai, and chaat — and keep your progress synced across devices.</p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 480 }}>
          <form className="contact-form glass reveal" onSubmit={onSubmit} noValidate>
            <h3 style={{ marginBottom: 6 }}>Sign up</h3>
            <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>
              It takes less than a minute.
            </p>

            {status.state === 'error' && <div className="form-note error">{status.message}</div>}

            <div className="form-group">
              <label htmlFor="name">Your name <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Rhea Kapoor" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="password" name="password" type="password" value={form.password} onChange={onChange} placeholder="At least 6 characters" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirm">Confirm password <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="confirm" name="confirm" type="password" value={form.confirm} onChange={onChange} placeholder="Re-enter your password" required />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status.state === 'loading'}
              style={{ width: '100%', padding: '16px 28px' }}
            >
              {status.state === 'loading' ? 'Creating account...' : 'Create account ✨'}
            </button>

            <p style={{ marginTop: 20, textAlign: 'center', color: 'var(--text-soft)' }}>
              Already have an account? <Link to="/login" className="spice-text">Sign in</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
