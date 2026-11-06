import React from 'react';
import {
  Users,
  ShieldCheck,
  Building2,
  Scale,
  Stethoscope,
  Info,
  Clock
} from 'lucide-react';

interface MarketPricingSectionProps {
  onRequestPilot: (triggerElem?: HTMLElement | null) => void;
}

export const MarketPricingSection: React.FC<MarketPricingSectionProps> = ({ onRequestPilot }) => {
  const audiences = [
    {
      title: 'Occupational health providers and physicians',
      detail: 'Seeking job-specific evidence for fitness-for-work advice and statutory return-to-work recommendations.',
      icon: Stethoscope,
    },
    {
      title: 'Insurers and rehabilitation case managers',
      detail: 'Coordinating objective functional assessments, complex claims resolution, and sustainable return-to-work pathways.',
      icon: ShieldCheck,
    },
    {
      title: 'Employers and HR teams',
      detail: 'Seeking defensible, practical workplace adjustment recommendations, shared strictly with participant consent.',
      icon: Building2,
    },
    {
      title: 'Personal injury referrers',
      detail: 'Seeking documented, tamper-evident functional capacity evidence in relevant medico-legal and liability cases.',
      icon: Scale,
    },
    {
      title: 'Partner clinics and clinical assessment providers',
      detail: 'Interested in delivering accredited biomechanical functional capacity evaluations under licence across the UK.',
      icon: Users,
    },
  ];

  return (
    <section id="market-pricing" className="section-padding" aria-labelledby="market-heading">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <span className="badge badge-teal">Audiences &amp; Commercial Model</span>
          <h2 id="market-heading" className="section-title">
            Who CapaTrace is for
          </h2>
          <p className="section-lead">
            Designed for clinical teams, employers, and referrers who require objective, instrumented proof of
            functional job readiness.
          </p>
        </div>

        {/* Market Audiences Grid */}
        <div className="audiences-grid">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <div key={index} className="audience-card">
                <div className="audience-icon-wrap" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3 className="audience-title">{aud.title}</h3>
                <p className="audience-desc">{aud.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Indicative Pricing Subheading */}
        <div className="pricing-section-divider">
          <div className="pricing-header-wrap text-center">
            <h3 id="pricing-heading" className="pricing-title">
              Indicative pricing
            </h3>
            <p className="pricing-subtext">
              Clear distinction between referral evaluation costs and clinical platform licensing.
            </p>
          </div>

          {/* Mandatory Prominent Note */}
          <div className="pricing-notice-banner" role="note">
            <Info className="notice-icon" size={20} aria-hidden="true" />
            <p className="notice-text">
              <strong>Commercial Note:</strong> These figures are indicative planning assumptions from the CapaTrace
              business plan. Final commercial terms are subject to validation.
            </p>
          </div>

          {/* Two Distinct Pricing Groups */}
          <div className="pricing-groups-container">
            {/* GROUP A — EVALUATIONS */}
            <div className="pricing-group-card">
              <div className="pricing-group-header">
                <span className="group-category-tag">Direct Referrals</span>
                <h4 className="group-title">GROUP A — EVALUATIONS</h4>
                <p className="group-subtitle">
                  For occupational health teams, insurers, case managers, and employers commissioning evaluations.
                </p>
              </div>

              <div className="pricing-items-list">
                {/* Full Evaluation */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Full evaluation</h5>
                    <div className="item-price">
                      £750–£1,200 <span className="price-unit">per case</span>
                    </div>
                  </div>
                  <p className="item-description">
                    A job-matched functional capacity evaluation, typically lasting two to three hours, with clinician
                    interpretation and a signed report.
                  </p>
                  <div className="item-meta">
                    <Clock size={14} aria-hidden="true" />
                    <span>Duration: 2 to 3 hours</span>
                  </div>
                </div>

                {/* Screening Evaluation */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Screening evaluation</h5>
                    <div className="item-price">
                      £300–£450 <span className="price-unit">per case</span>
                    </div>
                  </div>
                  <p className="item-description">
                    A shortened assessment of approximately 90 minutes for early-stage triage.
                  </p>
                  <div className="item-meta">
                    <Clock size={14} aria-hidden="true" />
                    <span>Duration: Approximately 90 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GROUP B — PARTNER CLINICS AND CLINICIANS */}
            <div className="pricing-group-card">
              <div className="pricing-group-header">
                <span className="group-category-tag">Clinic Licensing</span>
                <h4 className="group-title">GROUP B — PARTNER CLINICS AND CLINICIANS</h4>
                <p className="group-subtitle">
                  For independent clinical providers and regional assessment centres operating CapaTrace technology.
                </p>
              </div>

              <div className="pricing-items-list">
                {/* Platform licence */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Platform licence</h5>
                    <div className="item-price">
                      £12,000–£24,000 <span className="price-unit">per partner clinic per year</span>
                    </div>
                  </div>
                  <p className="item-description">
                    Annual licence granting clinical software access, protocol library, continuous feature updates, and
                    secure analytics infrastructure.
                  </p>
                </div>

                {/* Per-case platform fee */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Per-case platform fee</h5>
                    <div className="item-price">
                      £60–£90 <span className="price-unit">per case for partner clinics</span>
                    </div>
                  </div>
                  <p className="item-description">
                    Standard analytics processing fee per completed assessment, including Consistency Evidence Matrix
                    telemetry processing and cryptographic report generation.
                  </p>
                </div>

                {/* Clinician accreditation */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Clinician accreditation</h5>
                    <div className="item-price">
                      £900–£1,500 <span className="price-unit">initial fee per clinician</span>
                    </div>
                  </div>
                  <p className="item-description">
                    Initial onboarding, protocol calibration, and clinical accreditation fee per clinician; annual
                    renewal applies.
                  </p>
                  <div className="item-note">
                    * Annual renewal applies (renewal amount to be determined upon validation).
                  </div>
                </div>

                {/* Assessment station sale or lease */}
                <div className="pricing-item">
                  <div className="pricing-item-top">
                    <h5 className="item-name">Assessment station sale or lease</h5>
                    <div className="item-price item-price-text">
                      Cost-plus purchase pricing or lease, per station
                    </div>
                  </div>
                  <p className="item-description">
                    Turnkey instrumented rig including load cells, movement sensors, dynamometers, and telemetry station.
                    Specific pricing structure determined per clinic installation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Single Section Call to Action */}
          <div className="pricing-cta-block text-center">
            <h4 className="cta-headline">Interested in exploring a pilot or partnership?</h4>
            <p className="cta-sub">
              Discuss prospective regional hub evaluations or participate in initial clinical station pilots.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              Request a Pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
