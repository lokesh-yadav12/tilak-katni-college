import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mr. Ajay Verma',
    role: 'Alumni, Class of 2018',
    image: '',
    quote: 'I am thankful to Tilak College for their training, guidance and moral support. I am looking forward to having a secured and successful career.',
  },
  {
    name: 'Mr. Vijay Singh',
    role: 'Current Student, MBA',
    image: '',
    quote: 'The quality I like most about the department is how fundamentally they have prepared me for my next step in life, regardless of whether I choose employment or graduate studies.',
  },
  {
    name: 'Mr. Nikhil Yadav',
    role: 'Faculty, Computer Science',
    image: '',
    quote: "I'm so grateful to being a part of Tilak College, Katni. It nourished me and opened greater opportunities towards my bright future.",
  },
  {
    name: 'Miss. Shreya Gupta',
    role: 'Faculty, Computer Science',
    image: '',
    quote: "I'm so grateful to being a part of Tilak College. It nourished me and opened greater opportunities towards my bright future.",
  },
];

const getInitials = (name: string) =>
  name.replace(/^(Mr\.|Miss\.|Ms\.|Dr\.)\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

export default function TestimonialsSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg,#3a1a00 0%,#753300 60%,#9a4a10 100%)',
        padding: '60px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Georgia, serif',
      }}
    >
      <style>{`
        .tc-card { background:rgba(255,248,238,0.06); border:1.5px solid rgba(229,190,16,0.2); border-radius:16px; padding:20px; display:flex; flex-direction:column; gap:14px; transition:background 0.25s,border-color 0.25s,transform 0.25s; }
        .tc-card:hover { background:rgba(229,190,16,0.08); border-color:rgba(229,190,16,0.5); transform:translateY(-4px); }
      `}</style>

      {/* Decorative */}
      {/* <div style={{ position:'absolute', width:350, height:350, top:-100, right:-100, borderRadius:'50%', background:'rgba(229,190,16,0.07)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:220, height:220, bottom:-60, left:-70, borderRadius:'50%', background:'rgba(0,0,0,0.15)', pointerEvents:'none' }} /> */}

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
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,transparent,rgba(229,190,16,0.6))' }} />
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(229,190,16,0.7)', fontFamily:'sans-serif' }}>Stories from Our Community</span>
            <div style={{ height:1, width:44, background:'linear-gradient(90deg,rgba(229,190,16,0.6),transparent)' }} />
          </div>
          <h2 style={{ fontSize:'clamp(28px,4vw,40px)', fontWeight:800, color:'#e5be10', lineHeight:1.1, margin:'0 0 10px' }}>
            Voices of Excellence
          </h2>
          <p style={{ fontSize:14, color:'rgba(253,248,238,0.7)', fontFamily:'sans-serif', maxWidth:420, margin:'0 auto', lineHeight:1.6 }}>
            Hear from our students, alumni, and faculty about their transformative experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.4, delay:idx * 0.1 }}
              className="tc-card"
            >
              {/* Stars */}
              <div style={{ display:'flex', gap:2 }}>
                {Array.from({ length:5 }).map((_, i) => (
                  <span key={i} style={{ color:'#e5be10', fontSize:11 }}>★</span>
                ))}
              </div>

              {/* Big quote mark */}
              <div style={{ fontSize:36, fontWeight:800, color:'rgba(229,190,16,0.3)', lineHeight:1 }}>"</div>

              {/* Quote */}
              <p style={{ fontSize:13, color:'rgba(253,248,238,0.85)', fontFamily:'sans-serif', lineHeight:1.7, fontStyle:'italic', flex:1 }}>
                {t.quote}
              </p>

              {/* Footer */}
              <div style={{ display:'flex', alignItems:'center', gap:10, borderTop:'1px solid rgba(229,190,16,0.15)', paddingTop:12 }}>
                <div style={{ width:38, height:38, borderRadius:'50%', background:'linear-gradient(135deg,#e5be10,#c9a800)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:700, color:'#3a1a00', flexShrink:0, border:'2px solid rgba(229,190,16,0.4)' }}>
                  {getInitials(t.name)}
                </div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:'#e5be10', fontFamily:'sans-serif' }}>{t.name}</div>
                  <div style={{ fontSize:10, color:'rgba(229,190,16,0.6)', fontFamily:'sans-serif' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}