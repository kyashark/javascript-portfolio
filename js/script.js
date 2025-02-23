const projectCategory = {
  fundamentals: {
    categoryId: "F",
    name: "Fundamentals",
    description:
      "Basic JavaScript exercises focus on variables, loops, functions, and logic to solve problems like sorting, counting, and condition checking",
    status: "Under construction fine-tuning my JavaScript foundation",
    projects: [
      {
        name: "Simple Counter",
        description:
          "A basic JavaScript project to increase, decrease, and reset a counter using button clicks",
        coverImage: "./images/project-covers/simple-counter.png",
        viewCode: "https://github.com/kyashark/simple-counter",
        viewProject: "https://kyashark.github.io/simple-counter/",
        // tag: "highlights",
      },
      {
        name: "Random Color",
        description:
          "Generates a random RGB background color on button click using JavaScript",
        coverImage: "./images/project-covers/random-color.png",
        viewCode: "https://github.com/kyashark/random-color",
        viewProject: "https://kyashark.github.io/random-color/",
      },
      {
        name: "Simple Interactive Page",
        description:
          "A JavaScript project that handles user input to display personalized messages",
        coverImage: "./images/project-covers/simple-interactive.png",
        viewCode: "https://github.com/kyashark/simple-interactive-page",
        viewProject: "https://kyashark.github.io/simple-interactive-page/",
      },
      {
        name: "Window Resize",
        description:
          "Displays live window size updates using the resize event listener for real-time tracking",
        coverImage: "./images/project-covers/window-resize.png",
        viewCode: "https://github.com/kyashark/window-resize",
        viewProject: "https://kyashark.github.io/window-resize/",
      },
    ],
  },
  gettingStarted: {
    categoryId: "GS",
    name: "Getting Started",
    description:
      "Beginner-friendly projects to practice JavaScript basics, DOM manipulation, and simple interactive features",
    status: "Setting the stage—projects coming together shortly",
    projects: [
      {
        name: "Dice Roller",
        description:
          "A simple dice roller that generates random dice values based on user input",
        coverImage: "./images/project-covers/dice-roller.png",
        viewCode: "https://github.com/kyashark/dice-roller",
        viewProject: "https://kyashark.github.io/dice-roller/",
      },
      {
        name: "Quiz App",
        description:
          "A basic quiz app that tracks your score and displays the final result",
        coverImage: "./images/project-covers/quiz-app.png",
        viewCode: "https://github.com/kyashark/quiz-app",
        viewProject: "https://kyashark.github.io/quiz-app/",
      },
      {
        name: "Form Validation",
        description:
          "A basic signup form with client-side validation to ensure user input is validated before submission",
        coverImage: "./images/project-covers/form-validation.png",
        viewCode: "https://github.com/kyashark/js-form-validation",
        viewProject: "https://kyashark.github.io/js-form-validation/",
      },
      {
        name: "Palindrome Checker",
        description:
          "Palindrome Checker determines whether a word or phrase reads the same forward and backward, ignoring spaces, punctuation, and case",
        coverImage: "./images/project-covers/palindrome-checker.png",
        viewCode: "https://github.com/kyashark/palindrome-checker",
        viewProject: "https://kyashark.github.io/palindrome-checker/",
        tag: "highlights"
      },
    ],
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
    projects: [
      {
        name: "Image Color Picker",
        description:
          "This project lets users upload an image, pick a color using the EyeDropper API, and view the color in Hex and RGB formats. Users can also copy the color values to the clipboard.",
        coverImage: "./images/project-covers/image-color-picker.png",
        viewCode: "https://github.com/kyashark/image-color-picker",
        viewProject: "https://kyashark.github.io/image-color-picker/",
        tag: "highlights"
      },
    ],
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
                        <button class="view-code-btn" onclick="window.open('${project.viewCode}', '_blank')">View Code</button>
                        <button class="view-project-btn" onclick="window.open('${project.viewProject}', '_blank')">View Project</button>
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
                        <button class="view-code-btn" onclick="window.open('${project.viewCode}', '_blank')">View Code</button>
                        <button class="view-project-btn" onclick="window.open('${project.viewProject}', '_blank')">View Project</button>
                    </div>
                    
                    `;
        }
      }
    }
  }
}
