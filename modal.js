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
    img: "images/dissertation.jpg",
    description:
      "This project used synthetic ADM1 data to train neural networks for biokinetic parameter calibration. The final model, Ver57, achieved an MSE of 4.01E-07, showcasing the potential of data-driven modelling in anaerobic digestion.",
    link: "https://github.com/ollieWP634"
  },
  portfolio: {
    title: "Portfolio Website",
    subtitle: "Web Development",
    img: "images/portfolio.jpg",
    description:
      "A fully responsive, animated personal portfolio built using HTML, CSS, and JavaScript. Features include particle animations, scroll-triggered fades, and custom modals for project showcases.",
    link: "https://olliewp634.github.io/portfolio"
  },
  dashboard: {
    title: "Data Dashboard",
    subtitle: "Software Engineering",
    img: "images/dashboard.jpg",
    description:
      "A real-time Streamlit dashboard for visualizing large datasets using Pandas and Python. Includes interactive charts, performance insights, and automated metric updates.",
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
      modalImg.src = project.img;
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
