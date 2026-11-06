import React from 'react';
import {
  Layers,
  Cpu,
  ShieldAlert,
  GitCompare,
  FileCheck,
  Lock,
  Activity
} from 'lucide-react';

export const PlatformSection: React.FC = () => {
  return (
    <section id="platform" className="section-padding" aria-labelledby="platform-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge badge-teal">Integrated Architecture</span>
          <h2 id="platform-heading" className="section-title">
            The CapaTrace Platform
          </h2>
          <p className="section-lead">
            An instrumented assessment station, clinician software, and a secure evidence workflow engineered to
            deliver objective, defensible functional capacity evaluations.
          </p>
          <div className="status-note-banner">
            <span>Planned Product Capabilities &bull; Delivery Model Based on Planning Assumptions</span>
          </div>
        </div>

        {/* 6 Core Capability Groups */}
        <div className="platform-grid">
          {/* Group A: Job-demand profiling */}
          <div className="platform-card" id="capability-job-demand">
            <div className="card-indicator">
              <span className="group-letter">A</span>
              <Layers className="card-icon" size={22} aria-hidden="true" />
            </div>
            <h3 className="card-title">Job-demand profiling</h3>
            <p className="card-description">
              The <strong>Job-Matched Capacity Protocol</strong> uses UK SOC 2020 occupational codes alongside task
              information supplied by the employer. It translates the specific referral question into relevant target
              loads, repetition frequencies, and working postures.
            </p>
            <div className="card-highlight-box">
              <p className="highlight-text">
                <strong>Specific task geometry:</strong> A floor-to-waist lift and a waist-to-shoulder lift represent
                markedly different biomechanical demands and joint moments within the exact same occupational role.
              </p>
            </div>
          </div>

          {/* Group B: Instrumented assessment station */}
          <div className="platform-card" id="capability-station">
            <div className="card-indicator">
              <span className="group-letter">B</span>
              <Cpu className="card-icon" size={22} aria-hidden="true" />
            </div>
            <h3 className="card-title">Instrumented assessment station</h3>
            <p className="card-description">
              A comprehensive physical testing station incorporating a floor-to-waist and waist-to-shoulder lift rig
              with load cells, a push/pull sled or handle equipped with a force transducer, digital grip and pinch
              dynamometers (including five-position grip testing), trunk and thigh movement sensors, and a continuous
              chest-strap heart-rate monitor.
            </p>
            <div className="card-highlight-box">
              <p className="highlight-text">
                <strong>Why time-series matters:</strong> Recording continuous force throughout a task preserves rich
                waveform information—such as loading ramp rates and neuromuscular stabilization—that a single peak
                reading would miss completely.
              </p>
            </div>
          </div>

          {/* Group C: Guided testing and safety */}
          <div className="platform-card" id="capability-safety">
            <div className="card-indicator">
              <span className="group-letter">C</span>
              <ShieldAlert className="card-icon" size={22} aria-hidden="true" />
            </div>
            <h3 className="card-title">Guided testing and safety</h3>
            <p className="card-description">
              The assessor follows a structured, software-guided protocol designed to safeguard participant wellbeing.
              Continuous heart rate telemetry, real-time movement quality observation, and the participant’s own
              reported symptoms directly inform established clinical stop criteria.
            </p>
            <div className="card-highlight-box">
              <p className="highlight-text">
                <strong>Safety alerts &amp; tiers:</strong> The planned software alerts the assessor to safety concerns in real
                time. The service includes a comprehensive full evaluation and a shorter screening assessment for early triage.
              </p>
            </div>
          </div>

          {/* Group D: Consistency Evidence Matrix (CEM) */}
          <div className="platform-card highlight-card" id="capability-cem">
            <div className="card-indicator">
              <span className="group-letter">D</span>
              <GitCompare className="card-icon" size={22} aria-hidden="true" />
            </div>
            <div className="cem-badge-row">
              <span className="badge badge-teal">Core Analytical Module</span>
              <span className="badge badge-outline">Validation Planned</span>
            </div>
            <h3 className="card-title">Consistency Evidence Matrix (CEM)</h3>
            <p className="card-description">
              The planned <strong>Consistency Evidence Matrix (CEM)</strong> evaluates four interrelated empirical
              domains across an assessment session:
            </p>

            <ul className="cem-domains-list">
              <li>
                <span className="domain-num">1</span>
                <div>
                  <strong>Repeatability across trials:</strong> Variance and coefficient of variation between repeated
                  efforts of the exact same physical test.
                </div>
              </li>
              <li>
                <span className="domain-num">2</span>
                <div>
                  <strong>Agreement between different tests:</strong> Cross-test correlation between complementary
                  muscle groups and kinetic chains.
                </div>
              </li>
              <li>
                <span className="domain-num">3</span>
                <div>
                  <strong>Biomechanical signatures:</strong> Force-curve shape analysis, rate of force development (RFD),
                  and movement trajectory profiles.
                </div>
              </li>
              <li>
                <span className="domain-num">4</span>
                <div>
                  <strong>Physiological plausibility:</strong> Real-time cardiovascular response (heart rate elevation
                  and recovery) evaluated in clinical context.
                </div>
              </li>
            </ul>

            <div className="cem-disclaimer-box">
              <Activity size={16} className="disclaimer-icon" aria-hidden="true" />
              <p className="disclaimer-text">
                <strong>Clinical interpretation only:</strong> The CEM presents objective indicators alongside statistical
                uncertainty for a registered clinician to interpret. It is never a lie detector, malingering detector,
                automated fitness decision, or definitive judgement about participant effort. Empirical validation is planned.
              </p>
            </div>
          </div>

          {/* Group E: Clinician report and return-to-work planning */}
          <div className="platform-card" id="capability-reports">
            <div className="card-indicator">
              <span className="group-letter">E</span>
              <FileCheck className="card-icon" size={22} aria-hidden="true" />
            </div>
            <h3 className="card-title">Clinician report and return-to-work planning</h3>
            <p className="card-description">
              Translates biomechanical telemetry into actionable workplace intelligence. Features job matching,
              comparison with published normative reference values where appropriate, and estimated working levels for
              occasional (up to 33%), frequent (34–66%), and constant (67–100%) physical demands.
            </p>
            <div className="card-highlight-box">
              <p className="highlight-text">
                <strong>Actionable recommendations:</strong> The registered clinician reviews measurements and
                observations, signs the formal report, and can specify practical adjustments, staged duties, and
                re-evaluation milestones. The participant receives an accessible plain-English summary.
              </p>
            </div>
          </div>

          {/* Group F: Evidence, access and quality assurance */}
          <div className="platform-card" id="capability-governance">
            <div className="card-indicator">
              <span className="group-letter">F</span>
              <Lock className="card-icon" size={22} aria-hidden="true" />
            </div>
            <h3 className="card-title">Evidence, access and quality assurance</h3>
            <p className="card-description">
              Every completed evaluation compiles a planned tamper-evident evidence pack containing timestamped raw data,
              derived metrics, and the clinician-signed report. A cryptographic <strong>SHA-256 hash chain</strong> is
              intended to make any subsequent modifications immediately detectable.
            </p>
            <div className="card-highlight-box">
              <p className="highlight-text">
                <strong>Governance &amp; Referrer Portal:</strong> Algorithm versioning ensures all metrics trace back to the
                exact analytics engine used. The proposed referrer portal supports case ordering, status tracking, secure
                document exchange, and role-based access. Quality management includes device calibration records, annual audits,
                and second-reader clinician review of selected cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
