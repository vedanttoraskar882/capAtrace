import React from 'react';
import { GraduationCap, Award, Briefcase, Activity, CheckCircle, HelpCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-surface" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge badge-teal">Clinical &amp; Biomechanical Context</span>
          <h2 id="about-heading" className="section-title">
            Why CapaTrace is being developed
          </h2>
          <p className="section-lead">
            Bridging the gap between raw physical capacity and the real-world physical demands of UK workplaces.
          </p>
        </div>

        {/* Problem Narrative & Warehouse Picking Example */}
        <div className="about-narrative-card">
          <div className="narrative-badge">
            <HelpCircle size={18} className="badge-icon" aria-hidden="true" />
            <span>The Referral Challenge</span>
          </div>
          <h3 className="narrative-title">
            Beyond a single maximum lift figure: Understanding real job demands
          </h3>
          <p className="narrative-body">
            Consider a typical workplace referral asking whether a warehouse worker can safely resume picking duties
            following an injury. Conventional evaluations often record only a single maximum lift reading in isolation.
            Yet a warehouse picking shift involves much more than peak load: the assessor needs to understand the weight
            of each load, the height of the lift (such as floor-to-waist versus waist-to-shoulder), how often the task is
            repeated across a shift, and how the participant actually moves during exertion.
          </p>
          <div className="narrative-comparison-grid">
            <div className="comparison-box conventional">
              <span className="comparison-tag">Conventional Assessment</span>
              <p className="comparison-text">
                Isolated maximum voluntary contraction or single-point peak readings without job-contextual motion
                monitoring, task duration, or repetition frequency.
              </p>
            </div>
            <div className="comparison-box capatrace-approach">
              <span className="comparison-tag">CapaTrace Approach</span>
              <p className="comparison-text">
                Designed to connect specific job demands (load, height, repetition, posture) directly to recorded
                time-series measurements and structured registered clinician recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Profile Card (No photo or avatar placeholder) */}
        <div className="founder-wrapper">
          <div className="founder-card" role="region" aria-label="Founder Profile">
            <div className="founder-header">
              <div className="founder-info">
                <span className="founder-role">Founder, CapaTrace</span>
                <h3 className="founder-name">Alester Jesvin Dsouza</h3>
                <p className="founder-summary">
                  Biomechanics engineer and NHS exercise practitioner combining mechanical engineering principles
                  with clinical exercise intervention and movement analysis.
                </p>
              </div>
            </div>

            {/* Verified Background Details */}
            <div className="founder-credentials-grid">
              <div className="credential-item">
                <GraduationCap className="credential-icon" size={20} aria-hidden="true" />
                <div>
                  <h4 className="credential-title">MSc in Sports &amp; Exercise Biomechanics</h4>
                  <p className="credential-detail">Leeds Beckett University</p>
                </div>
              </div>

              <div className="credential-item">
                <GraduationCap className="credential-icon" size={20} aria-hidden="true" />
                <div>
                  <h4 className="credential-title">Bachelor of Engineering (Mechanical Engineering)</h4>
                  <p className="credential-detail">Visvesvaraya Technological University, India</p>
                </div>
              </div>

              <div className="credential-item">
                <Briefcase className="credential-icon" size={20} aria-hidden="true" />
                <div>
                  <h4 className="credential-title">Occupational Therapy Assistant Practitioner (Exercise)</h4>
                  <p className="credential-detail">
                    Black Country Healthcare NHS Foundation Trust (as recorded in supplied CV)
                  </p>
                </div>
              </div>

              <div className="credential-item">
                <Activity className="credential-icon" size={20} aria-hidden="true" />
                <div>
                  <h4 className="credential-title">MSc Biomechanics Research</h4>
                  <p className="credential-detail">
                    Used force plates and 3D motion analysis to study interlimb strength asymmetries in martial artists.
                  </p>
                </div>
              </div>

              <div className="credential-item credential-span-2">
                <Award className="credential-icon" size={20} aria-hidden="true" />
                <div>
                  <h4 className="credential-title">Clinical Exercise &amp; Multidisciplinary Care Planning</h4>
                  <p className="credential-detail">
                    Experience delivering exercise interventions, monitoring physical health and contributing to
                    multidisciplinary care planning in a forensic mental health setting.
                  </p>
                </div>
              </div>
            </div>

            {/* Clear Role Separation Clarification */}
            <div className="founder-clinical-distinction">
              <CheckCircle size={18} className="distinction-icon" aria-hidden="true" />
              <p className="distinction-text">
                <strong>Important Clinical Distinction:</strong> The founder’s background combines biomechanical
                engineering and practical exercise rehabilitation delivery. Independent evaluations under the
                CapaTrace framework are designed to be interpreted, conducted, and signed off solely by registered
                occupational therapists or registered physiotherapists. The founder is not a registered physiotherapist,
                occupational therapist, or medical doctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
