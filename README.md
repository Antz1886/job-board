# Siyaphambili Jobs 🚀
### *Mzansi's Premium Enterprise Talent Platform*

**Siyaphambili** (Zulu for *"we are moving forward"*) is a high-fidelity, client-side enterprise job board and recruiter management system designed specifically to tackle the unique socio-economic, spatial, and technical challenges of the South African labor market. 

This platform serves two primary personas:
1. **Township & Underrepresented Candidates** who need a lightweight, low-data, offline-resilient portal to discover learnerships, build professional CVs, and apply securely.
2. **Corporate Recruiters & HR Specialists** who need a command console to manage listings, vet qualifications against SAQA standards, calculate BEE scorecards, and estimate Section 12H tax deductions.

---

## 🇿🇦 The South African Problem Space & Engineering Solutions

Standard global recruitment platforms (e.g., LinkedIn, Indeed) fail to address the systemic challenges of the South African job market. Siyaphambili is engineered from the ground up to solve these local friction points:

### 1. The Spatial Divide & Commute Logistics
*   **The Problem:** Township job seekers often spend up to 40% of their potential income on transit (minibus taxis, trains) just to get to work. Commute feasibility is a top factor in job retention.
*   **The Solution:** Siyaphambili integrates transit-proximity filtering. Candidates can search for positions accessible via **Gautrain**, **MyCiTi Bus routes**, or **Minibus Taxi Hubs**. Recruiter profiles display a calculated **Commute Feasibility Rating** for applicants based on location overlap and transit choices.

### 2. High Mobile Data Costs & Load Shedding
*   **The Problem:** South Africa has some of the highest mobile data costs relative to income, and rolling power outages (load shedding) frequently disrupt connectivity mid-application.
*   **The Solution:**
    *   **Vanilla Core:** The platform is built entirely using vanilla HTML5, CSS3, and JavaScript, avoiding heavy JS bundle sizes to ensure rapid page load under 2G/3G speeds.
    *   **Data-Saver Mode:** A toggleable state that deactivates custom web fonts, transition animations, image banners, and radial gradients, shifting the UI into a ultra-low-byte layout.
    *   **Offline Draft Caching:** Inputs in the CV Builder and Application form are cached locally in real-time (`localStorage`). If connection drops or a blackout occurs, the candidate's progress is preserved and restored immediately on reload.

### 3. Vetting Trust & Qualifications Fraud
*   **The Problem:** Educational and credential fraud are major concerns for corporate South Africa, forcing recruiters to run expensive, slow background checks.
*   **The Solution:** An interactive **Recruiter Vetting Queue** is built directly into the candidate screening view. Recruiters can trigger mock credentials checks against the **South African Qualifications Authority (SAQA) NLRD** database. The system models realistic async vetting stages (Pending Auth ➔ Consenting ➔ Processing ➔ Vetted) and includes clear transactional cost approval prompts (e.g., *SAQA Check: R120*).

### 4. BEE Scorecards & SARS Section 12H Incentives
*   **The Problem:** Hiring youth and placing them in registered learnerships/internships offers significant tax and regulatory benefits for corporate employers, but calculating these incentives is complex and manually intensive.
*   **The Solution:** The Recruiter Command Center features a live **BEE Scorecard & Tax Allowance Calculator** widget. It dynamically tracks:
    *   **BEE Scorecard Points:** Live circular gauge tracking employment equity progress.
    *   **SARS Section 12H Allowance:** Real-time calculation of corporate tax deductions (up to R40,000 per learner placement, and up to R60,000 for learners with disabilities).

### 5. POPIA Compliance & Data Privacy
*   **The Problem:** Storing personal identification, qualifications, and contact information without auditable consent violates South Africa’s **Protection of Personal Information Act (POPIA)**.
*   **The Solution:** Strictly enforced POPIA workflows. Job applications and CV creations block submission until the candidate reviews the legal terms and checks the POPIA declaration. Submission metadata records consent timestamps and versions in compliance with regulatory standards.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Core:** HTML5 (Semantic Structure) & Vanilla ES6+ JavaScript.
*   **Styling System:** Custom CSS3 utilizing CSS Custom Properties (Variables) for theming, CSS Flexbox/Grid for layout, and high-end glassmorphism styling.
*   **Aesthetics:** Modern, glowing HSL-driven obsidian dark theme with sleek gradients, subtle scale transitions, and active gauge elements.
*   **State Sync:** LocalStorage Client Cache schema representing a local database to demonstrate full bi-directional state synchronization between Candidate Hub actions and the Recruiter Console.
*   **Print Engine:** Dedicated CSS Print Media queries matching standard South African A4 CV layout specs, allowing candidates to "Print to PDF" for physical or email sharing.

---

## 🌟 Key Features

### 👤 Candidate Hub
*   **Dynamic Search & Filters:** Search by title/keywords, filter by stipend/salary range slider, experience level, and transit routes.
*   **Structured Skills Selector:** A selection grid of high-demand local qualifications (e.g., Matric Grade 12, Code 10/14 licenses, PDP permits, language fluencies like isiZulu).
*   **Data-Saver CV Builder:** Input personal details, summary, structured skills, and work history to compile a professional, ATS-friendly CV. Includes a live print preview pane.
*   **Active Application Tracker:** Real-time feedback showing the status of submitted applications (e.g., Vetting Pending, Vetted, Shortlisted).

### 💼 Recruiter Command Center
*   **Active Positions List:** Table showing active jobs, location, total applicants, and status.
*   **Detailed Applicant Screen:** Side-by-side screening panel. Shows candidate details, profile photo, and interactive tabs for **Profile Summary**, **Vetted Credentials**, and **Uploaded Documents**.
*   **Enterprise Exporter:** Single-click export of applicant shortlists to a structured CSV format ready for direct import into corporate ATS systems (e.g., SAP SuccessFactors, Taleo, Workday).

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser. To run the local server for development and data synchronization testing, any basic HTTP utility works.

### Local Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/siyaphambili-jobs.git
   cd siyaphambili-jobs
   ```

2. Start a local server:
   *   **Using Python:**
       ```bash
       python3 -m http.server 8080
       ```
   *   **Using Node.js (Live Server):**
       ```bash
       npx live-server
       ```

3. Open your browser and navigate to `http://localhost:8080`.

---

## 📂 Project Structure

```text
├── index.html            # Main markup hosting both Candidate & Recruiter views
├── style.css             # Obsidian styling system, layout grids, animations, and Data-Saver resets
├── script.js             # Local database seeds, filters, POPIA consent handlers, and CSV exporter
├── siyaphambili_logo.png # High-fidelity corporate logo
└── README.md             # Project documentation
```

---

## 🔒 Security & local Simulation Disclaimer
*This application runs entirely client-side. The local storage system simulates database storage for demonstration purposes. In a production deployment, the Local Storage adapter would be swapped with a secure backend API (e.g., Node.js/Go backend connected to PostgreSQL or Firebase Firestore) protecting PII behind secure authentication.*