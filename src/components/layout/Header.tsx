import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tilaklogo1.png';

interface NavLink {
	label: string;
	href?: string;
	hasDropdown?: boolean;
	dropdownItems?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
	{
		label: 'Home',
		href: '/',
		hasDropdown: false,
	},
	{
		label: 'College',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Overview', href: '/about' },
			{ label: 'Mission & Vision', href: '/vision-mission' },
			{ label: 'Values', href: '/values' },
			{ label: 'Accreditations', href: '/about/accreditations' },
		],
	},
	{
		label: 'Programmes',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Programs', href: '/academics' },
			{ label: 'Departments', href: '/academics/departments' },
			{ label: 'Faculty', href: '/academics/faculty' },
			{ label: 'Academic Calendar', href: '/academics/calendar' },
		],
	},
	{
		label: 'Department',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Exam Schedule', href: '/examinations/schedule' },
			{ label: 'Results', href: '/examinations/results' },
			{ label: 'Exam Guidelines', href: '/examinations/guidelines' },
		],
	},
	{
		label: 'Support Services',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Research Projects', href: '/research/projects' },
			{ label: 'Publications', href: '/research/publications' },
			{ label: 'Innovation', href: '/research/innovation' },
		],
	},
	{
		label: 'staff',
		href: '/careers',
	},
	{
		label: 'Research',
		href: '/careers',
	},
	{
		label: 'Committee',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Research Centers', href: '/research-section/centers' },
			{ label: 'PhD Programs', href: '/research-section/phd' },
			{ label: 'Collaborations', href: '/research-section/collaborations' },
		],
	},
	{
		label: 'Curriculum Activity',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Admission Form', href: '/admission-form' },
			{ label: 'Admission Process', href: '/admission/process' },
			{ label: 'Eligibility', href: '/admission/eligibility' },
			{ label: 'Fee Structure', href: '/admission/fees' },
		],
	},
	{
		label: 'Study Center',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Admission Form', href: '/admission-form' },
			{ label: 'Admission Process', href: '/admission/process' },
			{ label: 'Eligibility', href: '/admission/eligibility' },
			{ label: 'Fee Structure', href: '/admission/fees' },
		],
	},
	{
		label: 'Gallery',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Admission Form', href: '/admission-form' },
			{ label: 'Admission Process', href: '/admission/process' },
			{ label: 'Eligibility', href: '/admission/eligibility' },
			{ label: 'Fee Structure', href: '/admission/fees' },
		],
	},
	{
		label: 'Student corner',
		href: '/careers',
	},

	// {
	// 	label: 'Committee',
	// 	href: '/careers',
	// },
	// {
	// 	label: 'Placements',
	// 	href: '/placements',
	// },
	// {
	// 	label: 'Contact Us',
	// 	href: '/contact',
	// },
];

// Announcements for the ticker
const announcements = [
	'🎓 Admissions Open for 2025-26 — Apply Now!',
	'📢 Exam Schedule for Semester IV Released — Check Now',
	'🏆 Tilak College ranked among Top 50 Colleges in MP',
	'📋 Last Date for Scholarship Applications: 30th April 2025',
	'🔬 New Research Lab Inauguration on 20th May 2025',
	'📌 Guest Lecture Series by Industry Experts — Register Today',
	'🎉 Annual Cultural Fest "Utsav 2025" — 15th to 17th May',
];

// 9 capsule action buttons in 3x3 grid
const capsuleButtons: { label: string; href: string; color: 'gold' | 'blue' }[] = [
	{ label: 'World Bank', href: '/examinations/results', color: 'gold' },
	{ label: 'RTI', href: '/ugc-deb', color: 'blue' },
	{ label: 'AISE Portal', href: '/admission-form', color: 'gold' },
	{ label: 'Janbhagidari Samiti', href: '/aicte', color: 'blue' },
	{ label: 'Tender', href: '/about/accreditations', color: 'gold' },
	{ label: 'Recruitment', href: '/admission/fees', color: 'blue' },
	{ label: 'Scholarships', href: '/scholarships', color: 'gold' },
	{ label: 'Alumni', href: '/e-library', color: 'blue' },
	{ label: 'Mous', href: '/student-portal', color: 'gold' },
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const handleLogoClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Ticker animation using CSS
	const tickerText = announcements.join('     ●     ');

	return (
		<>
			{/* CSS for ticker animation */}
			<style>{`
				@keyframes ticker-scroll {
					0% { transform: translateX(0%); }
					100% { transform: translateX(-50%); }
				}
				.ticker-container {
					overflow: hidden;
					position: relative;
					width: 100%;
				}
				.ticker-track {
					display: inline-flex;
					white-space: nowrap;
					animation: ticker-scroll 60s linear infinite;
					will-change: transform;
				}
				.ticker-track:hover {
					animation-play-state: paused;
				}
				.ticker-item {
					display: inline-block;
					padding-right: 100px;
				}
			`}</style>

			<nav
				className={`fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${
					isScrolled ? 'shadow-lg' : ''
				}`}
			>
				{/* ── TOP ANNOUNCEMENT TICKER ONLY ── */}
				<div className="bg-[#1e3a8a] text-white">
					<div className="max-w-full mx-auto px-4 lg:px-16">
						<div className="flex items-center h-10 sm:h-12 gap-3 overflow-hidden">
							<span className="bg-white text-[#B8860B] font-bold text-sm sm:text-base px-3 py-1 rounded flex-shrink-0 uppercase tracking-wide">
								📣 News / Announcement
							</span>
							<div className="ticker-container flex-1">
								<div className="ticker-track">
									<span className="ticker-item text-sm sm:text-base lg:text-lg font-semibold text-white">
										{tickerText}
									</span>
									<span className="ticker-item text-sm sm:text-base lg:text-lg font-semibold text-white">
										{tickerText}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── MIDDLE SECTION — Logo (50%) + 9 Capsules (50%) ── */}
				<div className="bg-white">
					<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
						<div className="flex items-center justify-between py-1.5 sm:py-3 gap-2">
							{/* LEFT HALF — Logo */}
							<div className="w-3/4 sm:w-1/2 flex items-center">
								<Link to="/" onClick={handleLogoClick} className="flex items-center">
									<img
										src={logo}
										className="
											w-full max-w-[260px] sm:max-w-[800px]
											h-auto 
											object-contain 
											block
										"
									/>
								</Link>
							</div>

							{/* RIGHT HALF — 9 Capsule Buttons (3×3 grid), hidden on mobile */}
							<div className="hidden lg:grid w-1/2 grid-cols-3 gap-2">
								{capsuleButtons.map((btn) => (
									<Link
										key={btn.label}
										to={btn.href}
										className={`
											text-center text-white text-sm font-semibold hover:text-white
											px-1 py-3 rounded-full transition-all duration-200
											hover:scale-105 hover:shadow-md whitespace-nowrap
											${btn.color === 'gold' ? 'bg-[#B8860B] hover:bg-[#A0750A]' : 'bg-[#4F46E5] hover:bg-[#4338CA]'}
										`}
									>
										{btn.label}
									</Link>
								))}
							</div>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="lg:hidden p-2 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors"
							>
								{isMobileMenuOpen ? (
									<X className="w-6 h-6 text-white" />
								) : (
									<Menu className="w-6 h-6 text-white" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* ── BOTTOM NAVIGATION BAR ── */}
				<div className="bg-[#1e3a8a]">
					<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
						<div className="hidden lg:flex items-center justify-between">
							{navLinks.map((link) => (
								<div
									key={link.label}
									className="relative group"
									onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
									onMouseLeave={() => setActiveDropdown(null)}
								>
									{link.hasDropdown ? (
										<>
											<button className="text-white hover:text-white hover:bg-[#2563eb] px-1 py-4 font-medium transition-colors flex items-center space-x-0 text-sm uppercase tracking-wide">
												<span>{link.label}</span>
												<ChevronDown className="w-4 h-4" />
											</button>
											{activeDropdown === link.label && (
												<div className="absolute top-full left-0 pt-0 w-56 z-50">
													<div className="bg-white text-black rounded-md shadow-lg py-2">
														{link.dropdownItems?.map((item) => (
															<Link
																key={item.label}
																to={item.href}
																className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors"
															>
																{item.label}
															</Link>
														))}
													</div>
												</div>
											)}
										</>
									) : (
										<Link
											to={link.href || '#'}
											className="text-white hover:bg-[#2563eb] px-4 py-4 font-medium transition-colors block text-sm uppercase tracking-wide"
										>
											{link.label}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── MOBILE MENU ── */}
				{isMobileMenuOpen && (
					<div className="lg:hidden bg-white border-t max-h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
						{/* Mobile Ticker */}
						<div className="px-4 py-2 bg-[#B8860B] overflow-hidden">
							<div className="flex items-center gap-2">
								<span className="bg-white text-[#B8860B] font-bold text-sm px-2 py-0.5 rounded flex-shrink-0 uppercase">
									📣
								</span>
								<div className="ticker-container flex-1">
									<div className="ticker-track">
										<span className="ticker-item text-sm font-semibold text-white">
											{tickerText}
										</span>
										<span className="ticker-item text-sm font-semibold text-white">
											{tickerText}
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Mobile Capsule Buttons — 3 column grid */}
						<div className="px-4 py-3 bg-gray-50 border-b grid grid-cols-3 gap-2">
							{capsuleButtons.map((btn) => (
								<Link
									key={btn.label}
									to={btn.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className={`
										text-center text-white text-[10px] font-semibold
										px-2 py-1.5 rounded-full transition-colors whitespace-nowrap
										${btn.color === 'gold' ? 'bg-[#B8860B] hover:bg-[#A0750A]' : 'bg-[#4F46E5] hover:bg-[#4338CA]'}
									`}
								>
									{btn.label}
								</Link>
							))}
						</div>

						{/* Mobile Navigation Links */}
						<div className="px-4 py-4 space-y-2">
							{navLinks.map((link) => (
								<div key={link.label}>
									{link.hasDropdown ? (
										<div>
											<button
												onClick={() =>
													setActiveDropdown(activeDropdown === link.label ? null : link.label)
												}
												className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
											>
												<span>{link.label}</span>
												<ChevronDown
													className={`w-4 h-4 transition-transform ${
														activeDropdown === link.label ? 'rotate-180' : ''
													}`}
												/>
											</button>
											{activeDropdown === link.label && (
												<div className="pl-4 space-y-1 mt-1">
													{link.dropdownItems?.map((item) => (
														<Link
															key={item.label}
															to={item.href}
															onClick={() => setIsMobileMenuOpen(false)}
															className="block py-2 text-sm text-gray-600 hover:text-[#1e3a8a] transition-colors"
														>
															{item.label}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											to={link.href || '#'}
											onClick={() => setIsMobileMenuOpen(false)}
											className="block py-2 text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
										>
											{link.label}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</nav>
		</>
	);
}

// import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronDown, Search } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/logo_bhoj.png';

// interface NavLink {
// 	label: string;
// 	href?: string;
// 	hasDropdown?: boolean;
// 	dropdownItems?: { label: string; href: string }[];
// }

// const navLinks: NavLink[] = [
// 	{
// 		label: 'Home',
// 		href: '/',
// 		hasDropdown: false,
// 	},
// 	{
// 		label: 'About Us',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Overview', href: '/about' },
// 			{ label: 'Mission & Vision', href: '/vision-mission' },
// 			{ label: 'Values', href: '/values' },
// 			{ label: 'Accreditations', href: '/about/accreditations' },
// 		],
// 	},
// 	{
// 		label: 'Academic',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Programs', href: '/academics' },
// 			{ label: 'Departments', href: '/academics/departments' },
// 			{ label: 'Faculty', href: '/academics/faculty' },
// 			{ label: 'Academic Calendar', href: '/academics/calendar' },
// 		],
// 	},
// 	{
// 		label: 'Examinations',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Exam Schedule', href: '/examinations/schedule' },
// 			{ label: 'Results', href: '/examinations/results' },
// 			{ label: 'Exam Guidelines', href: '/examinations/guidelines' },
// 		],
// 	},
// 	{
// 		label: 'R&D Activities',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Research Projects', href: '/research/projects' },
// 			{ label: 'Publications', href: '/research/publications' },
// 			{ label: 'Innovation', href: '/research/innovation' },
// 		],
// 	},
// 	{
// 		label: 'Research Section',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Research Centers', href: '/research-section/centers' },
// 			{ label: 'PhD Programs', href: '/research-section/phd' },
// 			{ label: 'Collaborations', href: '/research-section/collaborations' },
// 		],
// 	},
// 	{
// 		label: 'Admissions',
// 		hasDropdown: true,
// 		dropdownItems: [
// 			{ label: 'Admission Form', href: '/admission-form' },
// 			{ label: 'Admission Process', href: '/admission/process' },
// 			{ label: 'Eligibility', href: '/admission/eligibility' },
// 			{ label: 'Fee Structure', href: '/admission/fees' },
// 		],
// 	},
// 	{
// 		label: 'Careers',
// 		href: '/careers',
// 	},
// 	{
// 		label: 'Placements',
// 		href: '/placements',
// 	},
// 	{
// 		label: 'Contact Us',
// 		href: '/contact',
// 	},
// ];

// export default function Header() {
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// 	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// 	const [isScrolled, setIsScrolled] = useState(false);
// 	const [fontSize, setFontSize] = useState(16);
// 	const [searchQuery, setSearchQuery] = useState('');

// 	const handleLogoClick = () => {
// 		window.scrollTo({
// 			top: 0,
// 			behavior: 'smooth',
// 		});
// 	};

// 	const increaseFontSize = () => {
// 		setFontSize((prev) => Math.min(prev + 2, 24));
// 	};

// 	const decreaseFontSize = () => {
// 		setFontSize((prev) => Math.max(prev - 2, 12));
// 	};

// 	const resetFontSize = () => {
// 		setFontSize(16);
// 	};

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setIsScrolled(window.scrollY > 50);
// 		};
// 		window.addEventListener('scroll', handleScroll);
// 		return () => window.removeEventListener('scroll', handleScroll);
// 	}, []);

// 	useEffect(() => {
// 		document.documentElement.style.fontSize = `${fontSize}px`;
// 	}, [fontSize]);

// 	return (
// 		<nav
// 			className={`fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${
// 				isScrolled ? 'shadow-lg' : ''
// 			}`}
// 		>
// 			{/* Top Utility Bar */}
// 			<div className="bg-[#B8860B] text-white">
// 				<div className="max-w-full mx-auto px-2 sm:px-4 lg:px-16">
// 					<div className="flex justify-between items-center h-10 sm:h-12 text-xs sm:text-sm">
// 						{/* Left Side - Accessibility Links */}
// 						<div className="flex items-center space-x-1 sm:space-x-4">
// 							<button className="hover:underline border-r border-[#A0750A] pr-1 sm:pr-4 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
// 								<span className="hidden sm:inline">Screen Reader Access</span>
// 								<span className="sm:hidden">Reader</span>
// 							</button>
// 							<button className="hover:underline text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
// 								<span className="hidden sm:inline">Skip To Main Content</span>
// 								<span className="sm:hidden">Skip</span>
// 							</button>
// 						</div>

// 						{/* Center - Search Bar */}
// 						<div className="hidden md:flex items-center">
// 							<div className="relative">
// 								<input
// 									type="text"
// 									placeholder="Search..."
// 									value={searchQuery}
// 									onChange={(e) => setSearchQuery(e.target.value)}
// 									className="px-4 py-1.5 pr-10 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-white w-48 lg:w-64"
// 								/>
// 								<button className="absolute right-0 top-0 bottom-0 px-3 bg-white hover:bg-gray-100 rounded-r">
// 									<Search className="w-4 h-4 text-gray-700" />
// 								</button>
// 							</div>
// 						</div>

// 						{/* Right Side - Language & Font Controls */}
// 						<div className="flex items-center space-x-1 sm:space-x-2">
// 							<select className="bg-white text-gray-700 px-1 sm:px-3 py-1 sm:py-1.5 rounded text-[10px] sm:text-sm focus:outline-none border-r border-[#A0750A] pr-2 sm:pr-4">
// 								<option>Lang</option>
// 								<option>English</option>
// 								<option>हिंदी</option>
// 							</select>
// 							<button
// 								onClick={increaseFontSize}
// 								className="px-1 sm:px-2 py-1 hover:bg-[#A0750A] rounded border-r border-[#A0750A] text-[10px] sm:text-sm"
// 								title="Increase font size"
// 							>
// 								+A
// 							</button>
// 							<button
// 								onClick={resetFontSize}
// 								className="px-1 sm:px-2 py-1 hover:bg-[#A0750A] rounded border-r border-[#A0750A] text-[10px] sm:text-sm"
// 								title="Reset font size"
// 							>
// 								A
// 							</button>
// 							<button
// 								onClick={decreaseFontSize}
// 								className="px-1 sm:px-2 py-1 hover:bg-[#A0750A] rounded text-[10px] sm:text-sm"
// 								title="Decrease font size"
// 							>
// 								-A
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Middle Section - Logo and Branding */}
// 			<div className="bg-white">
// 				<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
// 					<div className="flex justify-between items-center py-4">
// 						{/* Left - Logos */}
// 						<div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
// 							{/* NAAC Badge */}
// 							{/* <div className="flex-shrink-0">
// 								<img
// 									src={naac}
// 									alt="NAAC A Grade"
// 									className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
// 								/>
// 							</div> */}

// 							{/* University Logo */}
// 							<Link to="/" onClick={handleLogoClick} className="flex items-center">
// 								<div className="flex-shrink-0">
// 									<img src={logo} alt="BHOJ University Logo" className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain" />
// 								</div>
// 							</Link>

// 							{/* University Name */}
// 							<div className="hidden lg:block">
// 								<h1 className="text-2xl font-bold text-[#1e3a8a]">
// 									Madhya Pradesh Bhoj (Open) University
// 								</h1>
// 								<p className="text-sm text-purple-600 italic">
// 									(Established Under an Act of State Assembly in 1991)
// 								</p>
// 								<p className="text-lg text-[#B8860B] font-semibold">
// 									मध्य प्रदेश भोज (मुक्त) विश्वविद्यालय
// 								</p>
// 							</div>
// 						</div>

// 						{/* Right - Action Buttons */}
// 						<div className="hidden lg:flex items-center space-x-3">
// 							<button className="bg-[#B8860B] hover:bg-[#A0750A] text-white px-6 py-2 rounded-full font-medium transition-colors">
// 								Results
// 							</button>
// 							<button className="bg-[#B8860B] hover:bg-[#A0750A] text-white px-6 py-2 rounded-full font-medium transition-colors">
// 								UGC DEB
// 							</button>
// 							<button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-2 rounded-full font-medium transition-colors">
// 								Online Admission
// 							</button>
// 							<button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-2 rounded-full font-medium transition-colors">
// 								AICTE
// 							</button>
// 							{/* Statue Image */}
// 							{/* <div className="ml-4">
// 								<img
// 									src={statue}
// 									alt="Statue"
// 									className="h-20 w-16 object-cover rounded"
// 								/>
// 							</div> */}
// 						</div>

// 						{/* Mobile Menu Button */}
// 						<button
// 							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// 							className="lg:hidden p-2 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors"
// 						>
// 							{isMobileMenuOpen ? (
// 								<X className="w-6 h-6 text-white" />
// 							) : (
// 								<Menu className="w-6 h-6 text-white" />
// 							)}
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom Navigation Bar */}
// 			<div className="bg-[#1e3a8a]">
// 				<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
// 					<div className="hidden lg:flex items-center justify-between">
// 						{navLinks.map((link) => (
// 							<div
// 								key={link.label}
// 								className="relative group"
// 								onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
// 								onMouseLeave={() => setActiveDropdown(null)}
// 							>
// 								{link.hasDropdown ? (
// 									<>
// 										<button className="text-white hover:bg-[#2563eb] px-4 py-4 font-medium transition-colors flex items-center space-x-1 text-sm uppercase tracking-wide">
// 											<span>{link.label}</span>
// 											<ChevronDown className="w-4 h-4" />
// 										</button>

// 										{/* Dropdown Menu */}
// 										{activeDropdown === link.label && (
// 											<div className="absolute top-full left-0 pt-0 w-56 z-50">
// 												<div className="bg-white text-black rounded-md shadow-lg py-2">
// 													{link.dropdownItems?.map((item) => (
// 														<Link
// 															key={item.label}
// 															to={item.href}
// 															className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors"
// 														>
// 															{item.label}
// 														</Link>
// 													))}
// 												</div>
// 											</div>
// 										)}
// 									</>
// 								) : (
// 									<Link
// 										to={link.href || '#'}
// 										className="text-white hover:bg-[#2563eb] px-4 py-4 font-medium transition-colors block text-sm uppercase tracking-wide"
// 									>
// 										{link.label}
// 									</Link>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>

// 			{/* Mobile Menu */}
// 			{isMobileMenuOpen && (
// 				<div className="lg:hidden bg-white border-t max-h-[calc(100vh-12rem)] overflow-y-auto shadow-lg">
// 					{/* Mobile Search */}
// 					<div className="px-4 py-3 bg-gray-50 border-b">
// 						<div className="relative">
// 							<input
// 								type="text"
// 								placeholder="Search..."
// 								value={searchQuery}
// 								onChange={(e) => setSearchQuery(e.target.value)}
// 								className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
// 							/>
// 							<button className="absolute right-0 top-0 bottom-0 px-3 hover:bg-gray-100 rounded-r">
// 								<Search className="w-4 h-4 text-gray-700" />
// 							</button>
// 						</div>
// 					</div>

// 					{/* Mobile Action Buttons */}
// 					<div className="px-4 py-3 bg-gray-50 border-b grid grid-cols-2 gap-2">
// 						<button className="bg-[#B8860B] hover:bg-[#A0750A] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
// 							Results
// 						</button>
// 						<button className="bg-[#B8860B] hover:bg-[#A0750A] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
// 							UGC DEB
// 						</button>
// 						<button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
// 							Online Admission
// 						</button>
// 						<button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
// 							AICTE
// 						</button>
// 					</div>

// 					{/* Mobile Navigation Links */}
// 					<div className="px-4 py-4 space-y-2">
// 						{navLinks.map((link) => (
// 							<div key={link.label}>
// 								{link.hasDropdown ? (
// 									<div>
// 										<button
// 											onClick={() =>
// 												setActiveDropdown(activeDropdown === link.label ? null : link.label)
// 											}
// 											className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
// 										>
// 											<span>{link.label}</span>
// 											<ChevronDown
// 												className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
// 											/>
// 										</button>

// 										{activeDropdown === link.label && (
// 											<div className="pl-4 space-y-1 mt-1">
// 												{link.dropdownItems?.map((item) => (
// 													<Link
// 														key={item.label}
// 														to={item.href}
// 														onClick={() => setIsMobileMenuOpen(false)}
// 														className="block py-2 text-sm text-gray-600 hover:text-[#1e3a8a] transition-colors"
// 													>
// 														{item.label}
// 													</Link>
// 												))}
// 											</div>
// 										)}
// 									</div>
// 								) : (
// 									<Link
// 										to={link.href || '#'}
// 										onClick={() => setIsMobileMenuOpen(false)}
// 										className="block py-2 text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors"
// 									>
// 										{link.label}
// 									</Link>
// 								)}
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			)}
// 		</nav>
// 	);
// }
