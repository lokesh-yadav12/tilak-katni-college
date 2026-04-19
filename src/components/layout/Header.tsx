import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tilaklogo1.png';
export interface NavLink {
	label: string;
	href?: string;
	hasDropdown?: boolean;
	dropdownItems?: NavLink[];
	subItems?: NavLink[];
}

// Add this component ABOVE your Header function
const DropdownItem = ({ item, level = 0 }: { item: NavLink; level?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={item.href || '#'}
        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors gap-4"
        style={{ whiteSpace: level === 0 ? 'nowrap' : 'normal' }}
      >
        {item.label}
        {item.subItems && item.subItems.length > 0 && (
          <ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0 text-gray-400" />
        )}
      </Link>

      {isHovered && item.subItems && item.subItems.length > 0 && (
        <>
          {/* Invisible bridge to fill the gap */}
          <div className="absolute top-0 left-full w-2 h-full z-40" />

          <div
            className="absolute top-0 left-full ml-2 bg-white rounded-md shadow-lg py-2 z-50"
            style={{ minWidth: '220px', maxWidth: '320px', width: 'max-content' }}
          >
            {item.subItems.map((sub) => (
              <DropdownItem key={sub.label} item={sub} level={level + 1} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// const DropdownItem = ({ item, level = 0 }: { item: NavLink; level?: number }) => {
// 	const [isHovered, setIsHovered] = useState(false);

// 	return (
// 		<div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
// 			<Link
// 				to={item.href || '#'}
// 				className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] transition-colors whitespace-nowrap gap-4"
// 			>
// 				{item.label}
// 				{item.subItems && item.subItems.length > 0 && (
// 					<ChevronDown className="w-3 h-3 -rotate-90 flex-shrink-0 text-gray-400" />
// 				)}
// 			</Link>

// 			{isHovered && item.subItems && item.subItems.length > 0 && (
// 				<>
// 					{/* Invisible bridge to fill the gap so mouse doesn't leave */}
// 					<div className="absolute top-0 left-full w-2 h-full z-40" />

// 					<div className="absolute top-0 left-full ml-2 bg-white rounded-md shadow-lg py-2 z-50 min-w-[200px]">
// 						{item.subItems.map((sub) => (
// 							<DropdownItem key={sub.label} item={sub} level={level + 1} />
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// };

const navLinks: NavLink[] = [
	{ label: 'Home', href: '/', hasDropdown: false },
	{
		label: 'College',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Mission & Vision', href: '/vision-mission' },
			{ label: 'Academic Calendar', href: '/academic-calendar' },
			{ label: 'Stars', href: '/stars' },
			{ label: 'Library', href: '/library' },
			{ label: 'GTC at a Glance', href: '/gtc-at-a-glance' },
			{ label: 'IQAC', href: '/iqac' },
		],
	},

	{
		label: 'Programmes',
		hasDropdown: true,
		dropdownItems: [
			{
				label: 'UG',
				href: '/programmes/ug',
				subItems: [
					{
						label: 'Bachelor of Science (B.Sc.)',
						href: '/programmes/ug/bsc',
						subItems: [
							{ label: 'CBZ', href: '/programmes/ug/bsc/cbz' },
							{ label: 'Plain', href: '/programmes/ug/bsc/plain' },
							
						],
					},
					{
						label: 'Bachelor of Commerce (B.Com)',
						href: '/programmes/ug/bcom',
						// subItems: [
						// 	{ label: 'Plain', href: '/programmes/ug/bcom/plain' },
						// 	{ label: 'Computer Applications', href: '/programmes/ug/bcom/ca' },
						// ],
					},
					{
						label: 'Bachelor of Arts (B.A.)',
						href: '/programmes/ug/ba',
						// subItems: [
						// 	{ label: 'History', href: '/programmes/ug/ba/history' },
						// 	{ label: 'Economics', href: '/programmes/ug/ba/economics' },
						// ],
					},
				],
			},
			{
				label: 'PG',
				href: '/programmes/pg',
				subItems: [
					{
						label: 'Master of Science (M.Sc.)',
						href: '/programmes/pg/msc',
						subItems: [
							{ label: 'Mathematics', href: '/programmes/pg/msc/mathematics' },
							{ label: 'Physics', href: '/programmes/pg/msc/physics' },
							{ label: 'Chemistry', href: '/programmes/pg/msc/chemistry' },
							{ label: 'Botany', href: '/programmes/pg/msc/botany' },
							{ label: 'Zoology', href: '/programmes/pg/msc/zoology' },
						],
					},
					{
						label: 'Master of Commerce (M.Com)',
						href: '/programmes/pg/mcom',
						subItems: [
							{ label: 'Commerce', href: '/programmes/pg/mcom/commerce' },
							// { label: 'Finance', href: '/programmes/pg/mcom/finance' },
						],
					},
					{
						label: 'Master of Arts (M.A.)',
						href: '/programmes/pg/ma',
						subItems: [
							{ label: 'Sociology', href: '/programmes/pg/ma/sociology' },
							{ label: 'Hindi', href: '/programmes/pg/ma/hindi' },
							{ label: 'English', href: '/programmes/pg/ma/english' },
							{ label: 'Political Science', href: '/programmes/pg/ma/political-science' },
							{ label: 'Economics', href: '/programmes/pg/ma/economics' },
							{ label: 'Geography', href: '/programmes/pg/ma/geography' },
						],
					},
				],
			},
		],
	},

	{
		label: 'Department',
		hasDropdown: true,
		dropdownItems: [
			{
				label: 'Faculty of Arts',
				href: '/department/arts',
				subItems: [
					{
						label: 'Department of Sanskrit',
						href: '/department/arts/sanskrit',
						
					},
					{
						label: 'Department of Physical Education & sports',
						href: '/department/arts/physical-education',
						
					},
					{
						label: 'Department of English',
						href: '/department/arts/english',
						
					},
					{
						label: 'Department of Sociology',
						href: '/department/arts/sociology',
					},
					{
						label: 'Department of Geography',
						href: '/department/arts/geography',
						
					},
					{
						label: 'Department of Political Science',
						href: '/department/arts/political-science',
						
					},
					{
						label: 'Department of History',
						href: '/department/arts/history',
						
					},
					{
						label: 'Department of Hindi',
						href: '/department/arts/hindi',
						
					},
					{
						label: 'Department of Economics',
						href: '/department/arts/economics',
						
					},
				],
			},

			{
				label: 'Faculty of Science',
				href: '/department/science',
				subItems: [
					{
						label: 'Department of computer science',
						href: '/department/science/computer-science',
						
					},
					{
						label: 'Department of Biotechnology',
						href: '/department/science/biotechnology',
						
					},
					{
						label: 'Department of Geology',
						href: '/department/science/geology',
						
					},
					{
						label: 'Department of physics',
						href: '/department/science/physics',
					},
					{
						label: 'Department of Mathematics',
						href: '/department/science/mathematics',
						
					},
					{
						label: 'Department of Chemistry',
						href: '/department/science/chemistry',
						
					},
					{
						label: 'Department of Botany',
						href: '/department/science/botany',
						
					},
					{
						label: 'Department of Zoology',
						href: '/department/science/zoology',
						
					},
					
				],
			},

			{
				label: 'Faculty of Commerce',
				href: '/department/commerce',
				subItems: [
					{
						label: 'Department of computer Applications',
						href: '/department/commerce/computer-applications',
						
					},
					{
						label: 'Department of Commerce',
						href: '/department/commerce/commerce',
						
					},
					
					
				],
			},
		],
	},

	{
		label: 'Support Services',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Swami Vivekananda career Guidance cell', href: '/support/career-guidance' },
			{ label: 'Club', href: '/support/club' },
			{ label: 'Hostel', href: '/support/hostel' },
			
		],
	},
	{ label: 'Staff', href: '/staff' },
	{ label: 'Research', href: '/research' },
	{
		label: 'Committee',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Entrepreneurship Development committee', href: '/committee/entrepreneurship' },
			{ label: 'Grievance redressal cell', href: '/committee/grievance' },
			{ label: 'Planning Committee', href: '/committee/planning' },
			{ label: 'Internal complaint committee', href: '/committee/internal-complaint' },
			{ label: 'statutory committee', href: '/committee/statutory' },
			{ label: 'Anti ragging committee', href: '/committee/anti-ragging' },
		],
	},
	{
		label: 'Curriculum Activity',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'NSS', href: '/activity/nss' },
			{ label: 'Sports ', href: '/activity/sports' },
			{ label: 'NCC', href: '/activity/ncc' },
		
		],
	},
	{
		label: 'Study Center',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'BHOJ', href: '/study-center/bhoj' },
			{ label: 'IGNOU', href: '/study-center/ignou' },
			
		],
	},
	{
		label: 'Gallery',
		hasDropdown: true,
		dropdownItems: [
			{ label: 'Photo Gallery', href: '/gallery/photos' },
			{ label: 'Media Gallery', href: '/gallery/media' },
			{ label: 'Video Gallery', href: '/gallery/videos' },

		],
	},
	{ label: 'Student Corner', href: '/student-corner' },
];

const announcements = [
	'🎓 Admissions Open for 2025-26 — Apply Now!',
	'📢 Exam Schedule for Semester IV Released — Check Now',
	'🏆 Tilak College ranked among Top 50 Colleges in MP',
	'📋 Last Date for Scholarship Applications: 30th April 2025',
	'🔬 New Research Lab Inauguration on 20th May 2025',
	'📌 Guest Lecture Series by Industry Experts — Register Today',
	'🎉 Annual Cultural Fest "Utsav 2025" — 15th to 17th May',
];

// const quickLinks: {
// 	label: string;
// 	href: string;
// 	icon: React.ReactNode;
// 	color: string;
// 	bg: string;
// }[] = [
// 	{
// 		label: 'World Bank',
// 		href: '/world-bank',
// 		color: '#1e3a8a',
// 		bg: '#EFF6FF',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<circle cx="12" cy="12" r="10" />
// 				<line x1="2" y1="12" x2="22" y2="12" />
// 				<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'RTI',
// 		href: '/rti',
// 		color: '#7C3AED',
// 		bg: '#F3EFFE',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
// 				<polyline points="14 2 14 8 20 8" />
// 				<line x1="9" y1="13" x2="15" y2="13" />
// 				<line x1="9" y1="17" x2="15" y2="17" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'AISE Portal',
// 		href: '/aise-portal',
// 		color: '#B45309',
// 		bg: '#FFFBEB',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<rect x="2" y="3" width="20" height="14" rx="2" />
// 				<line x1="8" y1="21" x2="16" y2="21" />
// 				<line x1="12" y1="17" x2="12" y2="21" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'Janbhagidari',
// 		href: '/janbhagidari',
// 		color: '#065F46',
// 		bg: '#ECFDF5',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
// 				<circle cx="9" cy="7" r="4" />
// 				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
// 				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'Tender',
// 		href: '/tender',
// 		color: '#9D174D',
// 		bg: '#FDF2F8',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<polyline points="9 11 12 14 22 4" />
// 				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'Recruitment',
// 		href: '/recruitment',
// 		color: '#1D4ED8',
// 		bg: '#EFF6FF',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<rect x="2" y="7" width="20" height="14" rx="2" />
// 				<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
// 				<line x1="12" y1="12" x2="12" y2="16" />
// 				<line x1="10" y1="14" x2="14" y2="14" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'Scholarships',
// 		href: '/scholarships',
// 		color: '#B45309',
// 		bg: '#FFFBEB',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'Alumni',
// 		href: '/alumni',
// 		color: '#065F46',
// 		bg: '#ECFDF5',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
// 				<path d="M6 12v5c3 3 9 3 12 0v-5" />
// 			</svg>
// 		),
// 	},
// 	{
// 		label: 'MOUs',
// 		href: '/mous',
// 		color: '#7C3AED',
// 		bg: '#F3EFFE',
// 		icon: (
// 			<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
// 				<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
// 				<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
// 			</svg>
// 		),
// 	},
// ];

// Social media links
const socialLinks = [
	{
		label: 'Facebook',
		href: 'https://facebook.com',
		icon: (
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com',
		icon: (
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
				<rect x="2" y="9" width="4" height="12" />
				<circle cx="4" cy="4" r="2" />
			</svg>
		),
	},
	{
		label: 'Twitter',
		href: 'https://twitter.com',
		icon: (
			<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
				<path
					d="M4 4l16 16M4 20L20 4"
					stroke="currentColor"
					strokeWidth="2.2"
					strokeLinecap="round"
					fill="none"
				/>
			</svg>
		),
	},
	{
		label: 'Instagram',
		href: 'https://instagram.com',
		icon: (
			<svg
				viewBox="0 0 24 24"
				width="18"
				height="18"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
			</svg>
		),
	},
];

export default function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
	const panelRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const handleLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				panelRef.current &&
				!panelRef.current.contains(e.target as Node) &&
				triggerRef.current &&
				!triggerRef.current.contains(e.target as Node)
			) {
				setIsQuickLinksOpen(false);
			}
		};
		if (isQuickLinksOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isQuickLinksOpen]);

	// Calculate nav height for the spacer
	// ticker ~48px + logo row ~72px + nav bar ~44px = ~164px
	// On mobile without bottom nav bar: ticker ~48px + logo row ~60px = ~108px

	const tickerText = announcements.join('     ●     ');

	return (
		<>
			<style>{`
				@keyframes ticker-scroll {
					0% { transform: translateX(0%); }
					100% { transform: translateX(-50%); }
				}
				.ticker-container { overflow: hidden; position: relative; width: 100%; }
				.ticker-track {
					display: inline-flex;
					white-space: nowrap;
					animation: ticker-scroll 60s linear infinite;
					will-change: transform;
				}
				.ticker-track:hover { animation-play-state: paused; }
				.ticker-item { display: inline-block; padding-right: 100px; }

				/* Quick links panel */
				.ql-panel {
					position: absolute;
					top: calc(100% + 10px);
					right: 0;
					width: 280px;
					background: #fff;
					border-radius: 16px;
					border: 1px solid rgba(30,58,138,0.1);
					box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
					overflow: hidden;
					z-index: 100;
					transform-origin: top right;
					transform: scale(0.92) translateY(-8px);
					opacity: 0;
					pointer-events: none;
					transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1), opacity 0.18s ease;
				}
				.ql-panel.open {
					transform: scale(1) translateY(0);
					opacity: 1;
					pointer-events: all;
				}
				.ql-panel-header {
					background: #1e3a8a;
					padding: 14px 18px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.ql-panel-header h3 {
					color: #fff;
					font-size: 13px;
					font-weight: 600;
					letter-spacing: 0.06em;
					text-transform: uppercase;
					margin: 0;
				}
				.ql-grid {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 0;
				}
				.ql-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 8px;
					padding: 16px 10px 14px;
					text-decoration: none;
					border-right: 0.5px solid #f0f0f0;
					border-bottom: 0.5px solid #f0f0f0;
					transition: background 0.15s;
					position: relative;
				}
				.ql-item:nth-child(3n) { border-right: none; }
				.ql-item:nth-last-child(-n+3) { border-bottom: none; }
				.ql-item:hover { background: #f8faff; }
				.ql-icon {
					width: 44px;
					height: 44px;
					border-radius: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: transform 0.15s;
				}
				.ql-item:hover .ql-icon { transform: translateY(-2px); }
				.ql-label {
					font-size: 10.5px;
					font-weight: 600;
					text-align: center;
					line-height: 1.3;
					color: #374151;
				}

				/* Quick Links trigger button */
				.ql-trigger {
					display: flex;
					align-items: center;
					gap: 8px;
					padding: 8px 14px;
					background: rgba(255,255,255,0.1);
					border: 1px solid rgba(255,255,255,0.2);
					border-radius: 10px;
					color: #fff;
					font-size: 13px;
					font-weight: 500;
					cursor: pointer;
					transition: background 0.15s, border-color 0.15s;
					position: relative;
				}
				.ql-trigger:hover { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.35); }
				.ql-trigger.active { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.4); }
				.ql-trigger-dots {
					display: flex;
					flex-direction: column;
					gap: 3.5px;
				}
				.ql-trigger-dots span {
					display: block;
					width: 18px;
					height: 2px;
					background: #fff;
					border-radius: 2px;
					transition: width 0.2s;
				}
				.ql-trigger.active .ql-trigger-dots span:nth-child(1) { width: 14px; }
				.ql-trigger.active .ql-trigger-dots span:nth-child(3) { width: 14px; }

				/* Social icons */
				.social-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 34px;
					height: 34px;
					border-radius: 8px;
					color: #1e3a8a;
					background: #EFF6FF;
					border: 1px solid #BFDBFE;
					transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.15s;
					text-decoration: none;
					flex-shrink: 0;
				}
				.social-icon:hover {
					background: #1e3a8a;
					color: #fff;
					border-color: #1e3a8a;
					transform: translateY(-2px);
				}

				/* Mobile menu improvements */
				.mobile-nav-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					padding: 11px 12px;
					border-radius: 8px;
					color: #374151;
					font-size: 14px;
					font-weight: 500;
					background: none;
					border: none;
					cursor: pointer;
					transition: background 0.15s, color 0.15s;
					text-align: left;
				}
				.mobile-nav-item:hover, .mobile-nav-item:active {
					background: #EFF6FF;
					color: #1e3a8a;
				}
				.mobile-nav-sub-item {
					display: block;
					padding: 9px 12px;
					border-radius: 8px;
					color: #6B7280;
					font-size: 13px;
					text-decoration: none;
					transition: background 0.15s, color 0.15s;
				}
				.mobile-nav-sub-item:hover {
					background: #EFF6FF;
					color: #1e3a8a;
				}
			`}</style>

			{/* Fixed nav */}
			<nav
				className={`fixed top-0 left-0 right-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
			>
				{/* ── TOP ANNOUNCEMENT TICKER ── */}
				<div className="bg-[#1e3a8a] text-white">
					<div className="max-w-full mx-auto px-4 lg:px-16">
						<div className="flex items-center h-10 sm:h-12 gap-3 overflow-hidden">
							<span className="bg-white text-[#B8860B] font-bold text-sm px-3 py-1 rounded flex-shrink-0 uppercase tracking-wide">
								📣 News
							</span>
							<div className="ticker-container flex-1">
								<div className="ticker-track">
									<span className="ticker-item text-sm lg:text-base font-semibold text-white">
										{tickerText}
									</span>
									<span className="ticker-item text-sm lg:text-base font-semibold text-white">
										{tickerText}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── MIDDLE — Logo + Social Icons + Quick Links trigger ── */}
				<div className="bg-white border-b border-gray-100">
					<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
						<div className="flex items-center justify-between py-2 sm:py-3 gap-4">
							{/* Logo */}
							<div className="flex items-center flex-shrink-0">
								<Link to="/" onClick={handleLogoClick}>
									<img
										src={logo}
										className="w-full max-w-[200px] sm:max-w-[420px] h-auto object-contain block"
										alt="Tilak College Logo"
									/>
								</Link>
							</div>

							{/* Right side */}
							<div className="flex items-center gap-4">
								{/* Social Icons — desktop only */}
								<div className="hidden lg:flex items-center gap-2">
									{socialLinks.map((s) => (
										<a
											key={s.label}
											href={s.href}
											target="_blank"
											rel="noopener noreferrer"
											className="social-icon"
											title={s.label}
										>
											{s.icon}
										</a>
									))}
								</div>

								{/* Divider */}
								<div className="hidden lg:block w-px h-8 bg-gray-200" />

								{/* Quick Links trigger — desktop only */}
								{/* <div className="hidden lg:block relative">
									<button
										ref={triggerRef}
										onClick={() => setIsQuickLinksOpen((p) => !p)}
										className={`ql-trigger ${isQuickLinksOpen ? 'active' : ''}`}
										style={{ background: '#1e3a8a' }}
									>
										<div className="ql-trigger-dots">
											<span />
											<span />
											<span />
										</div>
										<span>Quick Links</span>
									</button>

									
									<div ref={panelRef} className={`ql-panel ${isQuickLinksOpen ? 'open' : ''}`}>
										<div className="ql-panel-header">
											<h3>Quick Links</h3>
											<button
												onClick={() => setIsQuickLinksOpen(false)}
												style={{ background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '6px', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px' }}
											>
												✕
											</button>
										</div>
										<div className="ql-grid">
											{quickLinks.map((ql) => (
												<Link
													key={ql.label}
													to={ql.href}
													className="ql-item"
													onClick={() => setIsQuickLinksOpen(false)}
												>
													<div className="ql-icon" style={{ background: ql.bg, color: ql.color }}>
														{ql.icon}
													</div>
													<span className="ql-label">{ql.label}</span>
												</Link>
											))}
										</div>
									</div>
								</div> */}

								{/* Mobile hamburger */}
								<button
									onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
									className="lg:hidden p-2 mr-4 rounded-lg bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors"
									aria-label="Toggle menu"
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
				</div>

				{/* ── BOTTOM NAV BAR — desktop only ── */}
				<div className="hidden lg:block bg-[#1e3a8a]">
					<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
						<div className="flex items-center justify-between">
							{navLinks.map((link) => (
								<div
									key={link.label}
									className="relative group"
									onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
									onMouseLeave={() => setActiveDropdown(null)}
								>
									{link.hasDropdown ? (
										<>
											<button className="text-white hover:bg-[#2563eb] px-2 py-4 font-medium transition-colors flex items-center gap-0.5 text-xs uppercase tracking-wide">
												<span>{link.label}</span>
												<ChevronDown className="w-3.5 h-3.5" />
											</button>
											{activeDropdown === link.label && (
												<div className="absolute top-full left-0 pt-0  z-50"
												 style={{ minWidth: '200px', maxWidth: '320px', width: 'max-content' }}>
													<div className="bg-white rounded-md shadow-lg py-2">
														{link.dropdownItems?.map((item) => (
															<DropdownItem key={item.label} item={item} /> // ✅ uses recursive component
														))}
													</div>
												</div>
											)}
										</>
									) : (
										<Link
											to={link.href || '#'}
											className="text-white hover:bg-[#2563eb] px-2 py-4 font-medium transition-colors block text-xs uppercase tracking-wide"
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
					<div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-108px)] overflow-y-clip">
						{/* Mobile Quick Links grid */}
						{/* <div className="px-4 pt-4 pb-3 border-b border-gray-100 bg-gray-50">
							<p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">Quick Links</p>
							<div className="grid grid-cols-3 gap-2">
								{quickLinks.map((ql) => (
									<Link
										key={ql.label}
										to={ql.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white border border-gray-100 active:bg-blue-50 transition-colors"
									>
										<div
											className="w-9 h-9 rounded-xl flex items-center justify-center"
											style={{ background: ql.bg, color: ql.color }}
										>
											{ql.icon}
										</div>
										<span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">{ql.label}</span>
									</Link>
								))}
							</div>
						</div> */}

						{/* Mobile Social Icons */}
						<div className="px-4 py-3 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
							<span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mr-1">
								Follow Us
							</span>
							{socialLinks.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									className="social-icon"
									title={s.label}
								>
									{s.icon}
								</a>
							))}
						</div>

						{/* Mobile Nav Links */}
						<div className="px-3 py-3 space-y-0.5">
							{navLinks.map((link) => (
								<div key={link.label}>
									{link.hasDropdown ? (
										<div>
											<button
												onClick={() =>
													setActiveDropdown(activeDropdown === link.label ? null : link.label)
												}
												className="mobile-nav-item"
											>
												<span>{link.label}</span>
												<ChevronDown
													className="w-4 h-4 transition-transform flex-shrink-0"
													style={{
														transform:
															activeDropdown === link.label
																? 'rotate(180deg)'
																: 'rotate(0deg)',
													}}
												/>
											</button>
											{activeDropdown === link.label && (
												<div className="pl-3 pt-0.5 pb-1 space-y-0.5">
													{link.dropdownItems?.map((item) => (
														<Link
															key={item.label}
															to={item.href}
															onClick={() => setIsMobileMenuOpen(false)}
															className="mobile-nav-sub-item"
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
											className="mobile-nav-item"
											style={{ display: 'flex' }}
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

			{/*
			  ── NAVBAR SPACER ──
			  Add this right after <Header /> in your layout/page file.
			  Adjust heights to match your actual rendered nav height:
			    Desktop: ticker(48px) + logo row(72px) + nav bar(44px) = 164px
			    Mobile:  ticker(48px) + logo row(60px) = 108px
			*/}
			{/* <div className="lg:h-[164px] h-[108px]" aria-hidden="true" /> */}
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
