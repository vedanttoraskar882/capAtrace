import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { PilotRequest } from '../types';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null> | null;
}

const STORAGE_KEY = 'capatrace_pilot_requests';

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerRef }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [storageError, setStorageError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Return focus to opening trigger upon close
  useEffect(() => {
    if (!isOpen && triggerRef && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  // Initial focus and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Reset status flags when opening
    setStorageError(null);
    setSuccessMessage(null);
    setFormErrors({});

    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus first input without causing unwanted viewport jump
    const timer = setTimeout(() => {
      firstInputRef.current?.focus({ preventScroll: true });
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, '');
    const validCharacters = /^[+\d\s().-]+$/.test(phone);
    return validCharacters && digitsOnly.length >= 7 && digitsOnly.length <= 16;
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStorageError(null);
    setSuccessMessage(null);

    const errors: Record<string, string> = {};

    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedEmail = emailAddress.trim();
    const trimmedOrg = organisationName.trim();

    if (!trimmedName) {
      errors.fullName = 'Full Name is required.';
    }

    if (!trimmedPhone) {
      errors.phoneNumber = 'Phone Number is required.';
    } else if (!validatePhone(trimmedPhone)) {
      errors.phoneNumber = 'Please enter a valid UK or international phone number.';
    }

    if (!trimmedEmail) {
      errors.emailAddress = 'Email Address is required.';
    } else if (!validateEmail(trimmedEmail)) {
      errors.emailAddress = 'Please enter a valid email address.';
    }

    if (!trimmedOrg) {
      errors.organisationName = 'Organisation Name is required.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const rawCurrent = localStorage.getItem(STORAGE_KEY);
      let requestsArray: PilotRequest[] = [];

      if (rawCurrent !== null && rawCurrent.trim() !== '') {
        let parsed: unknown;
        try {
          parsed = JSON.parse(rawCurrent);
        } catch {
          setStorageError(
            'Existing local storage data is corrupted and could not be parsed. The original data has been preserved without modification. Please contact site administration or inspect your browser storage.'
          );
          setIsSubmitting(false);
          return;
        }

        if (!Array.isArray(parsed)) {
          setStorageError(
            'Existing local storage data is not a valid list. The original data has been preserved without modification.'
          );
          setIsSubmitting(false);
          return;
        }

        requestsArray = parsed as PilotRequest[];
      }

      const newEntry: PilotRequest = {
        fullName: trimmedName,
        phoneNumber: trimmedPhone,
        emailAddress: trimmedEmail,
        organisationName: trimmedOrg,
        submittedAt: new Date().toISOString(),
      };

      requestsArray.push(newEntry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(requestsArray));

      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
      setSuccessMessage('Pilot request saved in this browser.');
    } catch {
      setStorageError(
        'Unable to write to local browser storage. Please check browser privacy/quota settings and retry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        className="modal-container"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
      >
        <div className="modal-header">
          <div>
            <span className="badge badge-teal">Proposed Pilot Program</span>
            <h2 id="pilot-modal-title" className="modal-title">
              Request a Pilot
            </h2>
            <p className="modal-subtitle">
              Register interest in early access evaluations or partner clinic licensing.
            </p>
          </div>
          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {successMessage && (
          <div className="alert-box alert-success" role="status" aria-live="polite">
            <CheckCircle2 size={18} className="alert-icon" aria-hidden="true" />
            <div>
              <p className="alert-title">{successMessage}</p>
              <p className="alert-desc">
                Your entry has been securely appended to local device storage.
              </p>
            </div>
          </div>
        )}

        {storageError && (
          <div className="alert-box alert-error" role="alert">
            <AlertCircle size={18} className="alert-icon" aria-hidden="true" />
            <div>
              <p className="alert-title">Storage Error</p>
              <p className="alert-desc">{storageError}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="modal-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="required-star">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (formErrors.fullName) {
                  setFormErrors((prev) => ({ ...prev, fullName: '' }));
                }
              }}
              className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
              aria-invalid={!!formErrors.fullName}
              aria-describedby={formErrors.fullName ? 'fullName-error' : undefined}
            />
            {formErrors.fullName && (
              <span id="fullName-error" className="field-error-text">
                {formErrors.fullName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number <span className="required-star">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (formErrors.phoneNumber) {
                  setFormErrors((prev) => ({ ...prev, phoneNumber: '' }));
                }
              }}
              className={`form-input ${formErrors.phoneNumber ? 'input-error' : ''}`}
              aria-invalid={!!formErrors.phoneNumber}
              aria-describedby={formErrors.phoneNumber ? 'phoneNumber-error' : undefined}
            />
            {formErrors.phoneNumber && (
              <span id="phoneNumber-error" className="field-error-text">
                {formErrors.phoneNumber}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress" className="form-label">
              Email Address <span className="required-star">*</span>
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              value={emailAddress}
              onChange={(e) => {
                setEmailAddress(e.target.value);
                if (formErrors.emailAddress) {
                  setFormErrors((prev) => ({ ...prev, emailAddress: '' }));
                }
              }}
              className={`form-input ${formErrors.emailAddress ? 'input-error' : ''}`}
              aria-invalid={!!formErrors.emailAddress}
              aria-describedby={formErrors.emailAddress ? 'emailAddress-error' : undefined}
            />
            {formErrors.emailAddress && (
              <span id="emailAddress-error" className="field-error-text">
                {formErrors.emailAddress}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="organisationName" className="form-label">
              Organisation Name <span className="required-star">*</span>
            </label>
            <input
              id="organisationName"
              name="organisationName"
              type="text"
              autoComplete="organization"
              required
              value={organisationName}
              onChange={(e) => {
                setOrganisationName(e.target.value);
                if (formErrors.organisationName) {
                  setFormErrors((prev) => ({ ...prev, organisationName: '' }));
                }
              }}
              className={`form-input ${formErrors.organisationName ? 'input-error' : ''}`}
              aria-invalid={!!formErrors.organisationName}
              aria-describedby={formErrors.organisationName ? 'organisationName-error' : undefined}
            />
            {formErrors.organisationName && (
              <span id="organisationName-error" className="field-error-text">
                {formErrors.organisationName}
              </span>
            )}
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send a pilot request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
