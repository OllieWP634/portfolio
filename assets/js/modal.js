const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalOverview = document.getElementById("modal-overview");
const modalResponsibilities = document.getElementById("modal-responsibilities");
const modalTech = document.getElementById("modal-tech");
const modalImpact = document.getElementById("modal-impact");
const modalLink = document.getElementById("modal-link");
const modalContact = document.getElementById("modal-contact");
const modalClose = document.querySelector(".modal-close");

const projects = {
  dissertation: {
  title: "Neural Networks for Anaerobic Digestion",
  overview:
    "Developed neural networks to predict ADM1 parameters within anaerobic digestion. Trained on synthetic datasets and optimised for performance.",
  responsibilities: [
  "• Designed ANN models in Python/TensorFlow to predict ADM1 parameters with high accuracy.",
  "• Deployed training pipelines on Barkla HPC to improve scalability and efficiency.",
  "• Enhanced model scalability and generalisation via optimised code structure and training pipelines."
],
  tech: "Python, TensorFlow, HPC, Git, GitLab, Bash",
  impact:
    "Reduced calibration time vs traditional optimisation. Showed strong predictive accuracy.",
  link: "https://github.com/ollieWP634",
  contact: true
},

  VBA: {
    title: "Structural Engineering Analysis Tool",
    overview:
      "Automated geotechnical and truss calculations in VBA.",
    responsibilities:
      "Formula design. Data validation. Output formatting.",
    tech:
      "Excel VBA",
    impact:
      "Reduced manual calculation time; improved clarity and repeatability.",
    link: "https://github.com/ollieWP634",
    contact: false
  }

};

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    const id = card.id;
    const project = projects[id];

    if (!project) return;

    modalTitle.textContent = project.title;

    modalOverview.textContent = project.overview;
    
    if (Array.isArray(project.responsibilities)) {
      modalResponsibilities.innerHTML = project.responsibilities
        .map(item => `<li>${item}</li>`)
        .join("");
    } else {
      modalResponsibilities.innerHTML = `<li>${project.responsibilities}</li>`;
    }

    modalTech.textContent = project.tech;
    modalImpact.textContent = project.impact;

    modalLink.href = project.link;

    if (project.contact) {
      modalContact.classList.remove("hidden");
      modalContact.href = "mailto:example@email.com";
    } else {
      modalContact.classList.add("hidden");
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
});

document.querySelectorAll(".modal").forEach(m => {
  m.addEventListener("click", e => {
    if (e.target === m) {
      m.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
