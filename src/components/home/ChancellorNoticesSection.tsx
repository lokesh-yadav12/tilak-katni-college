// import React, { useState } from 'react';
import { ExternalLink, Bell, ChevronRight, Quote, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import chancellor from '../../assets/rr1.png'

// interface Notice {
//   id: number;
//   title: string;
//   date: string;
//   link: string;
//   isNew?: boolean;
// }

// const notices: Notice[] = [
//   {
//     id: 1,
//     title: "Academic Calendar 2023-24 Released",
//     date: "15 March 2023",
//     link: "/notices/academic-calendar-2023",
//     isNew: true
//   },
//   {
//     id: 2,
//     title: "Final Examination Schedule - May 2023",
//     date: "10 March 2023",
//     link: "/notices/exam-schedule-may-2023",
//     isNew: true
//   },
//   {
//     id: 3,
//     title: "Summer Internship Program Registration",
//     date: "05 March 2023",
//     link: "/notices/summer-internship-2023"
//   },
//   {
//     id: 4,
//     title: "Research Paper Submission Deadline Extended",
//     date: "01 March 2023",
//     link: "/notices/research-paper-deadline"
//   },
//   {
//     id: 5,
//     title: "Campus Recruitment Drive - TCS & Infosys",
//     date: "25 February 2023",
//     link: "/notices/campus-recruitment-feb-2023"
//   }
// ];

export default function ChancellorNoticesSection() {
  // const [hoveredNotice, setHoveredNotice] = useState<number | null>(null);

  return (
    <section className="relative py-4 bg-white border border-gray-200 rounded-xl shadow-xl ">
      {/* Chancellor Section - Full Width Banner Style */}
      <div className="relative mb-2 overflow-hidden">
        {/* Background with Diagonal Split */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Image with Unique Frame */}
            <div className="lg:col-span-4">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Decorative Background Shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#4a90c8] to-[#5a9fd8] rounded-3xl rotate-3 opacity-20 blur-xl"></div>
                
                {/* Main Image Container */}
                <div className="relative">
                  {/* Quote Icon Decoration */}
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center shadow-2xl z-10">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8860B]" fill="currentColor" />
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl text-black border-4 border-white">
                    <img 
                      src={chancellor}
                      alt="Mangubhai Patel"
                      className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 text-black bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                  </div>
                  
                  {/* Accent Corner Elements */}
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#4a90c8] rounded-2xl -z-10"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-8 text-black space-y-4 sm:space-y-6">
              {/* Small Label */}
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#1e3a8a]" />
                <span className="text-xs sm:text-sm font-semibold text-black">Welcome to Govt. Tilak P.G. College</span>
              </div> */}

              {/* Name and Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-black tracking-tight">Welcome to Govt. Tilak P.G. College</h2>
                <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl text-[#1e3a8a] font-semibold mb-2">
                  <div className="w-8 sm:w-12 h-0.5 bg-[#1e3a8a]"></div>
                  <span>“A desire can change nothing, a decision can change something but a determination can change everything”</span>
                </div>
                {/* <p className="text-black/70 italic text-xs sm:text-sm">
                  (Honorary Professor of Academic Union, Oxford, UK)
                </p> */}
              </div>

              {/* Message */}
              <div className="relative pl-4 sm:pl-6 border-l-2 border-[#4a90c8]/50">
                <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                  It is my pleasure to welcome you to Govt. Tilak PG College Katni, an institution has set itself a vision leadership in quality education.
The academic activities concentrate on helping the students to gain an excellent theoretical knowledge base and in the development of skills to implement them.
There is also an ample of scope in co-curricular and extra-curricular activities at this college wherein the students are encouraged to show their talents.  This college also ensures that the students prove themselves to be not only well qualified graduates but also very responsible and ideal citizens of our country.
The faculty members of the college are highly dedicated having indomitable commitment towards achievement of mission and goals.
The spacious classrooms, well established laboratories, auditorium and a well stacked library help students to learn systematically and thoroughly.
                </p>
              </div>

              {/* CTA Button */}
              {/* <Link
                to="/chancellor-message"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#1e3a8a] hover:bg-[#3e5fbb] hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
              >
                <span>Continue Reading</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Notices Section - Modern Timeline Style */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        
        {/* <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg rotate-3">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Latest Notices & Updates</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg px-4">Stay informed with our latest announcements and important information</p>
        </div> */}

        {/* Notices Grid - Card Style */}
        {/* <div className="grid gap-3 sm:gap-4 mb-6">
          {notices.map((notice, index) => (
            <Link
              key={notice.id}
              to={notice.link}
              className="group relative"
              onMouseEnter={() => setHoveredNotice(notice.id)}
              onMouseLeave={() => setHoveredNotice(null)}
            >
              <div className={`relative bg-white border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                hoveredNotice === notice.id
                  ? 'border-[#4a90c8] shadow-xl shadow-blue-500/10 sm:-translate-y-1'
                  : 'border-slate-200 hover:border-slate-300 shadow-md'
              }`}>
               
                <div className={`absolute -left-3 sm:-left-4 top-4 sm:top-6 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-lg transition-all duration-300 ${
                  hoveredNotice === notice.id
                    ? 'bg-gradient-to-br from-[#4a90c8] to-[#5a9fd8] text-white scale-110'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {index + 1}
                </div>

                <div className="flex items-start justify-between gap-3 sm:gap-6 pl-6 sm:pl-8">
                  
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-[#4a90c8] transition-colors flex-1">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg animate-bounce">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3 text-slate-500">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">{notice.date}</span>
                    </div>
                  </div>

                  
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
                    hoveredNotice === notice.id
                      ? 'bg-[#4a90c8] text-white rotate-12 scale-110'
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

             
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 rounded-b-xl sm:rounded-b-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-[#4a90c8] to-[#5a9fd8] transition-all duration-300 ${
                      hoveredNotice === notice.id ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        {/* View All Button */}
        {/* <div className="text-center">
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#5a9fd8] hover:bg-blue-400 hover:text-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 group shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <span>View All Notices</span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div> */}



      {/* </div> */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        
        section {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
    </section>
  );
}