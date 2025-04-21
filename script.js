const jobs = [
  {   
      title: "Frontend Developer",
      company: "Tech Innovators Inc",
      tags: ["Remote", "Full-Time", "React"],
      description: "We're looking for a passionate Frontend Developer to join our team.",
      applyLink: "https://example.com/apply/frontend"
  },
  {
      title: "Junior Web Designer", 
      company: "Creative Pixels",
      tags: ["Contract", "HTML", "CSS"],
      description: "We're looking for a passionate Web Designer to join our team.",
      applyLink: "https://example.com/apply/webdesign"
  },
  {
      title: "UI/UX Designer",
      company: "Flow Labs",
      tags: ["Remote", "Part-Time", "Figma"],
      description: "We're looking for a passionate UI/UX to join our team.",
      applyLink: "https://example.com/apply/uiux"
  }
];

let activeFilter = "";

// Render Job Cards
function renderJobs(jobArray = jobs) {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  const filteredJobs = activeFilter
      ? jobs.filter(job => job.tags.includes(activeFilter))
      : jobArray;

  filteredJobs.forEach((job, index) => {
      const card = document.createElement("div");
      card.className = "ag-courses_item";
      card.innerHTML = `
          <div class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title">${job.title}</div>
              <div class="ag-courses-item_date-box">
                  Company: <span class="ag-courses-item_date">${job.company}</span>
              </div>
              <div class="ag-courses-item_date-box">
                  Tags: ${job.tags.map(tag => `<span class="ag-courses-item_date">${tag}</span>`).join(", ")}
              </div>
              <div class="ag-courses-item_date-box">
                  <button class="apply-btn" data-index="${index}">Apply</button>
              </div>
          </div>
      `;
      jobList.appendChild(card);
  });

  const applyButtons = document.querySelectorAll(".apply-btn");
  applyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      openApplyModal(jobs[index].title);
 
      });
  });
}

// Opens Job Info Modal
function openJobModal(job) {
  const modal = document.getElementById("job-modal");
  document.getElementById("modal-title").innerText = job.title;
  document.getElementById("modal-company").innerText = job.company;
  document.getElementById("modal-description").innerText = job.description;
  document.getElementById("modal-apply").href = job.applyLink;

  document.getElementById("job-modal").classList.remove("hidden");
}

// Close Job Info Modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("job-modal").classList.add("hidden");
});

// Search
document.getElementById("searchInput").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderJobs(filteredJobs);
});

// Filter Buttons
document.getElementById("fulltime-btn").addEventListener("click", () => {
  toggleFilter("Full-Time");
});
document.getElementById("remote-btn").addEventListener("click", () => {
  toggleFilter("Remote");
});

function toggleFilter(type) {
  activeFilter = activeFilter === type ? "" : type;
  updateFilterStyles();
  renderJobs();
}

function updateFilterStyles() {
  document.getElementById("fulltime-btn").classList.toggle("active", activeFilter === "Full-Time");
  document.getElementById("remote-btn").classList.toggle("active", activeFilter === "Remote");
}

// Application Modal Logic
function openApplyModal(jobTitle) {
  const modal = document.getElementById("apply-modal");
  document.getElementById("modal-job-title").textContent = `Apply for: ${jobTitle}`;
  modal.classList.remove("hidden");
}

document.querySelector("#apply-modal #close-modal").addEventListener("click", () => {
  document.getElementById("apply-modal").classList.add("hidden");
});

document.getElementById("application-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Application submitted!");
  this.reset();
  document.getElementById("apply-modal").classList.add("hidden");
});

// Close on outside click
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
      event.target.classList.add("hidden");
  }
});

// Initial Render
renderJobs();

