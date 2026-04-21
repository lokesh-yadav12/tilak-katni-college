import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allInfoData, DepartmentType } from '@/data/allInfoData';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const DARK = '#3a1a00';
const TEXT = '#4a2000';
const MUTED = '#b08060';

const EventsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  /**
   * Navigate to AllInfoPage, pre-selecting the correct section and
   * auto-expanding the linked item via ?section=<key>&item=<itemId>.
   */
  const handleItemClick = (deptKey: DepartmentType, itemIndex: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const dept = allInfoData[deptKey];
    if (!dept) return;

    const link = dept.itemLinks?.[itemIndex];
    if (link) {
      navigate(`/all-info/${deptKey}?section=${link.section}&item=${link.itemId}`);
    } else {
      // Fallback: just open the department page
      navigate(`/all-info/${deptKey}`);
    }
  };

  const handleViewAll = (key: DepartmentType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/all-info/${key}`);
  };

  return (
    <section
      style={{
        background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)',
        padding: '72px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .ev2-card {
          background: #fff;
          border: 1.5px solid rgba(229,190,16,0.28);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 24px rgba(117,51,0,0.07);
          transition: transform 0.28s, box-shadow 0.28s, border-color 0.28s;
        }
        .ev2-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 50px rgba(117,51,0,0.15);
          border-color: rgba(229,190,16,0.65);
        }
        .ev2-item {
          padding: 11px 18px;
          border-bottom: 1px solid rgba(229,190,16,0.1);
          font-size: 12.5px;
          color: ${TEXT};
          font-family: sans-serif;
          line-height: 1.55;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, padding-left 0.2s;
          position: relative;
        }
        .ev2-item:last-child { border-bottom: none; }
        .ev2-item:hover {
          background: rgba(229,190,16,0.09);
          color: ${BROWN};
          padding-left: 22px;
        }
        .ev2-item-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: ${GOLD}; flex-shrink: 0; margin-top: 6px;
          transition: background 0.2s, transform 0.2s;
        }
        .ev2-item:hover .ev2-item-dot {
          background: ${BROWN};
          transform: scale(1.4);
        }
        .ev2-btn {
          background: linear-gradient(90deg,${BROWN},${BROWN2});
          color: ${GOLD};
          border: none;
          padding: 11px 16px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: sans-serif;
          text-align: center;
          width: 100%;
          transition: opacity 0.2s, letter-spacing 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .ev2-btn:hover { opacity: 0.88; letter-spacing: 0.14em; }
        .ev2-scroll { max-height: 260px; overflow-y: auto; }
        .ev2-scroll::-webkit-scrollbar { width: 4px; }
        .ev2-scroll::-webkit-scrollbar-track { background: transparent; }
        .ev2-scroll::-webkit-scrollbar-thumb { background: rgba(229,190,16,0.35); border-radius: 2px; }
      `}</style>

      {/* Decorative blobs */}
      <div style={{ position:'absolute', width:360, height:360, top:-100, right:-100, borderRadius:'50%', background:'rgba(229,190,16,0.06)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:220, height:220, bottom:-60, left:-70, borderRadius:'50%', background:'rgba(117,51,0,0.05)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:MUTED, fontFamily:'sans-serif' }}>
              Resources &amp; Governance
            </span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px,4vw,44px)',
            fontWeight: 800,
            background: `linear-gradient(135deg,${BROWN} 0%,#b36000 50%,${GOLD} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.1,
            margin: '0 0 12px',
          }}>
            Quick Information
          </h2>
          <p style={{ fontSize:14, color:'#9a6040', fontFamily:'sans-serif', maxWidth:460, margin:'0 auto', lineHeight:1.65 }}>
            Access important resources about our institute's administration, policies, and governance.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
          {(Object.keys(allInfoData) as DepartmentType[]).map((key, idx) => {
            const dept = allInfoData[key]!;

            return (
              <motion.div
                key={key}
                className="ev2-card"
                initial={{ opacity:0, y:32 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: '16px 18px 14px',
                    background: `linear-gradient(135deg,${DARK},${BROWN})`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ position:'absolute', top:-20, right:-20, width:80, height:80, background:'rgba(229,190,16,0.1)', borderRadius:'50%' }} />
                  <div style={{ position:'absolute', bottom:-12, left:60, width:40, height:40, background:'rgba(229,190,16,0.07)', borderRadius:'50%' }} />
                  <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${GOLD},${BROWN2})` }} />

                  <div style={{ display:'flex', alignItems:'center', gap:10, position:'relative', zIndex:1 }}>
                    <div style={{
                      width:36, height:36, borderRadius:10,
                      background:'rgba(229,190,16,0.15)',
                      border:'1px solid rgba(229,190,16,0.3)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      flexShrink:0,
                    }}>
                      <svg viewBox="0 0 20 20" fill={GOLD} width="16" height="16">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize:8, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(229,190,16,0.65)', fontFamily:'sans-serif', marginBottom:2 }}>
                        ✦ {key}
                      </div>
                      <div style={{ fontSize:14, fontWeight:700, color:GOLD, fontFamily:'sans-serif', lineHeight:1.3 }}>
                        {dept.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items list */}
                <div className="ev2-scroll" style={{ flex:1 }}>
                  {dept.items.map((item, i) => (
                    <div
                      key={i}
                      className="ev2-item"
                      onClick={() => handleItemClick(key, i)}
                      title={`Go to: ${item}`}
                    >
                      <span className="ev2-item-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* View all button */}
                <button className="ev2-btn" onClick={() => handleViewAll(key)}>
                  <span>View All</span>
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;