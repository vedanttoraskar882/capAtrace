import React from 'react';
import { ArrowDown, Shield, FileCheck2, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Copy */}
          <div className="hero-content">
            <div className="status-badge-row">
              <span className="badge badge-subtle">
                <span className="badge-dot" aria-hidden="true"></span>
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

            {/* Credibility / Technical Architecture Anchors */}
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
              <span className="card-topbar-title">Instrumented Biomechanical Capture</span>
              <span className="status-pill">Continuous Waveform Telemetry</span>
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
                  {/* Subtle Grid Pattern */}
                  <pattern id="biomechGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15, 118, 110, 0.08)" strokeWidth="1" />
                  </pattern>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0d9488" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                </defs>

                {/* Background Grid */}
                <rect x="0" y="0" width="680" height="340" fill="#f8fafc" rx="8" />
                <rect x="20" y="20" width="640" height="300" fill="url(#biomechGrid)" rx="6" />

                {/* Left Panel: Illustrative Warehouse Lifting Task */}
                <g className="task-graphic" transform="translate(30, 20)">
                  <rect x="0" y="0" width="200" height="295" fill="rgba(255,255,255,0.7)" rx="6" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="100" y="24" textAnchor="middle" className="svg-label-bold" fill="#0f172a" fontSize="11" fontWeight="700">
                    Warehouse Picking Task
                  </text>
                  <text x="100" y="38" textAnchor="middle" className="svg-label-sub" fill="#64748b" fontSize="9">
                    Floor-to-Waist Lift (15 kg)
                  </text>

                  {/* Floor line & pallet */}
                  <line x1="20" y1="260" x2="180" y2="260" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
                  <rect x="35" y="250" width="130" height="10" fill="#cbd5e1" rx="2" />

                  {/* Biomechanical stick figure in lifting position */}
                  {/* Head */}
                  <circle cx="90" cy="85" r="10" fill="#0f766e" />
                  {/* Spine / Torso */}
                  <line x1="90" y1="95" x2="105" y2="155" stroke="#0f766e" strokeWidth="5" strokeLinecap="round" />
                  {/* Pelvis / Hip Joint */}
                  <circle cx="105" cy="155" r="5" fill="#0284c7" />
                  {/* Thigh */}
                  <line x1="105" y1="155" x2="80" y2="195" stroke="#0f766e" strokeWidth="4.5" strokeLinecap="round" />
                  {/* Knee Joint */}
                  <circle cx="80" cy="195" r="4" fill="#0284c7" />
                  {/* Shank / Calf */}
                  <line x1="80" y1="195" x2="95" y2="250" stroke="#0f766e" strokeWidth="4.5" strokeLinecap="round" />
                  {/* Foot */}
                  <line x1="90" y1="250" x2="120" y2="250" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />

                  {/* Arm & Shoulder */}
                  <circle cx="93" cy="110" r="4" fill="#0284c7" />
                  <line x1="93" y1="110" x2="120" y2="160" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="120" cy="160" r="3.5" fill="#0284c7" />
                  <line x1="120" y1="160" x2="135" y2="200" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />

                  {/* Crate with handles on load cell plate */}
                  <rect x="125" y="195" width="45" height="42" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" rx="3" />
                  <line x1="135" y1="195" x2="135" y2="190" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                  <text x="147" y="220" textAnchor="middle" fill="#0369a1" fontSize="9" fontWeight="600">
                    LOAD
                  </text>

                  {/* Force vector arrow */}
                  <line x1="147" y1="190" x2="147" y2="165" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <polygon points="147,155 143,165 151,165" fill="#ef4444" />
                  <text x="156" y="165" fill="#b91c1c" fontSize="8.5" fontWeight="700">
                    Fz
                  </text>

                  {/* Load cell rig platform */}
                  <rect x="115" y="244" width="65" height="6" fill="#047857" rx="1" />
                  <text x="100" y="280" textAnchor="middle" fill="#475569" fontSize="8" fontWeight="600">
                    Load Cell Floor Rig
                  </text>
                </g>

                {/* Right Panel: Force-Over-Time Trace Graph */}
                <g className="trace-graph" transform="translate(255, 30)">
                  {/* Coordinate Axes */}
                  {/* Y-Axis: Force */}
                  <line x1="50" y1="20" x2="50" y2="250" stroke="#64748b" strokeWidth="1.5" />
                  {/* X-Axis: Time */}
                  <line x1="50" y1="250" x2="395" y2="250" stroke="#64748b" strokeWidth="1.5" />

                  {/* Y-Axis Labels */}
                  <text x="40" y="25" textAnchor="end" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                    Force
                  </text>
                  <text x="40" y="75" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    300 N
                  </text>
                  <text x="40" y="130" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    200 N
                  </text>
                  <text x="40" y="190" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    100 N
                  </text>
                  <text x="40" y="250" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    0 N
                  </text>

                  {/* Horizontal Guideline Dashes */}
                  <line x1="50" y1="75" x2="395" y2="75" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="50" y1="130" x2="395" y2="130" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="50" y1="190" x2="395" y2="190" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />

                  {/* X-Axis Labels */}
                  <text x="395" y="268" textAnchor="end" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                    Time
                  </text>
                  <text x="50" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    0s
                  </text>
                  <text x="135" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    1.0s
                  </text>
                  <text x="220" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    2.0s
                  </text>
                  <text x="305" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    3.0s
                  </text>
                  <text x="380" y="268" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    4.0s
                  </text>

                  {/* Waveform Area Fill */}
                  <path
                    d="M 50 250 
                       Q 90 250 110 200 
                       T 160 85 
                       Q 190 70 230 75 
                       T 290 95 
                       Q 330 130 355 240 
                       L 375 250 Z"
                    fill="url(#curveGradient)"
                  />

                  {/* Continuous Force Waveform Stroke */}
                  <path
                    d="M 50 250 
                       Q 90 250 110 200 
                       T 160 85 
                       Q 190 70 230 75 
                       T 290 95 
                       Q 330 130 355 240 
                       L 375 250"
                    fill="none"
                    stroke="url(#accentLine)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Key Measurement Annotations */}
                  {/* Point 1: Rate of Force Development */}
                  <circle cx="128" cy="140" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                  <line x1="128" y1="140" x2="105" y2="100" stroke="#0284c7" strokeWidth="1" />
                  <rect x="60" y="86" width="85" height="18" fill="#ffffff" stroke="#93c5fd" rx="3" />
                  <text x="102" y="99" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="600">
                    Ascent / Rate (RFD)
                  </text>

                  {/* Point 2: Peak & Sustained Load */}
                  <circle cx="210" cy="73" r="4.5" fill="#0d9488" stroke="#ffffff" strokeWidth="2" />
                  <line x1="210" y1="73" x2="210" y2="40" stroke="#0d9488" strokeWidth="1" />
                  <rect x="165" y="25" width="90" height="18" fill="#ffffff" stroke="#5eead4" rx="3" />
                  <text x="210" y="38" textAnchor="middle" fill="#0f766e" fontSize="8" fontWeight="700">
                    Sustained Lift Force
                  </text>

                  {/* Point 3: Controlled Descent */}
                  <circle cx="330" cy="130" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                  <line x1="330" y1="130" x2="355" y2="100" stroke="#0284c7" strokeWidth="1" />
                  <rect x="315" y="86" width="85" height="18" fill="#ffffff" stroke="#93c5fd" rx="3" />
                  <text x="357" y="99" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="600">
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
