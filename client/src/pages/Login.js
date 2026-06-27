import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Login() {
  useScrollAnimation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/tracker';

  const [form, setForm] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setStatus({ state: 'error', message: 'Please enter your email and password.' });
      return;
    }
    setStatus({ state: 'loading', message: '' });
    try {
      await login(form);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setStatus({
        state: 'error',
        message: err.response?.data?.error || 'Could not sign you in. Please try again.',
      });
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">Welcome back</span>
          <h1>
            Sign in to <span className="spice-text">ThaliTrack</span>
          </h1>
          <p>Pick up right where you left off — your meals, macros, and targets are waiting.</p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 480 }}>
          <form className="contact-form glass reveal" onSubmit={onSubmit} noValidate>
            <h3 style={{ marginBottom: 6 }}>Log in</h3>
            <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>
              Enter your details to continue.
            </p>

            {status.state === 'error' && <div className="form-note error">{status.message}</div>}

            <div className="form-group">
              <label htmlFor="email">Email <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
              <input id="password" name="password" type="password" value={form.password} onChange={onChange} placeholder="••••••••" required />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status.state === 'loading'}
              style={{ width: '100%', padding: '16px 28px' }}
            >
              {status.state === 'loading' ? 'Signing in...' : 'Sign in ✨'}
            </button>

            <p style={{ marginTop: 20, textAlign: 'center', color: 'var(--text-soft)' }}>
              New here? <Link to="/register" className="spice-text">Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
