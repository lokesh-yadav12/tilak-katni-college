import React, { useState, useEffect } from "react";
import { X, MessageSquare, UserCircle, Phone, Mail, ExternalLink } from "lucide-react";
import AdmissionEnquiry from "@/components/home/AdmissionEnquiry";

const quickLinks = [
  {
    label: "World Bank",
    href: "/world-bank",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
      </svg>
    ),
  },
  {
    label: "RTI",
    href: "/rti",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Janbhagidari",
    href: "/janbhagidari",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Recruitment",
    href: "/recruitment",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    label: "Alumni",
    href: "/alumni",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "MOUs",
    href: "/mous",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const QuickLinksPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setMounted(false), 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`ql-overlay ${isOpen ? "ql-overlay--open" : "ql-overlay--close"}`}
      onClick={onClose}
    >
      <div
        className={`ql-panel ${isOpen ? "ql-panel--open" : "ql-panel--close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative top bar */}
        <div className="ql-header">
          <div className="ql-header-inner">
            <div className="ql-header-ornament" />
            <div>
              <h2 className="ql-title">Quick Links</h2>
              <p className="ql-subtitle">Access important portals instantly</p>
            </div>
            <button className="ql-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Grid of links */}
        <div className="ql-grid">
          {quickLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="ql-item"
              style={{ animationDelay: `${i * 45}ms` }}
              onClick={onClose}
            >
              <div className="ql-item-icon">{link.icon}</div>
              <span className="ql-item-label">{link.label}</span>
              <ExternalLink size={11} className="ql-item-arrow" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="ql-footer">
          <span>© Tilak Government Arts College</span>
        </div>
      </div>
    </div>
  );
};

const FloatingButtons = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* ── PALETTE ── */
        :root {
          --gold: #e5be10;
          --gold-deep: #c9a800;
          --brown: #753300;
          --brown-light: #9a4a10;
          --cream: #fdf8ee;
          --cream-dark: #f5edcf;
          --text-on-gold: #3a1a00;
        }

        /* ── OVERLAY ── */
        .ql-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .ql-overlay--open {
          background: rgba(60, 20, 0, 0.55);
          backdrop-filter: blur(8px);
        }
        .ql-overlay--close {
          background: rgba(60, 20, 0, 0);
          backdrop-filter: blur(0px);
          pointer-events: none;
        }

        /* ── PANEL ── */
        .ql-panel {
          width: 100%;
          max-width: 540px;
          background: var(--cream);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(117, 51, 0, 0.35),
            0 0 0 1px rgba(229, 190, 16, 0.3);
          transform-origin: center bottom;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
        }
        .ql-panel--open {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        .ql-panel--close {
          transform: scale(0.88) translateY(40px);
          opacity: 0;
        }

        /* ── HEADER ── */
        .ql-header {
          background: linear-gradient(135deg, var(--brown) 0%, var(--brown-light) 60%, #b36000 100%);
          padding: 20px 24px 18px;
          position: relative;
          overflow: hidden;
        }
        .ql-header::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 120px; height: 120px;
          background: rgba(229, 190, 16, 0.12);
          border-radius: 50%;
        }
        .ql-header::after {
          content: '';
          position: absolute;
          bottom: -20px; left: 40px;
          width: 80px; height: 80px;
          background: rgba(229, 190, 16, 0.08);
          border-radius: 50%;
        }
        .ql-header-inner {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          z-index: 1;
        }
        .ql-header-ornament {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--gold), var(--gold-deep));
          border-radius: 12px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(229,190,16,0.4);
          position: relative;
        }
        .ql-header-ornament::before {
          content: '✦';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--brown);
        }
        .ql-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.03em;
          margin: 0 0 2px;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .ql-subtitle {
          font-size: 11px;
          color: rgba(253, 248, 238, 0.7);
          margin: 0;
          letter-spacing: 0.04em;
        }
        .ql-close {
          margin-left: auto;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(229,190,16,0.4);
          background: rgba(229,190,16,0.1);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .ql-close:hover {
          background: rgba(229,190,16,0.25);
          transform: rotate(90deg);
        }

        /* ── GRID ── */
        .ql-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(117, 51, 0, 0.08);
          padding: 0;
        }

        /* ── ITEM ── */
        .ql-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 18px 10px 14px;
          background: var(--cream);
          text-decoration: none;
          position: relative;
          transition: background 0.2s, transform 0.2s;
          animation: ql-pop-in 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
          cursor: pointer;
          overflow: hidden;
        }
        @keyframes ql-pop-in {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ql-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(229,190,16,0.15), rgba(117,51,0,0.06));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .ql-item:hover {
          background: var(--cream-dark);
          transform: translateY(-2px);
        }
        .ql-item:hover::before {
          opacity: 1;
        }
        .ql-item-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #fff8e0, #fdefc0);
          border: 1.5px solid rgba(229,190,16,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brown);
          box-shadow: 0 2px 8px rgba(117,51,0,0.12);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ql-item:hover .ql-item-icon {
          box-shadow: 0 6px 18px rgba(229,190,16,0.35);
          transform: scale(1.08);
        }
        .ql-item-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--brown);
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.02em;
        }
        .ql-item-arrow {
          color: var(--gold-deep);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ql-item:hover .ql-item-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── FOOTER ── */
        .ql-footer {
          background: linear-gradient(90deg, rgba(117,51,0,0.06), rgba(229,190,16,0.08), rgba(117,51,0,0.06));
          border-top: 1px solid rgba(229,190,16,0.2);
          padding: 10px 24px;
          text-align: center;
          font-size: 10px;
          color: rgba(117,51,0,0.5);
          letter-spacing: 0.05em;
        }

        /* ── TRIGGER BUTTON ── */
        .ql-trigger-btn {
          position: relative;
          width: 60px;
          height: 60px;
        }
        .ql-trigger-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: rgba(229, 190, 16, 0.25);
          animation: ql-pulse 2.5s ease-out infinite;
        }
        @keyframes ql-pulse {
          0%   { transform: scale(1); opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .ql-trigger-core {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--brown) 0%, var(--brown-light) 50%, #9a4500 100%);
          border: 3px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          cursor: pointer;
          box-shadow:
            0 8px 24px rgba(117,51,0,0.4),
            0 0 0 0 rgba(229,190,16,0);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s;
        }
        .ql-trigger-core:hover {
          transform: scale(1.1);
          box-shadow:
            0 12px 32px rgba(117,51,0,0.5),
            0 0 0 4px rgba(229,190,16,0.2);
        }
        .ql-trigger-core svg {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .ql-trigger-core.open svg {
          transform: rotate(180deg);
        }
        .ql-tooltip {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);
          background: var(--brown);
          color: var(--gold);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          border: 1px solid rgba(229,190,16,0.3);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          letter-spacing: 0.04em;
        }
        .ql-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: var(--brown);
        }
        .ql-trigger-btn:hover .ql-tooltip {
          opacity: 1;
        }

        /* ── MOBILE BAR ── */
        .mobile-bar {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 40;
          background: linear-gradient(90deg, var(--brown) 0%, #8a3a00 50%, var(--brown) 100%);
          border-top: 2px solid rgba(229,190,16,0.4);
          box-shadow: 0 -4px 20px rgba(117,51,0,0.3);
        }
        .mobile-bar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          padding: 8px 4px;
        }
        .mobile-bar-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 6px 4px;
          border-radius: 12px;
          border: none;
          background: none;
          cursor: pointer;
          transition: background 0.15s;
        }
        .mobile-bar-btn:active { background: rgba(229,190,16,0.15); }
        .mobile-bar-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
          border: 2px solid rgba(229,190,16,0.3);
        }
        .mobile-bar-btn:active .mobile-bar-icon { transform: scale(0.92); }
        .mobile-bar-label {
          font-size: 10px;
          font-weight: 600;
          color: rgba(253,248,238,0.85);
          letter-spacing: 0.03em;
        }

        /* ── MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(60,20,0,0.65);
          backdrop-filter: blur(10px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: fadeIn 0.3s ease;
        }
        .modal-box {
          position: relative;
          width: 100%;
          max-width: 800px;
          animation: scaleIn 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .modal-close-btn {
          position: absolute;
          top: -16px;
          right: -16px;
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--brown), var(--brown-light));
          border: 2.5px solid var(--gold);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(117,51,0,0.4);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .modal-close-btn:hover { transform: rotate(90deg) scale(1.1); }
        .modal-content {
          max-height: 88vh;
          overflow-y: auto;
          border-radius: 20px;
          box-shadow: 0 32px 80px rgba(117,51,0,0.4), 0 0 0 1.5px rgba(229,190,16,0.25);
        }

        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      {/* ── MOBILE BOTTOM BAR ── */}
      <div className="mobile-bar lg:hidden">
        <div className="mobile-bar-grid">
          <button className="mobile-bar-btn" onClick={() => setIsPortalOpen(true)}>
            <div className="mobile-bar-icon" style={{ background: "linear-gradient(135deg, #753300, #9a4a10)" }}>
              <UserCircle size={22} color="#e5be10" />
            </div>
            <span className="mobile-bar-label">Portal</span>
          </button>

          <button className="mobile-bar-btn" onClick={() => setIsEnquiryOpen(true)}>
            <div className="mobile-bar-icon" style={{ background: "linear-gradient(135deg, #7a3800, #b05000)" }}>
              <MessageSquare size={22} color="#e5be10" />
            </div>
            <span className="mobile-bar-label">Enquire</span>
          </button>

          <button className="mobile-bar-btn" onClick={() => (window.location.href = "tel:+911234567890")}>
            <div className="mobile-bar-icon" style={{ background: "linear-gradient(135deg, #5c6800, #8a9600)" }}>
              <Phone size={22} color="#e5be10" />
            </div>
            <span className="mobile-bar-label">Call</span>
          </button>

          <button className="mobile-bar-btn" onClick={() => (window.location.href = "mailto:info@college.ac.in")}>
            <div className="mobile-bar-icon" style={{ background: "linear-gradient(135deg, #753300, #c06800)" }}>
              <Mail size={22} color="#e5be10" />
            </div>
            <span className="mobile-bar-label">Email</span>
          </button>
        </div>
      </div>

      {/* ── DESKTOP FLOATING BUTTON ── */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <div className="ql-trigger-btn">
          {!isMenuOpen && <div className="ql-trigger-ring" />}
          <div
            className={`ql-trigger-core ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setIsMenuOpen(true)}
          >
            {isMenuOpen ? <X size={26} /> : <MessageSquare size={24} />}
          </div>
          {!isMenuOpen && <div className="ql-tooltip">Quick Links</div>}
        </div>
      </div>

      {/* ── QUICK LINKS POPUP (Desktop) ── */}
      <QuickLinksPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ── PORTAL MODAL ── */}
      {isPortalOpen && (
        <div className="modal-overlay" onClick={() => setIsPortalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsPortalOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-content">
              <AdmissionEnquiry onClose={() => setIsPortalOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* ── ENQUIRY MODAL ── */}
      {isEnquiryOpen && (
        <div className="modal-overlay" onClick={() => setIsEnquiryOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsEnquiryOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="modal-content">
              <AdmissionEnquiry onClose={() => setIsEnquiryOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;