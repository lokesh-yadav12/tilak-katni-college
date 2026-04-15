import React from 'react';

const highlights = [
	{
		title: 'Experienced Teachers',
		description:
			'Competent faculty with rich teaching, scientific & managerial experience.',
		bgImage:
			'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=70',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24, stroke: '#d4a830' }}>
				<path d="M12 14l9-5-9-5-9 5 9 5z" />
				<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
			</svg>
		),
	},
	{
		title: 'Lead College',
		description:
			'Govt. Tilak P.G. College is the Lead College in Katni, setting the standard for excellence.',
		bgImage:
			'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=70',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24, stroke: '#d4a830' }}>
				<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
				<polyline points="9 22 9 12 15 12 15 22" />
			</svg>
		),
	},
	{
		title: 'NAAC Accredited',
		description:
			'College holds NAAC Accreditation with B++ grade, a mark of academic quality & trust.',
		bgImage:
			'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=70',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24, stroke: '#d4a830' }}>
				<path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
			</svg>
		),
	},
];

export default function CollegeHighlights() {
	return (
		<section
			className="
				w-full bg-white 
				mt-12 overflow-hidden
				
				/* RESPONSIVE X-AXIS SPACING */
				px-4 sm:px-12 md:px-16 lg:px-24 xl:px-24
			"
		>
			{/* Gold accent line */}
			<div className="h-[3px] w-full bg-gradient-to-r from-[#B8860B] via-[#e0b030] to-[#B8860B]" />

			{/* FIXED CONTAINER FOR BETTER RESPONSIVENESS */}
			<div className="max-w-[1400px] mx-auto bg-[#0f1e3d]">
				<div className="grid grid-cols-1 md:grid-cols-3">
					{highlights.map((item, idx) => (
						<div
							key={item.title}
							className={`
								group relative overflow-hidden
								flex flex-col items-center justify-center text-center
								px-6 sm:px-8 md:px-10 py-12 sm:py-14 min-h-[240px]
								transition-all duration-300
								${idx < highlights.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#B8860B]/25' : ''}
							`}
						>
							{/* Background image */}
							<div
								className="absolute inset-0 bg-cover bg-center opacity-[0.18] group-hover:opacity-30 transition-opacity duration-300"
								style={{
									backgroundImage: `url('${item.bgImage}')`,
									filter: 'saturate(0.5)',
								}}
							/>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#0f1e3d]/80 to-[#0f1e3d]/60 pointer-events-none" />

							{/* Content */}
							<div className="relative z-10 flex flex-col items-center gap-4">
								<div className="w-[52px] h-[52px] rounded-full border border-[#B8860B]/60 bg-[#B8860B]/10 flex items-center justify-center group-hover:border-[#B8860B] group-hover:bg-[#B8860B]/20 transition-all duration-300">
									{item.icon}
								</div>

								<div className="w-9 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

								<h3
									className="text-white font-bold text-lg sm:text-xl leading-snug tracking-wide"
									style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
								>
									{item.title}
								</h3>

								<p className="text-[rgba(220,228,245,0.85)] text-sm leading-relaxed max-w-[260px]">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import img1 from "../../assets/logo_main.jpg"
// import img2 from "../../assets/header-img.jpg"

// const About: React.FC = ( ) => {
//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header with accent line */}
//         <div className="mb-12 flex flex-col justify-center items-center">
//           <div className="w-24 h-1 bg-[#B8860B] mb-6"></div>
//           <h2 className="text-5xl font-bold text-[#1e3a8a] mb-4">
//             Welcome to Madhya Pradesh Bhoj (Open) University
//           </h2>
//           <p className="text-xl text-gray-700 max-w-3xl leading-relaxed text-center">
//             Established on October 1, 1992, MPBOU stands as a beacon of inclusive education and transformative learning.
//           </p>
//         </div>

//         {/* Images Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {/* Image 1 - Logo */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#B8860B] opacity-10 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
//             <img
//               src={img1}
//               alt="MPBOU Logo"
//               className="w-full h-[350px] object-contain bg-white rounded-lg shadow-2xl p-8"
//             />
//           </div>

//           {/* Image 2 - Header Image */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#B8860B] opacity-10 rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
//             <img
//               src={img2}
//               alt="University Campus"
//               className="w-full h-[350px] object-contain rounded-lg shadow-2xl"
//             />
//             <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
//               <div className="flex items-center gap-4">
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-[#1e3a8a]">11</p>
//                   <p className="text-sm text-gray-600">Regional Centers</p>
//                 </div>
//                 <div className="w-px h-12 bg-gray-300"></div>
//                 <div className="text-center">
//                   <p className="text-4xl font-bold text-[#B8860B]">612</p>
//                   <p className="text-sm text-gray-600">Study Centers</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="mb-12">
//           <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-l-4 border-[#1e3a8a] shadow-lg mb-6">
//             <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Our Foundation</h3>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Madhya Pradesh Bhoj (Open) University (MPBOU) was inaugurated by President Dr. Shankar Dayal Sharma on October 19, 1992, under the Madhya Pradesh University Act 1991.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               The university's emblem draws inspiration from a verse in Raja Bhoj's <span className="font-semibold italic">"Saraswati Kanthabharan"</span> — a testament to our rich cultural heritage.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-[#1e3a8a] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
//               <p className="text-3xl font-bold mb-2">30+</p>
//               <p className="text-sm">Years of Excellence</p>
//             </div>
//             <div className="bg-[#B8860B] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
//               <p className="text-3xl font-bold mb-2">UGC</p>
//               <p className="text-sm">Recognized</p>
//             </div>
//             <div className="bg-[#1e3a8a] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
//               <p className="text-3xl font-bold mb-2">11</p>
//               <p className="text-sm">Regional Centers</p>
//             </div>
//             <div className="bg-[#B8860B] p-6 rounded-lg text-white text-center transform hover:scale-105 transition-transform duration-300">
//               <p className="text-3xl font-bold mb-2">612</p>
//               <p className="text-sm">Study Centers</p>
//             </div>
//           </div>
//         </div>

//         {/* Key Highlights */}
//         <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 rounded-lg p-8 mb-12">
//           <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
//           <div className="grid md:grid-cols-2 gap-6 text-white">
//             <div className="flex items-start space-x-4">
//               <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h4 className="font-bold text-lg mb-2">Promotion of Learning</h4>
//                 <p className="text-gray-200">Utilizing diverse resources, including technology, for effective knowledge dissemination.</p>
//               </div>
//             </div>
//             <div className="flex items-start space-x-4">
//               <div className="w-2 h-2 bg-[#B8860B] rounded-full mt-2 flex-shrink-0"></div>
//               <div>
//                 <h4 className="font-bold text-lg mb-2">Inclusive Higher Education</h4>
//                 <p className="text-gray-200">Enhancing educational standards by offering opportunities to various segments of society.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="text-center">
//           <Link
//             to="/about"
//             className="group inline-flex items-center gap-3 bg-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#9a7209] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//           >
//             Discover More About MPBOU
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;