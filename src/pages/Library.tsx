import React, { useState } from 'react';

const menuItems = [
  'About',
  'Library Rules',
  'Library Services and Facilities',
  'Library Collection',
  'E-Resources',
  'E-Library Web OPAC',
  'Library Timings',
  'Library Management Committee',
  'Our Team',
  'Contact Us',
  'Gallery',
];

const sections: Record<string, React.ReactNode> = {

  'About': (
    <div>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 18 }}>
        The Central Library of Govt. Tilak P G College Katni (M.P.) has more than 47000 books. Many journals
        are available as resources to enrich teaching. Library has successfully built up a good collection of
        books covering Arts, Science and Commerce stream. Library collection is growing rapidly and uniquely
        which contains text books, including reference books, and other general reading materials i.e. Maps,
        Globe, Magazines, Competitive Exam Reading materials etc.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000' }}>
        The library usually opens from 10.30 AM to 5.30 PM, in all Working days throughout the year except
        National Holidays. Users can avail the library facilities during working hours. Librarian issues the
        Library Card for availing library facility. Teaching faculty/Students can issue or return books at any
        time in the library during working hours. Users may consult library for the research projects,
        dissertations etc. Faculty members suggest books to enrich library collection.
      </p>
    </div>
  ),

  'Library Rules': (
    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {[
        'All the students/scholars and outsiders entering the Library shall keep their bags and other belongings at the entrance. Do not leave any valuables at the Check Point. Library is not responsible for any loss of personal belongings.',
        'Library Card is compulsory for getting access to the library so bring your Library Card to enter/exit in the Library and also to produce the same to Library Staff as and when asked for.',
        'Books are issued for 14 days and must be returned on before the due date.',
        'Keep your cell phone in silence or off mode inside the library.',
        'Keep your bags/belongings at property counter at the entrance.',
        'Loud conversation is not allowed inside the library',
        'Do not bring food inside the library',
        'It is advisable to use library resources i.e. books, computers & magazines carefully',
        'Do not write upon, damage or mark any book belongs to the library.',
        'The reader should check the books before borrowing to ensure that these are not damaged. If a book is found to be damaged or certain pages are missing, the borrower should get this statement recorded on the book, otherwise he/she shall be held responsible for the damage, discovered at the time of returning the books.',
        'Cooperation with library staff is highly appreciated.',
        'For renewal, a user has to bring books to Circulation Counter. If a borrowed book is not on demand, then a user may renew the book one time only. The Library has the right to recall a book if the same is required by another user',
        'Documents lost, torn or damaged (tearing of pages, underlining, making notes, damaging of binding and the like) shall attract serious action including suspension of membership and/or replacement of documents concern. The lost/damaged document shall be replaced by the borrower with latest edition.',
      ].map((rule, i) => (
        <li key={i} style={{ fontSize: 14.5, lineHeight: 1.75, color: '#4a2000' }}>{rule}</li>
      ))}
    </ul>
  ),

  'Library Services and Facilities': (
    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { text: 'Membership', bold: false },
        { text: 'Circulation (Issue, Return etc.)', bold: false },
        { text: 'Reference Services', bold: false },
        { text: 'Current Awareness Service', bold: false },
        { text: 'Library Web OPAC (Online Public Access Catalogue)', bold: true },
        { text: 'Wi-Fi facility', bold: false },
        { text: 'Remote Access', bold: false },
        { text: 'Online e-resources Library', bold: false },
        { text: 'Periodical Service', bold: false },
        { text: 'Open Access Facility', bold: false },
        { text: 'Departmental Library', bold: false },
        { text: 'Display New Arrivals', bold: false },
        { text: 'Newspaper Clippings', bold: false },
        { text: 'Prev. Year Ques. Paper', bold: false },
        { text: 'Publisher Catalogue', bold: false },
        { text: 'Reading hall', bold: false },
        { text: 'Help Desk', bold: false },
      ].map((item, i) => (
        <li key={i} style={{ fontSize: 14.5, lineHeight: 1.65, color: '#4a2000', fontWeight: item.bold ? 700 : 400 }}>
          {item.text}
        </li>
      ))}
    </ul>
  ),

  'Library Collection': (
    <div>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 12 }}>
        Currently the library contains about more than 47 thousand books including EBooks and E-Journals.
        The Library is equipped with modern technology of library automation system.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 12 }}>
        The Central Library provides a healthy and peaceful environment for users to acquire knowledge.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 24 }}>
        The library has taken the annual membership of N-LIST since 2020.
      </p>
      <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid rgba(229,190,16,0.28)', marginBottom: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 1fr', background: 'linear-gradient(135deg,#753300,#9a4a10)', padding: '12px 20px' }}>
          {['', 'Category', 'Details'].map((h, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 700, color: '#e5be10', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
          ))}
        </div>
        {[
          { no: 1, cat: 'Books (All)',          detail: '45,670 (General Books), 1294 (Reference Books),' },
          { no: 2, cat: 'Departmental Library', detail: '2790' },
          { no: 3, cat: 'Journals',             detail: '09' },
          { no: 4, cat: 'Magazines',            detail: '02' },
          { no: 5, cat: 'Newspapers',           detail: '05 (04 Hindi and 01 English)' },
          { no: 6, cat: 'E-Resources',          detail: 'N-List Membership (Online E-Journals and e-Books)' },
        ].map((row, i) => (
          <div key={row.no} style={{
            display: 'grid', gridTemplateColumns: '52px 1fr 1fr',
            padding: '13px 20px',
            background: i % 2 === 0 ? '#fdf8ee' : 'rgba(253,248,238,0.55)',
            borderBottom: i < 5 ? '1px solid rgba(229,190,16,0.15)' : 'none',
          }}>
            <span style={{ fontSize: 14, color: '#753300', fontWeight: 700 }}>{row.no}</span>
            <span style={{ fontSize: 14, color: '#3a1a00', fontWeight: 600 }}>{row.cat}</span>
            <span style={{ fontSize: 14, color: '#4a2000' }}>{row.detail}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, color: '#4a2000' }}>
        For Access E-Books and Library collection: Please click hare{' '}
        <a href="#" style={{ color: '#753300', fontWeight: 700, textDecoration: 'underline' }}>(Web OPAC Link)</a>
      </p>
    </div>
  ),

  'E-Resources': (
    <div>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 14 }}>
        The college library subscribed N-List E-Resources (Online E-Journals and e-Books)
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000' }}>
        For Search N-List click here{' '}
        <a href="https://nlist.inflibnet.ac.in/index.php" target="_blank" rel="noopener noreferrer"
          style={{ color: '#753300', fontWeight: 700, textDecoration: 'underline' }}>
          https://nlist.inflibnet.ac.in/index.php
        </a>
      </p>
    </div>
  ),

  'E-Library Web OPAC': (
    <div>
      <p style={{ fontSize: 15, fontWeight: 700, color: '#3a1a00', marginBottom: 16 }}>Web OPAC</p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000', marginBottom: 16 }}>
        OPAC (Online Public Access Catalog) allows you to search for print books, ebooks, E-Journals etc.
        available in the Central Library, Govt. Tilak P G College Katni (M.P.).
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.85, color: '#4a2000' }}>
        OPAC (Online Public Access Catalogue){' '}
        <a href="#" style={{ color: '#753300', fontWeight: 700, textDecoration: 'underline' }}>click here</a>
      </p>
    </div>
  ),

  'Library Timings': (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid rgba(229,190,16,0.28)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'linear-gradient(135deg,#753300,#9a4a10)', padding: '12px 20px' }}>
        {['', 'Days', 'Library Hours'].map((h, i) => (
          <span key={i} style={{ fontSize: 12, fontWeight: 700, color: '#e5be10', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
        ))}
      </div>
      {[
        { label: 'Circulation Hours', days: 'Monday to Saturday', hours: '11:00 AM to 05:00 PM' },
        { label: 'Reading Hours',     days: 'Monday to Saturday', hours: '10:30 AM to 05:30 PM' },
      ].map((row, i) => (
        <div key={row.label} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          padding: '14px 20px',
          background: i % 2 === 0 ? '#fdf8ee' : 'rgba(253,248,238,0.55)',
          borderBottom: i === 0 ? '1px solid rgba(229,190,16,0.15)' : 'none',
        }}>
          <span style={{ fontSize: 14, color: '#3a1a00', fontWeight: 600 }}>{row.label}</span>
          <span style={{ fontSize: 14, color: '#4a2000' }}>{row.days}</span>
          <span style={{ fontSize: 14, color: '#753300', fontWeight: 700 }}>{row.hours}</span>
        </div>
      ))}
    </div>
  ),

  'Library Management Committee': (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid rgba(229,190,16,0.28)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 140px', background: 'linear-gradient(135deg,#753300,#9a4a10)', padding: '12px 20px' }}>
        {['S. No.', 'Professor/Librarian', 'Designation'].map(h => (
          <span key={h} style={{ fontSize: 12, fontWeight: 700, color: '#e5be10', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{h}</span>
        ))}
      </div>
      {[
        { no: 1, name: 'Sh. D S Prajapati (Librarian)',                   desig: 'Coordinator' },
        { no: 2, name: 'Dr. Chitra Prabhat, (Prof. Political Science)',   desig: 'Member' },
        { no: 3, name: 'Dr. M.P. Yadav (Prof. Physics)',                  desig: 'Member' },
        { no: 4, name: 'Dr. Vinay Bajpeyee (Prof. Commerce)',             desig: 'Member' },
        { no: 5, name: 'Dr. Rajkumar (Sport Officer)',                    desig: 'Member' },
        { no: 6, name: 'Dr. Madhuri Garg (Asst. Prof. & NSS Officer)',   desig: 'Member' },
        { no: 7, name: 'Dr. Sardar Diwaker (Asst. Prof. & NCC Officer)', desig: 'Member' },
      ].map((row, i) => (
        <div key={row.no} style={{
          display: 'grid', gridTemplateColumns: '52px 1fr 140px',
          padding: '13px 20px',
          background: i % 2 === 0 ? '#fdf8ee' : 'rgba(253,248,238,0.55)',
          borderBottom: i < 6 ? '1px solid rgba(229,190,16,0.15)' : 'none',
        }}>
          <span style={{ fontSize: 14, color: '#753300', fontWeight: 700 }}>{row.no}</span>
          <span style={{ fontSize: 14, color: '#3a1a00' }}>{row.name}</span>
          <span style={{ fontSize: 14, color: '#4a2000' }}>{row.desig}</span>
        </div>
      ))}
    </div>
  ),

  'Our Team': (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid rgba(229,190,16,0.28)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '52px 1fr 200px', background: 'linear-gradient(135deg,#753300,#9a4a10)', padding: '12px 20px' }}>
        {['S. No.', 'Name', 'Role'].map(h => (
          <span key={h} style={{ fontSize: 12, fontWeight: 700, color: '#e5be10', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
        ))}
      </div>
      {[
        { no: 1, name: 'Sh. D S Prajapati',    role: 'Librarian' },
        { no: 2, name: 'Sh. Surendra Kushwaha', role: 'Computer Operator' },
      ].map((row, i) => (
        <div key={row.no} style={{
          display: 'grid', gridTemplateColumns: '52px 1fr 200px',
          padding: '13px 20px',
          background: i % 2 === 0 ? '#fdf8ee' : 'rgba(253,248,238,0.55)',
          borderBottom: i === 0 ? '1px solid rgba(229,190,16,0.15)' : 'none',
        }}>
          <span style={{ fontSize: 14, color: '#753300', fontWeight: 700 }}>{row.no}</span>
          <span style={{ fontSize: 14, color: '#3a1a00' }}>{row.name}</span>
          <span style={{ fontSize: 14, color: '#4a2000' }}>{row.role}</span>
        </div>
      ))}
    </div>
  ),

  'Contact Us': (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        'Mr. D S Prajapati',
        'Librarian',
        'Govt. Tilak College, Katni',
        'Shahdol Road,',
        'Katni M.P.483501 (M.P.)',
      ].map((line, i) => (
        <p key={i} style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#3a1a00' }}>{line}</p>
      ))}
      <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#3a1a00' }}>
        e-Mail:{' '}
        <a href="mailto:Librarytilakcollege@Gmail.com" style={{ color: '#753300', textDecoration: 'underline' }}>
          Librarytilakcollege@Gmail.com
        </a>
      </p>
    </div>
  ),

  'Gallery': (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 14 }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{
            borderRadius: 12, overflow: 'hidden',
            border: '1.5px solid rgba(229,190,16,0.25)',
            background: '#fdf8ee', aspectRatio: '4/3',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8,
          }}>
            <span style={{ fontSize: 32 }}>📷</span>
            <span style={{ fontSize: 11, color: '#b08060', fontStyle: 'italic' }}>Library Photo {i + 1}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 14, fontSize: 13, color: '#b08060', fontStyle: 'italic' }}>
        Replace placeholder cards with actual library photographs.
      </p>
    </div>
  ),
};

const ArrowIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={active ? '#e5be10' : '#b08060'}
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
    style={{ width: 13, height: 13, flexShrink: 0, transition: 'stroke 0.2s' }}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function Library() {
  const [active, setActive] = useState('About');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        .lib-root {
          min-height: 100vh;
          background: linear-gradient(160deg,#fff8ee 0%,#fdf3d8 55%,#fff 100%);
          font-family: 'Source Serif 4', Georgia, serif;
          color: #4a2000;
        }
        .lib-hero {
          position: relative;
          background: linear-gradient(135deg,#753300,#9a4a10);
          padding: clamp(40px,8vw,72px) 24px;
          text-align: center; overflow: hidden;
        }
        .lib-hero::before {
          content:''; position:absolute; inset:0;
          background-image: repeating-linear-gradient(45deg,rgba(229,190,16,.07) 0,rgba(229,190,16,.07) 1px,transparent 0,transparent 50%);
          background-size:20px 20px; pointer-events:none;
        }
        .lib-hero::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,transparent,#e5be10,transparent);
        }
        .lib-hero h1 {
          position:relative; z-index:1; margin:0;
          font-family:'Playfair Display',Georgia,serif;
          font-size:clamp(28px,6vw,52px); font-weight:900;
          background:linear-gradient(90deg,#e5be10,#fdf8ee,#e5be10);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .lib-layout {
          max-width:1200px; margin:0 auto;
          padding:clamp(20px,4vw,48px) clamp(12px,3vw,28px);
          display:grid; grid-template-columns:1fr; gap:24px; align-items:start;
        }
        @media(min-width:768px){ .lib-layout{ grid-template-columns:1fr 260px; } }
        @media(min-width:1024px){ .lib-layout{ grid-template-columns:1fr 280px; } }
        .lib-content {
          background:#fdf8ee; border:1.5px solid rgba(229,190,16,0.28);
          border-radius:20px; padding:clamp(20px,4vw,36px); order:2;
        }
        @media(min-width:768px){ .lib-content{ order:1; } }
        .lib-content-title {
          font-family:'Playfair Display',Georgia,serif;
          font-size:clamp(20px,3vw,26px); font-weight:900; color:#3a1a00; margin:0 0 6px;
        }
        .lib-content-rule {
          height:3px; border:none; margin:0 0 24px;
          background:linear-gradient(90deg,#753300,#e5be10,transparent); border-radius:2px;
        }
        .lib-sidebar{ order:1; position:sticky; top:80px; }
        @media(min-width:768px){ .lib-sidebar{ order:2; } }
        .lib-menu-card {
          background:#fdf8ee; border:1.5px solid rgba(229,190,16,0.28); border-radius:20px; overflow:hidden;
        }
        .lib-menu-header { padding:16px 20px; background:linear-gradient(135deg,#753300,#9a4a10); }
        .lib-menu-header h3 {
          margin:0; font-family:'Playfair Display',Georgia,serif;
          font-size:15px; font-weight:900; color:#e5be10; letter-spacing:0.05em;
        }
        .lib-menu-list{ padding:6px 0; }
        .lib-menu-item {
          display:flex; align-items:center; gap:10px;
          width:100%; padding:11px 18px;
          border:none; background:transparent; cursor:pointer;
          text-align:left; transition:background 0.15s;
          border-bottom:1px solid rgba(229,190,16,0.12);
          font-family:'Source Serif 4',Georgia,serif;
        }
        .lib-menu-item:last-child{ border-bottom:none; }
        .lib-menu-item.active {
          background:linear-gradient(90deg,rgba(117,51,0,0.10),rgba(229,190,16,0.08));
          border-left:3px solid #e5be10; padding-left:15px;
        }
        .lib-menu-item:not(.active):hover{ background:rgba(229,190,16,0.08); }
        .lib-menu-item span{ font-size:13px; font-weight:600; transition:color 0.15s; }
        .lib-menu-item.active span{ color:#753300; }
        .lib-menu-item:not(.active) span{ color:#4a2000; }
      `}</style>

      <div className="lib-root">
        <div className="lib-hero"><h1>Library</h1></div>
        <div className="lib-layout">
          <div className="lib-content">
            <h2 className="lib-content-title">{active}</h2>
            <hr className="lib-content-rule" />
            {sections[active]}
          </div>
          <div className="lib-sidebar">
            <div className="lib-menu-card">
              <div className="lib-menu-header"><h3>📚 Menu</h3></div>
              <div className="lib-menu-list">
                {menuItems.map(item => (
                  <button key={item} onClick={() => setActive(item)}
                    className={`lib-menu-item ${active === item ? 'active' : ''}`}>
                    <ArrowIcon active={active === item} />
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Library;