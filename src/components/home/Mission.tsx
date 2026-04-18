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
}

const tabs: TabItem[] = [
  {
    key: 'about',
    label: 'About',
    heading: 'About Govt. Tilak P.G. College',
    subheading: 'Est. August 1958 · Katni, Madhya Pradesh',
    paragraphs: [
      'Govt. Tilak P.G. College, Katni (M.P.) was established in August 1958...',
      'The motto of the college is — "Idquoyogh karmsu kaushallam"...',
      'The College is spread over an area of 18 acres...',
      'Govt. Tilak P.G. College maintains its reputation...',
    ],
    quote:
      '"Perfection in one\'s work is true yoga." — The guiding motto of Govt. Tilak P.G. College.',
  },
  {
    key: 'mission',
    label: 'Mission',
    heading: 'Our Mission',
    subheading: "Shaping tomorrow's leaders through purposeful education",
    mainPara:
      'Our mission is to develop life-long learners equipped with competencies...',
    bullets: [
      'Implementation of the policies of higher education.',
      'Scholarships for weaker sections.',
      'Build strong and responsible citizens.',
    ],
    quote:
      '"Our mission is not merely to educate, but to transform..."',
  },
  {
    key: 'vision',
    label: 'Vision',
    heading: 'Our Vision',
    subheading: 'A beacon of knowledge, character and national progress',
    paragraphs: [
      'The vision of the college is to inculcate...',
      'To be an institution of excellence...',
      'Empowering youth and building society...',
    ],
    quote:
      '"We envision a college that is not just a seat of learning..."',
  },
];

const tabIcons: Record<Tab, React.ReactNode> = {
  about: <span></span>,
  mission: <span></span>,
  vision: <span></span>,
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const current = tabs.find((t) => t.key === activeTab)!;

  return (
    <section className="bg-[#FAFAF8] min-h-screen px-6 py-14">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          {/* <p className="text-[20px] tracking-widest uppercase text-blue-900 font-medium mb-2">
            Govt. Tilak P.G. College · Katni, M.P.
          </p> */}

          <h1 className="text-[clamp(36px,5vw,52px)] font-semibold text-[#1E3A5F] mb-3">
            Know Who We Are
          </h1>

          {/* <p className="text-[16px] text-gray-500 font-medium">
            Explore our identity, the mission that drives us, and the vision that guides us forward.
          </p> */}
        </div>

        {/* TABS */}
        <div className="flex border-b border-gray-200 mb-10 items-center content-center justify-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex text-lg items-center gap-2 px-6 py-3 text-[24px] font-medium transition ${
                activeTab === tab.key
                  ? 'text-[#1E3A5F] border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-[#1E3A5F]'
              }`}
            >
              <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded">
                {tabIcons[tab.key]}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >

            {/* HEADING */}
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold text-[#1E3A5F] text-center mb-2">
              {current.heading}
            </h2>

            <p className="text-sm uppercase tracking-widest text-blue-400 text-center font-medium mb-6">
              {current.subheading}
            </p>

            <div className="w-12 h-[2px] bg-blue-400 mx-auto mb-8"></div>

            {/* STATS */}
            {current.key === 'about' && (
              <div className="flex border rounded-lg overflow-hidden mb-8">
                {[
                  { val: '1958', label: 'Established' },
                  { val: '18', label: 'Acres Campus' },
                  { val: '400m', label: 'Track' },
                  { val: 'NAAC', label: 'Accredited' },
                ].map((s) => (
                  <div key={s.label} className="flex-1 text-center p-4 border-r last:border-r-0">
                    <p className="text-3xl font-semibold text-[#1E3A5F]">{s.val}</p>
                    <p className="text-xs uppercase text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* PARAGRAPHS */}
            {current.paragraphs?.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-gray-600 mb-5 font-medium">
                {p}
              </p>
            ))}

            {/* MISSION */}
            {current.mainPara && (
              <p className="text-[16px] text-gray-600 mb-5 font-medium">
                {current.mainPara}
              </p>
            )}

            {current.bullets && (
              <ul className="space-y-3 mb-6">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[16px] text-gray-600 font-medium">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* QUOTE */}
            <div className="mt-10 border-l-4 border-blue-400 bg-blue-50 p-6 rounded-r-lg">
              <p className="italic text-[#1E3A5F] font-semibold text-[17px]">
                {current.quote}
              </p>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// type Tab = 'about' | 'mission' | 'vision';

// interface TabItem {
//   key: Tab;
//   label: string;
//   heading: string;
//   subheading: string;
//   mainPara?: string;
//   bullets?: string[];
//   paragraphs?: string[];
//   quote: string;
// }

// const tabs: TabItem[] = [
//   {
//     key: 'about',
//     label: 'About',
//     heading: 'About Govt. Tilak P.G. College',
//     subheading: 'Est. August 1958 · Katni, Madhya Pradesh',
//     paragraphs: [
//       'Govt. Tilak P.G. College, Katni (M.P.) was established in August 1958 under the aegis of Tilak Shiksha Society, Katni, comprising of social workers, educationists and some business men of the town. The Govt. Tilak P.G. College Katni is a multi-faculty educational institution affiliated to Rani Durgawati University Jabalpur. This is the leading college of Katni district. Katni is a town on the banks of the Katni river in Madhya Pradesh, India. It is located in the Mahakoushal region of Central India. The city is 90 km. away from Jabalpur.',
//       'The motto of the college is — "Idquoyogh karmsu kaushallam" (perfection in one\'s work is true yoga). Keeping this motto in mind, the college makes every effort to achieve excellence not only in academic activities but also in all co-curricular activities as well.',
//       'The College is spread over an area of 18 acres with separate arts, commerce and science blocks. This is the only college in the Katni district possessing a 400 meter running track.',
//       'Govt. Tilak P.G. College maintains its reputation of being the best in the field of education in the district, since it caters to the all-round development of its students making them ready for jobs and for the society also. Hence the Tilak College is acting as a medium of strengthening the nation.',
//     ],
//     quote: '"Perfection in one\'s work is true yoga." — The guiding motto of Govt. Tilak P.G. College, inspiring excellence in every endeavour since 1958.',
//   },
//   {
//     key: 'mission',
//     label: 'Mission',
//     heading: 'Our Mission',
//     subheading: 'Shaping tomorrow\'s leaders through purposeful education',
//     mainPara: 'Our mission is to develop life-long learners, equipped with competencies, nurtured through integration of academic learning with humanity. We endeavor to make our students\' future-ready, confident of taking up professional and societal challenges with passion and maturity. All efforts are made towards enabling our students to take leadership roles in various walks of life and act as change agents in the globalized world. The college has the following mission:',
//     bullets: [
//       'Implementation of the policies of higher education.',
//       'Giving the benefit of welfare schemes like scholarships to SC/ST/OBC, minorities and weaker sections of society.',
//       'To make students economically independent, academically strong and socially committed to the task of building a strong nation.',
//     ],
//     quote: '"Our mission is not merely to educate, but to transform — building citizens who are capable, compassionate, and committed to the greater good."',
//   },
//   {
//     key: 'vision',
//     label: 'Vision',
//     heading: 'Our Vision',
//     subheading: 'A beacon of knowledge, character and national progress',
//     paragraphs: [
//       'The vision of the college is to inculcate among the students a spirit of entrepreneurship, develop in them cultural values, a scientific temper and above all make them morally sound, responsible citizens of the country through innovative academic practices which will cater to their holistic development.',
//       'To be an educational institution of repute dedicated to academic excellence with a humanities outlook contributing to social upliftment through improvement in the quality of life.',
//       'The college believes in empowering youth for capacity-building, inculcating basic moral values, community development, and fair access for the poor and socially disadvantaged group of human resource in the light of changing economic, social and cultural development. The vision is to see Govt. Tilak P.G. College as a torch-bearer to enable students to be equipped with knowledge and enhanced skill set to become employable and entrepreneurial in varied fields of industry, and be a valued member of the society.',
//     ],
//     quote: '"We envision a college that is not just a seat of learning, but a beacon of hope — a torch-bearer for generations of students seeking purpose, knowledge, and excellence."',
//   },
// ];

// const DARK_BLUE = '#1E3A5F';
// const GOLD = '#C9A84C';
// const GOLD_LIGHT = '#F5EDD5';
// const CREAM = '#FAFAF8';

// const tabIcons: Record<Tab, React.ReactNode> = {
//   about: (
//     <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
//       <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
//     </svg>
//   ),
//   mission: (
//     <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
//       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//     </svg>
//   ),
//   vision: (
//     <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
//       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//     </svg>
//   ),
// };

// export default function AboutSection() {
//   const [activeTab, setActiveTab] = useState<Tab>('about');
//   const current = tabs.find((t) => t.key === activeTab)!;

//   return (
//     <section
//       style={{
//         background: CREAM,
//         minHeight: '100vh',
//         fontFamily: "'Georgia', 'Times New Roman', serif",
//         padding: '56px 24px 80px',
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500&display=swap');

//         .amv-wrap { max-width: 860px; margin: 0 auto; }

//         /* Tab bar */
//         .amv-tabs {
//           display: flex;
//           gap: 0;
//           border-bottom: 2px solid #D6E2EF;
//           margin-bottom: 48px;
//         }
//         .amv-tab-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 32px 14px 20px;
//           font-family: 'Outfit', sans-serif;
//           font-size: 15px;
//           font-weight: 500;
//           letter-spacing: 0.01em;
//           color: #7A93A8;
//           background: none;
//           border: none;
//           cursor: pointer;
//           position: relative;
//           transition: color 0.2s;
//         }
//         .amv-tab-btn:hover { color: ${DARK_BLUE}; }
//         .amv-tab-btn.active { color: ${DARK_BLUE}; font-weight: 600; }
//         .amv-tab-btn.active::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: ${GOLD};
//           border-radius: 2px 2px 0 0;
//         }
//         .amv-tab-icon {
//           width: 28px;
//           height: 28px;
//           border-radius: 6px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #EAF1FA;
//           color: #7A93A8;
//           flex-shrink: 0;
//           transition: background 0.2s, color 0.2s;
//         }
//         .amv-tab-btn.active .amv-tab-icon {
//           background: ${DARK_BLUE};
//           color: #fff;
//         }

//         /* Heading area */
//         .amv-heading {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(28px, 4vw, 40px);
//           font-weight: 700;
//           color: ${DARK_BLUE};
//           line-height: 1.2;
//           margin: 0 0 6px;
//           letter-spacing: -0.01em;
//         }
//         .amv-subheading {
//           font-family: 'Outfit', sans-serif;
//           font-size: 13px;
//           font-weight: 400;
//           color: ${GOLD};
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           margin: 0 0 28px;
//         }
//         .amv-rule {
//           width: 48px;
//           height: 2px;
//           background: ${GOLD};
//           border-radius: 1px;
//           margin-bottom: 32px;
//         }

//         /* Body text */
//         .amv-para {
//           font-family: 'Outfit', sans-serif;
//           font-size: 15.5px;
//           line-height: 1.85;
//           color: #3A4E5E;
//           margin-bottom: 20px;
//           font-weight: 300;
//         }

//         /* Bullet list */
//         .amv-bullets {
//           margin: 24px 0 28px;
//           padding: 0;
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }
//         .amv-bullet {
//           display: flex;
//           align-items: flex-start;
//           gap: 14px;
//           font-family: 'Outfit', sans-serif;
//           font-size: 15px;
//           line-height: 1.7;
//           color: #3A4E5E;
//           font-weight: 300;
//         }
//         .amv-bullet-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: ${GOLD};
//           flex-shrink: 0;
//           margin-top: 10px;
//         }

//         /* Quote strip */
//         .amv-quote {
//           margin-top: 40px;
//           border-left: 3px solid ${GOLD};
//           padding: 20px 24px;
//           background: ${GOLD_LIGHT};
//           border-radius: 0 8px 8px 0;
//         }
//         .amv-quote-text {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 17px;
//           font-style: italic;
//           line-height: 1.7;
//           color: ${DARK_BLUE};
//           font-weight: 600;
//           margin: 0;
//         }

//         /* Decorative corner element */
//         .amv-corner {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 120px;
//           height: 120px;
//           pointer-events: none;
//           opacity: 0.04;
//         }

//         /* Stat row for About tab */
//         .amv-stats {
//           display: flex;
//           gap: 0;
//           border: 1px solid #D6E2EF;
//           border-radius: 10px;
//           overflow: hidden;
//           margin-bottom: 36px;
//         }
//         .amv-stat {
//           flex: 1;
//           padding: 20px 16px;
//           text-align: center;
//           border-right: 1px solid #D6E2EF;
//         }
//         .amv-stat:last-child { border-right: none; }
//         .amv-stat-val {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 32px;
//           font-weight: 700;
//           color: ${DARK_BLUE};
//           line-height: 1;
//           margin-bottom: 4px;
//         }
//         .amv-stat-label {
//           font-family: 'Outfit', sans-serif;
//           font-size: 11.5px;
//           font-weight: 400;
//           color: #7A93A8;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//         }
//       `}</style>

//       <div className="amv-wrap">

//         {/* Page title */}
//         <motion.div
//           initial={{ opacity: 0, y: -16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           style={{ marginBottom: 40 }}
//         >
//           <p style={{
//             fontFamily: "'Outfit', sans-serif",
//             fontSize: 11,
//             fontWeight: 500,
//             letterSpacing: '0.18em',
//             textTransform: 'uppercase',
//             color: GOLD,
//             marginBottom: 10,
//           }}>
//             Govt. Tilak P.G. College · Katni, M.P.
//           </p>
//           <h1 style={{
//             fontFamily: "'Cormorant Garamond', serif",
//             fontSize: 'clamp(34px, 5vw, 52px)',
//             fontWeight: 700,
//             color: DARK_BLUE,
//             margin: '0 0 12px',
//             letterSpacing: '-0.02em',
//             lineHeight: 1.15,
//           }}>
//             Know Who We Are
//           </h1>
//           <p style={{
//             fontFamily: "'Outfit', sans-serif",
//             fontSize: 16,
//             fontWeight: 300,
//             color: '#5A7080',
//             margin: 0,
//             lineHeight: 1.6,
//           }}>
//             Explore our identity, the mission that drives us, and the vision that guides us forward.
//           </p>
//         </motion.div>

//         {/* Tab bar */}
//         <div className="amv-tabs">
//           {tabs.map((tab) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               className={`amv-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
//             >
//               <span className="amv-tab-icon">{tabIcons[tab.key]}</span>
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 14 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3, ease: 'easeOut' }}
//             style={{ position: 'relative' }}
//           >
//             {/* Decorative watermark */}
//             <svg className="amv-corner" viewBox="0 0 120 120" fill="none">
//               <circle cx="120" cy="0" r="90" stroke={DARK_BLUE} strokeWidth="1.5" />
//               <circle cx="120" cy="0" r="60" stroke={DARK_BLUE} strokeWidth="1" />
//               <circle cx="120" cy="0" r="30" stroke={DARK_BLUE} strokeWidth="0.75" />
//             </svg>

//             {/* Heading */}
//             <h2 className="amv-heading">{current.heading}</h2>
//             <p className="amv-subheading">{current.subheading}</p>
//             <div className="amv-rule" />

//             {/* Stats row — About only */}
//             {current.key === 'about' && (
//               <motion.div
//                 className="amv-stats"
//                 initial={{ opacity: 0, y: 12 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1, duration: 0.35 }}
//               >
//                 {[
//                   { val: '1958', label: 'Established' },
//                   { val: '18', label: 'Acres Campus' },
//                   { val: '400m', label: 'Running Track' },
//                   { val: 'NAAC', label: 'Accredited' },
//                 ].map((s) => (
//                   <div className="amv-stat" key={s.label}>
//                     <div className="amv-stat-val">{s.val}</div>
//                     <div className="amv-stat-label">{s.label}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             )}

//             {/* Paragraphs */}
//             {current.paragraphs?.map((p, i) => (
//               <motion.p
//                 key={i}
//                 className="amv-para"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.08 + i * 0.07, duration: 0.35 }}
//               >
//                 {p}
//               </motion.p>
//             ))}

//             {/* Mission: main para + bullets */}
//             {current.mainPara && (
//               <motion.p
//                 className="amv-para"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.08, duration: 0.35 }}
//               >
//                 {current.mainPara}
//               </motion.p>
//             )}
//             {current.bullets && (
//               <motion.ul
//                 className="amv-bullets"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.18, duration: 0.35 }}
//               >
//                 {current.bullets.map((b, i) => (
//                   <motion.li
//                     key={i}
//                     className="amv-bullet"
//                     initial={{ opacity: 0, x: -8 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
//                   >
//                     <span className="amv-bullet-dot" />
//                     <span>{b}</span>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             )}

//             {/* Quote */}
//             <motion.div
//               className="amv-quote"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.38, duration: 0.4 }}
//             >
//               <p className="amv-quote-text">{current.quote}</p>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }