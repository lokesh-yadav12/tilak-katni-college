import React, { useState } from 'react';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const DARK = '#3a1a00';
const MUTED = '#b08060';

const pages: Record<string, { label: string; title: string; render: () => React.ReactNode }> = {
  about: {
    label: 'About',
    title: 'About the Central Library',
    render: () => (
      <>
        <StatGrid stats={[{ num: '47,000+', lbl: 'Books' }, { num: '65+', lbl: 'Years of Service' }, { num: '3', lbl: 'Streams' }, { num: '7 hrs', lbl: 'Daily Access' }]} />
        <TimingBadge text="Open: 10:30 AM – 5:30 PM  |  All working days (except National Holidays)" />
        <Prose>
          <p>The Central Library of Govt. Tilak P.G. College, Katni (M.P.) houses more than 47,000 books spanning Arts, Science and Commerce streams. Its growing collection includes text books, reference books, maps, globes, magazines, and competitive exam reading materials.</p>
          <p>Teaching faculty and students can issue or return books at any time during working hours. The Librarian issues Library Cards for availing library facilities. Users may also consult the library for research projects and dissertations.</p>
        </Prose>
        <InfoGrid cards={[
          { title: 'Collection Highlights', items: ['Text Books & Reference Books', 'Maps, Globes & Atlases', 'Journals & Periodicals', 'Competitive Exam Materials', 'Magazines & Newspapers'] },
          { title: 'Services', items: ['Book Issue & Return', 'Library Card Issuance', 'Research Consultation', 'E-Library Access', 'Reading Room Facility'] },
        ]} />
      </>
    ),
  },
  rules: {
    label: 'Library Rules',
    title: 'Library Rules',
    render: () => (
      <>
        <Prose><p>All library users are expected to follow the rules and regulations to ensure a conducive learning environment for everyone.</p></Prose>
        <InfoGrid cards={[
          { title: 'General Rules', items: ['Maintain silence in the library at all times', 'Library Card is mandatory for book issue', 'Personal belongings not allowed inside', 'Mobile phones must be on silent mode', 'No food or beverages inside the library', 'Books must be handled with care'] },
          { title: 'Book Issue Rules', items: ['Students may borrow up to 2 books at a time', 'Loan period: 14 days for students', 'Faculty members: up to 5 books, 1 month', 'Fine for late return: ₹1 per day per book', 'Lost books must be replaced or paid for', 'Reference books are not issued'] },
        ]} />
      </>
    ),
  },
  services: {
    label: 'Library Services and Facilities',
    title: 'Library Services & Facilities',
    render: () => (
      <>
        <StatGrid stats={[{ num: 'OPAC', lbl: 'Online Catalogue' }, { num: 'Wi-Fi', lbl: 'Enabled Zone' }, { num: 'INFLIBNET', lbl: 'E-Resources' }, { num: 'NDL', lbl: 'Access' }]} />
        <InfoGrid cards={[
          { title: 'Core Services', items: ['Book Issue & Return Counter', 'Reference Service', 'Newspaper & Magazine Reading', 'Reprographic (Photocopy) Service', 'Internet & E-Resource Access'] },
          { title: 'Special Facilities', items: ['Separate Reading Room for Students', 'Faculty Reading Lounge', 'Digital Catalogue (OPAC)', 'INFLIBNET N-LIST Access', 'National Digital Library (NDL)'] },
        ]} />
      </>
    ),
  },
  collection: {
    label: 'Library Collection',
    title: 'Library Collection',
    render: () => (
      <>
        <StatGrid stats={[{ num: '47,000+', lbl: 'Total Books' }, { num: '500+', lbl: 'Reference Books' }, { num: '20+', lbl: 'Journals' }, { num: '15+', lbl: 'Newspapers' }]} />
        <InfoGrid cards={[
          { title: 'By Stream', items: ['Arts & Humanities', 'Science & Technology', 'Commerce & Management', 'Social Sciences', 'Law & Governance'] },
          { title: 'Special Collections', items: ['Competitive Exam Materials', 'Government Publications', 'Maps, Globes & Atlases', 'Rare Books Section', 'Thesis & Dissertations'] },
        ]} />
      </>
    ),
  },
  eresources: {
    label: 'E-Resources',
    title: 'E-Resources',
    render: () => (
      <>
        <Prose><p>The library provides access to a wide range of digital and electronic resources to support teaching, learning, and research activities.</p></Prose>
        <InfoGrid cards={[
          { title: 'Online Databases', items: ['INFLIBNET N-LIST Programme', 'National Digital Library (NDL)', 'SHODHGANGA (Thesis Repository)', 'e-PG Pathshala', 'SWAYAM Online Courses'] },
          { title: 'Open Access Resources', items: ['DOAJ – Directory of Open Access', 'Project Gutenberg', 'Google Scholar Access', 'NCERT Digital Textbooks', 'arXiv.org (Science)'] },
        ]} />
      </>
    ),
  },
  opac: {
    label: 'E-Library Web OPAC',
    title: 'E-Library Web OPAC',
    render: () => (
      <>
        <Prose>
          <p>The Online Public Access Catalogue (OPAC) enables users to search the library's entire collection from anywhere on campus. The system is powered by a modern Integrated Library Management System (ILMS).</p>
          <p>Users can search by title, author, subject, keyword, or accession number. The OPAC also displays real-time availability of books and allows users to reserve books online.</p>
        </Prose>
        <InfoGrid cards={[
          { title: 'OPAC Features', items: ['Search by Title, Author, Subject or Keyword', 'Real-time availability status', 'Book reservation facility', 'User account management', 'Accessible from campus Wi-Fi'] },
        ]} />
      </>
    ),
  },
  timings: {
    label: 'Library Timings',
    title: 'Library Timings',
    render: () => (
      <>
        <TimingBadge text="Library Hours: 10:30 AM – 5:30 PM" />
        <InfoGrid cards={[
          { title: 'Working Days', items: ['Monday – Friday: 10:30 AM – 5:30 PM', 'Saturday: 10:30 AM – 2:00 PM', 'Reading Room open till 5:00 PM', 'Closed on Sundays', 'Closed on National Holidays'] },
          { title: 'Exam Period', items: ['Extended hours during examinations', 'Open 9:00 AM – 6:00 PM', 'Reading Room access priority', 'No new book issues during exams', 'Return of books mandatory before exams'] },
        ]} />
      </>
    ),
  },
  committee: {
    label: 'Library Management Committee',
    title: 'Library Management Committee',
    render: () => (
      <>
        <Prose><p>The Library Management Committee oversees the development, policies and overall functioning of the Central Library to ensure it meets the academic needs of students and faculty.</p></Prose>
        <InfoGrid cards={[
          { title: 'Committee Members', items: ['Principal – Chairperson', 'Librarian – Member Secretary', 'Senior Faculty Representative (Arts)', 'Senior Faculty Representative (Science)', 'Senior Faculty Representative (Commerce)', 'Student Representative', 'Administrative Officer'] },
        ]} />
      </>
    ),
  },
  team: {
    label: 'Our Team',
    title: 'Our Team',
    render: () => (
      <>
        <Prose><p>The library is managed by a dedicated team of professionals committed to providing excellent information services to all users.</p></Prose>
        <InfoGrid cards={[
          { title: 'Library Staff', items: ['Head Librarian', 'Assistant Librarian', 'Library Assistant', 'Data Entry Operator', 'Peon / Helper Staff'] },
          { title: 'Responsibilities', items: ['Book Issue & Return', 'Catalogue Maintenance', 'E-Resource Management', 'Stack Maintenance', 'User Assistance & Guidance'] },
        ]} />
      </>
    ),
  },
  contact: {
    label: 'Contact Us',
    title: 'Contact the Library',
    render: () => (
      <>
        <Prose><p>For any library-related queries, assistance, or feedback, please contact us through the details below. We are happy to help you find the resources you need.</p></Prose>
        <InfoGrid cards={[
          { title: 'Contact Details', items: ['Govt. Tilak P.G. College, Katni', 'Madhya Pradesh – 483501', 'Phone: 07622-XXXXXX', 'Email: library@govttilakpgcollege.ac.in'] },
          { title: 'Library Hours', items: ['Mon–Fri: 10:30 AM – 5:30 PM', 'Saturday: 10:30 AM – 2:00 PM', 'Closed: Sundays & Holidays', 'Exam hours extended till 6:00 PM'] },
        ]} />
      </>
    ),
  },
  gallery: {
    label: 'Gallery',
    title: 'Library Gallery',
    render: () => (
      <>
        <Prose><p>A visual glimpse into our library's spaces, resources, and community activities.</p></Prose>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 18 }}>
          {['Reading Hall', 'Book Stacks', 'Digital Zone', 'Reference Section', 'Periodicals', 'Study Area'].map((label, i) => (
            <div key={label} style={{ aspectRatio: '4/3', borderRadius: 10, background: `linear-gradient(135deg,rgba(117,51,0,${0.06 + i * 0.02}),rgba(229,190,16,${0.08 + i * 0.015}))`, border: '1px solid rgba(229,190,16,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <BookIcon />
              <span style={{ fontSize: 11, color: BROWN2, fontFamily: 'sans-serif', fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
};

// ── Sub-components ──

function BookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="2" y="4" width="18" height="20" rx="2" fill="rgba(229,190,16,0.15)" stroke="rgba(229,190,16,0.5)" strokeWidth="1" />
      <rect x="6" y="4" width="18" height="20" rx="2" fill="rgba(229,190,16,0.08)" stroke="rgba(229,190,16,0.25)" strokeWidth="1" />
      <line x1="8" y1="11" x2="20" y2="11" stroke={GOLD} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="8" y1="15" x2="20" y2="15" stroke={GOLD} strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

function StatGrid({ stats }: { stats: { num: string; lbl: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stats.length},1fr)`, gap: 12, marginBottom: 20 }}>
      {stats.map(s => (
        <div key={s.lbl} style={{ background: 'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.04))', border: '1px solid rgba(229,190,16,0.22)', borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: BROWN, fontFamily: "'Playfair Display',Georgia,serif" }}>{s.num}</div>
          <div style={{ fontSize: 11, color: MUTED, fontFamily: 'sans-serif', marginTop: 3, letterSpacing: '0.04em' }}>{s.lbl}</div>
        </div>
      ))}
    </div>
  );
}

function TimingBadge({ text }: { text: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `linear-gradient(90deg,${BROWN},${BROWN2})`, color: GOLD, borderRadius: 8, padding: '8px 16px', fontSize: 12, fontWeight: 700, fontFamily: 'sans-serif', marginBottom: 18 }}>
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke={GOLD} strokeWidth="1.2" /><path d="M8 4.5V8l2.5 2" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" /></svg>
      {text}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'linear-gradient(135deg,rgba(229,190,16,0.06),rgba(117,51,0,0.03))', borderRadius: 12, padding: '18px 20px', border: '1px solid rgba(229,190,16,0.18)', marginBottom: 18 }}>
      <div style={{ fontSize: 14, color: '#4a2000', lineHeight: 1.85, fontFamily: 'sans-serif' }}>{children}</div>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ border: '1px solid rgba(229,190,16,0.2)', borderRadius: 12, padding: 16, background: 'rgba(253,248,238,0.6)' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: BROWN, letterSpacing: '0.06em', textTransform: 'uppercase' as const, fontFamily: 'sans-serif', marginBottom: 10 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item} style={{ fontSize: 13, color: '#4a2000', fontFamily: 'sans-serif', padding: '5px 0', borderBottom: '1px solid rgba(229,190,16,0.12)', display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.45 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: 5 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoGrid({ cards }: { cards: { title: string; items: string[] }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: cards.length === 1 ? '1fr' : '1fr 1fr', gap: 12, marginTop: 18 }}>
      {cards.map(c => <InfoCard key={c.title} {...c} />)}
    </div>
  );
}

// ── Main Component ──

export default function Library() {
  const [activeId, setActiveId] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = pages[activeId];

  return (
    <div style={{ background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)', minHeight: '100vh', fontFamily: 'Georgia,serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .lib-hero {
          position:relative;background:linear-gradient(135deg,#3a1a00 0%,#753300 55%,#9a4a10 100%);
          padding:52px 24px 44px;text-align:center;overflow:hidden;
        }
        .lib-hero::before {
          content:'';position:absolute;inset:0;
          background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23e5be10' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .lib-layout {
          display:grid;grid-template-columns:268px 1fr;max-width:1180px;
          margin:0 auto;padding:36px 24px 72px;align-items:start;
        }
        @media(max-width:900px){
          .lib-layout{grid-template-columns:1fr;padding:24px 16px 60px;}
          .lib-sidebar{position:static!important;margin-right:0!important;margin-bottom:20px;}
        }

        .lib-sidebar {
          position:sticky;top:24px;background:#fff;border-radius:18px;overflow:hidden;
          border:1.5px solid rgba(229,190,16,0.3);box-shadow:0 8px 32px rgba(117,51,0,0.1);
          margin-right:26px;
        }
        .lib-sidebar-hd {
          background:linear-gradient(135deg,#753300 0%,#9a4a10 60%,#b36000 100%);
          padding:18px 18px 14px;position:relative;overflow:hidden;
        }
        .lib-sidebar-hd::after {
          content:'';position:absolute;top:-20px;right:-20px;
          width:80px;height:80px;background:rgba(229,190,16,0.12);border-radius:50%;
        }
        .lib-mobile-toggle {
          display:none;width:100%;padding:14px 18px;
          background:linear-gradient(135deg,#753300,#9a4a10);
          border:none;cursor:pointer;align-items:center;justify-content:space-between;
          color:#e5be10;font-size:13px;font-weight:700;font-family:Georgia,serif;
        }
        @media(max-width:900px){
          .lib-mobile-toggle{display:flex;}
          .lib-sidebar-hd{display:none;}
          .lib-sidebar-nav{display:none;}
          .lib-sidebar-nav.open{display:block;max-height:600px;overflow-y:auto;}
        }

        .lib-nav-item {
          display:flex;align-items:center;gap:10px;padding:12px 18px;cursor:pointer;
          border:none;background:none;width:100%;text-align:left;font-family:sans-serif;
          font-size:13px;color:#5a3010;font-weight:500;
          border-bottom:1px solid rgba(229,190,16,0.12);transition:all 0.2s;line-height:1.35;
        }
        .lib-nav-item:last-child{border-bottom:none;}
        .lib-nav-item:hover{background:rgba(229,190,16,0.1);color:#753300;padding-left:22px;}
        .lib-nav-item.active{
          background:linear-gradient(90deg,rgba(117,51,0,0.08),rgba(229,190,16,0.12));
          color:#753300;font-weight:700;border-left:3px solid #e5be10;padding-left:15px;
        }
        .lib-nav-dot{width:6px;height:6px;border-radius:50%;background:#b08060;flex-shrink:0;transition:background 0.2s;}
        .lib-nav-item.active .lib-nav-dot,.lib-nav-item:hover .lib-nav-dot{background:#e5be10;}

        .lib-content {
          background:#fff;border-radius:18px;
          border:1.5px solid rgba(229,190,16,0.25);
          box-shadow:0 8px 32px rgba(117,51,0,0.08);overflow:hidden;min-height:500px;
        }
        .lib-content-hd {
          background:linear-gradient(135deg,#fff8ee 0%,#fdf3d8 100%);
          padding:28px 32px 24px;border-bottom:1.5px solid rgba(229,190,16,0.2);
          position:relative;overflow:hidden;
        }
        .lib-content-hd::after {
          content:'';position:absolute;top:-40px;right:-40px;
          width:160px;height:160px;background:rgba(229,190,16,0.08);
          border-radius:50%;pointer-events:none;
        }
        .lib-content-body{padding:28px 32px 36px;}
        @media(max-width:600px){
          .lib-content-hd{padding:22px 20px 18px;}
          .lib-content-body{padding:20px 20px 28px;}
        }

        .lib-download-btn {
          display:inline-flex;align-items:center;gap:7px;margin-top:22px;
          padding:9px 18px;background:linear-gradient(90deg,#753300,#9a4a10);
          color:#e5be10;border:none;border-radius:9px;font-size:12px;font-weight:700;
          letter-spacing:0.05em;cursor:pointer;font-family:sans-serif;
          transition:opacity 0.2s,transform 0.15s;
        }
        .lib-download-btn:hover{opacity:0.88;transform:translateY(-1px);}
      `}</style>

      {/* HERO */}
      <div className="lib-hero">
        <div style={{ position: 'absolute', width: 280, height: 280, top: -100, right: -70, borderRadius: '50%', background: 'rgba(229,190,16,0.09)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 180, height: 180, bottom: -60, left: -50, borderRadius: '50%', background: 'rgba(229,190,16,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.6))' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(229,190,16,0.7)', fontFamily: 'sans-serif' }}>Govt. Tilak P.G. College, Katni</span>
            <div style={{ height: 1, width: 36, background: 'linear-gradient(90deg,rgba(229,190,16,0.6),transparent)' }} />
          </div>
          <div style={{ marginBottom: 10 }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="8" width="26" height="32" rx="3" fill="rgba(229,190,16,0.18)" stroke={GOLD} strokeWidth="1.5" />
              <rect x="10" y="8" width="26" height="32" rx="3" fill="rgba(229,190,16,0.08)" stroke="rgba(229,190,16,0.4)" strokeWidth="1" />
              <line x1="14" y1="18" x2="30" y2="18" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
              <line x1="14" y1="23" x2="30" y2="23" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
              <line x1="14" y1="28" x2="24" y2="28" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(30px,5vw,50px)', fontWeight: 800, color: GOLD, margin: '0 0 8px', lineHeight: 1.1 }}>Central Library</h1>
          <p style={{ fontSize: 'clamp(12px,2vw,15px)', color: 'rgba(253,248,238,0.65)', fontFamily: 'sans-serif', margin: 0 }}>Knowledge Hub · Govt. Tilak P.G. College</p>
          <div style={{ width: 56, height: 3, background: `linear-gradient(90deg,transparent,${GOLD},transparent)`, margin: '16px auto 0', borderRadius: 2 }} />
        </div>
      </div>

      {/* LAYOUT */}
      <div className="lib-layout">

        {/* SIDEBAR */}
        <aside className="lib-sidebar">
          <div className="lib-sidebar-hd">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 3 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: `linear-gradient(135deg,${GOLD},#c9a800)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="2" width="10" height="12" rx="1.5" fill={DARK} />
                    <rect x="4" y="2" width="10" height="12" rx="1.5" fill="rgba(58,26,0,0.5)" />
                    <line x1="4" y1="6" x2="12" y2="6" stroke={GOLD} strokeWidth="1" />
                    <line x1="4" y1="9" x2="12" y2="9" stroke={GOLD} strokeWidth="1" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: GOLD, fontFamily: 'Georgia,serif', letterSpacing: '0.04em' }}>Menu</span>
              </div>
              <p style={{ fontSize: 10, color: 'rgba(253,248,238,0.45)', fontFamily: 'sans-serif', margin: 0, letterSpacing: '0.06em' }}>Library Navigation</p>
            </div>
          </div>

          <button className="lib-mobile-toggle" onClick={() => setMobileMenuOpen(o => !o)}>
            <span>✦ Library Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s' }}>
              <path d="M6 4l4 4-4 4" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <nav className={`lib-sidebar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            {Object.entries(pages).map(([key, page]) => (
              <button
                key={key}
                className={`lib-nav-item ${activeId === key ? 'active' : ''}`}
                onClick={() => { setActiveId(key); setMobileMenuOpen(false); }}
              >
                <div className="lib-nav-dot" />
                <span style={{ flex: 1 }}>{page.label}</span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: activeId === key ? 1 : 0, transition: 'opacity 0.2s' }}>
                  <path d="M4 2l4 4-4 4" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENT PANEL */}
        <div className="lib-content">
          <div className="lib-content-hd">
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: MUTED, fontFamily: 'sans-serif', marginBottom: 10 }}>
              <span>Library</span>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 1l3 3-3 3" stroke={MUTED} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ color: BROWN, fontWeight: 600 }}>{active.label}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(135deg,${BROWN},${BROWN2})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(117,51,0,0.22)', flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="2" width="14" height="18" rx="2" fill="rgba(229,190,16,0.2)" stroke={GOLD} strokeWidth="1.3" />
                  <rect x="6" y="2" width="14" height="18" rx="2" fill="rgba(229,190,16,0.07)" stroke="rgba(229,190,16,0.4)" strokeWidth="1" />
                  <line x1="7" y1="8" x2="17" y2="8" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
                  <line x1="7" y1="12" x2="17" y2="12" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
                  <line x1="7" y1="16" x2="13" y2="16" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                  <div style={{ width: 26, height: 2, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 1 }} />
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, fontFamily: 'sans-serif' }}>Library</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(18px,3vw,28px)', fontWeight: 800, color: DARK, margin: 0, lineHeight: 1.2 }}>
                  {active.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="lib-content-body">
            {active.render()}

            <button className="lib-download-btn">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Download PDF
            </button>

            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,rgba(229,190,16,0.3),transparent)' }} />
              <span style={{ fontSize: 10, color: MUTED, fontFamily: 'sans-serif', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>Central Library · Govt. Tilak P.G. College</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,transparent,rgba(229,190,16,0.3))' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}