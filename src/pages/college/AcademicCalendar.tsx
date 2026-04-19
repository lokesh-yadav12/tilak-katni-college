import React from 'react';

interface CalendarYear {
  year: string;
  label: string;
  pdfPath: string;
  colorClass: string;
  badgeClass: string;
  isCurrent?: boolean;
}

const calendars: CalendarYear[] = [
  { year: '2021–22', label: 'Academic Year 2021–22', pdfPath: '/pdfs/academic-calendar-2021-22.pdf', colorClass: 'bg-blue-50 text-blue-700', badgeClass: 'bg-blue-50 text-blue-700' },
  { year: '2022–23', label: 'Academic Year 2022–23', pdfPath: '/pdfs/academic-calendar-2022-23.pdf', colorClass: 'bg-teal-50 text-teal-700', badgeClass: 'bg-teal-50 text-teal-700' },
  { year: '2023–24', label: 'Academic Year 2023–24', pdfPath: '/pdfs/academic-calendar-2023-24.pdf', colorClass: 'bg-purple-50 text-purple-700', badgeClass: 'bg-purple-50 text-purple-700' },
  { year: '2024–25', label: 'Academic Year 2024–25', pdfPath: '/pdfs/academic-calendar-2024-25.pdf', colorClass: 'bg-amber-50 text-amber-700', badgeClass: 'bg-blue-100 text-blue-700', isCurrent: true },
];

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const FileIcon = () => (
  <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const AcademicCalendar = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-48 ">
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900 mb-1">Academic Calendar</h1>
        <p className="text-sm text-gray-500">Download the official academic timetable for each session</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {calendars.map((cal) => (
          <div
            key={cal.year}
            className={`bg-white rounded-xl border transition-colors hover:border-gray-300 ${
              cal.isCurrent ? 'border-2 border-blue-400' : 'border border-gray-200'
            }`}
          >
            <div className="flex items-start gap-3 p-5 pb-4">
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${cal.colorClass}`}>
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-gray-900">{cal.label}</p>
                <p className="text-sm text-gray-500">Session timetable &amp; exam schedule</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-md flex-shrink-0 ${
                cal.isCurrent ? 'bg-blue-100 text-blue-700' : cal.badgeClass
              }`}>
                {cal.isCurrent ? 'Current' : cal.year}
              </span>
            </div>

            <div className="border-t border-gray-100" />

            <div className="flex items-center justify-between px-5 py-3.5">
              <div className="flex items-center gap-1.5">
                <FileIcon />
                <span className="text-xs text-gray-400">PDF Document</span>
              </div>
              
               <a href={cal.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 px-3.5 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <DownloadIcon />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendar;