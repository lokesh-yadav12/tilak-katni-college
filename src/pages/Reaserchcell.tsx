import React from 'react';

const functions = [
  'To evaluate and approve all proposals for workshop/seminars/conferences to be submitted to any funding agency by Department/Functional Unit of the College.',
  'To evaluate and forward submission of project/workshop/seminars/conferences reports.',
  'To promote student trips to research and development centers of national and international repute.',
  'To organize seminars, workshops and conferences at college level.',
  'To motivate faculty members to apply for major and minor research projects.',
  'To maintain a record of all research activities carried out in the college.',
];

const stats = [
  { value: '30+', label: 'Research Projects' },
  { value: '15+', label: 'Publications' },
  { value: '50+', label: 'Seminars Held' },
  { value: '200+', label: 'Participants' },
];

const ResearchCell = () => {
  return (
    <div className="min-h-screen py-16 sm:py-44 bg-gray-50">

      {/* Hero */}
      <div className="  py-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <p className="relative text-blue-700 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
          Govt. Tilak P.G. College, Katni
        </p>
        <h1 className="relative text-4xl font-semibold text-Blue-900">Research Cell</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* About card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex gap-6 items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-[#1e3a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-900 mb-3">The Research Cell</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The Research and Development Cell is established to promote, monitor and address research
              activities at Govt. Tilak P.G. College, Katni. The objective of the cell is to monitor
              and administer research programs for Faculty and Students, and encourage research
              activities by providing the necessary infrastructural set up to faculty and students at large.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#1e3a8a] rounded-2xl p-5 text-center">
              <p className="text-2xl font-medium text-white">{s.value}</p>
              <p className="text-xs text-blue-200 mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Functions card */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <div className="w-1 h-6 bg-[#1e3a8a] rounded-full" />
            <h2 className="text-base font-medium text-gray-900">Functions of Research Cell</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {functions.map((fn, i) => (
              <div key={i} className="flex items-start gap-4 px-8 py-4 hover:bg-gray-50 transition-colors">
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-50 text-[#1e3a8a] text-xs font-medium flex items-center justify-center mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{fn}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#1e3a8a]">Interested in Research Collaboration?</p>
            <p className="text-xs text-blue-400 mt-0.5">Reach out to the Research Cell coordinator</p>
          </div>
          
          <article  href="mailto:research@tilakcollege.ac.in"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#1e3a8a] px-5 py-2.5 rounded-xl hover:bg-[#1e40af] transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Us
          </article>
        </div>

      </div>
    </div>
  );
};

export default ResearchCell;