import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <div className="big gradient-text">404</div>
        <h2>This page burnt in the tadka</h2>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>
          The page you're looking for seems to have wandered off. Let's get you back to a working kitchen.
        </p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
