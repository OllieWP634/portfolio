const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalOverview = document.getElementById("modal-overview");
const modalResponsibilities = document.getElementById("modal-responsibilities");
const modalTech = document.getElementById("modal-tech");
const modalImpact = document.getElementById("modal-impact");
const modalLink = document.getElementById("modal-link");
const modalClose = document.querySelector(".modal-close");

const projects = {
  dissertation: {
  title: "Neural Networks for Anaerobic Digestion",
  overview:
    "Developed neural networks to predict ADM1 parameters within anaerobic digestion. Trained the models using the Universities HPC system (Barkla), using generated, synthetic training data. Worked closely with my supervisor to ensure consistent activity and progression through the means of Git.",
  responsibilities: [
  "• Designed ANN models in Python/TensorFlow to predict ADM1 parameters with high accuracy.",
  "• Deployed training pipelines on Barkla HPC to improve scalability and efficiency.",
  "• Enhanced model scalability and generalisation via optimised code structure and training pipelines."
],
  tech: [
    "• Python",
    "• TensorFlow",
    "• HPC",
    "• Git",
    "• Bash",
    "• GitLab"
  ],
  impact:
    "Reduced calibration time vs traditional optimisation. Showed strong predictive accuracy."
},

  VBA: {
    title: "Structural Engineering Analysis Tool",
    overview:
      "Automated geotechnical and truss calculations in VBA. The geotechnical calculation was to predict stress levels in layers of soil, given a fluctuating water table. The structural problem then, was to analyse stress within structural elements of a truss, given differing loading conditions.",
    responsibilities: [
      "• Automated 3 common soil and truss calculations in VBA, streamlining geotechnical and structural workflows.",
      "• Applied advanced formulae and logic to improve accuracy and reduce manual computation."
    ],
    tech:[
      "• VBA (Visual Basic for Applications)",
      "• Microsoft Excel"
    ],
    impact:
      "Reduced manual calculation time; improved clarity and repeatability."
  },

  MATLAB: {
    title: "Income Data Analysis Tool",
    overview:
      "Analysed key disparities between salary postings of graduates post university. In particular, analysed the difference in salary for non-graduates, graduates, and post-graduates.",
    responsibilities: [
      "• Built data pipelines to analyse income trends for graduate and postgraduate populations over a 10-year window.",
      "• Employed advanced statistical functions to highlight 3+ key economic disparities with data-informed insights."
    ],
    tech:[
      "• MATLAB",
      "• Microsoft Excel"
    ],
    impact:
      "Provided clear insights into income disparities between education levels, informing data-driven discussions on graduate and postgraduate earnings. Enabled faster and more accurate economic analysis through automated data pipelines.",
    link: "https://github.com/OllieWP634/graduate-salary-analysis",
  },

  portfolio: {
    title: "Portfolio Website",
    overview:
      "This project serves as a central hub for my academic and personal work across computer science and engineering. The site highlights selected projects demonstrating my skills in software development, machine learning, and data systems. Developed initially using HTML, CSS, and JavaScript, the site is being redeveloped in React for improved modularity, performance, and scalability.",
    responsibilities: [
      "• Designed and developed a personal project portfolio website, showcasing 5 key software and research projects.",
      "• Implemented core front-end logic with JavaScript, ensuring accessibility and mobile compatibility.",
      "• Managed feature changes through GitHub PRs; planning migration to modular components."
    ],
    tech:[
      "• JavaScript",
      "• HTML",
      "• CSS",
      "• React (In Progress)",
      "• Git"
    ],
    impact:
      "Provided clear insights into income disparities between education levels, informing data-driven discussions on graduate and postgraduate earnings. Enabled faster and more accurate economic analysis through automated data pipelines.",
    link: "https://github.com/OllieWP634/portfolio",
  },

  FastAPI: {
    title: "Filmlytic - Film Logging & Data Analysis",
    overview:
      "Filmlytic is a web application that allows users to log their favourite films, generating new recommendations based on the movies selected. The project aims to integrate data analysis features to uncover insights such as genre trends, average ratings, and viewing habits.",
    responsibilities: [
      "• Implementing a RESTful API for creating and retrieving film logs.",
      "• Store and manage user film data in a relational database.",
      "• Develop visual analytics on logged data (e.g. genre preferences, rating distributions).",
      "• Design a responsive, minimalist web interface."
    ],
    tech:[
      "• Backend: FastAPI (Python)",
      "• Database: SQL",
      "• Frontend: HTML, CSS, JavaScript",
      "• Data Handling: Pandas, JSON",
      "• Version Control: Git"
    ],
    impact:
      "Develop my first full-stack web application, expanding on current knowledge.",
    link: "https://github.com/OllieWP634/film-journal-app",
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

    if (Array.isArray(project.tech)) {
      modalTech.innerHTML = project.tech
        .map(item => `<li>${item}</li>`)
        .join("");
    } else {
      modalTech.innerHTML = `<li>${project.tech}</li>`;
    }

    modalImpact.textContent = project.impact;

    if (project.link && project.link !== "") {
      modalLink.href = project.link;
      modalLink.style.display = "inline-flex"; // show the link
    } else {
      modalLink.style.display = "none"; // hide the link
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
