import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import shivani from '../../assets/shivani1.png';

interface Star {
  id: number;
  name: string;
  image: string;
  title?: string;
  session: string;
  fatherName: string;
  class: string;
  achievement: string;
}

const StarSection: React.FC = () => {
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const stars: Star[] = [
    { id: 1, name: 'Ms. Shivani Gupta', image: shivani, title: 'Top Performer', session: '2021–22', fatherName: 'Mr. Kamalesh Gupta', class: 'Master of Science (M.Sc.)', achievement: 'Qualified IIT JAM (Mathematics) in 2022 and GATE (Mathematics) in 2023. Also got admission in Department of Mathematical Sciences, IIT (BHU) for a research project in 2023.' },
    { id: 2, name: 'Star Name 2', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 3, name: 'Star Name 3', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 4, name: 'Star Name 4', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 5, name: 'Star Name 5', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 6, name: 'Star Name 6', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 7, name: 'Star Name 7', image: shivani, title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
    { id: 8, name: 'Star Name 8', image: '', title: 'Position / Title', session: '2022–23', fatherName: 'Father Name', class: 'Bachelor of Science (B.Sc.)', achievement: 'Achievement details here' },
  ];

  const getPlaceholder = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=f5f5f5&color=333333&bold=true&format=png`;

  const goNext = () => { setDirection(1); setActiveIndex((i) => (i + 1) % stars.length); };
  const goPrev = () => { setDirection(-1); setActiveIndex((i) => (i - 1 + stars.length) % stars.length); };

  const prevIdx = (activeIndex - 1 + stars.length) % stars.length;
  const nextIdx = (activeIndex + 1) % stars.length;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  const SideCard = ({ star, onClick, origin }: { star: Star; onClick: () => void; origin: string }) => (
    <div
      onClick={onClick}
      style={{
        width: 150, flexShrink: 0, cursor: 'pointer',
        background: '#fff', borderRadius: 18, overflow: 'hidden',
        border: '1.5px solid #eeeeee',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        opacity: 0.6,
        transform: 'scale(0.9)',
        transformOrigin: origin,
        transition: 'opacity 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.85'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0.6'; }}
    >
      <div style={{ height: 110, overflow: 'hidden', position: 'relative' }}>
        <img src={star.image || getPlaceholder(star.name)} alt={star.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(star.name); }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.18) 0%,transparent 55%)' }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>★</div>
      </div>
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', background: 'rgba(229,190,16,0.12)', border: '1px solid rgba(229,190,16,0.25)', padding: '1px 7px', borderRadius: 20, display: 'inline-block', marginBottom: 6 }}>GTC Star</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.3, marginBottom: 6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{star.name}</div>
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 6, fontSize: 9, color: '#aaaaaa' }}>Session {star.session}</div>
      </div>
    </div>
  );

  return (
    <section style={{ background: '#ffffff', padding: '80px 0', position: 'relative', overflow: 'hidden', fontFamily: 'Georgia, serif' }}>
      <style>{`
        .s-nav { width:44px; height:44px; border-radius:50%; background:#fff; border:1.5px solid #dddddd; color:#333333; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:background 0.18s,border-color 0.18s,transform 0.18s; flex-shrink:0; }
        .s-nav:hover { background:#1a1a1a; border-color:#1a1a1a; color:#e5be10; transform:scale(1.08); }
        .s-dot { border:none; padding:0; cursor:pointer; border-radius:20px; height:5px; background:#dddddd; transition:width 0.3s,background 0.3s; }
        .s-dot-active { background:#e5be10 !important; }
        .rp-btn { width:100%; background:#1a1a1a; color:#e5be10; border:none; border-radius:10px; padding:9px 0; font-size:11px; font-weight:700; letter-spacing:0.06em; cursor:pointer; margin-top:10px; transition:background 0.18s; }
        .rp-btn:hover { background:#333333; }
        .sm-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); backdrop-filter:blur(8px); z-index:50; display:flex; align-items:center; justify-content:center; padding:16px; }
        .sm-close { margin-left:auto; width:34px; height:34px; border-radius:50%; background:#f5f5f5; border:1.5px solid #dddddd; color:#555555; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; transition:background 0.18s,transform 0.22s; }
        .sm-close:hover { background:#eeeeee; transform:rotate(90deg); }
        .star-side-card { display: none; }
        @media (min-width: 540px) { .star-side-card { display: block; } }
        .modal-fields-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 480px) { .modal-fields-grid { grid-template-columns: 1fr 1fr; } }
        .modal-inner { background: #fff; border-radius: 20px; width: 100%; max-width: 640px; max-height: 90vh; overflow-y: auto; box-shadow: 0 32px 80px rgba(0,0,0,0.2); border: 1.5px solid #eeeeee; }
        .mobile-star-dots { display:flex; justify-content:center; gap:7px; margin-top:20px; flex-wrap:wrap; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', fontFamily: 'sans-serif' }}>Hall of Fame</span>
            <div style={{ height: 1, width: 44, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(36px,6vw,52px)', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.1, marginBottom: 10 }}>
            GTC Stars
          </h2>
          <p style={{ fontSize: 15, color: '#888888', maxWidth: 420, margin: '0 auto', lineHeight: 1.6, fontFamily: 'sans-serif' }}>
            Celebrating the extraordinary journeys of those who made us proud
          </p>
        </motion.div>

        {/* Carousel */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}>
            <button className="s-nav" onClick={goPrev} aria-label="Previous"><ChevronLeft size={20} /></button>

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, overflow: 'hidden', minHeight: 340 }}>
              <div className="star-side-card">
                <SideCard star={stars[prevIdx]} onClick={goPrev} origin="right center" />
              </div>

              {/* Center card */}
              <div style={{ flex: 1, minWidth: 0, maxWidth: 260 }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
                    style={{
                      background: '#fff', borderRadius: 20, overflow: 'hidden',
                      border: '1.5px solid rgba(229,190,16,0.45)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1), 0 0 0 3px rgba(229,190,16,0.1)',
                      cursor: 'pointer', width: '100%',
                    }}
                    onClick={() => setSelectedStar(stars[activeIndex])}
                    whileHover={{ y: -4 }}
                  >
                    <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
                      <img src={stars[activeIndex].image || getPlaceholder(stars[activeIndex].name)} alt={stars[activeIndex].name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(stars[activeIndex].name); }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.2) 0%,transparent 55%)' }} />
                      <div style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#e5be10,#c9a800)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, boxShadow: '0 3px 10px rgba(229,190,16,0.4)' }}>★</div>
                    </div>
                    <div style={{ padding: '16px 18px' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', background: 'rgba(229,190,16,0.12)', border: '1px solid rgba(229,190,16,0.28)', padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 8, fontFamily: 'sans-serif' }}>✦ GTC Star</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.35, marginBottom: 4, fontFamily: 'sans-serif' }}>{stars[activeIndex].name}</div>
                      {stars[activeIndex].title && <div style={{ fontSize: 11, color: '#888888', fontStyle: 'italic', marginBottom: 8, fontFamily: 'sans-serif' }}>{stars[activeIndex].title}</div>}
                      <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 8, fontSize: 10, color: '#aaaaaa', fontFamily: 'sans-serif' }}>Session {stars[activeIndex].session}</div>
                    </div>
                    <div style={{ background: '#fafafa', borderTop: '1px solid #eeeeee', padding: '8px 18px', textAlign: 'center', fontSize: 10, color: '#aaaaaa', letterSpacing: '0.04em', fontFamily: 'sans-serif' }}>
                      Tap to view details →
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="star-side-card">
                <SideCard star={stars[nextIdx]} onClick={goNext} origin="left center" />
              </div>
            </div>

            <button className="s-nav" onClick={goNext} aria-label="Next"><ChevronRight size={20} /></button>
          </div>

          {/* Dots */}
          <div className="mobile-star-dots">
            {stars.map((_, i) => (
              <button key={i} className={`s-dot ${i === activeIndex ? 's-dot-active' : ''}`} style={{ width: i === activeIndex ? 28 : 6 }} onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }} />
            ))}
          </div>
          <p style={{ marginTop: 12, fontSize: 12, color: '#aaaaaa', fontStyle: 'italic', textAlign: 'center', fontFamily: 'sans-serif' }}>Click the center card to view full details</p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStar && (
          <motion.div key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }} className="sm-overlay" onClick={() => setSelectedStar(null)}>
            <motion.div key="md" initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }} className="modal-inner" onClick={(e) => e.stopPropagation()}>
              {/* Modal header */}
              <div style={{ background: '#1a1a1a', padding: 26, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 150, height: 150, background: 'rgba(229,190,16,0.07)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  <img src={selectedStar.image || getPlaceholder(selectedStar.name)} alt={selectedStar.name} style={{ width: 84, height: 84, borderRadius: 16, objectFit: 'cover', border: '2px solid rgba(229,190,16,0.5)', flexShrink: 0, boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }} onError={(e) => { (e.target as HTMLImageElement).src = getPlaceholder(selectedStar.name); }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1a1a', background: 'linear-gradient(90deg,#e5be10,#f0d040)', padding: '3px 10px', borderRadius: 20, marginBottom: 9, fontFamily: 'sans-serif' }}>
                      <Award size={9} /> GTC Star
                    </div>
                    <div style={{ fontSize: 19, fontWeight: 700, color: '#e5be10', marginBottom: 4, fontFamily: 'Georgia,serif' }}>{selectedStar.name}</div>
                    {selectedStar.title && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontFamily: 'sans-serif' }}>{selectedStar.title}</div>}
                  </div>
                  <button className="sm-close" onClick={() => setSelectedStar(null)} aria-label="Close"><X size={15} /></button>
                </div>
              </div>
              {/* Modal body */}
              <div style={{ padding: '22px 26px' }}>
                <div className="modal-fields-grid">
                  {[{ label: 'Session', value: selectedStar.session }, { label: "Father's Name", value: selectedStar.fatherName }].map(f => (
                    <div key={f.label} style={{ background: '#fafafa', border: '1px solid #eeeeee', borderRadius: 14, padding: '13px 15px' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>{f.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', fontFamily: 'sans-serif' }}>{f.value}</div>
                    </div>
                  ))}
                  <div style={{ background: '#fafafa', border: '1px solid #eeeeee', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>Programme</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', fontFamily: 'sans-serif' }}>{selectedStar.class}</div>
                  </div>
                  <div style={{ background: '#fffdf0', border: '1px solid rgba(229,190,16,0.3)', borderLeft: '4px solid #e5be10', borderRadius: 14, padding: '13px 15px', gridColumn: '1/-1' }}>
                    <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: 5, fontFamily: 'sans-serif' }}>Achievement</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: '#333333', lineHeight: 1.6, fontFamily: 'sans-serif' }}>{selectedStar.achievement}</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '14px 26px 20px', display: 'flex', justifyContent: 'center', gap: 7, borderTop: '1px solid #eeeeee' }}>
                {['#e5be10', '#dddddd', '#1a1a1a'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StarSection;