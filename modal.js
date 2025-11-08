const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalClose = document.querySelector(".modal-close");

const projects = {
  dissertation: {
    title: "Neural Networks for Anaerobic Digestion",
    subtitle: "Machine Learning",
    description:
      "Developed a feed-forward neural network to predict key ADM1 biokinetic parameters from synthetic anaerobic digestion data. The model achieved high accuracy and generalised well across operating conditions, offering faster calibration than traditional optimisation methods. Includes data generation, training workflows, and evaluation metrics.",
    link: "https://github.com/ollieWP634"
  },
  VBA: {
    title: "Structural Engineering Analysis Tool",
    subtitle: "Data Analysis",
    description:
      "Automated 3 common soil and truss calculations in VBA, streamlining geotechnical and structural workflows. Applied advanced formulae and logic to improve accuracy and reduce manual computation.",
    link: "https://github.com/ollieWP634"
  },
  MATLAB: {
    title: "Income Data Analysis Tool",
    subtitle: "Data Analysis",
    description:
      "Built data pipelines to analyse income trends for graduate and postgraduate populations over a 10-year window. Employed advanced statistical functions to highlight 3+ key economic disparities with data-driven insights.",
    link: "https://github.com/ollieWP634"
  },
  portfolio: {
    title: "Portfolio Website",
    subtitle: "Web Development",
    description:
      "A fully responsive, animated personal portfolio built using HTML, CSS, and JavaScript. Features include particle animations, scroll-triggered fades, and custom modals for project showcases.",
    link: "https://olliewp634.github.io/portfolio"
  },
  FastAPI: {
    title: "Data Dashboard",
    subtitle: "Software Engineering",
    description:
      "A FastAPI-powered film logging platform that stores rating and reflections in a SQL database, with planned analytics to visualise genre trends, user habits, and rating distributions.",
    link: "https://github.com/olliewp634"
  }
};

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    const id = card.id;
    const project = projects[id];

    if (project) {
      modalTitle.textContent = project.title;
      modalSubtitle.textContent = project.subtitle;
      modalDescription.textContent = project.description;
      modalLink.href = project.link;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
