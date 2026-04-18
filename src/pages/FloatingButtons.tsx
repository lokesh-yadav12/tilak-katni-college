import React, { useState } from "react";
import { X, MessageSquare, UserCircle, Phone, Mail } from "lucide-react";
import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

const quickLinks = [
  {
    label: "World Bank",
    href: "/world-bank",
    color: "#1e3a8a",
    bg: "#EFF6FF",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    ),
  },
  {
    label: "RTI",
    href: "/rti",
    color: "#7C3AED",
    bg: "#F3EFFE",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    label: "AISE Portal",
    href: "/aise-portal",
    color: "#B45309",
    bg: "#FFFBEB",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Janbhagidari",
    href: "/janbhagidari",
    color: "#065F46",
    bg: "#ECFDF5",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Tender",
    href: "/tender",
    color: "#9D174D",
    bg: "#FDF2F8",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Recruitment",
    href: "/recruitment",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    label: "Scholarships",
    href: "/scholarships",
    color: "#B45309",
    bg: "#FFFBEB",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "Alumni",
    href: "/alumni",
    color: "#065F46",
    bg: "#ECFDF5",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "MOUs",
    href: "/mous",
    color: "#7C3AED",
    bg: "#F3EFFE",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const FloatingButtons = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile - Bottom Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 backdrop-blur-lg border-t border-white/10 shadow-2xl">
          <div className="grid grid-cols-4 gap-1 px-2 py-3">
            <button
              onClick={() => setIsPortalOpen(true)}
              className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
                <UserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Portal</span>
            </button>

            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Enquire</span>
            </button>

            <button
              onClick={() => window.location.href = "tel:+911234567890"}
              className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Call</span>
            </button>

            <button
              onClick={() => window.location.href = "mailto:info@mpbou.ac.in"}
              className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Email</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop - Floating Menu Button (Bottom Right) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        {/* Quick Links Menu */}
        {isMenuOpen && (
          <div className="absolute bottom-20 right-0 mb-4 space-y-3 animate-slideUp max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => window.location.href = link.href}
                className="group flex items-center space-x-3 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl pr-6 pl-2 py-2 transform hover:scale-105 transition-all duration-300 border border-gray-100 w-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ backgroundColor: link.bg, color: link.color }}
                >
                  {link.icon}
                </div>
                <span
                  className="font-semibold whitespace-nowrap pr-2 text-sm xl:text-base"
                  style={{ color: link.color }}
                >
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Main Action Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative"
          aria-label={isMenuOpen ? "Close menu" : "Open quick actions menu"}
        >
          <div className="w-16 h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-4 border-white">
            {isMenuOpen ? (
              <X className="w-8 h-8 xl:w-9 xl:h-9 text-white transition-transform duration-300" />
            ) : (
              <MessageSquare className="w-8 h-8 xl:w-9 xl:h-9 text-white" />
            )}
          </div>

          {/* Pulse Animation Ring */}
          {!isMenuOpen && (
            <div className="absolute inset-0 w-16 h-16 xl:w-18 xl:h-18 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          )}

          {/* Tooltip */}
          {!isMenuOpen && (
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Quick Actions
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Student Portal Modal */}
      {isPortalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsPortalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl my-4 sm:my-8 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPortalOpen(false)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-2xl transform hover:scale-110 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
              aria-label="Close portal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl">
              <AdmissionEnquiry onClose={() => setIsPortalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {isEnquiryOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsEnquiryOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl my-4 sm:my-8 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsEnquiryOpen(false)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-2xl transform hover:scale-110 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
              aria-label="Close enquiry"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl">
              <AdmissionEnquiry onClose={() => setIsEnquiryOpen(false)} />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </>
  );
};

export default FloatingButtons;


// import React, { useState } from "react";
// import { X, MessageSquare, UserCircle, Phone, Mail, GraduationCap, Award, FileText, Users, BookOpen, Newspaper, Megaphone, MessageCircle } from "lucide-react";
// import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

// const FloatingButtons = () => {
//   const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
//   const [isPortalOpen, setIsPortalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const quickLinks = [
//     {
//       icon: GraduationCap,
//       label: "UGC DEB",
//       onClick: () => window.location.href = "/ugc-deb",
//       color: "from-purple-600 to-purple-800"
//     },
//     {
//       icon: Award,
//       label: "AICTE",
//       onClick: () => window.location.href = "/aicte",
//       color: "from-blue-600 to-blue-800"
//     },
//     {
//       icon: FileText,
//       label: "NIRF",
//       onClick: () => window.location.href = "/nirf",
//       color: "from-green-600 to-green-800"
//     },
//     {
//       icon: MessageSquare,
//       label: "Feedback",
//       onClick: () => window.location.href = "mailto:info@mpbou.ac.in",
//       color: "from-orange-600 to-orange-800"
//     },
//     {
//       icon: BookOpen,
//       label: "NEP",
//       onClick: () => window.location.href = "/nep",
//       color: "from-red-600 to-red-800"
//     },
//     {
//       icon: Megaphone,
//       label: "Initiatives",
//       onClick: () => window.location.href = "/initiatives",
//       color: "from-teal-600 to-teal-800"
//     },
//     {
//       icon: Newspaper,
//       label: "News & Updates",
//       onClick: () => window.location.href = "/news",
//       color: "from-pink-600 to-pink-800"
//     },
//     {
//       icon: MessageCircle,
//       label: "Discussion Forum",
//       onClick: () => window.location.href = "/forum",
//       color: "from-indigo-600 to-indigo-800"
//     },
//     {
//       icon: Users,
//       label: "Learning Platform",
//       onClick: () => window.location.href = "/learning",
//       color: "from-cyan-600 to-cyan-800"
//     }
//   ];

//   return (
//     <>
//       {/* Mobile - Bottom Floating Action Bar */}
//       <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
//         <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 backdrop-blur-lg border-t border-white/10 shadow-2xl">
//           <div className="grid grid-cols-4 gap-1 px-2 py-3">
//             <button
//               onClick={() => setIsPortalOpen(true)}
//               className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
//             >
//               <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
//                 <UserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Portal</span>
//             </button>

//             <button
//               onClick={() => setIsEnquiryOpen(true)}
//               className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
//             >
//               <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
//                 <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Enquire</span>
//             </button>

//             <button
//               onClick={() => window.location.href = "tel:+911234567890"}
//               className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
//             >
//               <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
//                 <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Call</span>
//             </button>

//             <button
//               onClick={() => window.location.href = "mailto:info@mpbou.ac.in"}
//               className="flex flex-col items-center space-y-1 px-2 py-2 rounded-xl hover:bg-white/10 active:bg-white/20 transition-all duration-300 group"
//             >
//               <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform shadow-lg">
//                 <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//               </div>
//               <span className="text-[10px] sm:text-xs text-white font-medium text-center leading-tight">Email</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop - Floating Menu Button (Bottom Right) */}
//       <div className="hidden lg:block fixed bottom-6 right-6 z-40">
//         {/* Quick Links Menu */}
//         {isMenuOpen && (
//           <div className="absolute bottom-20 right-0 mb-4 space-y-3 animate-slideUp max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
//             {quickLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={link.onClick}
//                 className="group flex items-center space-x-3 bg-white hover:bg-gray-50 rounded-full shadow-xl hover:shadow-2xl pr-6 pl-2 py-2 transform hover:scale-105 transition-all duration-300 border border-gray-100 w-full"
//                 style={{ animationDelay: `${index * 50}ms` }}
//               >
//                 <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
//                   <link.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-gray-800 font-semibold whitespace-nowrap pr-2 text-sm xl:text-base">
//                   {link.label}
//                 </span>
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Main Action Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="group relative"
//           aria-label={isMenuOpen ? "Close menu" : "Open quick actions menu"}
//         >
//           <div className="w-16 h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transform hover:scale-110 transition-all duration-300 border-4 border-white">
//             {isMenuOpen ? (
//               <X className="w-8 h-8 xl:w-9 xl:h-9 text-white transition-transform duration-300" />
//             ) : (
//               <MessageSquare className="w-8 h-8 xl:w-9 xl:h-9 text-white" />
//             )}
//           </div>
          
//           {/* Pulse Animation Ring */}
//           {!isMenuOpen && (
//             <div className="absolute inset-0 w-16 h-16 xl:w-18 xl:h-18 bg-blue-400 rounded-full animate-ping opacity-20"></div>
//           )}
          
//           {/* Tooltip */}
//           {!isMenuOpen && (
//             <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//               Quick Actions
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
//                 <div className="border-8 border-transparent border-l-gray-900"></div>
//               </div>
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Student Portal Modal */}
//       {isPortalOpen && (
//         <div 
//           className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
//           onClick={() => setIsPortalOpen(false)}
//         >
//           <div 
//             className="relative w-full max-w-6xl my-4 sm:my-8 animate-scaleIn"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setIsPortalOpen(false)}
//               className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-2xl transform hover:scale-110 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
//               aria-label="Close portal"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//             <div className="max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl">
//               <AdmissionEnquiry onClose={() => setIsPortalOpen(false)} />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enquiry Modal */}
//       {isEnquiryOpen && (
//         <div 
//           className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
//           onClick={() => setIsEnquiryOpen(false)}
//         >
//           <div 
//             className="relative w-full max-w-6xl my-4 sm:my-8 animate-scaleIn"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setIsEnquiryOpen(false)}
//               className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-full shadow-2xl transform hover:scale-110 hover:rotate-90 transition-all duration-300 flex items-center justify-center"
//               aria-label="Close enquiry"
//             >
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//             <div className="max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl">
//               <AdmissionEnquiry onClose={() => setIsEnquiryOpen(false)} />
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes scaleIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }

//         .animate-scaleIn {
//           animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .animate-slideUp {
//           animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         /* Custom scrollbar for desktop menu */
//         .scrollbar-thin::-webkit-scrollbar {
//           width: 6px;
//         }

//         .scrollbar-thin::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         .scrollbar-thin::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 3px;
//         }

//         .scrollbar-thin::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//       `}</style>
//     </>
//   );
// };

// export default FloatingButtons;