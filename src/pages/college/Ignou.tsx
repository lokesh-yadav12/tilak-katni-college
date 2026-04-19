import React from 'react';
import logo from '../../assets/ignou.png';

const Ignou = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Banner */}
			<div className="relative bg-[#1e3a8a] py-16 flex items-center justify-center overflow-hidden">
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
						backgroundSize: '20px 20px',
					}}
				/>
				<h1 className="relative text-4xl font-semibold text-white tracking-wide z-10">Bhoj</h1>
			</div>

			{/* Main Content */}
			<div className="max-w-5xl mx-auto px-6 py-16">
				<div className="flex flex-col md:flex-row items-center md:items-start gap-12">
					{/* Logo */}
					<div className="flex-shrink-0 flex flex-col items-center gap-4">
						<div className="w-80 h-60 rounded-2xl border border-gray-200 bg-white flex items-center justify-center p-2 shadow-sm">
							<img
								src={logo}
								alt="IGNOU Logo"
								className="w-full h-full object-cover"
								onError={(e) => {
									(e.target as HTMLImageElement).style.display = 'none';
								}}
							/>
							{/* Fallback placeholder if image fails */}
							<div className="hidden w-full h-full bg-[#1e3a8a] rounded-xl items-center justify-center">
								<span className="text-white text-4xl font-bold">BU</span>
							</div>
						</div>
						<div className="text-center">
							<p className="text-xs font-medium text-[#1e3a8a] uppercase tracking-widest">Est. 1991</p>
							<p className="text-xs text-gray-400 mt-1">Bhopal, Madhya Pradesh</p>
						</div>
					</div>

					{/* Text Content */}
					<div className="flex-1">
						{/* Accent line + heading */}
						<div className="flex items-center gap-3 mb-4">
							<div className="w-1 h-8 bg-[#1e3a8a] rounded-full" />
							<h2 className="text-xl font-medium text-gray-900">Madhya Pradesh Bhoj (Open) University</h2>
						</div>

						<p className="text-gray-600 leading-relaxed text-base mb-6">
							IGNOU was founded to serve the Indian population by means of distance and open education,
							providing quality higher education opportunities to all segments of society. It also aims to
							encourage, coordinate and set standards for distance and open education in India, and to
							strengthen the human resources of India through education.
						</p>

						<p className="text-gray-600 leading-relaxed text-base mb-8">
							Apart from teaching and research, extension and training form the mainstay of its academic
							activities. It also acts as a national resource center, and serves to promote and maintain
							standards of distance education in India.IGNOU hosts the Secretariats of the SAARC
							Consortium on Open and Distance Learning (SACODiL) and the Global Mega Universities Network
							(GMUNET), initially supported by UNESCO.
						</p>

						{/* Stat pills */}
						<div className="flex flex-wrap gap-3">
							{[
								{ label: 'Established', value: '1991' },
								{ label: 'Mode', value: 'Open University' },
								{ label: 'Location', value: 'Bhopal, MP' },
								{ label: 'Type', value: 'State University' },
							].map((stat) => (
								<div
									key={stat.label}
									className="flex flex-col px-4 py-2.5 bg-white border border-gray-200 rounded-xl"
								>
									<span className="text-[11px] text-gray-400 uppercase tracking-wider">
										{stat.label}
									</span>
									<span className="text-sm font-medium text-[#1e3a8a] mt-0.5">{stat.value}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Collaboration highlight strip */}
				<div className="mt-12 bg-white border border-gray-200 rounded-2xl p-6">
					<p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
						Key Collaborations
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{[
							'Rehabilitation Council of India',
							'Indian Institute of Tourism & Travel Management',
							'Indian Institute of Material Management',
						].map((org) => (
							<div
								key={org}
								className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
							>
								<div className="w-2 h-2 mt-1.5 rounded-full bg-[#1e3a8a] flex-shrink-0" />
								<span className="text-sm text-gray-700 leading-snug">{org}</span>
							</div>
						))}
					</div>
				</div>

				{/* Visit website link */}
				<div className="mt-6 flex justify-end">
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium text-[#1e3a8a] border border-[#1e3a8a] px-5 py-2.5 rounded-xl hover:bg-[#1e3a8a] hover:text-white transition-colors"
					>
						Visit Official Website
						<svg
							className="w-4 h-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Ignou;
