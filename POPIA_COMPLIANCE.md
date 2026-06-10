# POPIA Compliance Architecture Guide
## Siyaphambili Jobs Recruitment Platform

This document describes how the **Siyaphambili Jobs** platform implements compliance with South Africa's **Protection of Personal Information Act (Act 4 of 2013 - POPIA)**. 

Compliance with POPIA is mandatory for any corporate entity collecting, processing, and storing personal details, qualifications, and CV information of South African citizens. Siyaphambili is engineered to align with POPIA regulations at every layer of the applicant workflow.

---

## 🏛️ Eight Conditions of POPIA & Technical Mapping

Siyaphambili maps the core statutory conditions of lawful processing to specific frontend features:

### 1. Condition 1: Accountability
*   **Definition:** The responsible party must ensure compliance with all conditions.
*   **Implementation:** The code enforces structured validation. Consent flags are passed alongside the candidate object, assuring that recruiters can audit when and how consent was obtained.

### 2. Condition 2: Processing Limitation
*   **Definition:** Personal information must be processed lawfully and in a reasonable manner that does not infringe on candidate privacy. Processing requires explicit, informed consent.
*   **Implementation:**
    *   **Blocked Submission State:** In [index.html](file:///home/ansdev/.gemini/antigravity/scratch/job-board/index.html) and [script.js](file:///home/ansdev/.gemini/antigravity/scratch/job-board/script.js), candidate profile caching and job application dispatching are locked behind mandatory consent checkboxes.
    *   **Auditable Record:** When a user checks the POPIA declaration, the cached data payload includes:
        ```json
        {
          "popiaConsent": true,
          "consentTimestamp": "2026-06-10T20:30:00.000Z",
          "consentVersion": "1.0-SA"
        }
        ```

### 3. Condition 3: Purpose Specification
*   **Definition:** Personal information must be collected for a specific, explicitly defined, and lawful purpose related to the function of the organization.
*   **Implementation:**
    *   The application modal clearly displays the purpose: *"Your personal information will be stored securely and will only be shared with the recruiting employer for this job application process."*
    *   Recruiters are prevented from using candidate information outside the specific job listing pipeline they are reviewing.

### 4. Condition 4: Further Processing Limitation
*   **Definition:** Further processing of information must be compatible with the original purpose of collection.
*   **Implementation:** The CV Builder only caches data for compilation into the standard Siyaphambili CV. It is not shared with third-party advertising, analytics, or external trackers.

### 5. Condition 5: Information Quality
*   **Definition:** The responsible party must take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading, and updated.
*   **Implementation:**
    *   Candidates have direct access to their cached profile at any time via the **Data-Saver CV Builder**. They can modify, update, and re-save details, ensuring information quality.
    *   Structured skills selectors (using checkboxes instead of unstructured text inputs) reduce spelling errors and invalid entries.

### 6. Condition 6: Openness
*   **Definition:** The responsible party must maintain documentation of all processing operations and notify candidates of the data controller's details.
*   **Implementation:** Clear, visual legal declarations are positioned next to all data-entry points.

### 7. Condition 7: Security Safeguards
*   **Definition:** The responsible party must secure the integrity and confidentiality of personal information in their possession by taking appropriate, reasonable technical and organizational measures.
*   **Implementation:**
    *   **Local Caching Security:** During the local simulation phase, data is isolated inside the browser's origin-secured `localStorage`, preventing cross-site scripting (XSS) extraction.
    *   **Recruiter Access Control:** The recruiter dashboard displays applicant data *only* when the recruiter selects an active job listing they are authorized to manage.

### 8. Condition 8: Data Subject Participation
*   **Definition:** Candidates have the right to request access to, deletion of, or correction of their personal information.
*   **Implementation:**
    *   **Right to be Forgotten:** Candidates can clear their cached profiles and application histories directly by clearing their browser cache or using the platform settings.
    *   **Print Utility:** Candidates can download a full copy of their collected information using the **Print / Download PDF CV** feature.

---

## 🔒 Production Recommendations

In a production environment, the frontend client storage is replaced by a backend server. To maintain the POPIA-compliant posture built into Siyaphambili:

1.  **Transport Encryption:** Enforce TLS 1.3 for all data transit between candidate devices, the app server, and third-party vetting APIs (like SAQA and LexisNexis).
2.  **Encryption at Rest:** Store candidate PII (names, contact details, ID numbers) in databases using AES-256 encryption.
3.  **Auditable Logging:** Keep an immutable ledger of all recruiter views and CSV downloads to comply with Section 19 of POPIA (Security measures on integrity and confidentiality of personal information).
4.  **Vetting Consent Flow:** SAQA and LexisNexis checks require separate candidates' consent. The background check workflow must dispatch an SMS or email authorization link to the candidate before charging the R120 fee.
