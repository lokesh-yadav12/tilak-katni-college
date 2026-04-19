import React from 'react';
import logo from '../assets/nsspic.png'
const services = [
  'Free of cost tuition classes to school dropouts on Sundays at the college campus, conducted by faculty as a selfless gesture of service.',
  'About 100 students have adopted two student dropouts each from their neighborhood, undertaking the job of teaching. 30 more students have adopted three adults each to teach them to read and write.',
  'Tree plantation drives are carried out regularly.',
  'Constructive work in adopted villages and slums.',
  'Blood donation camps.',
  'Non-formal education initiatives.',
  'Health, nutrition, and family welfare awareness drives.',
  'AIDS awareness campaigns.',
];

const officers = [
  { name: 'Dr. Madhuri Garg', role: 'Programme Officer (Women Wings)', phone: '+91-9424956438' },
  { name: 'Dr. Ajay Kumar Thakur', role: 'Programme Officer (Women & Men Combined Wings)', phone: '+91-6207120913' },
  { name: 'Mr. Atul Kumar', role: 'Programme Officer (Men Wings)', phone: '+91-8543820500' },
];

const Nss = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 sm:py-44">

      {/* Hero with image */}
      <div className="relative h-72 md:h-96  overflow-hidden">
        <img
          src={logo}
          alt="NSS"
          className="w-full h-full object-contain object-center"
          onError={(e) => { (e.target as HTMLImageElement).src = ''; }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 " />
        {/* Content on overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-blue-200 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
            Govt. Tilak P.G. College, Katni (M.P.)
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            National Service Scheme
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-200 text-sm italic">"Not Me, But You"</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-10">

        {/* About */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-6 bg-[#1e3a8a] rounded-full" />
            <h2 className="text-base font-medium text-gray-900">About NSS</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Govt. Tilak P.G. College, Katni (M.P.) has to its credit three units of National Service
            Scheme. Three regular N.S.S officers coordinate the activity under the direction and guidance
            of the Director of NSS, Rani Durgawati Vishwavidyalaya. Students who believe in social values
            and are eager to make themselves socially relevant may join these units. Students have the
            satisfaction and a sense of achievement in sharing their responsibility towards the society of
            which they are a part. In the camps organized under the banner of NSS, these students get an
            opportunity to relate with society at close quarters and try their best to strike at the
            prevalent social evils. They organize literacy and awareness programmes to teach the ignorant
            the basic principles of hygiene and cleanliness, and thus improve upon the quality of their lives.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '3', label: 'NSS Units' },
            { value: '300+', label: 'Volunteers' },
            { value: '100+', label: 'Students Teaching' },
            { value: '3', label: 'Programme Officers' },
          ].map((s) => (
            <div key={s.label} className="bg-[#1e3a8a] rounded-2xl p-5 text-center">
              <p className="text-2xl font-medium text-white">{s.value}</p>
              <p className="text-xs text-blue-200 mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <div className="w-1 h-6 bg-[#1e3a8a] rounded-full" />
            <h2 className="text-base font-medium text-gray-900">Services</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-4 px-8 py-4 hover:bg-gray-50 transition-colors">
                <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-50 text-[#1e3a8a] text-xs font-medium flex items-center justify-center mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two col: Composition + How to join */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#1e3a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h2 className="text-sm font-medium text-gray-900">Composition of N.S.S. Unit</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Three NSS units comprising of 100 student volunteers each are led by three teacher
              in-charges, also known as NSS Programme Officers.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#1e3a8a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h2 className="text-sm font-medium text-gray-900">How to Join NSS</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Students interested in volunteering for community service can submit the consent form
              duly signed by their parents to the NSS Programme Officer of the college.
            </p>
          </div>
        </div>

        {/* Officers */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-3">
            <div className="w-1 h-6 bg-[#1e3a8a] rounded-full" />
            <h2 className="text-base font-medium text-gray-900">NSS Programme Officers</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {officers.map((o, i) => (
              <div key={i} className="flex items-center justify-between gap-6 px-8 py-4 hover:bg-gray-50 transition-colors flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#1e3a8a] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-medium">
                      {o.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{o.name}</p>
                    <p className="text-xs text-gray-500">{o.role}</p>
                  </div>
                </div>
                
                <a  href={`tel:${o.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1e3a8a] bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors flex-shrink-0"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                  </svg>
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Nss;