# CapaTrace | Job-Matched Functional Capacity Evaluation

A responsive, frontend-only landing page for **CapaTrace**—a proposed UK functional capacity evaluation (FCE) service and software platform combining instrumented testing, job-demand profiling, and registered clinician interpretation to support return-to-work decisions.

## Project Structure & Sections

The page features a compact header and exactly seven main sections in order:
1. **Home (`#home`)**: Hero introducing the proposed service, key technical features, and an illustrative warehouse lifting task alongside a force-over-time trace curve with axes labeled *Time* and *Force* and captioned *"Illustrative lift trace"*.
2. **About (`#about`)**: "Why CapaTrace is being developed", detailing the real-world warehouse picking referral challenge and a typographic founder profile for Alester Jesvin Dsouza with verified academic and clinical background details, clearly distinguishing his role from the registered occupational therapists and physiotherapists who conduct and sign evaluations.
3. **Platform (`#platform`)**: Six capability groups covering Job-demand profiling (UK SOC 2020), Instrumented assessment station, Guided testing and safety, the Consistency Evidence Matrix (CEM), Clinician report and return-to-work planning, and Evidence, access and quality assurance (SHA-256 hash chain and proposed referrer portal).
4. **How It Works (`#how-it-works`)**: A numbered 6-step workflow tracking an illustrative warehouse picking referral from referral question through job mapping, screening, testing (2–3 hour full evaluation or ~90 minute screening), clinician interpretation, and evidence sharing.
5. **Market & Pricing (`#market-pricing`)**: "Who CapaTrace is for" highlighting five target audiences, followed by "Indicative pricing" with Group A (Direct Evaluations) and Group B (Partner Clinics & Clinicians) showing all six entries and planning assumptions.
6. **FAQ (`#faq`)**: A keyboard-accessible accordion addressing evaluation scope, clinical sign-off, duration, inconsistency flags, employer disclosures, hub location, and pilot functionality.
7. **Footer**: Wordmark, descriptor, real navigation links, planning disclaimer, and pilot trigger.

## Request a Pilot Modal (Local-Only Form)

- Accessible modal dialog with focus trap, visible focus styling, Escape-to-close, and focus restoration to the trigger button.
- Validates Full Name, Phone Number (UK & international formats), Email Address, and Organisation Name.
- Automatically generates `submittedAt` timestamp with `new Date().toISOString()`.
- Implements the strict storage contract: reads `localStorage.getItem("capatrace_pilot_requests")`, parses existing data, preserves corrupted/non-array data, and safely appends new entries without ever wiping or overwriting previous requests.
- No backend, external API, or tracker dependencies.

## Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static production bundle
npm run build

# Preview static production build
npm run preview
```
