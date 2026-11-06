import React from 'react';
import { ArrowDown, Shield, FileCheck2, Cpu, Activity } from 'lucide-react';

interface HeroSectionProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      {/* Ambient background glows */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-ambient-glow-2" aria-hidden="true" />

      <div className="container relative-z">
        <div className="hero-grid">
          {/* Hero Copy */}
          <div className="hero-content">
            <div className="status-badge-row">
              <span className="badge badge-teal badge-animated">
                <span className="live-pulse-ring" aria-hidden="true">
                  <span className="pulse-core" />
                </span>
                Proposed UK Service &bull; Planning Phase
              </span>
            </div>

            <h1 id="hero-title" className="hero-title">
              Measure physical capacity against the demands of the job.
            </h1>

            <p className="hero-description">
              CapaTrace is a proposed UK functional capacity evaluation service. It combines instrumented
              lifting, pushing, pulling and grip tests with a registered clinician’s interpretation to help
              occupational health and rehabilitation teams plan a return to work.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={(e) => onRequestPilot(e.currentTarget)}
              >
                Request a Pilot
              </button>
              <a href="#how-it-works" className="btn btn-secondary btn-lg">
                See how it works <ArrowDown size={18} className="btn-icon" aria-hidden="true" />
              </a>
            </div>

            {/* Credibility Anchors */}
            <div className="hero-features-list">
              <div className="hero-feature-item">
                <Cpu size={18} className="feature-icon" aria-hidden="true" />
                <span>Continuous Force Transducers</span>
              </div>
              <div className="hero-feature-item">
                <FileCheck2 size={18} className="feature-icon" aria-hidden="true" />
                <span>UK SOC 2020 Job Profiling</span>
              </div>
              <div className="hero-feature-item">
                <Shield size={18} className="feature-icon" aria-hidden="true" />
                <span>Registered Clinician Sign-off</span>
              </div>
            </div>
          </div>

          {/* Hero Biomechanical & Trace Visual */}
          <div className="hero-visual-card" role="region" aria-label="Biomechanical Lift Trace Demonstration">
            <div className="card-topbar">
              <div className="topbar-left">
                <Activity size={16} className="topbar-icon" aria-hidden="true" />
                <span className="card-topbar-title">Instrumented Biomechanical Capture</span>
              </div>
              <span className="status-pill">
                <span className="live-dot" aria-hidden="true" />
                Continuous Waveform Telemetry
              </span>
            </div>

            <div className="telemetry-display">
              <svg
                viewBox="0 0 680 380"
                className="trace-svg"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Illustrative warehouse lifting task with corresponding force-over-time curve"
              >
                <defs>
                  {/* Fine Engineering Grid */}
                  <pattern id="biomechGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15, 118, 110, 0.07)" strokeWidth="1" />
                  </pattern>

                  {/* Gradient for Trace Area */}
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.28" />
                    <stop offset="60%" stopColor="#0284c7" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                  </linearGradient>

                  {/* High-visibility Trace Line Gradient */}
                  <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="45%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>

                  {/* Glow filter for active trace */}
                  <filter id="traceGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0d9488" floodOpacity="0.35" />
                  </filter>
                </defs>

                {/* Base Surface with Grid */}
                <rect x="0" y="0" width="680" height="340" fill="#f8fafc" rx="8" />
                <rect x="15" y="15" width="650" height="310" fill="url(#biomechGrid)" rx="6" />

                {/* Left Panel: Illustrative Warehouse Lifting Task */}
                <g className="task-graphic" transform="translate(25, 20)">
                  <rect
                    x="0"
                    y="0"
                    width="205"
                    height="300"
                    fill="rgba(255,255,255,0.85)"
                    rx="8"
                    stroke="#e2e8f0"
                    strokeWidth="1.2"
                  />
                  <text x="102" y="26" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="700">
                    Warehouse Picking Task
                  </text>
                  <text x="102" y="40" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="500">
                    Floor-to-Waist Lift (15 kg)
                  </text>

                  {/* Floor line & pallet */}
                  <line x1="20" y1="262" x2="185" y2="262" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
                  <rect x="35" y="252" width="135" height="10" fill="#cbd5e1" rx="2" />

                  {/* Biomechanical figure in lifting position */}
                  {/* Head */}
                  <circle cx="92" cy="85" r="11" fill="#0f766e" />
                  {/* Spine / Torso */}
                  <line x1="92" y1="96" x2="108" y2="158" stroke="#0f766e" strokeWidth="5.5" strokeLinecap="round" />
                  {/* Pelvis / Hip Joint */}
                  <circle cx="108" cy="158" r="5.5" fill="#0284c7" />
                  {/* Thigh */}
                  <line x1="108" y1="158" x2="82" y2="200" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
                  {/* Knee Joint */}
                  <circle cx="82" cy="200" r="4.5" fill="#0284c7" />
                  {/* Shank / Calf */}
                  <line x1="82" y1="200" x2="98" y2="252" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
                  {/* Foot */}
                  <line x1="94" y1="252" x2="124" y2="252" stroke="#0f172a" strokeWidth="4.5" strokeLinecap="round" />

                  {/* Arm & Shoulder */}
                  <circle cx="95" cy="112" r="4.5" fill="#0284c7" />
                  <line x1="95" y1="112" x2="122" y2="162" stroke="#0d9488" strokeWidth="4.5" strokeLinecap="round" />
                  <circle cx="122" cy="162" r="4" fill="#0284c7" />
                  <line x1="122" y1="162" x2="138" y2="202" stroke="#0d9488" strokeWidth="4.5" strokeLinecap="round" />

                  {/* Crate with handles on load cell plate */}
                  <rect x="128" y="196" width="46" height="44" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="4" />
                  <line x1="138" y1="196" x2="138" y2="190" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="151" y="222" textAnchor="middle" fill="#0369a1" fontSize="9.5" fontWeight="700">
                    LOAD
                  </text>

                  {/* Dynamic Force vector arrow */}
                  <line x1="151" y1="190" x2="151" y2="162" stroke="#ef4444" strokeWidth="2.5" />
                  <polygon points="151,154 146,164 156,164" fill="#ef4444" />
                  <text x="162" y="165" fill="#b91c1c" fontSize="9" fontWeight="800">
                    Fz
                  </text>

                  {/* Load cell platform */}
                  <rect x="118" y="246" width="68" height="6" fill="#047857" rx="1.5" />
                  <text x="102" y="282" textAnchor="middle" fill="#475569" fontSize="8.5" fontWeight="600">
                    Load Cell Floor Rig
                  </text>
                </g>

                {/* Right Panel: Force-Over-Time Trace Graph */}
                <g className="trace-graph" transform="translate(260, 25)">
                  {/* Coordinate Axes */}
                  <line x1="50" y1="20" x2="50" y2="255" stroke="#64748b" strokeWidth="1.5" />
                  <line x1="50" y1="255" x2="395" y2="255" stroke="#64748b" strokeWidth="1.5" />

                  {/* Y-Axis: Force Labels */}
                  <text x="40" y="25" textAnchor="end" fill="#0f172a" fontSize="10.5" fontWeight="800">
                    Force
                  </text>
                  <text x="40" y="80" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    300 N
                  </text>
                  <text x="40" y="135" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    200 N
                  </text>
                  <text x="40" y="195" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    100 N
                  </text>
                  <text x="40" y="255" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    0 N
                  </text>

                  {/* Horizontal Guideline Dashes */}
                  <line x1="50" y1="80" x2="395" y2="80" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="135" x2="395" y2="135" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="195" x2="395" y2="195" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />

                  {/* X-Axis: Time Labels */}
                  <text x="395" y="274" textAnchor="end" fill="#0f172a" fontSize="10.5" fontWeight="800">
                    Time
                  </text>
                  <text x="50" y="274" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    0s
                  </text>
                  <text x="135" y="274" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    1.0s
                  </text>
                  <text x="220" y="274" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    2.0s
                  </text>
                  <text x="305" y="274" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    3.0s
                  </text>
                  <text x="385" y="274" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    4.0s
                  </text>

                  {/* Filled Waveform Area */}
                  <path
                    d="M 50 255 
                       Q 90 255 110 200 
                       T 160 85 
                       Q 190 70 230 75 
                       T 290 95 
                       Q 330 130 355 245 
                       L 375 255 Z"
                    fill="url(#curveGradient)"
                  />

                  {/* Continuous Force Waveform Stroke with Glow Filter */}
                  <path
                    d="M 50 255 
                       Q 90 255 110 200 
                       T 160 85 
                       Q 190 70 230 75 
                       T 290 95 
                       Q 330 130 355 245 
                       L 375 255"
                    fill="none"
                    stroke="url(#accentLine)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#traceGlow)"
                    className="animated-trace-line"
                  />

                  {/* Key Telemetry Annotations */}
                  {/* Point 1: Rate of Force Development */}
                  <circle cx="128" cy="140" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                  <line x1="128" y1="140" x2="105" y2="100" stroke="#0284c7" strokeWidth="1" />
                  <rect x="60" y="86" width="88" height="20" fill="#ffffff" stroke="#93c5fd" rx="4" />
                  <text x="104" y="100" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="700">
                    Ascent / Rate (RFD)
                  </text>

                  {/* Point 2: Peak & Sustained Load */}
                  <circle cx="210" cy="73" r="5" fill="#0d9488" stroke="#ffffff" strokeWidth="2" />
                  <line x1="210" y1="73" x2="210" y2="38" stroke="#0d9488" strokeWidth="1" />
                  <rect x="162" y="24" width="96" height="20" fill="#ffffff" stroke="#5eead4" rx="4" />
                  <text x="210" y="38" textAnchor="middle" fill="#0f766e" fontSize="8.5" fontWeight="800">
                    Sustained Lift Force
                  </text>

                  {/* Point 3: Controlled Descent */}
                  <circle cx="330" cy="130" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                  <line x1="330" y1="130" x2="355" y2="100" stroke="#0284c7" strokeWidth="1" />
                  <rect x="312" y="86" width="88" height="20" fill="#ffffff" stroke="#93c5fd" rx="4" />
                  <text x="356" y="100" textAnchor="middle" fill="#0369a1" fontSize="8.5" fontWeight="700">
                    Controlled Release
                  </text>
                </g>
              </svg>
            </div>

            {/* Required Caption */}
            <div className="card-footer-caption">
              <span className="caption-title">Illustrative lift trace</span>
              <p className="caption-text">
                Continuous load cell capture recording force trajectory, rate of force development and motor
                smoothness throughout the range of motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
