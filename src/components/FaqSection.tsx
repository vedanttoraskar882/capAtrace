import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // First open by default for immediate preview
  });

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What does CapaTrace assess?',
      answer:
        'It is designed to measure how someone performs physical tasks relevant to a specific job, including lifting, pushing, pulling and gripping. A registered clinician interprets the measurements in the context of the referral.',
    },
    {
      id: 'faq-2',
      question: 'Who interprets and signs the report?',
      answer:
        'The proposed model assigns interpretation and sign-off to a registered occupational therapist or physiotherapist acting as the assessor.',
    },
    {
      id: 'faq-3',
      question: 'How long does an evaluation take?',
      answer:
        'The planned full evaluation typically takes two to three hours. The shorter screening assessment takes approximately 90 minutes.',
    },
    {
      id: 'faq-4',
      question: 'What does an inconsistency flag mean?',
      answer:
        'It identifies a pattern for clinical review, such as variation between repeated trials. The clinician considers the pattern, uncertainty and assessment context before drawing conclusions.',
    },
    {
      id: 'faq-5',
      question: 'What information can the employer receive?',
      answer:
        'The employer can receive practical workplace adjustment recommendations with consent. Referrer access is limited to the report and agreed supporting information.',
    },
    {
      id: 'faq-6',
      question: 'Where will assessments take place?',
      answer:
        'The plan proposes an initial West Midlands hub clinic, followed by delivery through licensed occupational health providers and partner clinics. The location and rollout are still to be confirmed.',
    },
    {
      id: 'faq-7',
      question: 'How does the pilot request work on this website?',
      answer:
        'The form saves the request in the browser on this device. It does not send the details to CapaTrace or book an assessment.',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="section-padding bg-surface" aria-labelledby="faq-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge badge-teal">Questions &amp; Clarifications</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-lead">
            Concise answers regarding CapaTrace’s planned testing protocols, clinical governance, and pilot procedures.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion-wrapper" role="region" aria-label="Frequently Asked Questions Accordion">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div key={faq.id} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-btn`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-chevron-wrap ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-btn`}
                  className={`faq-answer-panel ${isOpen ? 'expanded' : 'collapsed'}`}
                  hidden={!isOpen}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
