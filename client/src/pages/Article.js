import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ARTICLES_BY_SLUG, ARTICLES } from '../data/articles';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Article.css';

export default function Article() {
  useScrollAnimation();
  const { slug } = useParams();
  const article = ARTICLES_BY_SLUG[slug];

  if (!article) {
    return (
      <section style={{ paddingTop: 140, textAlign: 'center' }}>
        <div className="container">
          <span className="section-kicker">404</span>
          <h1>Article not found</h1>
          <p style={{ marginBottom: 24 }}>We couldn't find the guide you're looking for.</p>
          <Link to="/resources" className="btn btn-primary">Back to resources</Link>
        </div>
      </section>
    );
  }

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="article-hero">
        <div className="article-hero-bg">
          <img src={article.hero} alt="" loading="eager" />
        </div>
        <div className="container article-hero-content reveal">
          <Link to="/resources" className="back-link">← All resources</Link>
          <span className="section-kicker">{article.tag} · {article.readTime}</span>
          <h1>{article.title}</h1>
          <p className="article-subtitle">{article.subtitle}</p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <article className="article-body glass reveal">
            <div className="article-meta">
              <span className="emoji-pill">{article.icon}</span>
              <div>
                <div className="article-meta-top">Published by the ThaliTrack team</div>
                <div className="article-meta-bottom">Reviewed by Dr. Kavya Rao · Updated 2026</div>
              </div>
            </div>

            <p className="lead">{article.intro}</p>

            {article.disclaimer && (
              <div className="disclaimer">
                <strong>⚠️ A note before you read:</strong> {article.disclaimer}
              </div>
            )}

            {article.sections.map((s, i) => (
              <div key={i} className="article-section">
                <h2>{s.heading}</h2>
                {s.paragraphs && s.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
                {s.list && (
                  <ul>
                    {s.list.map((li, li2) => <li key={li2}>{li}</li>)}
                  </ul>
                )}
                {s.paragraphsAfter && s.paragraphsAfter.map((p, pi) => <p key={`pa-${pi}`}>{p}</p>)}
                {s.listAfter && (
                  <ul>
                    {s.listAfter.map((li, li2) => <li key={`la-${li2}`}>{li}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <div className="takeaway">
              <div className="takeaway-label">✨ The takeaway</div>
              <p>{article.takeaway}</p>
            </div>

            <div className="article-cta">
              <h3>Put it into practice</h3>
              <p>Open the tracker, log today's meals, and see the data behind what you just read.</p>
              <Link to="/tracker" className="btn btn-primary">Open the tracker →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* RELATED */}
      <section>
        <div className="container">
          <div className="reveal">
            <div className="section-title">
              <span className="section-kicker">Keep reading</span>
              <h2>More guides <span className="gradient-text">worth your time</span></h2>
            </div>
          </div>

          <div className="grid cols-3">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                to={`/resources/${r.slug}`}
                className={`resource-card glass reveal delay-${(i % 4) + 1}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="emoji-icon">{r.icon}</div>
                <span className="tag">{r.tag} · {r.readTime}</span>
                <h3 style={{ color: 'var(--text)' }}>{r.title}</h3>
                <p>{r.subtitle}</p>
                <span style={{ marginTop: 'auto', color: 'var(--saffron-600)', fontWeight: 600 }}>
                  Read the guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
