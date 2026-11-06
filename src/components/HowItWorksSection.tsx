import React from 'react';
import {
  FileText,
  Compass,
  UserCheck,
  Activity,
  Stethoscope,
  Share2,
  Clock
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Define the referral question.',
      icon: FileText,
      description:
        'An occupational health professional, insurer or rehabilitation case manager identifies the work decision the evaluation should support.',
      narrativeExample:
        'Warehouse referral example: Can a 42-year-old operative safely return to picking and packing duties requiring repeated floor-to-waist 15 kg lifting across an 8-hour shift?',
    },
    {
      stepNumber: '02',
      title: 'Map the demands of the job.',
      icon: Compass,
      description:
        'The assessor combines the occupation profile with employer-supplied details such as load, lift height, task frequency and posture.',
      narrativeExample:
        'Job mapping: Cross-referencing UK SOC 2020 code 9260 (Warehouse Operative) with employer task specs: 15 kg totes, 30 lifts per hour, vertical range 30 cm to 110 cm.',
    },
    {
      stepNumber: '03',
      title: 'Screen and obtain consent.',
      icon: UserCheck,
      description:
        'The clinical team completes medical screening, explains the assessment and obtains informed consent before testing.',
      narrativeExample:
        'Clinical pre-test screening: Checking cardiovascular baseline, contraindications, explaining the instrumented rig, and establishing informed consent with the operative.',
    },
    {
      stepNumber: '04',
      title: 'Run the relevant tests.',
      icon: Activity,
      description:
        'The participant completes the selected tasks under assessor supervision. The instruments record force, movement and physiological response. A full assessment typically takes two to three hours. The shortened screening battery takes approximately 90 minutes.',
      durationBadge: 'Full: 2–3 Hours | Screening: ~90 Mins',
      narrativeExample:
        'Testing protocol: Operative completes instrumented floor-to-waist lifts, sled push/pull, 5-position grip dynamometry, and kinematic tracking with chest-strap heart rate monitoring.',
    },
    {
      stepNumber: '05',
      title: 'Interpret the findings.',
      icon: Stethoscope,
      description:
        'The analytics engine produces consistency indicators and estimates of working levels. A registered occupational therapist or physiotherapist interprets the findings alongside observations and the specific job demands, then signs the report.',
      narrativeExample:
        'Clinical synthesis: Registered OT/PT reviews force traces, rate of force development, Consistency Evidence Matrix indicators, and clinical observations against warehouse demands.',
    },
    {
      stepNumber: '06',
      title: 'Share the evidence and plan follow-up.',
      icon: Share2,
      description:
        'The signed report and supporting measurements form a tamper-evident pack. The referrer receives agreed material, the participant receives a plain-English summary, and the employer can receive an adjustment plan with consent. A follow-up evaluation can inform a graded return to work.',
      narrativeExample:
        'Outcome delivery: Referrer receives cryptographic evidence pack; employer receives staged 10 kg adjustment plan with 6-week review; worker receives plain-English action summary.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-surface" aria-labelledby="how-it-works-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge badge-teal">End-to-End Workflow</span>
          <h2 id="how-it-works-heading" className="section-title">
            How It Works
          </h2>
          <p className="section-lead">
            Tracking a continuous warehouse picking referral from initial clinical question to a signed, defensible
            workplace adjustment plan.
          </p>
        </div>

        {/* Numbered Steps */}
        <div className="workflow-container">
          <div className="workflow-timeline-track" aria-hidden="true" />
          <div className="workflow-list" role="list">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.stepNumber} className="workflow-item" role="listitem">
                  <div className="workflow-node">
                    <span className="node-number">{step.stepNumber}</span>
                  </div>

                  <div className="workflow-content-card">
                    <div className="workflow-card-header">
                      <div className="workflow-icon-wrap" aria-hidden="true">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="workflow-step-title">{step.title}</h3>
                      {step.durationBadge && (
                        <div className="duration-pill">
                          <Clock size={14} aria-hidden="true" />
                          <span>{step.durationBadge}</span>
                        </div>
                      )}
                    </div>

                    <p className="workflow-step-desc">{step.description}</p>

                    <div className="workflow-narrative-box">
                      <span className="narrative-tag">Referral Walkthrough</span>
                      <p className="narrative-context">{step.narrativeExample}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
