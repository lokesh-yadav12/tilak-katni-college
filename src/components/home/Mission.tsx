import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'about' | 'mission' | 'vision';

interface TabItem {
  key: Tab;
  label: string;
  heading: string;
  subheading: string;
  mainPara?: string;
  bullets?: string[];
  paragraphs?: string[];
  quote: string;
  badge: string;
}

const tabs: TabItem[] = [
  {
    key: 'about',
    label: 'About',
    badge: '✦ Est. 1958',
    heading: 'About Govt. Tilak P.G. College',
    subheading: 'Est. August 1958 · Katni, Madhya Pradesh',
    paragraphs: [
      'Govt. Tilak P.G. College, Katni (M.P.) was established in August 1958 under the aegis of Tilak Shiksha Society, Katni, comprising of social workers, educationists and some business men of the town. The college is affiliated to Rani Durgawati University Jabalpur and is the leading college of Katni district.',
      'The motto of the college is — "Idquoyogh karmsu kaushallam" (perfection in one\'s work is true yoga). Keeping this motto in mind, the college makes every effort to achieve excellence not only in academic activities but also in all co-curricular activities as well.',
      'The College is spread over an area of 18 acres with separate arts, commerce and science blocks. This is the only college in the Katni district possessing a 400 meter running track.',
    ],
    quote: '"Perfection in one\'s work is true yoga." — The guiding motto of Govt. Tilak P.G. College, inspiring excellence in every endeavour since 1958.',
  },
  {
    key: 'mission',
    label: 'Mission',
    badge: '✦ Our Purpose',
    heading: 'Our Mission',
    subheading: "Shaping tomorrow's leaders through purposeful education",
    mainPara: 'Our mission is to develop life-long learners, equipped with competencies, nurtured through integration of academic learning with humanity. We endeavor to make our students\' future-ready, confident of taking up professional and societal challenges with passion and maturity.',
    bullets: [
      'Implementation of the policies of higher education to ensure quality and equitable access across all students.',
      'Giving the benefit of welfare schemes like scholarships to SC/ST/OBC, minorities and weaker sections of society.',
      'To make students economically independent, academically strong and socially committed to the task of building a strong nation.',
    ],
    quote: '"Our mission is not merely to educate, but to transform — building citizens who are capable, compassionate, and committed to the greater good."',
  },
  {
    key: 'vision',
    label: 'Vision',
    badge: '✦ Our Aspiration',
    heading: 'Our Vision',
    subheading: 'A beacon of knowledge, character and national progress',
    paragraphs: [
      'The vision of the college is to inculcate among the students a spirit of entrepreneurship, develop in them cultural values, a scientific temper and above all make them morally sound, responsible citizens of the country through innovative academic practices.',
      'To be an educational institution of repute dedicated to excellence with a humanities outlook contributing to social upliftment through improvement in the quality of life.',
      'Empowering youth for capacity-building, inculcating basic moral values, community development, and fair access for the poor and socially disadvantaged.',
    ],
    quote: '"We envision a college that is not just a seat of learning, but a beacon of hope — a torch-bearer for generations of students seeking purpose, knowledge, and excellence."',
  },
];

const tabIcons: Record<Tab, React.ReactNode> = {
  about: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  ),
  vision: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  ),
};

const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const GOLD = '#e5be10';
const CREAM = '#fdf8ee';
const DARK = '#3a1a00';
const TEXT = '#4a2000';
const MUTED = '#b08060';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const current = tabs.find((t) => t.key === activeTab)!;

  return (
    <section style={{ background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)', padding: '60px 24px 80px', fontFamily: 'Georgia, serif', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .amv-tab-btn { display:flex; align-items:center; gap:8px; padding:13px 28px; font-family:sans-serif; font-size:15px; font-weight:500; color:${MUTED}; background:none; border:none; cursor:pointer; position:relative; transition:color 0.2s; }
        .amv-tab-btn:hover { color:${BROWN}; }
        .amv-tab-btn.active { color:${BROWN}; font-weight:700; }
        .amv-tab-btn.active::after { content:''; position:absolute; bottom:-2px; left:0; right:0; height:2px; background:linear-gradient(90deg,${BROWN},${GOLD}); border-radius:2px 2px 0 0; }
        .amv-tab-icon { width:28px; height:28px; border-radius:7px; background:rgba(229,190,16,0.15); border:1px solid rgba(229,190,16,0.3); display:flex; align-items:center; justify-content:center; color:${MUTED}; flex-shrink:0; transition:background 0.2s,border-color 0.2s,color 0.2s; }
        .amv-tab-btn.active .amv-tab-icon { background:linear-gradient(135deg,${BROWN},${BROWN2}); border-color:${BROWN}; color:${GOLD}; }
        .amv-bullet-row { display:flex; align-items:flex-start; gap:14px; padding:14px 18px; border-bottom:1px solid rgba(229,190,16,0.15); }
        .amv-bullet-row:last-child { border-bottom:none; }
      `}</style>

      <div style={{ position:'absolute', width:400, height:400, top:-100, right:-100, borderRadius:'50%', background:'rgba(229,190,16,0.07)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:260, height:260, bottom:-60, left:-80, borderRadius:'50%', background:'rgba(117,51,0,0.05)', pointerEvents:'none' }} />

      <div style={{ maxWidth:860, margin:'0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:-18 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:44 }}
        >
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#9a6040', fontFamily:'sans-serif' }}>Govt. Tilak P.G. College · Katni, M.P.</span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h1 style={{ fontSize:'clamp(34px,5vw,52px)', fontWeight:800, background:'linear-gradient(135deg,#753300 0%,#b36000 50%,#e5be10 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1.1, margin:'0 0 10px' }}>
            Know Who We Are
          </h1>
          <p style={{ fontSize:15, color:'#9a6040', maxWidth:420, margin:'0 auto', lineHeight:1.6, fontFamily:'sans-serif', fontWeight:400 }}>
            Explore our identity, the mission that drives us, and the vision that guides us forward.
          </p>
        </motion.div>

        {/* Tabs */}
        <div style={{ display:'flex', justifyContent:'center', borderBottom:'2px solid rgba(229,190,16,0.25)', marginBottom:40 }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`amv-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            >
              <span className="amv-tab-icon">{tabIcons[tab.key]}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity:0, y:14 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-10 }}
            transition={{ duration:0.3, ease:'easeOut' }}
          >
            {/* Badge */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:5, fontSize:9, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:BROWN, background:'rgba(229,190,16,0.18)', border:'1px solid rgba(229,190,16,0.35)', padding:'3px 10px', borderRadius:20, marginBottom:16, fontFamily:'sans-serif' }}>
              {current.badge}
            </div>

            <h2 style={{ fontSize:'clamp(26px,4vw,38px)', fontWeight:800, color:DARK, textAlign:'center', margin:'0 0 6px' }}>{current.heading}</h2>
            <p style={{ fontFamily:'sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:GOLD, textAlign:'center', margin:'0 0 20px' }}>{current.subheading}</p>
            <div style={{ width:48, height:2, background:`linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius:1, margin:'0 auto 32px' }} />

            {/* ── ABOUT ── */}
            {current.key === 'about' && (
              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}>
                <div style={{ display:'flex', gap:0, border:'1.5px solid rgba(229,190,16,0.35)', borderRadius:16, overflow:'hidden', marginBottom:32 }}>
                  {[{ val:'1958', label:'Established' }, { val:'18', label:'Acres Campus' }, { val:'400m', label:'Running Track' }, { val:'NAAC', label:'Accredited' }].map((s, i, arr) => (
                    <div key={s.label} style={{ flex:1, padding:'20px 12px', textAlign:'center', borderRight: i < arr.length-1 ? '1px solid rgba(229,190,16,0.2)' : 'none', background:'rgba(229,190,16,0.04)' }}>
                      <div style={{ fontSize:30, fontWeight:800, color:BROWN, lineHeight:1, marginBottom:4 }}>{s.val}</div>
                      <div style={{ fontFamily:'sans-serif', fontSize:10, fontWeight:600, color:MUTED, letterSpacing:'0.08em', textTransform:'uppercase' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── MISSION: dark featured card + bullet list ── */}
            {current.key === 'mission' && current.mainPara && (
              <div style={{ background:`linear-gradient(135deg,${BROWN},${BROWN2})`, borderRadius:16, padding:'22px 24px', marginBottom:20, position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:-40, right:-40, width:150, height:150, background:'rgba(229,190,16,0.1)', borderRadius:'50%' }} />
                <div style={{ position:'absolute', bottom:-30, left:40, width:90, height:90, background:'rgba(229,190,16,0.07)', borderRadius:'50%' }} />
                <div style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(229,190,16,0.8)', marginBottom:10 }}>✦ Mission Statement</div>
                <p style={{ fontSize:15, lineHeight:1.75, color:'rgba(253,248,238,0.9)', fontFamily:'sans-serif', fontWeight:400, margin:0, position:'relative', zIndex:1 }}>{current.mainPara}</p>
              </div>
            )}

            {current.bullets && (
              <ul style={{ listStyle:'none', margin:'0 0 20px', padding:0, background:CREAM, border:'1.5px solid rgba(229,190,16,0.3)', borderRadius:14, overflow:'hidden' }}>
                {current.bullets.map((b, i) => (
                  <li key={i} className="amv-bullet-row">
                    <span style={{ width:28, height:28, flexShrink:0, borderRadius:'50%', background:'linear-gradient(135deg,#e5be10,#c9a800)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12, color:'#3a1a00' }}>★</span>
                    <span style={{ fontFamily:'sans-serif', fontSize:14, lineHeight:1.65, color:TEXT, fontWeight:400, paddingTop:4 }}>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* ── VISION: card grid ── */}
            {current.key === 'vision' && current.paragraphs && (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:20 }}>
                {current.paragraphs.map((p, i) => (
                  <div key={i} style={{ background:CREAM, border:'1.5px solid rgba(229,190,16,0.25)', borderRadius:14, padding:'18px', gridColumn: i === 0 ? '1 / -1' : 'auto' }}>
                    <div style={{ fontFamily:'sans-serif', fontSize:9, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:MUTED, marginBottom:8 }}>
                      {['✦ Core Vision', '✦ Academic Excellence', '✦ Empowerment'][i]}
                    </div>
                    <p style={{ fontFamily:'sans-serif', fontSize:13.5, lineHeight:1.7, color:TEXT, margin:0, fontWeight:400 }}>{p}</p>
                  </div>
                ))}
              </div>
            )}

            {/* About paragraphs */}
            {current.key === 'about' && current.paragraphs?.map((p, i) => (
              <p key={i} style={{ fontFamily:'sans-serif', fontSize:15, lineHeight:1.85, color:TEXT, marginBottom:18, fontWeight:400 }}>{p}</p>
            ))}

            {/* Quote */}
            <div style={{ marginTop:28, borderLeft:'4px solid #e5be10', background:'linear-gradient(135deg,rgba(229,190,16,0.08),rgba(117,51,0,0.04))', padding:'20px 22px', borderRadius:'0 12px 12px 0' }}>
              <p style={{ fontSize:16, fontStyle:'italic', color:DARK, fontWeight:600, lineHeight:1.7, margin:0 }}>{current.quote}</p>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
