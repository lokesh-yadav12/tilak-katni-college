import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allInfoData, DepartmentType } from '@/data/allInfoData';

const BADGES: Record<string, string> = {
  // add your dept keys → badge labels here
};

const EventsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleViewAll = (key: DepartmentType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/all-info/${key}`);
  };

  return (
    <section
      style={{
        background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)',
        padding: '60px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        .ev-card { background:#fff; border:1.5px solid rgba(229,190,16,0.3); border-radius:16px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 4px 20px rgba(117,51,0,0.08); transition:transform 0.25s,box-shadow 0.25s,border-color 0.25s; }
        .ev-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(117,51,0,0.16); border-color:rgba(229,190,16,0.6); }
        .ev-item { padding:10px 14px; border-bottom:1px solid rgba(229,190,16,0.12); font-size:12px; color:#4a2000; font-family:sans-serif; line-height:1.5; display:flex; align-items:flex-start; gap:8px; cursor:pointer; transition:background 0.2s,color 0.2s; }
        .ev-item:last-child { border-bottom:none; }
        .ev-item:hover { background:rgba(229,190,16,0.1); color:#753300; }
        .ev-btn { background:linear-gradient(90deg,#753300,#9a4a10); color:#e5be10; border:none; padding:10px; font-size:11px; font-weight:700; letter-spacing:0.06em; cursor:pointer; font-family:sans-serif; text-align:center; width:100%; transition:opacity 0.2s; }
        .ev-btn:hover { opacity:0.85; }
      `}</style>

      {/* Decorative */}
      <div style={{ position:'absolute', width:300, height:300, top:-80, right:-80, borderRadius:'50%', background:'rgba(229,190,16,0.06)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:200, height:200, bottom:-50, left:-60, borderRadius:'50%', background:'rgba(117,51,0,0.05)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:-18 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          style={{ textAlign:'center', marginBottom:36 }}
        >
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:14 }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#9a6040', fontFamily:'sans-serif' }}>Resources & Governance</span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,40px)', fontWeight:800, background:'linear-gradient(135deg,#753300 0%,#b36000 50%,#e5be10 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1.1, margin:'0 0 10px' }}>
            Quick Information
          </h2>
          <p style={{ fontSize:14, color:'#9a6040', fontFamily:'sans-serif', maxWidth:480, margin:'0 auto', lineHeight:1.6 }}>
            Access important resources about our institute's administration, policies, and governance.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16 }}>
          {(Object.keys(allInfoData) as DepartmentType[]).map((key, idx) => {
            const dept = allInfoData[key]!;
            return (
              <motion.div
                key={key}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay:idx * 0.1 }}
                className="ev-card"
              >
                {/* Header */}
                <div style={{ padding:'14px 16px', background:'linear-gradient(135deg,#753300,#9a4a10)', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', top:-20, right:-20, width:70, height:70, background:'rgba(229,190,16,0.12)', borderRadius:'50%' }} />
                  <div style={{ fontSize:9, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#753300', background:'rgba(229,190,16,0.2)', border:'1px solid rgba(229,190,16,0.4)', padding:'2px 8px', borderRadius:20, display:'inline-block', marginBottom:6, fontFamily:'sans-serif' }}>
                    ✦ {BADGES[key] ?? key}
                  </div>
                  <div style={{ fontSize:13, fontWeight:700, color:'#e5be10', fontFamily:'sans-serif', position:'relative', zIndex:1 }}>
                    {dept.title}
                  </div>
                </div>

                {/* List */}
                <div style={{ flex:1, maxHeight:220, overflowY:'auto' }}>
                  {dept.items.map((item, i) => (
                    <div
                      key={i}
                      className="ev-item"
                      onClick={() => handleViewAll(key)}
                    >
                      <span style={{ width:5, height:5, borderRadius:'50%', background:'#e5be10', flexShrink:0, marginTop:5 }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="ev-btn" onClick={() => handleViewAll(key)}>
                  View All →
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