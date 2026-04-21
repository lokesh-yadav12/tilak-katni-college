import React from 'react';
import { motion } from 'framer-motion';
import chancellor from '../../assets/rr1.png';

const GOLD = '#e5be10';
const BROWN = '#753300';
const BROWN2 = '#9a4a10';

export default function ChancellorSection() {
  return (
    <section style={{ padding:'40px 24px', background:'linear-gradient(160deg,#fff8ee 0%,#fdf3d8 50%,#fff 100%)', fontFamily:'Georgia,serif' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:28 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:12 }}>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,#e5be10)' }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'#9a6040', fontFamily:'sans-serif' }}>From the Principal's Desk</span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,#e5be10,transparent)' }} />
          </div>
        </div>

        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          style={{ background:'#fff', border:'1.5px solid rgba(229,190,16,0.3)', borderRadius:20, overflow:'hidden' }}
        >
          <div style={{ height:3, background:`linear-gradient(90deg,${BROWN},${GOLD},${BROWN})` }} />

          <div style={{ display:'grid', gridTemplateColumns:'300px 1fr' }}>
            {/* Image side */}
            <div style={{ background:`linear-gradient(135deg,#3a1a00,${BROWN})`, position:'relative', minHeight:380, display:'flex', alignItems:'flex-end', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:-30, right:-30, width:120, height:120, background:'rgba(229,190,16,0.1)', borderRadius:'50%' }} />
              <div style={{ position:'absolute', bottom:-20, left:-20, width:80, height:80, background:'rgba(229,190,16,0.07)', borderRadius:'50%' }} />
              {/* Quote badge */}
              <div style={{ position:'absolute', top:20, left:20, width:44, height:44, background:`linear-gradient(135deg,${GOLD},#c9a800)`, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', zIndex:2, boxShadow:'0 4px 16px rgba(229,190,16,0.4)' }}>
                <svg viewBox="0 0 24 24" fill="#753300" width="18" height="18"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <img src={chancellor} alt="Principal" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', opacity:0.9, position:'absolute', inset:0 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(58,26,0,0.5) 0%,transparent 60%)' }} />
            </div>

            {/* Content side */}
            <div style={{ padding:'40px 36px', display:'flex', flexDirection:'column', gap:20, justifyContent:'center' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:9, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:BROWN, background:'rgba(229,190,16,0.15)', border:'1px solid rgba(229,190,16,0.4)', padding:'4px 12px', borderRadius:20, fontFamily:'sans-serif', width:'fit-content' }}>
                ✦ Welcome Message
              </div>
              <h2 style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:800, color:'#3a1a00', lineHeight:1.2 }}>Welcome to Govt. Tilak P.G. College</h2>
              <div style={{ display:'flex', alignItems:'flex-start', gap:12 }}>
                <div style={{ width:36, height:2, background:`linear-gradient(90deg,${BROWN},${GOLD})`, flexShrink:0, marginTop:9 }} />
                <p style={{ fontSize:13, color:'#b36000', fontStyle:'italic', fontFamily:'sans-serif', lineHeight:1.6 }}>"A desire can change nothing, a decision can change something, but a determination can change everything."</p>
              </div>
              <p style={{ fontSize:14, color:'#4a2000', lineHeight:1.8, fontFamily:'sans-serif', fontWeight:400, borderLeft:'3px solid rgba(229,190,16,0.5)', paddingLeft:16 }}>
                It is my pleasure to welcome you to Govt. Tilak PG College Katni, an institution that has set itself a vision of leadership in quality education. The academic activities concentrate on helping the students gain an excellent theoretical knowledge base and develop the skills to implement them. There is also ample scope in co-curricular and extra-curricular activities, wherein students are encouraged to show their talents and prove themselves to be not only well-qualified graduates but also very responsible and ideal citizens of our country.
              </p>
              <div>
                <div style={{ fontSize:13, fontWeight:700, color:BROWN, fontFamily:'sans-serif' }}>Principal</div>
                <div style={{ fontSize:11, color:'#b08060', fontFamily:'sans-serif', fontWeight:400 }}>Govt. Tilak P.G. College, Katni (M.P.)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}