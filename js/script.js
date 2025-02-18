const projectCategory = {
  fundamentals: {
    categoryId: "F",
    name: "Fundementals",
    description:
      "Basic JavaScript exercises focus on variables, loops, functions, and logic to solve problems like sorting, counting, and condition checking",
    status: "Under construction fine-tuning my JavaScript foundation",
    projects: [
      
            {
                name: "Calculator",
                description: "Basic calculator with JavaScript functions.",
                coverImage: "images/calculator.png",
                viewCode: "https://github.com/yourusername/calculator",
                viewProject: "https://yourusername.github.io/calculator/",
                tag:"highlights"
            },
            
    ],
  },
  gettingStarted: {
    categoryId: "GS",
    name: "Getting Started",
    description:
      "Beginner-friendly projects to practice JavaScript basics, DOM manipulation, and simple interactive features",
    status: "Setting the stage—projects coming together shortly",
    projects: [],
  },
  reactFundamentals: {
    categoryId: "RF",
    name: "React Fundamentals",
    description:
      "Basic React projects covering components, state, props, and hooks to build dynamic UIs.",
    status: "React in progress—stay tuned for dynamic updates",
    projects: [],
  },
  explorerProjects: {
    categoryId: "EP",
    name: "Explorer Projects",
    description:
      " Hands-on projects that use APIs, user interactions, and real-time data to make engaging experiences",
    status: "Exploring ideas—projects just around the corner",
    projects: [],
  },
  frontendExperiment: {
    categoryId: "FE",
    name: "Frontend Experiment",
    description:
      " Fun and creative frontend projects to explore animations, styling, and modern UI techniques.",
    status:
      "In the lab, creating innovative UI experiments—soon to be revealed",
    projects: [],
  },
  backendFundamentals: {
    categoryId: "BF",
    name: "Backend Fundamentals",
    description:
      "Introduction to server-side programming, databases, and API development with basic backend projects",
    status: "Building the backend layer—project reveal coming soon",
    projects: [],
  },
  fullStackInnovations: {
    categoryId: "FI",
    name: "Full-Stack Innovations",
    description:
      "End-to-end projects combining frontend, backend, and databases for complete web applications",
    status: "Working on full-stack integrations—coming together soon",
    projects: [],
  },
  expertCreations: {
    categoryId: "EC",
    name: "Expert Creations",
    description:
      "High-level projects focusing on performance, security, scalability, and best coding practices",
    status: "Refining the craft—advanced ideas in development",
    projects: [],
  },
};

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("highlights-project-grid")) {
    displayHighlightsProjects();
  }

  if (document.getElementById("projects-grid")) {
    displayProjects();
  }
});

function goToPage(categoryKey = "") {
    if (categoryKey) {
        window.location.href = `projects.html?category=${categoryKey}`;
    } else {
        window.location.href = `category.html`;
    }
}

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

function displayProjects() {
  const categoryKey = getCategoryFromURL();

  if (categoryKey && projectCategory[categoryKey]) {
    const category = projectCategory[categoryKey];

    document.getElementById("categoryName").textContent = category.name;
    document.getElementById("categoryDescription").textContent =
      category.description;
    if (category.projects.length == 0) {
      document.getElementById("projectStatus").textContent = category.status;
    } else {
      let projectsHTML = document.getElementById("projects-grid");
      projectsHTML.innerHTML = ``;
      for (let project of category.projects) {
        projectsHTML.innerHTML += `
                    <div class="project card">
                    <section>
                        <img src="${project.coverImage}" alt="Project Cover Image">
                    </section>
                    <section>
                    <h3>${project.name}</h3>
                    <p class="para-3">${project.description}</p>
                    <div class="button-tab">
                        <a href="${project.viewCode}"><button class="view-code-btn">View Code</button></a>
                        <a href="${project.viewProject}"><button class="view-project-btn">View Project</button></a>
                    </div>
                `;
      }
    }
  }
}

function displayHighlightsProjects() {
  let highlightsProjectsHTML = document.getElementById(
    "highlights-project-grid"
  );
  highlightsProjectsHTML.innerHTML = "";

  for (let key in projectCategory) {
    if (projectCategory.hasOwnProperty(key)) {
      let category = projectCategory[key];

      for (let project of category.projects) {
        if (project.tag) {
          highlightsProjectsHTML.innerHTML += `
                    <div class="project card">
                    <section>
                        <img src="${project.coverImage}" alt="Project Cover Image">
                    </section>
                    <section>
                    <h3>${project.name}</h3>
                    <p class="para-3">${project.description}</p>
                    <div class="button-tab">
                        <a href="${project.viewCode}"><button class="view-code-btn">View Code</button></a>
                        <a href="${project.viewProject}"><button class="view-project-btn">View Project</button></a>
                    </div>
                    
                    `;
        }
      }
    }
  }
}
