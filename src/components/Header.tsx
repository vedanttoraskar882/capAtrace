import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* CapaTrace Wordmark (Clean typographic mark with no icon logo) */}
        <a href="#home" className="brand-logo" aria-label="CapaTrace Home">
          <span className="brand-text">
            Capa<span className="brand-accent">Trace</span>
          </span>
          <span className="brand-tag">PROPOSED UK FCE</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action Button */}
        <div className="header-actions">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(e) => onRequestPilot(e.currentTarget)}
          >
            Request a Pilot
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="mobile-nav-drawer" role="navigation" aria-label="Mobile Navigation">
          <div className="container mobile-nav-content">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="mobile-nav-link" onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-cta">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  onRequestPilot(e.currentTarget);
                }}
              >
                Request a Pilot
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
