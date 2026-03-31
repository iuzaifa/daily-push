import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0d1117;
    --surface: #161b22;
    --border: #30363d;
    --text: #e6edf3;
    --muted: #8b949e;
    --accent: #58a6ff;
    --green: #3fb950;
    --orange: #d29922;
    --purple: #bc8cff;
    --red: #f85149;
    --card: #21262d;
  }

  body { background: var(--bg); color: var(--text); font-family: 'JetBrains Mono', monospace; }

  .profile-root {
    min-height: 100vh;
    background: var(--bg);
    padding: 40px 20px;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
    overflow-x: hidden;
  }

  .grid-bg {
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: fadeUp 0.6s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── HERO ── */
  .hero {
    display: flex;
    gap: 28px;
    align-items: flex-start;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(88,166,255,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .avatar-wrap {
    position: relative;
    flex-shrink: 0;
  }

  .avatar {
    width: 96px; height: 96px;
    border-radius: 50%;
    border: 2px solid var(--border);
    background: linear-gradient(135deg, #1f3a5c 0%, #0d1b2a 100%);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 36px; font-weight: 800;
    color: var(--accent);
    letter-spacing: -2px;
    position: relative;
    transition: border-color 0.3s;
  }

  .avatar:hover { border-color: var(--accent); }

  .status-dot {
    position: absolute;
    bottom: 4px; right: 4px;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: var(--green);
    border: 2px solid var(--surface);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .hero-info { flex: 1; min-width: 0; }

  .hero-name {
    font-family: 'Syne', sans-serif;
    font-size: 26px; font-weight: 800;
    color: var(--text);
    letter-spacing: -0.5px;
    margin-bottom: 2px;
  }

  .hero-handle {
    font-size: 13px; color: var(--muted);
    margin-bottom: 12px;
  }

  .hero-bio {
    font-size: 13px; line-height: 1.7;
    color: #adbac7;
    margin-bottom: 16px;
    max-width: 520px;
  }

  .hero-meta {
    display: flex; flex-wrap: wrap; gap: 16px;
    font-size: 12px; color: var(--muted);
  }

  .meta-item { display: flex; align-items: center; gap: 5px; }
  .meta-icon { font-size: 14px; }

  .hero-stats {
    display: flex; gap: 20px;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
    font-size: 12px; color: var(--muted);
  }

  .stat strong { color: var(--text); font-weight: 600; margin-right: 3px; }

  /* ── SOCIALS ── */
  .socials {
    display: flex; gap: 8px; flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .social-btn {
    display: flex; align-items: center; gap: 7px;
    padding: 7px 14px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--muted);
    font-size: 12px; font-family: 'JetBrains Mono', monospace;
    cursor: pointer; text-decoration: none;
    transition: all 0.2s;
  }

  .social-btn:hover { border-color: var(--accent); color: var(--accent); background: rgba(88,166,255,0.05); }

  /* ── SECTION LABEL ── */
  .section-label {
    font-family: 'Syne', sans-serif;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 2px;
    color: var(--muted);
    margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }

  .section-label::after {
    content: '';
    flex: 1; height: 1px;
    background: var(--border);
  }

  /* ── SKILLS ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 8px;
    margin-bottom: 24px;
  }

  .skill-chip {
    display: flex; align-items: center; gap: 8px;
    padding: 9px 12px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--card);
    font-size: 12px; color: var(--text);
    transition: all 0.2s;
    cursor: default;
  }

  .skill-chip:hover { border-color: var(--accent); transform: translateY(-1px); }

  .skill-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

  /* ── PROJECTS ── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
  }

  .project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(88,166,255,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.25s;
  }

  .project-card:hover { border-color: var(--accent); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .project-card:hover::before { opacity: 1; }

  .project-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 8px; }

  .project-icon { font-size: 18px; }

  .project-badge {
    font-size: 10px; padding: 2px 8px;
    border-radius: 20px;
    border: 1px solid;
    font-family: 'JetBrains Mono', monospace;
  }

  .badge-public { border-color: var(--border); color: var(--muted); }
  .badge-featured { border-color: var(--orange); color: var(--orange); }

  .project-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px; font-weight: 700;
    color: var(--accent);
    margin-bottom: 6px;
  }

  .project-desc { font-size: 12px; line-height: 1.65; color: var(--muted); margin-bottom: 14px; }

  .project-footer { display: flex; align-items: center; gap: 14px; font-size: 11px; color: var(--muted); }

  .lang-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

  .project-stat { display: flex; align-items: center; gap: 4px; }

  /* ── CONTRIB GRAPH ── */
  .contrib-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .contrib-grid {
    display: flex; gap: 3px; overflow-x: auto; padding-bottom: 4px;
  }

  .contrib-col { display: flex; flex-direction: column; gap: 3px; }

  .contrib-cell {
    width: 11px; height: 11px; border-radius: 2px;
    background: var(--card);
    transition: transform 0.15s;
  }

  .contrib-cell:hover { transform: scale(1.4); }

  .contrib-cell.l1 { background: #0e4429; }
  .contrib-cell.l2 { background: #006d32; }
  .contrib-cell.l3 { background: #26a641; }
  .contrib-cell.l4 { background: #39d353; }

  /* ── RESPONSIVE ── */
  @media (max-width: 600px) {
    .hero { flex-direction: column; align-items: center; text-align: center; }
    .hero-meta { justify-content: center; }
    .hero-stats { justify-content: center; }
    .projects-grid { grid-template-columns: 1fr; }
  }
`;

// ── DATA ──────────────────────────────────────────────────────────────────────

const profile = {
  initials: "AH",
  name: "Abu Huzaifa",
  handle: "@iuzaifa",
  bio: "Full-stack developer passionate about building fast, accessible web apps. Open source contributor. Currently exploring distributed systems and WebAssembly.",
  location: "📍 San Francisco, CA",
  company: "🏢 @OpenSourceOrg",
  website: "🌐 Huzaifa.dev",
  followers: 842,
  following: 215,
  repos: 38,
};

const skills = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#3fb950" },
  { name: "Python", color: "#f7c948" },
  { name: "Rust", color: "#e06b3b" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "GraphQL", color: "#e10098" },
  { name: "Next.js", color: "#adbac7" },
  { name: "AWS", color: "#ff9900" },
  { name: "Redis", color: "#f85149" },
  { name: "Kubernetes", color: "#326ce5" },
];

const projects = [
  {
    icon: "⚡",
    name: "turboform",
    desc: "Lightning-fast form validation library with zero dependencies and full TypeScript support.",
    lang: "TypeScript", langColor: "#3178c6",
    stars: "1.2k", forks: "89",
    badge: "featured",
  },
  {
    icon: "🔍",
    name: "nextsearch",
    desc: "Plug-and-play full-text search for Next.js apps powered by a local index.",
    lang: "JavaScript", langColor: "#f1e05a",
    stars: "634", forks: "41",
    badge: "public",
  },
  {
    icon: "🦀",
    name: "rustify-cli",
    desc: "Scaffold Rust projects with opinionated defaults — CI, formatting, and docs out of the box.",
    lang: "Rust", langColor: "#e06b3b",
    stars: "278", forks: "22",
    badge: "public",
  },
  {
    icon: "🐘",
    name: "pgmigrate",
    desc: "Simple, version-controlled migrations for PostgreSQL with rollback support.",
    lang: "Python", langColor: "#f7c948",
    stars: "195", forks: "17",
    badge: "public",
  },
];

const socials = [
  { label: "GitHub",   icon: "🐙", url: "#" },
  { label: "Twitter",  icon: "🐦", url: "#" },
  { label: "LinkedIn", icon: "💼", url: "#" },
  { label: "Blog",     icon: "✍️",  url: "#" },
];

// ── CONTRIB GRAPH ─────────────────────────────────────────────────────────────
function generateContribs(weeks = 52) {
  return Array.from({ length: weeks }, () =>
    Array.from({ length: 7 }, () => {
      const r = Math.random();
      if (r < 0.45) return 0;
      if (r < 0.65) return 1;
      if (r < 0.80) return 2;
      if (r < 0.92) return 3;
      return 4;
    })
  );
}

const levelClass = ["", "l1", "l2", "l3", "l4"];
const contribData = generateContribs();

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function DevProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <style>{styles}</style>
      <div className="profile-root">
        <div className="grid-bg" />
        <div className="container">

          {/* HERO */}
          <div className="hero">
            <div className="avatar-wrap">
              <div className="avatar">{profile.initials}</div>
              <div className="status-dot" title="Available for work" />
            </div>
            <div className="hero-info">
              <div className="hero-name">{profile.name}</div>
              <div className="hero-handle">{profile.handle}</div>
              <div className="hero-bio">{profile.bio}</div>
              <div className="hero-meta">
                <span className="meta-item"><span className="meta-icon">📍</span>New Delhi, India</span>
                {/* <span className="meta-item"><span className="meta-icon">🏢</span>@OpenSourceOrg</span> */}
                <span className="meta-item"><span className="meta-icon">🌐</span>alexkim.dev</span>
              </div>
              <div className="hero-stats">
                <div className="stat"><strong>{profile.followers}</strong> followers</div>
                <div className="stat"><strong>{profile.following}</strong> following</div>
                <div className="stat"><strong>{profile.repos}</strong> repos</div>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="socials">
            {socials.map(s => (
              <a key={s.label} href={s.url} className="social-btn">
                <span>{s.icon}</span>{s.label}
              </a>
            ))}
          </div>

          {/* SKILLS */}
          <div className="section-label">Tech Stack</div>
          <div className="skills-grid">
            {skills.map(sk => (
              <div key={sk.name} className="skill-chip">
                <span className="skill-dot" style={{ background: sk.color }} />
                {sk.name}
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <div className="section-label">Pinned Repositories</div>
          <div className="projects-grid">
            {projects.map(p => (
              <div key={p.name} className="project-card">
                <div className="project-header">
                  <span className="project-icon">{p.icon}</span>
                  <span className={`project-badge badge-${p.badge}`}>{p.badge}</span>
                </div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-footer">
                  <span className="project-stat">
                    <span className="lang-dot" style={{ background: p.langColor }} />
                    {p.lang}
                  </span>
                  <span className="project-stat">⭐ {p.stars}</span>
                  <span className="project-stat">🍴 {p.forks}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CONTRIB GRAPH */}
          <div className="contrib-section">
            <div className="section-label" style={{ marginBottom: 16 }}>Contribution Activity</div>
            <div className="contrib-grid">
              {contribData.map((week, wi) => (
                <div key={wi} className="contrib-col">
                  {week.map((lvl, di) => (
                    <div
                      key={di}
                      className={`contrib-cell ${levelClass[lvl]}`}
                      title={`${lvl} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
