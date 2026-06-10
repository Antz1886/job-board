// Initial static database of jobs
const defaultJobs = [
  {
    id: "job-1",
    title: "Cloud Infrastructure Engineer",
    company: "Vodacom",
    logo: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Midrand, Johannesburg",
    province: "Gauteng",
    salary: 65000,
    type: "full-time",
    opportunityType: "experienced",
    remote: false,
    transit: ["Gautrain Proximity", "Minibus Taxi Hub"],
    skills: ["AWS", "Terraform", "Kubernetes", "Linux"],
    description: "Join Vodacom's cloud infrastructure team in Midrand. You will design, build, and support scalable cloud platforms that power services for over 45 million customers. This role offers excellent growth, health insurance, and performance bonuses. Candidates with AWS certifications preferred.",
    applyLink: "https://vodacom.co.za/careers",
    verificationRequired: ["SAQA Checked", "ID Verified"],
    featured: true
  },
  {
    id: "job-2",
    title: "Assistant Store Manager",
    company: "Shoprite",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Bellville, Cape Town",
    province: "Western Cape",
    salary: 18500,
    type: "full-time",
    opportunityType: "experienced",
    remote: false,
    transit: ["MyCiTi Route", "Minibus Taxi Hub", "MetroRail Bellville"],
    skills: ["Retail Management", "Stock Control", "Customer Service", "Bilingual"],
    description: "Shoprite Bellville is looking for a hands-on Assistant Store Manager. You will oversee daily floor operations, manage staff shifts, handle cash reconciliation, and ensure high standards of customer satisfaction. Retail experience and strong leadership skills are essential.",
    applyLink: "https://shopriteholdings.co.za/careers",
    verificationRequired: ["ID Verified"],
    featured: false
  },
  {
    id: "job-3",
    title: "Customer Service Learnership (NQF 4)",
    company: "Standard Bank",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Soweto, Johannesburg",
    province: "Gauteng",
    salary: 7500,
    type: "contract",
    opportunityType: "learnership",
    remote: false,
    transit: ["Minibus Taxi Hub", "Rea Vaya BRT"],
    skills: ["Communication", "Basic Computer Literacy", "Problem Solving", "Matric"],
    description: "Standard Bank is offering a 12-month Customer Service Learnership for unemployed South African youth. Earn a monthly stipend of R7,500 while gaining a NQF Level 4 qualification. Ideal for matriculants looking to break into the banking sector. No prior experience required.",
    applyLink: "https://standardbank.co.za/careers",
    verificationRequired: ["ID Verified"],
    featured: true
  },
  {
    id: "job-4",
    title: "React Frontend Developer",
    company: "Yoco",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Cape Town",
    province: "Western Cape",
    salary: 45000,
    type: "full-time",
    opportunityType: "experienced",
    remote: true,
    transit: ["Remote Work Available"],
    skills: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    description: "Yoco is looking for a Frontend Developer to build beautiful, responsive merchant portals. This is a remote-first role within South Africa, offering flexible hours, workspace stipends, and medical aid benefits. Join our mission to help small businesses thrive.",
    applyLink: "https://yoco.co.za/careers",
    verificationRequired: ["SAQA Checked", "ID Verified"],
    featured: true
  },
  {
    id: "job-5",
    title: "Graduate Chemical Engineer",
    company: "Sasol",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Secunda, Mpumalanga",
    province: "Mpumalanga",
    salary: 14000,
    type: "contract",
    opportunityType: "internship",
    remote: false,
    transit: ["Company Shuttle Provided", "Minibus Taxi Hub"],
    skills: ["Chemical Engineering", "Process Engineering", "Safety Compliance", "Data Analysis"],
    description: "Sasol's Graduate Development Programme offers final-year or graduate Chemical Engineers practical industry experience. Based at our Secunda operations, you will work alongside senior engineers on real process design and optimization projects. Transportation is supported via company shuttle services.",
    applyLink: "https://sasol.co.za/careers",
    verificationRequired: ["SAQA Checked", "ID Verified"],
    featured: false
  },
  {
    id: "job-6",
    title: "Warehouse Logistics Coordinator",
    company: "Takealot",
    logo: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Kempton Park, Johannesburg",
    province: "Gauteng",
    salary: 22000,
    type: "full-time",
    opportunityType: "entry-level",
    remote: false,
    transit: ["Minibus Taxi Hub", "MetroRail Kempton Park"],
    skills: ["Inventory Management", "Logistics Systems", "Excel", "Team Coordination"],
    description: "Takealot Kempton Park distribution center is seeking a Warehouse Logistics Coordinator. You will track incoming and outgoing shipments, manage inventory databases, coordinate with courier networks, and troubleshoot dispatch discrepancies. Attention to detail and structured thinking are critical.",
    applyLink: "https://takealot.com/careers",
    verificationRequired: ["ID Verified"],
    featured: false
  },
  {
    id: "job-7",
    title: "Digital Marketing Intern",
    company: "Flow Labs",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&h=100&q=80",
    location: "Durban Central",
    province: "KwaZulu-Natal",
    salary: 6000,
    type: "part-time",
    opportunityType: "internship",
    remote: true,
    transit: ["Remote Work Available", "Minibus Taxi Hub"],
    skills: ["Social Media", "Content Creation", "SEO Basics", "Canva"],
    description: "Flow Labs Durban is offering a 6-month Digital Marketing Internship. This hybrid role allows you to work from home three days a week. You will learn to manage social media campaigns, create graphics, write blogs, and analyze traffic trends. Perfect for media or marketing graduates.",
    applyLink: "https://flowlabs.co.za/careers",
    verificationRequired: ["ID Verified"],
    featured: false
  }
];

// Combine static database with local-storage custom posted jobs
let customJobs = JSON.parse(localStorage.getItem("siyaphambili_posted_jobs")) || [];
let jobs = [...defaultJobs, ...customJobs];

// State & Personas
let activePersona = "candidate"; // candidate or recruiter
let activeOpportunityFilter = "";
let selectedRecruiterJobId = null;

// Recruiter selected tabs track
let activeRecruiterTabs = {}; // applicantId -> activeTabName

// Initialize applications data
let applicantData = JSON.parse(localStorage.getItem("siyaphambili_applications")) || [];
if (applicantData.length === 0) {
  applicantData = [
    {
      id: "app-custom-1",
      jobId: "job-3",
      jobTitle: "Customer Service Learnership (NQF 4)",
      company: "Standard Bank",
      applicantName: "Lerato Khumalo",
      applicantEmail: "lerato.khumalo@gmail.com",
      applicantPhone: "083 456 7890",
      applicantLocation: "Soweto, Gauteng",
      applicantAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
      applicantMessage: "I recently matriculated and would love to enter the banking sector through this learnership. I am taxi-accessible and live in Soweto.",
      appliedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      status: "Reviewing",
      saqaVetted: false,
      commuteFeasibility: "High (Local Commute, Soweto BRT)",
      popiaConsent: true,
      consentTimestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      skills: "Communication, Fluent in isiZulu & English, Matric",
      experience: "• Volunteer Assistant, local clinic (2024)\n• Debate Team Captain, Soweto High School (2023)",
      education: "• National Senior Certificate (Matric), Soweto High School (2023)\n• Free online Introduction to Customer Care course (2024)"
    },
    {
      id: "app-custom-2",
      jobId: "job-1",
      jobTitle: "Cloud Infrastructure Engineer",
      company: "Vodacom",
      applicantName: "Mandla Ndlovu",
      applicantEmail: "mandla.ndlovu@outlook.com",
      applicantPhone: "072 987 6543",
      applicantLocation: "Centurion, Gauteng",
      applicantAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
      applicantMessage: "Cloud Engineer with 4 years experience. I live in Centurion, making my commute to Midrand extremely quick via the Gautrain link.",
      appliedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      status: "Applied",
      saqaVetted: true,
      commuteFeasibility: "High (Gautrain Centurion to Midrand)",
      popiaConsent: true,
      consentTimestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      skills: "AWS, Kubernetes, Terraform, Python",
      experience: "• Cloud Consultant, TechSolutions SA (2023 - Present)\n• Junior System Engineer, Cape Cloud Co. (2021 - 2023)",
      education: "• BSc Computer Science, University of Witwatersrand (2020)\n• AWS Solutions Architect Professional (2024)"
    },
    {
      id: "app-custom-3",
      jobId: "job-3",
      jobTitle: "Customer Service Learnership (NQF 4)",
      company: "Standard Bank",
      applicantName: "Thabo Mokoena",
      applicantEmail: "thabo.mokoena@gmail.com",
      applicantPhone: "084 111 2222",
      applicantLocation: "Pretoria Central, Gauteng",
      applicantAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
      applicantMessage: "Matriculant looking for a NQF 4 stipend program. I can travel via MetroRail or minibus taxi hubs.",
      appliedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      status: "Applied",
      saqaVetted: false,
      commuteFeasibility: "Medium (Pretoria to Soweto - Taxi commute)",
      popiaConsent: true,
      consentTimestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
      skills: "Microsoft Excel, Customer Relations, Fluent in Sotho & English",
      experience: "• Cashier, local Spaza shop (2023)\n• School Prefect (2022)",
      education: "• National Senior Certificate, Pretoria Central High (2022)"
    }
  ];
  localStorage.setItem("siyaphambili_applications", JSON.stringify(applicantData));
}

// ----------------------------------------------------
// Persona Toggle Logic
// ----------------------------------------------------
function togglePersona() {
  const toggleBtn = document.getElementById("persona-toggle");
  const candidateContainer = document.getElementById("candidate-view-container");
  const recruiterContainer = document.getElementById("recruiter-view-container");
  const subtitle = document.getElementById("platform-subtitle");
  const tagline = document.getElementById("platform-tagline");

  if (activePersona === "candidate") {
    activePersona = "recruiter";
    toggleBtn.innerHTML = "👨‍🎓 Candidate Board";
    toggleBtn.classList.add("persona-active");
    
    candidateContainer.classList.add("hidden");
    recruiterContainer.classList.remove("hidden");
    
    subtitle.innerHTML = "Enterprise Recruitment & Verification Console";
    tagline.innerHTML = "Audit qualifications, evaluate transit compatibility, and manage BEE Scorecard incentives.";
    
    renderRecruiterConsole();
  } else {
    activePersona = "candidate";
    toggleBtn.innerHTML = "💼 Recruiter Console";
    toggleBtn.classList.remove("persona-active");
    
    candidateContainer.classList.remove("hidden");
    recruiterContainer.classList.add("hidden");
    
    subtitle.innerHTML = "Mzansi's Premium Enterprise Talent Platform";
    tagline.innerHTML = "Bridging the spatial divide and accelerating youth potential";
    
    renderJobs();
    renderApplications();
  }
}

// Helper to determine category groupings matching mockup sections
function getJobCategory(job) {
  const title = job.title.toLowerCase();
  const type = job.opportunityType;

  if (type === "learnership" || type === "internship") {
    return "learnerships";
  } else if (title.includes("frontend") || title.includes("developer") || title.includes("engineer") || job.skills.includes("AWS")) {
    return "tech";
  } else {
    return "corporate";
  }
}

// ----------------------------------------------------
// Candidate Job Board Rendering (Grouped by Category matching mockup)
// ----------------------------------------------------
function renderJobs(jobArray = jobs) {
  const wrapper = document.getElementById("job-categories-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = "";

  // Split into categories
  const categories = {
    tech: { title: "Tech Jobs", list: [] },
    corporate: { title: "Corporate Jobs", list: [] },
    learnerships: { title: "Learnerships & Internships", list: [] }
  };

  jobArray.forEach(job => {
    const cat = getJobCategory(job);
    categories[cat].list.push(job);
  });

  // Render each category section
  let totalRendered = 0;
  for (const key in categories) {
    const cat = categories[key];
    if (cat.list.length === 0) continue;

    totalRendered += cat.list.length;

    const section = document.createElement("div");
    section.className = "job-category-section";
    section.innerHTML = `<h2 class="category-header">${cat.title}</h2>`;

    const grid = document.createElement("div");
    grid.className = "ag-courses_box";

    cat.list.forEach((job) => {
      const card = document.createElement("div");
      card.className = `ag-courses_item ${job.featured ? 'featured-card' : ''}`;
      
      const formattedSalary = job.salary 
        ? `R${job.salary.toLocaleString('en-ZA')} / month`
        : "Market Related";

      const transitBadges = job.transit.map(t => 
        `<span class="badge badge-transit"><span class="badge-icon">📍</span> ${t}</span>`
      ).join("");

      const verifyBadges = job.verificationRequired.map(v => {
        const cls = v === "SAQA Checked" ? "badge-saqa" : "badge-id";
        const icon = v === "SAQA Checked" ? "🎓" : "👤";
        return `<span class="badge ${cls}"><span class="badge-icon">${icon}</span> ${v}</span>`;
      }).join("");

      const skillsTags = job.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
      ).join("");

      const opportunityLabel = job.opportunityType.charAt(0).toUpperCase() + job.opportunityType.slice(1);

      card.innerHTML = `
        <div class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
          
          <div class="card-header">
            <img class="company-logo" src="${job.logo || 'https://images.unsplash.com/photo-1549813069-f9c340974ad0?auto=format&fit=crop&w=100&h=100&q=80'}" alt="${job.company} logo" loading="lazy" />
            <div class="company-meta">
              <span class="company-name">${job.company}</span>
              <span class="opp-type-badge type-${job.opportunityType}">${opportunityLabel}</span>
            </div>
          </div>

          <div class="ag-courses-item_title">${job.title}</div>
          
          <div class="card-details">
            <div class="detail-row location-row">
              <strong>📍 Location:</strong> <span>${job.location}</span>
            </div>
            <div class="detail-row salary-row">
              <strong>💵 Salary:</strong> <span class="salary-amount">${formattedSalary}</span>
            </div>
          </div>

          <div class="badge-container">
            ${transitBadges}
            ${verifyBadges}
          </div>

          <div class="skills-container">
            ${skillsTags}
          </div>

          <div class="card-actions">
            <button class="btn-secondary view-details-btn" data-id="${job.id}">View Details</button>
            <button class="btn-primary apply-now-btn" data-id="${job.id}">Apply</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    wrapper.appendChild(section);
  }

  if (totalRendered === 0) {
    wrapper.innerHTML = `
      <div class="no-results" style="width:100%;">
        <h3>No matches found</h3>
        <p>Try broadening your filters or category checkboxes. Looking for Learnerships or Entry-level positions?</p>
      </div>
    `;
    return;
  }

  // Attach Action Listeners
  document.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const jobId = e.target.dataset.id;
      const job = jobs.find(j => j.id === jobId);
      if (job) openJobModal(job);
    });
  });

  document.querySelectorAll(".apply-now-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const jobId = e.target.dataset.id;
      const job = jobs.find(j => j.id === jobId);
      if (job) openApplyModal(job);
    });
  });
}

// ----------------------------------------------------
// Modals View Managers
// ----------------------------------------------------
function openJobModal(job) {
  const modal = document.getElementById("job-modal");
  if (!modal) return;

  const formattedSalary = job.salary 
    ? `R${job.salary.toLocaleString('en-ZA')} / month`
    : "Market Related";

  const isApplied = applicantData.some(app => app.jobId === job.id && app.applicantEmail === (JSON.parse(localStorage.getItem("siyaphambili_cv"))?.email || "dummy"));

  document.getElementById("modal-title").innerText = job.title;
  document.getElementById("modal-company").innerText = `${job.company} (${job.location})`;
  document.getElementById("modal-description").innerHTML = `
    <p class="modal-desc-text">${job.description}</p>
    <div class="modal-spec-grid">
      <div><strong>Opportunity Type:</strong> ${job.opportunityType.toUpperCase()}</div>
      <div><strong>Employment Type:</strong> ${job.type.toUpperCase()}</div>
      <div><strong>Salary Offer:</strong> ${formattedSalary}</div>
      <div><strong>Required Vetting:</strong> ${job.verificationRequired.join(", ")}</div>
      <div><strong>Transport Options:</strong> ${job.transit.join(", ")}</div>
    </div>
  `;

  const applyBtn = document.getElementById("modal-apply");
  if (applyBtn) {
    if (isApplied) {
      applyBtn.innerText = "Applied";
      applyBtn.classList.add("disabled");
      applyBtn.style.pointerEvents = "none";
    } else {
      applyBtn.innerText = "Apply Now";
      applyBtn.classList.remove("disabled");
      applyBtn.style.pointerEvents = "auto";
      applyBtn.onclick = () => {
        closeModals();
        openApplyModal(job);
      };
    }
  }

  modal.classList.remove("hidden");
}

function openApplyModal(job) {
  const modal = document.getElementById("apply-modal");
  if (!modal) return;

  document.getElementById("modal-job-title").textContent = `Apply for: ${job.title} at ${job.company}`;
  
  const form = document.getElementById("application-form");
  form.dataset.jobId = job.id;
  form.dataset.jobTitle = job.title;
  form.dataset.company = job.company;

  const draftCover = localStorage.getItem(`siyaphambili_apply_draft_${job.id}`);
  if (draftCover) {
    document.getElementById("applicant-message").value = draftCover;
  } else {
    document.getElementById("applicant-message").value = "";
  }

  const savedCV = JSON.parse(localStorage.getItem("siyaphambili_cv")) || JSON.parse(localStorage.getItem("siyaphambili_cv_draft"));
  if (savedCV) {
    document.getElementById("applicant-name").value = savedCV.name || "";
    document.getElementById("applicant-email").value = savedCV.email || "";
  }

  document.getElementById("apply-popia-consent").checked = false;

  modal.classList.remove("hidden");
}

function closeModals() {
  document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
}

// ----------------------------------------------------
// Filters Action (Matching Range inputs and Category checkboxes)
// ----------------------------------------------------
function applyFilters() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  
  // Category checks
  const catTechChecked = document.getElementById("cat-tech").checked;
  const catCorpChecked = document.getElementById("cat-corporate").checked;
  const catLearnChecked = document.getElementById("cat-learnership").checked;

  const provinceSelect = document.getElementById("filter-location-dropdown").value;
  
  // Sliders
  const experienceVal = parseInt(document.getElementById("filter-experience-slider").value); // range slider
  const maxSalaryLimit = parseFloat(document.getElementById("filter-salary-slider").value); // range slider

  // Transit checks
  const gautrainChecked = document.getElementById("transit-gautrain")?.checked;
  const mycitiChecked = document.getElementById("transit-myciti")?.checked;
  const taxiChecked = document.getElementById("transit-taxi")?.checked;

  // Verification checks
  const saqaChecked = document.getElementById("verify-saqa")?.checked;

  const filtered = jobs.filter(job => {
    // 1. Keyword search
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.skills.some(skill => skill.toLowerCase().includes(query));

    // 2. Category Checkboxes
    const category = getJobCategory(job);
    let matchesCategory = false;
    if (category === "tech" && catTechChecked) matchesCategory = true;
    if (category === "corporate" && catCorpChecked) matchesCategory = true;
    if (category === "learnerships" && catLearnChecked) matchesCategory = true;

    // 3. Location Dropdown
    const matchesLocation = !provinceSelect || job.location.includes(provinceSelect);

    // 4. Experience Threshold (Mock mapping: 0 = all, 3 = Entry+, 7 = experienced+)
    let matchesExperience = true;
    if (experienceVal > 0) {
      if (experienceVal <= 3 && job.opportunityType === "experienced" && job.salary > 30000) matchesExperience = false;
      if (experienceVal > 3 && experienceVal <= 6 && (job.opportunityType === "learnership" || job.opportunityType === "internship")) matchesExperience = false;
      if (experienceVal > 6 && job.opportunityType !== "experienced") matchesExperience = false;
    }

    // 5. Salary Range (Upper bounds max check)
    const jobSalary = job.salary || 0;
    const matchesSalary = jobSalary <= maxSalaryLimit;

    // 6. Transit options
    let matchesTransit = true;
    if (gautrainChecked && !job.transit.some(t => t.toLowerCase().includes("gautrain"))) matchesTransit = false;
    if (mycitiChecked && !job.transit.some(t => t.toLowerCase().includes("myciti"))) matchesTransit = false;
    if (taxiChecked && !job.transit.some(t => t.toLowerCase().includes("taxi"))) matchesTransit = false;

    // 7. Vetting check
    let matchesVerification = true;
    if (saqaChecked && !job.verificationRequired.includes("SAQA Checked")) matchesVerification = false;

    return matchesQuery && 
           matchesCategory && 
           matchesLocation && 
           matchesExperience && 
           matchesSalary && 
           matchesTransit && 
           matchesVerification;
  });

  renderJobs(filtered);
}

function updateFastOpportunityButtonStyles() {
  const ftBtn = document.getElementById("fulltime-btn");
  const rmBtn = document.getElementById("remote-btn");
  
  if (ftBtn) ftBtn.classList.toggle("active", activeOpportunityFilter === "learnership");
  if (rmBtn) rmBtn.classList.toggle("active-pill", activeOpportunityFilter === "internship");
}

// ----------------------------------------------------
// Data Saver Controller
// ----------------------------------------------------
function toggleDataSaver() {
  const isDataSaver = document.body.classList.toggle("data-saver");
  localStorage.setItem("siyaphambili_datasaver", isDataSaver);
  updateDataSaverButton();
}

function updateDataSaverButton() {
  const btn = document.getElementById("datasaver-toggle");
  if (!btn) return;
  const isActive = document.body.classList.contains("data-saver");
  if (isActive) {
    btn.innerHTML = "⚡ Data-Saver: ON";
    btn.classList.add("datasaver-active");
  } else {
    btn.innerHTML = "🍃 Data-Saver: OFF";
    btn.classList.remove("datasaver-active");
  }
}

// ----------------------------------------------------
// CV Builder Modules
// ----------------------------------------------------
function openCVBuilder() {
  const modal = document.getElementById("cv-modal");
  if (!modal) return;

  const savedCV = JSON.parse(localStorage.getItem("siyaphambili_cv_draft")) || JSON.parse(localStorage.getItem("siyaphambili_cv"));
  
  if (savedCV) {
    document.getElementById("cv-name").value = savedCV.name || "";
    document.getElementById("cv-email").value = savedCV.email || "";
    document.getElementById("cv-phone").value = savedCV.phone || "";
    document.getElementById("cv-location").value = savedCV.location || "";
    document.getElementById("cv-title").value = savedCV.title || "";
    document.getElementById("cv-summary").value = savedCV.summary || "";
    document.getElementById("cv-experience").value = savedCV.experience || "";
    document.getElementById("cv-education").value = savedCV.education || "";
    
    const skillList = savedCV.skills ? savedCV.skills.split(",").map(s => s.trim()) : [];
    document.querySelectorAll("#cv-skills-selector-grid .skill-pill").forEach(pill => {
      const skillName = pill.dataset.skill;
      pill.classList.toggle("active-pill", skillList.includes(skillName));
    });
    document.getElementById("cv-skills").value = savedCV.skills || "";
  } else {
    document.querySelectorAll("#cv-skills-selector-grid .skill-pill").forEach(p => p.classList.remove("active-pill"));
    document.getElementById("cv-skills").value = "";
  }

  document.getElementById("cv-popia-consent").checked = false;

  modal.classList.remove("hidden");
  previewCV();
}

function saveCV() {
  const popiaConsent = document.getElementById("cv-popia-consent").checked;
  if (!popiaConsent) {
    alert("POPI Act authorization is required to cache your CV data securely on this browser.");
    return;
  }

  const cvData = {
    name: document.getElementById("cv-name").value,
    email: document.getElementById("cv-email").value,
    phone: document.getElementById("cv-phone").value,
    location: document.getElementById("cv-location").value,
    title: document.getElementById("cv-title").value,
    summary: document.getElementById("cv-summary").value,
    skills: document.getElementById("cv-skills").value,
    experience: document.getElementById("cv-experience").value,
    education: document.getElementById("cv-education").value,
    popiaConsent: true,
    consentTimestamp: new Date().toISOString()
  };

  localStorage.setItem("siyaphambili_cv", JSON.stringify(cvData));
  localStorage.removeItem("siyaphambili_cv_draft");
  
  alert("CV details saved successfully in local cache (POPIA secured)!");
  previewCV();
}

function previewCV() {
  const container = document.getElementById("cv-preview-container");
  if (!container) return;

  const cv = {
    name: document.getElementById("cv-name").value || "Your Name",
    email: document.getElementById("cv-email").value || "email@example.com",
    phone: document.getElementById("cv-phone").value || "082 123 4567",
    location: document.getElementById("cv-location").value || "City, South Africa",
    title: document.getElementById("cv-title").value || "Professional Title",
    summary: document.getElementById("cv-summary").value || "Enter a short professional summary...",
    skills: document.getElementById("cv-skills").value || "No skills selected yet",
    experience: document.getElementById("cv-experience").value || "Describe past roles, volunteer work or school leadership...",
    education: document.getElementById("cv-education").value || "Matric, Degrees, Certifications..."
  };

  container.innerHTML = `
    <div class="print-cv-document">
      <div class="print-cv-header">
        <h1>${cv.name}</h1>
        <h3>${cv.title}</h3>
        <p class="print-cv-contact">
          📧 ${cv.email} | 📞 ${cv.phone} | 📍 ${cv.location}
        </p>
      </div>
      
      <div class="print-cv-section">
        <h4 class="section-title">Professional Summary</h4>
        <p>${cv.summary.replace(/\n/g, '<br>')}</p>
      </div>

      <div class="print-cv-section">
        <h4 class="section-title">Core Skills & Licenses</h4>
        <p>${cv.skills.split(",").join(", ")}</p>
      </div>

      <div class="print-cv-section">
        <h4 class="section-title">Work & Leadership Experience</h4>
        <p>${cv.experience.replace(/\n/g, '<br>')}</p>
      </div>

      <div class="print-cv-section">
        <h4 class="section-title">Education & Certifications</h4>
        <p>${cv.education.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
  `;
}

function printCV() {
  const popiaConsent = document.getElementById("cv-popia-consent").checked;
  if (!popiaConsent) {
    alert("POPI Act authorization is required to export your CV details.");
    return;
  }
  
  saveCV();
  
  let printDiv = document.getElementById("cv-print-area");
  if (!printDiv) {
    printDiv = document.createElement("div");
    printDiv.id = "cv-print-area";
    document.body.appendChild(printDiv);
  }

  printDiv.innerHTML = document.getElementById("cv-preview-container").innerHTML;
  window.print();
}

function triggerDraftIndicator(type) {
  const label = document.getElementById(`${type}-draft-status`);
  if (!label) return;

  label.textContent = "⚡ Draft saved offline";
  label.classList.add("draft-status-visible");

  setTimeout(() => {
    label.classList.remove("draft-status-visible");
  }, 1500);
}

// ----------------------------------------------------
// Candidate Application Dashboard Tracker
// ----------------------------------------------------
function renderApplications() {
  const container = document.getElementById("applicant-dashboard-list");
  if (!container) return;

  const candidateCV = JSON.parse(localStorage.getItem("siyaphambili_cv"));
  const candEmail = candidateCV ? candidateCV.email : "";
  const activeCandidateApps = applicantData.filter(app => !candEmail || app.applicantEmail === candEmail);

  container.innerHTML = "";

  if (activeCandidateApps.length === 0) {
    container.innerHTML = `
      <div class="empty-dashboard">
        <p>No job applications submitted yet. Your submitted roles will track here in real time.</p>
      </div>
    `;
    return;
  }

  activeCandidateApps.forEach((app) => {
    const item = document.createElement("div");
    item.className = "dashboard-app-card";
    
    let statusClass = "status-applied";
    if (app.status === "Reviewing") statusClass = "status-reviewing";
    if (app.status === "Shortlisted") statusClass = "status-shortlisted";
    if (app.status === "Offer Made" || app.status === "Hired") statusClass = "status-hired";

    item.innerHTML = `
      <div class="dash-meta">
        <strong>${app.jobTitle}</strong>
        <span>${app.company}</span>
      </div>
      <div class="dash-details">
        <span>Applied: ${new Date(app.appliedAt).toLocaleDateString('en-ZA')}</span>
        <span class="dash-status-pill ${statusClass}">${app.status}</span>
      </div>
      <button class="btn-text-danger withdraw-btn" data-id="${app.jobId}" data-time="${app.appliedAt}">Withdraw</button>
    `;

    container.appendChild(item);
  });

  // Attach Withdraw actions
  document.querySelectorAll(".withdraw-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const jId = e.target.dataset.id;
      const appliedTime = e.target.dataset.time;
      if (confirm("Are you sure you want to withdraw this application?")) {
        applicantData = applicantData.filter(a => !(a.jobId === jId && a.appliedAt === appliedTime));
        localStorage.setItem("siyaphambili_applications", JSON.stringify(applicantData));
        renderApplications();
        renderJobs();
      }
    });
  });
}

// ----------------------------------------------------
// RECRUITER CONSOLE RENDERING MODULES
// ----------------------------------------------------
function renderRecruiterConsole() {
  const tableBody = document.getElementById("recruiter-table-body");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  const recruiterJobs = jobs.filter(j => 
    ["Vodacom", "Standard Bank", "Sasol"].includes(j.company) || customJobs.some(cj => cj.id === j.id)
  );

  recruiterJobs.forEach(job => {
    const jobApps = applicantData.filter(a => a.jobId === job.id);
    const row = document.createElement("tr");
    if (selectedRecruiterJobId === job.id) {
      row.className = "active-row";
    }

    row.innerHTML = `
      <td><strong>${job.title}</strong><br><small style="color:var(--text-muted);">${job.company}</small></td>
      <td>${job.location}</td>
      <td><span class="recruiter-job-badge">${jobApps.length} Applicants</span></td>
      <td><span class="text-green" style="font-weight:700;">Open</span></td>
      <td>12 Oct</td>
      <td><button class="btn-pill" style="padding:2px 8px;">...</button></td>
    `;

    row.addEventListener("click", () => {
      selectedRecruiterJobId = job.id;
      renderRecruiterConsole();
      renderRecruiterApplicants(job.id);
    });

    tableBody.appendChild(row);
  });

  if (selectedRecruiterJobId) {
    renderRecruiterApplicants(selectedRecruiterJobId);
  } else {
    document.getElementById("recruiter-applicant-list").innerHTML = `
      <div class="select-listing-prompt">
        <p>Select one of your active listings from the table above to screen applicant CVs and credentials.</p>
      </div>
    `;
    document.getElementById("export-shortlist-btn").classList.add("hidden");
  }

  calculateBEEIncentives(recruiterJobs);
}

// BEE and Section 12H Tax Calculator
function calculateBEEIncentives(recruiterJobs) {
  const activeLearnersEl = document.getElementById("bee-active-learners");
  const taxAllowanceEl = document.getElementById("bee-tax-deduction");
  const currentSavingsEl = document.getElementById("bee-current-savings");
  const projectedSavingsEl = document.getElementById("bee-projected-savings");

  if (!activeLearnersEl || !taxAllowanceEl) return;

  const recruiterJobIds = recruiterJobs.map(rj => rj.id);
  const activeVettedApps = applicantData.filter(app => 
    recruiterJobIds.includes(app.jobId) && 
    ["Reviewing", "Shortlisted", "Offer Made", "Hired"].includes(app.status)
  );

  const learnershipCount = activeVettedApps.filter(app => {
    const job = jobs.find(j => j.id === app.jobId);
    return job && (job.opportunityType === "learnership" || job.opportunityType === "internship");
  }).length;

  // Render BEE circular progress percentage and points estimate
  const beePointsPercent = document.getElementById("bee-points-percentage");
  if (beePointsPercent) {
    // 88.5% default, adds 3% per active placement
    const calculatedPoints = 88.5 + (learnershipCount * 3);
    beePointsPercent.textContent = `${Math.min(calculatedPoints, 100).toFixed(1)}%`;
    document.querySelector(".gauge-lbl").textContent = `${calculatedPoints.toFixed(1)} Points`;
    
    // Animate circular dash offset
    const circle = document.querySelector(".progress-ring__circle");
    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (Math.min(calculatedPoints, 100) / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }
  }

  // 12H Tax allowance calculations: R40,000 allowance per learner
  const totalTaxAllowance = 165000 + (learnershipCount * 40000);
  
  taxAllowanceEl.textContent = `R${totalTaxAllowance.toLocaleString('en-ZA')}`;
  currentSavingsEl.textContent = `R165,000`;
  projectedSavingsEl.textContent = `R${(learnershipCount * 40000).toLocaleString('en-ZA')}`;
}

// Renders the list of applicants for a selected recruiter job (Tabbed Mockup View)
function renderRecruiterApplicants(jobId) {
  const container = document.getElementById("recruiter-applicant-list");
  if (!container) return;
  container.innerHTML = "";

  const jobApps = applicantData.filter(a => a.jobId === jobId);

  if (jobApps.length === 0) {
    container.innerHTML = `
      <div class="select-listing-prompt">
        <p>No candidates have applied to this position yet.</p>
      </div>
    `;
    document.getElementById("export-shortlist-btn").classList.add("hidden");
    return;
  }

  document.getElementById("export-shortlist-btn").classList.remove("hidden");

  const job = jobs.find(j => j.id === jobId);

  jobApps.forEach((app) => {
    const card = document.createElement("div");
    card.className = "applicant-profile-card";

    // Commute feasibility classes
    let feasibilityClass = "feasibility-medium";
    if (app.commuteFeasibility?.includes("High") || job.remote) {
      feasibilityClass = "feasibility-high";
    } else if (app.commuteFeasibility?.includes("Low")) {
      feasibilityClass = "feasibility-low";
    }
    const feasibilityLabel = job.remote ? "High (Remote Work)" : (app.commuteFeasibility || "Medium Feasibility");

    // Initialize active tab state if not present
    if (!activeRecruiterTabs[app.id]) {
      activeRecruiterTabs[app.id] = "summary";
    }
    const activeTab = activeRecruiterTabs[app.id];

    // Build Tab Content
    let tabContentHTML = "";
    if (activeTab === "summary") {
      tabContentHTML = `
        <div class="tab-content">
          <p style="margin-bottom:12px; font-style:italic; color:var(--text-primary);">"${app.applicantMessage || 'No profile cover letter note provided.'}"</p>
          <div class="tab-info-row">
            <strong>📍 Suburb/City:</strong> <span>${app.applicantLocation || 'Not specified'}</span>
          </div>
          <div class="tab-info-row">
            <strong>🚇 Transit Access:</strong> <span>${feasibilityLabel}</span>
          </div>
          <div class="tab-info-row">
            <strong>📜 Consent:</strong> <span class="text-green">POPIA Authorized & Logged</span>
          </div>
        </div>
      `;
    } else if (activeTab === "experience") {
      const expList = app.experience ? app.experience.split("\n") : ["• No work experience entered."];
      tabContentHTML = `
        <div class="tab-content">
          ${expList.map(e => `<p style="margin-bottom:6px;">${e}</p>`).join("")}
        </div>
      `;
    } else if (activeTab === "education") {
      const eduList = app.education ? app.education.split("\n") : ["• No education details listed."];
      tabContentHTML = `
        <div class="tab-content">
          ${eduList.map(e => `<p style="margin-bottom:6px;">${e}</p>`).join("")}
        </div>
      `;
    } else if (activeTab === "attachments") {
      tabContentHTML = `
        <div class="tab-content">
          <div class="attachment-item">
            <span>📄 Resume_${app.applicantName.replace(/[^a-zA-Z]+/g, '_')}.pdf</span>
            <button class="btn-pill" style="font-size:0.75rem; padding:2px 8px;" onclick="alert('Downloading candidate PDF resume...')">Download</button>
          </div>
          <div class="attachment-item">
            <span>🎓 Matric_Certificate_Verified.pdf</span>
            <button class="btn-pill" style="font-size:0.75rem; padding:2px 8px;" onclick="alert('Downloading verified national matric certificate...')">Download</button>
          </div>
        </div>
      `;
    }

    // SAQA checked/vetting logic
    const vettingBadgeHTML = app.saqaVetted
      ? `<span class="vetted-pill-filled">🎓 SAQA VETTED</span>`
      : `<button class="vetting-badge-interactive run-saqa-btn" data-id="${app.jobId}" data-email="${app.applicantEmail}" data-time="${app.appliedAt}">🔍 Vett Qualifications</button>`;

    card.innerHTML = `
      <!-- Profile Header (Avatar and titles matching mockup) -->
      <div class="applicant-profile-header-card">
        <img class="applicant-avatar-circle" src="${app.applicantAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'}" alt="${app.applicantName} photo" />
        <div class="applicant-primary-info">
          <div class="applicant-title-row">
            <h4>${app.applicantName}</h4>
            ${app.saqaVetted ? vettingBadgeHTML : ''}
          </div>
          <span class="candidate-subtitle">${job.title} Candidate</span>
          <span style="font-size:0.8rem; color:var(--text-secondary); margin-top:2px;">Email: ${app.applicantEmail} | Phone: ${app.applicantPhone || '082 000 0000'}</span>
        </div>
      </div>

      <!-- Tabbed screening box matching mockup -->
      <div class="applicant-details-box">
        <div class="applicant-audit-tabs" data-appid="${app.id}">
          <span class="tab-link ${activeTab === 'summary' ? 'active-tab' : ''}" data-tab="summary">Summary</span>
          <span class="tab-link ${activeTab === 'experience' ? 'active-tab' : ''}" data-tab="experience">Experience</span>
          <span class="tab-link ${activeTab === 'education' ? 'active-tab' : ''}" data-tab="education">Education</span>
          <span class="tab-link ${activeTab === 'attachments' ? 'active-tab' : ''}" data-tab="attachments">Attachments</span>
        </div>
        
        <div class="tab-body-wrapper">
          ${tabContentHTML}
        </div>
      </div>

      <!-- Footer vetting and status choices -->
      <div class="audit-vetting-footer">
        <div class="vetting-badge-group">
          ${!app.saqaVetted ? vettingBadgeHTML : ''}
          <span class="badge badge-id">👤 ID Confirmed</span>
          <span class="commute-feasibility-pill ${feasibilityClass}">${feasibilityLabel}</span>
        </div>

        <div class="audit-action-btn-row">
          <div class="status-update-control">
            <label style="font-size:0.8rem; color:var(--text-secondary); font-weight:600;">Action Status:</label>
            <select class="status-select change-status-select" data-id="${app.jobId}" data-email="${app.applicantEmail}" data-time="${app.appliedAt}">
              <option value="Applied" ${app.status === 'Applied' ? 'selected' : ''}>Applied</option>
              <option value="Reviewing" ${app.status === 'Reviewing' ? 'selected' : ''}>Reviewing</option>
              <option value="Shortlisted" ${app.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
              <option value="Offer Made" ${app.status === 'Offer Made' ? 'selected' : ''}>Offer Made</option>
              <option value="Hired" ${app.status === 'Hired' ? 'selected' : ''}>Hired</option>
            </select>
          </div>
        </div>
      </div>
      <hr class="modal-divider" style="margin-top:20px; margin-bottom:10px;">
    `;

    container.appendChild(card);
  });

  // Attach Tab switcher links
  document.querySelectorAll(".applicant-audit-tabs").forEach(tabContainer => {
    const appid = tabContainer.dataset.appid;
    tabContainer.querySelectorAll(".tab-link").forEach(link => {
      link.addEventListener("click", function() {
        const tabName = this.dataset.tab;
        activeRecruiterTabs[appid] = tabName;
        // Re-render applicants list
        renderRecruiterApplicants(jobId);
      });
    });
  });

  // Attach SAQA check triggers
  document.querySelectorAll(".run-saqa-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const btnEl = e.target;
      const jId = btnEl.dataset.id;
      const email = btnEl.dataset.email;
      const time = btnEl.dataset.time;

      const app = applicantData.find(a => a.jobId === jId && a.applicantEmail === email && a.appliedAt === time);
      if (!app) return;

      const authorized = confirm(
        `POPIA AUDIT VERIFICATION:\n\nDo you authorize Siyaphambili to execute a qualification verification query for candidate "${app.applicantName}" against the SAQA NLRD database?\n\nEstimated Cost: R120.00 (will be billed to your recruiter profile).`
      );

      if (!authorized) return;

      btnEl.innerText = "Checking SAQA (Billing R120)...";
      btnEl.style.pointerEvents = "none";
      btnEl.style.opacity = "0.7";

      setTimeout(() => {
        app.saqaVetted = true;
        localStorage.setItem("siyaphambili_applications", JSON.stringify(applicantData));
        alert(`Verification Complete: ${app.applicantName}'s NQF Credentials verified against SAQA National Learners' Records Database successfully. R120 billed to your recruiter account.`);
        
        renderRecruiterConsole();
      }, 1500);
    });
  });

  // Attach Status Change Selector
  document.querySelectorAll(".change-status-select").forEach(select => {
    select.addEventListener("change", (e) => {
      const selectEl = e.target;
      const newStatus = selectEl.value;
      const jId = selectEl.dataset.id;
      const email = selectEl.dataset.email;
      const time = selectEl.dataset.time;

      const app = applicantData.find(a => a.jobId === jId && a.applicantEmail === email && a.appliedAt === time);
      if (app) {
        app.status = newStatus;
        localStorage.setItem("siyaphambili_applications", JSON.stringify(applicantData));
        renderRecruiterConsole();
      }
    });
  });
}

// ----------------------------------------------------
// Recruiter Exporter Script (CSV Generator)
// ----------------------------------------------------
function exportShortlistToCSV() {
  if (!selectedRecruiterJobId) return;

  const job = jobs.find(j => j.id === selectedRecruiterJobId);
  const jobApps = applicantData.filter(a => a.jobId === selectedRecruiterJobId);

  if (jobApps.length === 0) {
    alert("No candidates available to export.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Job Title,Company,Candidate Name,Email,Phone,Location,Commute Feasibility,SAQA Vetted,Application Date,Status,Profile Note\r\n";

  jobApps.forEach(app => {
    const safeName = app.applicantName.replace(/"/g, '""');
    const safeEmail = app.applicantEmail.replace(/"/g, '""');
    const safePhone = (app.applicantPhone || 'N/A').replace(/"/g, '""');
    const safeLocation = (app.applicantLocation || 'N/A').replace(/"/g, '""');
    const safeFeasibility = (app.commuteFeasibility || 'N/A').replace(/"/g, '""');
    const safeMessage = (app.applicantMessage || '').replace(/\r?\n|\r/g, ' ').replace(/"/g, '""');

    csvContent += `"${job.title}","${job.company}","${safeName}","${safeEmail}","${safePhone}","${safeLocation}","${safeFeasibility}","${app.saqaVetted ? 'Yes' : 'No'}","${new Date(app.appliedAt).toLocaleDateString('en-ZA')}","${app.status}","${safeMessage}"\r\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  const safeJobFilename = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
  link.setAttribute("download", `siyaphambili_applicants_${safeJobFilename}.csv`);
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
}

// ----------------------------------------------------
// Main Initialization Bindings
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialise Data Saver Mode State
  const localDataSaver = localStorage.getItem("siyaphambili_datasaver") === "true";
  if (localDataSaver) {
    document.body.classList.add("data-saver");
  }
  updateDataSaverButton();

  const dataSaverToggle = document.getElementById("datasaver-toggle");
  if (dataSaverToggle) {
    dataSaverToggle.addEventListener("click", toggleDataSaver);
  }

  // 2. Initialize Core Panels
  renderJobs();
  renderApplications();

  // 3. Setup Modal Close Button Handlers
  document.querySelectorAll(".close-modal-trigger, .close").forEach(btn => {
    btn.addEventListener("click", closeModals);
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModals();
    }
  });

  // 4. Setup Persona Switch
  const personaToggle = document.getElementById("persona-toggle");
  if (personaToggle) {
    personaToggle.addEventListener("click", togglePersona);
  }

  // 5. Setup Candidate Apply Form Submission
  const appForm = document.getElementById("application-form");
  if (appForm) {
    const coverTextarea = document.getElementById("applicant-message");
    coverTextarea.addEventListener("input", function() {
      const jobId = appForm.dataset.jobId;
      if (jobId) {
        localStorage.setItem(`siyaphambili_apply_draft_${jobId}`, this.value);
        triggerDraftIndicator("apply");
      }
    });

    appForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const popiaChecked = document.getElementById("apply-popia-consent").checked;
      if (!popiaChecked) {
        alert("Legal consent is required to process your application under POPIA.");
        return;
      }

      const jobId = this.dataset.jobId;
      const jobTitle = this.dataset.jobTitle;
      const company = this.dataset.company;
      
      const applicantName = document.getElementById("applicant-name").value;
      const applicantEmail = document.getElementById("applicant-email").value;
      const applicantMessage = document.getElementById("applicant-message").value;

      const savedCV = JSON.parse(localStorage.getItem("siyaphambili_cv")) || JSON.parse(localStorage.getItem("siyaphambili_cv_draft"));
      const candLocation = savedCV ? savedCV.location : "Soweto, Gauteng";
      const candPhone = savedCV ? savedCV.phone : "082 123 4567";
      const candSkills = savedCV ? savedCV.skills : "";
      const candExperience = savedCV ? savedCV.experience : "";
      const candEducation = savedCV ? savedCV.education : "";

      const job = jobs.find(j => j.id === jobId);
      let commuteMatch = "Medium Feasibility (Taxi Transit)";
      if (job) {
        if (job.remote) commuteMatch = "High (Remote Work)";
        else if (job.transit.includes("Gautrain Proximity") && candLocation.includes("Centurion")) {
          commuteMatch = "High (Gautrain Proximity)";
        } else if (candLocation.toLowerCase().includes("soweto") && job.location.toLowerCase().includes("soweto")) {
          commuteMatch = "High (Local Commute, R15 Taxi)";
        }
      }

      const newApp = {
        id: `app-custom-${Date.now()}`,
        jobId,
        jobTitle,
        company,
        applicantName,
        applicantEmail,
        applicantPhone: candPhone,
        applicantLocation: candLocation,
        applicantAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80", // female/neutral photo placeholder
        applicantMessage,
        appliedAt: new Date().toISOString(),
        status: "Applied",
        saqaVetted: false,
        commuteFeasibility: commuteMatch,
        popiaConsent: true,
        consentTimestamp: new Date().toISOString(),
        skills: candSkills || "Matric (Grade 12)",
        experience: candExperience || "• No work history supplied.",
        education: candEducation || "• National Senior Certificate (Matric)"
      };

      applicantData.push(newApp);
      localStorage.setItem("siyaphambili_applications", JSON.stringify(applicantData));
      
      localStorage.removeItem(`siyaphambili_apply_draft_${jobId}`);

      alert(`Application for ${jobTitle} submitted successfully! Siyaphambili wishes you the best of luck.`);
      
      this.reset();
      closeModals();
      renderApplications();
      renderJobs();
    });
  }

  // 6. Fast Opportunity Category buttons
  const ftBtn = document.getElementById("fulltime-btn");
  if (ftBtn) {
    ftBtn.addEventListener("click", () => {
      toggleOpportunityFilter("learnership");
    });
  }

  const rmBtn = document.getElementById("remote-btn");
  if (rmBtn) {
    rmBtn.addEventListener("click", () => {
      toggleOpportunityFilter("internship");
    });
  }

  // 7. Search input binding
  const searchField = document.getElementById("searchInput");
  if (searchField) {
    searchField.addEventListener("input", applyFilters);
  }

  // 8. CV Builder Draft Saving & Tag selector
  const cvBtn = document.getElementById("cvbuilder-toggle");
  if (cvBtn) {
    cvBtn.addEventListener("click", openCVBuilder);
  }

  const cvForm = document.getElementById("cv-form");
  if (cvForm) {
    cvForm.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("input", () => {
        const cvData = {
          name: document.getElementById("cv-name").value,
          email: document.getElementById("cv-email").value,
          phone: document.getElementById("cv-phone").value,
          location: document.getElementById("cv-location").value,
          title: document.getElementById("cv-title").value,
          summary: document.getElementById("cv-summary").value,
          skills: document.getElementById("cv-skills").value,
          experience: document.getElementById("cv-experience").value,
          education: document.getElementById("cv-education").value
        };
        localStorage.setItem("siyaphambili_cv_draft", JSON.stringify(cvData));
        triggerDraftIndicator("cv");
        previewCV();
      });
    });

    document.querySelectorAll("#cv-skills-selector-grid .skill-pill").forEach(pill => {
      pill.addEventListener("click", function() {
        this.classList.toggle("active-pill");

        const activeSkills = [];
        document.querySelectorAll("#cv-skills-selector-grid .skill-pill.active-pill").forEach(ap => {
          activeSkills.push(ap.dataset.skill);
        });

        const skillsString = activeSkills.join(", ");
        document.getElementById("cv-skills").value = skillsString;

        const cvData = {
          name: document.getElementById("cv-name").value,
          email: document.getElementById("cv-email").value,
          phone: document.getElementById("cv-phone").value,
          location: document.getElementById("cv-location").value,
          title: document.getElementById("cv-title").value,
          summary: document.getElementById("cv-summary").value,
          skills: skillsString,
          experience: document.getElementById("cv-experience").value,
          education: document.getElementById("cv-education").value
        };
        localStorage.setItem("siyaphambili_cv_draft", JSON.stringify(cvData));
        triggerDraftIndicator("cv");
        previewCV();
      });
    });

    document.getElementById("cv-save-btn")?.addEventListener("click", saveCV);
    document.getElementById("cv-print-btn")?.addEventListener("click", printCV);
  }

  // 9. Employer Modal Triggers / Menu list triggers
  const postJobTrigger = document.getElementById("post-job-trigger");
  if (postJobTrigger) {
    postJobTrigger.addEventListener("click", () => {
      document.getElementById("post-job-modal").classList.remove("hidden");
    });
  }
  
  // Connect left menu links to alerts or posting modal
  document.querySelectorAll(".recruiter-menu-list .menu-item").forEach(item => {
    item.addEventListener("click", function() {
      const view = this.dataset.view;
      if (view === "jobs") {
        document.getElementById("post-job-modal").classList.remove("hidden");
      } else if (view !== "dashboard") {
        alert(`Recruiter sub-menu "${view.toUpperCase()}" is fully structured and active. Sub-tables will populate automatically.`);
      }
    });
  });

  // 10. Recruiter Job Post Submission Form
  const postJobForm = document.getElementById("post-job-form");
  if (postJobForm) {
    postJobForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const title = document.getElementById("post-title").value;
      const company = document.getElementById("post-company").value;
      const opportunityType = document.getElementById("post-opportunity").value;
      const province = document.getElementById("post-province").value;
      const location = document.getElementById("post-location").value;
      const salary = parseFloat(document.getElementById("post-salary").value) || 0;
      const duration = document.getElementById("post-duration").value;
      const skillsInput = document.getElementById("post-skills").value;
      const description = document.getElementById("post-desc").value;

      const transitArray = [];
      if (document.getElementById("post-transit-gautrain").checked) transitArray.push("Gautrain Proximity");
      if (document.getElementById("post-transit-myciti").checked) transitArray.push("MyCiTi Route");
      if (document.getElementById("post-transit-taxi").checked) transitArray.push("Minibus Taxi Hub");
      if (transitArray.length === 0) transitArray.push("Own Transport Required");

      const vettingArray = [];
      if (document.getElementById("post-verify-saqa").checked) vettingArray.push("SAQA Checked");
      if (document.getElementById("post-verify-id").checked) vettingArray.push("ID Verified");

      const skillsArray = skillsInput ? skillsInput.split(",").map(s => s.trim()) : ["Communication"];

      const newJob = {
        id: `job-custom-${Date.now()}`,
        title,
        company,
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&h=100&q=80",
        location: `${location}, ${province}`,
        province,
        salary,
        type: duration,
        opportunityType,
        remote: document.getElementById("post-remote").checked,
        transit: transitArray,
        skills: skillsArray,
        description,
        applyLink: "#",
        verificationRequired: vettingArray,
        featured: false
      };

      customJobs.push(newJob);
      localStorage.setItem("siyaphambili_posted_jobs", JSON.stringify(customJobs));

      jobs = [...defaultJobs, ...customJobs];

      alert(`Job Listing for "${title}" posted successfully in Siyaphambili!`);

      this.reset();
      closeModals();
      renderRecruiterConsole();
    });
  }

  // 11. Recruiter Export Shortcut Binding
  const exportBtn = document.getElementById("export-shortlist-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportShortlistToCSV);
  }

  // 12. Connect range input label listeners
  const salarySlider = document.getElementById("filter-salary-slider");
  if (salarySlider) {
    salarySlider.addEventListener("input", function() {
      const val = parseFloat(this.value);
      document.getElementById("filter-salary-slider").value = val;
      document.getElementById("salary-slider-val").textContent = `Max: R${val.toLocaleString('en-ZA')}`;
      applyFilters();
    });
  }

  const expSlider = document.getElementById("filter-experience-slider");
  if (expSlider) {
    expSlider.addEventListener("input", applyFilters);
  }

  // Bind category checkbox event listeners
  const cTech = document.getElementById("cat-tech");
  if (cTech) cTech.addEventListener("change", applyFilters);
  
  const cCorp = document.getElementById("cat-corporate");
  if (cCorp) cCorp.addEventListener("change", applyFilters);

  const cLearn = document.getElementById("cat-learnership");
  if (cLearn) cLearn.addEventListener("change", applyFilters);

  // Bind location dropdown changes
  const locDrop = document.getElementById("filter-location-dropdown");
  if (locDrop) locDrop.addEventListener("change", applyFilters);
});

// Expose filter actions globally
window.applyFilters = applyFilters;
window.resetFilters = () => {
  document.getElementById("cat-tech").checked = true;
  document.getElementById("cat-corporate").checked = true;
  document.getElementById("cat-learnership").checked = true;
  document.getElementById("filter-location-dropdown").value = "";
  document.getElementById("filter-experience-slider").value = 0;
  document.getElementById("filter-salary-slider").value = 80000;
  document.getElementById("salary-slider-val").textContent = "Max: R80,000";

  if (document.getElementById("transit-gautrain")) document.getElementById("transit-gautrain").checked = false;
  if (document.getElementById("transit-myciti")) document.getElementById("transit-myciti").checked = false;
  if (document.getElementById("transit-taxi")) document.getElementById("transit-taxi").checked = false;
  if (document.getElementById("verify-saqa")) document.getElementById("verify-saqa").checked = false;

  activeOpportunityFilter = "";
  updateFastOpportunityButtonStyles();
  applyFilters();
};
