import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'about' | 'mission' | 'vision';

interface TabItem {
  key: Tab;
  label: string;
  icon: string;
  accent: string;
  accentLight: string;
  accentText: string;
  heading: string;
  content: { title: string; body: string }[];
}

const tabs: TabItem[] = [
  {
    key: 'about',
    label: 'About',
    icon: '🏛️',
    accent: '#1E3A5F',
    accentLight: '#EAF1FA',
    accentText: '#0C2D4E',
    heading: 'About the College',
    content: [
      {
        title: 'Our Identity',
        body: 'Govt. Tilak P.G. College is a premier institution of higher education committed to academic excellence and holistic development of students. Established with a rich legacy of education, the college has been a cornerstone of knowledge in the region.',
      },
      {
        title: 'Our Heritage',
        body: 'With decades of distinguished service to education, the college has shaped thousands of graduates who have gone on to make meaningful contributions across industries, public service, research, and the arts.',
      },
      {
        title: 'Our Community',
        body: 'We foster an inclusive, vibrant campus community that values diversity, intellectual curiosity, and civic responsibility — preparing students not just for careers, but for life.',
      },
    ],
  },
  {
    key: 'mission',
    label: 'Mission',
    icon: '🎯',
    accent: '#7C3AED',
    accentLight: '#F3EFFE',
    accentText: '#4C1D95',
    heading: 'Our Mission',
    content: [
      {
        title: 'Academic Excellence',
        body: 'To provide quality higher education that is accessible, inclusive, and responsive to the evolving needs of society — nurturing students to achieve their fullest academic potential.',
      },
      {
        title: 'Character & Values',
        body: 'To instil ethical values, civic responsibility, and a sense of social justice in every student, shaping them into morally sound and responsible citizens of the nation.',
      },
      {
        title: 'Innovation & Growth',
        body: 'To promote a culture of research, innovation, and entrepreneurial thinking through modern pedagogical practices that cater to the holistic development of every learner.',
      },
    ],
  },
  {
    key: 'vision',
    label: 'Vision',
    icon: '✨',
    accent: '#B45309',
    accentLight: '#FFFBEB',
    accentText: '#78350F',
    heading: 'Our Vision',
    content: [
      {
        title: 'Spirit of Entrepreneurship',
        body: 'To inculcate among students a spirit of entrepreneurship, develop in them cultural values, a scientific temper and above all make them morally sound, responsible citizens through innovative academic practices.',
      },
      {
        title: 'Institution of Repute',
        body: 'To be an educational institution of repute dedicated to academic excellence with a humanities outlook contributing to social upliftment through improvement in the quality of life.',
      },
      {
        title: 'Torch-Bearer of Knowledge',
        body: 'To see Govt. Tilak P.G. College as a torch-bearer — empowering youth for capacity-building, inculcating basic moral values, and enabling students to be equipped with knowledge and enhanced skill sets to become employable and entrepreneurial in varied fields of industry.',
      },
    ],
  },
];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  const current = tabs.find((t) => t.key === activeTab)!;

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

        .amv-section {
          font-family: 'DM Sans', sans-serif;
        }
        .amv-display {
          font-family: 'Playfair Display', serif;
        }

        /* Tab pill */
        .amv-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 28px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #6b7280;
          transition: color 0.2s;
          z-index: 1;
        }
        .amv-tab:hover { color: #111827; }
        .amv-tab.active { color: #fff; }

        .amv-tab-indicator {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          z-index: -1;
        }

        /* Card hover */
        .amv-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .amv-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.09);
        }

        /* Number badge */
        .amv-num {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1;
          opacity: 0.12;
          position: absolute;
          top: 12px;
          right: 16px;
          pointer-events: none;
          user-select: none;
        }

        .amv-divider {
          width: 48px;
          height: 3px;
          border-radius: 2px;
          margin-top: 10px;
          margin-bottom: 14px;
        }
      `}</style>

      <div className="amv-section max-w-5xl mx-auto">

        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">
            Govt. Tilak P.G. College
          </p>
          <h1
            className="amv-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Know Who We Are
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Explore our identity, the mission that drives us, and the vision that guides us forward.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex p-1.5 rounded-full gap-1"
            style={{ background: '#F0F0F0' }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`amv-tab ${activeTab === tab.key ? 'active' : ''}`}
              >
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="amv-tab-indicator"
                    style={{ background: tab.accent }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span style={{ fontSize: '15px' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Section heading */}
            <div className="mb-10 text-center">
              <h2
                className="amv-display text-3xl md:text-4xl font-bold mb-3"
                style={{ color: current.accent }}
              >
                {current.heading}
              </h2>
              <div
                className="mx-auto"
                style={{
                  width: 56,
                  height: 3,
                  borderRadius: 2,
                  background: current.accent,
                  opacity: 0.35,
                }}
              />
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.content.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="amv-card relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  {/* Ghost number */}
                  <span
                    className="amv-num"
                    style={{ color: current.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Accent dot */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: current.accentLight }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: current.accent }}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className="amv-divider"
                    style={{ background: current.accent, opacity: 0.25 }}
                  />

                  <h3
                    className="text-base font-semibold mb-3"
                    style={{ color: current.accentText }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom quote strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-10 rounded-2xl p-6 flex items-center gap-4"
              style={{ background: current.accentLight, border: `1px solid ${current.accent}22` }}
            >
              <div
                className="w-1 self-stretch rounded-full flex-shrink-0"
                style={{ background: current.accent, opacity: 0.6 }}
              />
              <p
                className="text-sm leading-relaxed font-medium italic"
                style={{ color: current.accentText }}
              >
                {activeTab === 'about' &&
                  '"Education is the most powerful weapon which you can use to change the world." — Govt. Tilak P.G. College stands by this ideal every day.'}
                {activeTab === 'mission' &&
                  '"Our mission is not merely to educate, but to transform — building citizens who are capable, compassionate, and committed to the greater good."'}
                {activeTab === 'vision' &&
                  '"We envision a college that is not just a seat of learning, but a beacon of hope — a torch-bearer for generations of students seeking purpose, knowledge, and excellence."'}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;