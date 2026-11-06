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

    // Focus first input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validatePhone = (phone: string): boolean => {
    // Accepts UK and international formats: digits, spaces, parentheses, hyphens, and optional leading +
    // Min 7 digits to prevent trivial junk
    const digitsOnly = phone.replace(/\D/g, '');
    const validCharacters = /^[+\d\s().-]+$/.test(phone);
    return validCharacters && digitsOnly.length >= 7 && digitsOnly.length <= 16;
  };

  const validateEmail = (email: string): boolean => {
    // Standard RFC-compliant relaxed email regex
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
      // 1. Immediately before each save, read the current value using localStorage.getItem()
      const rawCurrent = localStorage.getItem(STORAGE_KEY);
      let requestsArray: PilotRequest[] = [];

      if (rawCurrent !== null && rawCurrent.trim() !== '') {
        let parsed: unknown;
        try {
          parsed = JSON.parse(rawCurrent);
        } catch {
          // If existing data cannot be parsed, preserve original value and show error
          setStorageError(
            'Existing local storage data is corrupted and could not be parsed. The original data has been preserved without modification. Please contact site administration or inspect your browser storage.'
          );
          setIsSubmitting(false);
          return;
        }

        // Verify that it is an array
        if (!Array.isArray(parsed)) {
          setStorageError(
            'Existing local storage data is not a valid list. The original data has been preserved without modification.'
          );
          setIsSubmitting(false);
          return;
        }

        requestsArray = parsed as PilotRequest[];
      }

      // 2. Automatically generate timestamp using new Date().toISOString()
      const newEntry: PilotRequest = {
        fullName: trimmedName,
        phoneNumber: trimmedPhone, // String preserved with leading zero/country code
        emailAddress: trimmedEmail,
        organisationName: trimmedOrg,
        submittedAt: new Date().toISOString(),
      };

      // 3. Append the new object
      requestsArray.push(newEntry);

      // 4. Save entire updated array with localStorage.setItem()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(requestsArray));

      // 5. Only after a successful write: clear the form and show success message
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
      setSuccessMessage('Pilot request saved in this browser.');
    } catch {
      // If access or writing fails (e.g. storage disabled or quota full), keep visitor typed values
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
              placeholder="e.g. Dr Sarah Jenkins"
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
              placeholder="e.g. +44 7911 123456 or 0121 496 0123"
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
              placeholder="e.g. s.jenkins@occupationalhealth.co.uk"
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
              placeholder="e.g. West Midlands Occupational Health Ltd"
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

          <div className="form-notice">
            This form saves your request in this browser on this device. Your details are not sent to CapaTrace.
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
              {isSubmitting ? 'Saving...' : 'Save pilot request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
