import React from 'react';
import { Activity, ArrowUp } from 'lucide-react';

interface FooterProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market & Pricing', href: '#market-pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-top-row">
          {/* Brand Wordmark & Descriptor */}
          <div className="footer-brand-col">
            <a href="#home" className="brand-logo" aria-label="CapaTrace Home">
              <div className="brand-icon-wrapper" aria-hidden="true">
                <Activity className="brand-icon" size={20} />
              </div>
              <span className="brand-text">
                Capa<span className="brand-accent">Trace</span>
              </span>
            </a>
            <p className="footer-descriptor">Job-matched functional capacity evaluation</p>
            <p className="footer-planning-summary">
              A proposed UK functional capacity evaluation service combining instrumented testing, job-demand
              profiling and registered clinician interpretation to support return-to-work decisions.
            </p>
          </div>

          {/* Quick Real Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot CTA Column */}
          <div className="footer-cta-col">
            <h4 className="footer-heading">Pilot Registration</h4>
            <p className="footer-cta-desc">
              Register interest in early-access hub evaluations, clinical accreditation or partner licensing.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              Request a Pilot
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-row">
          <div className="footer-disclaimer">
            <p>
              &copy; CapaTrace. Proposed UK functional capacity evaluation service. All technical specifications,
              West Midlands hub location, and delivery models reflect business planning assumptions subject to formal
              clinical validation.
            </p>
          </div>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
