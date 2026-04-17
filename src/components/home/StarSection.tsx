import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
  const trackRef = useRef<HTMLDivElement>(null);

  const stars: Star[] = [
    {
      id: 1,
      name: 'Ms. Shivani Gupta',
      image: shivani,
      title: 'Top Performer',
      session: '2021–22',
      fatherName: 'Mr. Kamalesh Gupta',
      class: 'Master of Science (M.Sc.)',
      achievement:
        'Qualified IIT JAM (Mathematics) in 2022 and GATE (Mathematics) in 2023. Also got admission in Department of Mathematical Sciences, IIT (BHU) for a research project in 2023.',
    },
    {
      id: 2,
      name: 'Star Name 2',
      image: '',
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 3,
      name: 'Star Name 3',
      image: shivani,
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 4,
      name: 'Star Name 4',
      image: '',
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 5,
      name: 'Star Name 5',
      image: shivani,
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 6,
      name: 'Star Name 6',
      image: '',
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 7,
      name: 'Star Name 7',
      image: shivani,
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
    {
      id: 8,
      name: 'Star Name 8',
      image: '',
      title: 'Position / Title',
      session: '2022–23',
      fatherName: 'Father Name',
      class: 'Bachelor of Science (B.Sc.)',
      achievement: 'Achievement details here',
    },
  ];

  const getPlaceholder = (name: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=DBEAFE&color=1E40AF&bold=true&format=png`;

  const handleOpenModal = (star: Star) => {
    setSelectedStar(star);
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
  };

  const handleCloseModal = () => {
    setSelectedStar(null);
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
  };

  // Duplicate cards for seamless infinite loop
  const doubled = [...stars, ...stars];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes gtc-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gtc-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: gtc-scroll 32s linear infinite;
        }
        .gtc-track:hover {
          animation-play-state: paused;
        }
        .gtc-card-shine::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.18) 50%,
            transparent 60%
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
        }
        .gtc-card-shine:hover::after {
          transform: translateX(100%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 bg-clip-text text-transparent mb-3">
            GTC Stars
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Celebrating excellence and dedication of our exceptional individuals
          </p>
        </motion.div>

        {/* ── Scrolling Track ── */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="gtc-track"
            onMouseEnter={() => {
              if (trackRef.current)
                trackRef.current.style.animationPlayState = 'paused';
            }}
            onMouseLeave={() => {
              if (!selectedStar && trackRef.current)
                trackRef.current.style.animationPlayState = 'running';
            }}
          >
            {doubled.map((star, i) => (
              <div
                key={`${star.id}-${i}`}
                className="gtc-card-shine relative flex-shrink-0 w-52 bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => handleOpenModal(star)}
              >
                {/* Star badge */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow">
                  <span className="text-white text-xs">★</span>
                </div>

                {/* Image */}
                <div className="h-52 overflow-hidden bg-blue-50">
                  <img
                    src={star.image || getPlaceholder(star.name)}
                    alt={star.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getPlaceholder(star.name);
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                    GTC Star
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
                    {star.name}
                  </h3>
                  {star.title && (
                    <p className="text-xs text-gray-500 mt-1">{star.title}</p>
                  )}
                  <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                    Session {star.session}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedStar && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex gap-5 p-6 border-b border-gray-100 items-start">
                <img
                  src={selectedStar.image || getPlaceholder(selectedStar.name)}
                  alt={selectedStar.name}
                  className="w-20 h-20 rounded-xl object-cover border border-gray-100 flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getPlaceholder(selectedStar.name);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                    ⭐ GTC Star
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    {selectedStar.name}
                  </h2>
                  {selectedStar.title && (
                    <p className="text-sm text-gray-500 mt-1">{selectedStar.title}</p>
                  )}
                </div>
                <button
                  onClick={handleCloseModal}
                  className="flex-shrink-0 w-9 h-9 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Session */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Session
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {selectedStar.session}
                  </p>
                </div>

                {/* Father Name */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Father's Name
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {selectedStar.fatherName}
                  </p>
                </div>

                {/* Programme */}
                <div className="sm:col-span-2 bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    Programme
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {selectedStar.class}
                  </p>
                </div>

                {/* Achievement */}
                <div className="sm:col-span-2 bg-blue-50 border-l-4 border-blue-600 rounded-xl p-4">
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-2">
                    Achievement
                  </p>
                  <p className="text-sm font-medium text-blue-900 leading-relaxed">
                    {selectedStar.achievement}
                  </p>
                </div>
              </div>

              {/* Modal Footer dots */}
              <div className="pb-6 flex justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="w-2 h-2 rounded-full bg-blue-300" />
                <span className="w-2 h-2 rounded-full bg-blue-800" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StarSection;