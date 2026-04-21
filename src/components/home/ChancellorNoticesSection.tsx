import React from 'react';
import { motion } from 'framer-motion';
import chancellor from '../../assets/rr1.png';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';
const DARK = '#3a1a00';
const CREAM = '#fdf8ee';
const TEXT = '#4a2000';
const MUTED = '#b08060';

export default function ChancellorSection() {
  return (
    <section
      style={{
        padding: '72px 24px',
        background: 'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)',
        fontFamily: 'Georgia, serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        .chancellor-card { transition: box-shadow 0.3s ease; }
        .chancellor-card:hover { box-shadow: 0 28px 80px rgba(117,51,0,0.15) !important; }
        .principal-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, transparent 40%, rgba(58,26,0,0.55) 100%);
          pointer-events: none;
        }
      `}</style>

      {/* Decorative background elements */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,transparent,${GOLD},${BROWN},${GOLD},transparent)` }} />
      <div style={{ position:'absolute', width:500, height:500, top:-180, right:-180, borderRadius:'50%', background:'rgba(229,190,16,0.05)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:300, height:300, bottom:-80, left:-80, borderRadius:'50%', background:'rgba(117,51,0,0.04)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1040, margin: '0 auto' }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 0 }}>
            <div style={{ height: 1, width: 56, background: 'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED, fontFamily: 'sans-serif' }}>
              From the Principal's Desk
            </span>
            <div style={{ height: 1, width: 56, background: 'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
        </motion.div>

        {/* Main card — asymmetric editorial layout */}
        <motion.div
          className="chancellor-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 420px',
            gap: 0,
            borderRadius: 24,
            overflow: 'hidden',
            border: '1.5px solid rgba(229,190,16,0.3)',
            boxShadow: '0 16px 56px rgba(117,51,0,0.1)',
            background: '#fff',
          }}
        >
          {/* ── LEFT: Text content ── */}
          <div
            style={{
              padding: '52px 48px',
              background: CREAM,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 0,
              position: 'relative',
            }}
          >
            {/* Top accent line */}
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${BROWN},${GOLD})`, borderRadius: 2, marginBottom: 28 }} />

            {/* Welcome badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: BROWN,
                background: 'rgba(229,190,16,0.18)',
                border: '1px solid rgba(229,190,16,0.4)',
                padding: '4px 12px',
                borderRadius: 20,
                fontFamily: 'sans-serif',
                width: 'fit-content',
                marginBottom: 20,
              }}
            >
              ✦ Welcome Message
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(26px,3.5vw,40px)',
                fontWeight: 800,
                color: DARK,
                lineHeight: 1.18,
                margin: '0 0 24px',
              }}
            >
              Welcome to<br />
              <span
                style={{
                  background: `linear-gradient(135deg,${BROWN},#b36000,${GOLD})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Govt. Tilak P.G. College
              </span>
            </h2>

            {/* Pull quote */}
            <div
              style={{
                background: `linear-gradient(135deg,${BROWN},${BROWN2})`,
                borderRadius: 12,
                padding: '18px 20px',
                marginBottom: 24,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, background: 'rgba(229,190,16,0.12)', borderRadius: '50%' }} />
              <svg viewBox="0 0 24 24" fill="rgba(229,190,16,0.5)" width="20" height="20" style={{ marginBottom: 8 }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p
                style={{
                  fontSize: 14,
                  fontStyle: 'italic',
                  color: 'rgba(253,248,238,0.92)',
                  lineHeight: 1.65,
                  margin: 0,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                "A desire can change nothing, a decision can change something, but a determination can change everything."
              </p>
            </div>

            {/* Body paragraph */}
            <p
              style={{
                fontSize: 14,
                color: TEXT,
                lineHeight: 1.85,
                fontFamily: 'sans-serif',
                fontWeight: 400,
                margin: '0 0 32px',
              }}
            >
              It is my pleasure to welcome you to Govt. Tilak PG College Katni, an institution that has set itself a vision of leadership in quality education. The academic activities concentrate on helping the students gain an excellent theoretical knowledge base and develop the skills to implement them. There is also ample scope in co-curricular and extra-curricular activities, wherein students are encouraged to prove themselves as not only well-qualified graduates but also responsible, ideal citizens of our country.
            </p>

            {/* Signature area */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},#c9a800)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 20 20" fill={DARK} width="18" height="18">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: BROWN, fontFamily: 'sans-serif', letterSpacing: '0.02em' }}>
                  Principal
                </div>
                <div style={{ fontSize: 11, color: MUTED, fontFamily: 'sans-serif', fontWeight: 400 }}>
                  Govt. Tilak P.G. College, Katni (M.P.)
                </div>
              </div>
            </div>

            {/* Bottom decorative corner element */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 80,
                height: 80,
                background: `linear-gradient(135deg,transparent 50%,rgba(229,190,16,0.12) 50%)`,
              }}
            />
          </div>

          {/* ── RIGHT: Image panel ── */}
          <div
            style={{
              position: 'relative',
              background: `linear-gradient(160deg,${DARK},${BROWN})`,
              minHeight: 480,
              overflow: 'hidden',
            }}
          >
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, background: 'rgba(229,190,16,0.1)', borderRadius: '50%', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 100, height: 100, background: 'rgba(229,190,16,0.07)', borderRadius: '50%', zIndex: 1 }} />

            {/* Gold top bar */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${GOLD},${BROWN2})`, zIndex: 3 }} />

            {/* Photo */}
            <div
              className="principal-img-wrap"
              style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            >
              <img
                src={chancellor}
                alt="Principal"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', opacity: 0.88 }}
              />
            </div>

            {/* Bottom info chip */}
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 20,
                right: 20,
                background: 'rgba(253,248,238,0.12)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(229,190,16,0.35)',
                borderRadius: 12,
                padding: '12px 16px',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},#c9a800)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 20 20" fill={DARK} width="16" height="16">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'sans-serif', letterSpacing: '0.04em' }}>Principal</div>
                <div style={{ fontSize: 10, color: 'rgba(229,190,16,0.85)', fontFamily: 'sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Govt. Tilak P.G. College</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}