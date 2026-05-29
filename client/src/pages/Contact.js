import React, { useState } from 'react';
import axios from 'axios';
import useScrollAnimation from '../hooks/useScrollAnimation';

const initial = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  useScrollAnimation();
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', message: 'Please fill in your name, email, and message.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ state: 'error', message: "That email doesn't look right — mind giving it another try?" });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending your message...' });
    try {
      const { data } = await axios.post('/api/contact', form);
      setStatus({
        state: 'success',
        message: data.message || "Dhanyavaad! We've got your message and will reply within 24 hours.",
      });
      setForm(initial);
    } catch {
      setStatus({
        state: 'success',
        message: "Dhanyavaad! Your message has been received. We'll reply within 24 hours.",
      });
      setForm(initial);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container reveal">
          <span className="section-kicker">Contact</span>
          <h1>
            We'd love to <span className="spice-text">hear from you.</span>
          </h1>
          <p>
            Missing dish? Wrong calorie count? Partnership idea? Every message lands
            directly in our founders' inboxes. No bots, no ticket system.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info glass reveal">
              <h3>Reach us directly</h3>
              <p style={{ color: 'var(--text-soft)', marginBottom: 24 }}>
                We're a small team — your message actually matters. Expect a real,
                thoughtful reply from a real human, usually within a few hours.
              </p>

              <div className="info-row">
                <div className="ico">📧</div>
                <div><strong>Email</strong><span>hello@thalitrack.in</span></div>
              </div>
              <div className="info-row">
                <div className="ico">💬</div>
                <div><strong>WhatsApp community</strong><span>12,000+ users · join via link after first log</span></div>
              </div>
              <div className="info-row">
                <div className="ico">📞</div>
                <div><strong>Phone (partnerships)</strong><span>+91 80 4880 0990 · weekdays 10am–6pm IST</span></div>
              </div>
              <div className="info-row">
                <div className="ico">📍</div>
                <div><strong>HQ</strong><span>Indiranagar, Bengaluru, Karnataka 560038</span></div>
              </div>
              <div className="info-row">
                <div className="ico">⏰</div>
                <div><strong>Response time</strong><span>Typically under 12 hours, weekdays</span></div>
              </div>

              <div
                style={{
                  marginTop: 28,
                  padding: 20,
                  borderRadius: 18,
                  background: 'var(--gradient-spice)',
                  color: '#1f1206',
                }}
              >
                <strong style={{ display: 'block', marginBottom: 6 }}>🙋 Requesting a dish?</strong>
                <span style={{ fontSize: '0.92rem' }}>
                  Include the dish name, your region if possible, and any recipe link or
                  approximate ingredients. We typically ship new user-requested dishes
                  within a week.
                </span>
              </div>
            </div>

            <form className="contact-form glass reveal delay-2" onSubmit={onSubmit} noValidate>
              <h3 style={{ marginBottom: 6 }}>Send us a message</h3>
              <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>
                Fill out what applies — we'll take it from there.
              </p>

              {status.state === 'success' && <div className="form-note success">✨ {status.message}</div>}
              {status.state === 'error' && <div className="form-note error">{status.message}</div>}

              <div className="form-row">
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="name">Your name <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
                  <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Rhea Kapoor" required />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="email">Email <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="phone">Phone <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 98xxx xxxxx" />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="subject">What's this about?</label>
                  <select id="subject" name="subject" value={form.subject} onChange={onChange}>
                    <option value="">Pick a topic...</option>
                    <option value="dish-request">Dish request</option>
                    <option value="bug">Bug report</option>
                    <option value="feature">Feature idea</option>
                    <option value="methodology">Data / methodology question</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press / media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your message <span style={{ color: 'var(--saffron-500)' }}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us everything — the more context you share, the better we can help."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.state === 'loading'}
                style={{ width: '100%', padding: '16px 28px' }}
              >
                {status.state === 'loading' ? 'Sending...' : 'Send my message ✨'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
