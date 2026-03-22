const projects = [
  {
    title: "EcoBranding",
    subtitle: "Refloresta",
    description: "Identidade visual completa para empresa de reflorestamento sustentável",
    colors: ["#e8e4df", "#d8d4cf"]
  },
  {
    title: "Web Design",
    subtitle: "GreenTech",
    description: "Website responsivo para startup de tecnologia verde",
    colors: ["#8a9a7e", "#7a8a6e"]
  },
  {
    title: "Identidade Visual",
    subtitle: "ArteSustentável",
    description: "Branding para galeria de arte com materiais reciclados",
    colors: ["#a8b5a0", "#98a590"]
  }
];

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const media = document.createElement("div");
  media.className = "project-media";
  media.style.background = `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})`;

  const title = document.createElement("h3");
  title.className = "project-title";
  title.innerHTML = `${project.title} <span class="project-subtitle">- ${project.subtitle}</span>`;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  article.appendChild(media);
  article.appendChild(title);
  article.appendChild(description);

  return article;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  const emptyState = document.getElementById("projects-empty");

  if (!grid || !emptyState) {
    return;
  }

  grid.innerHTML = "";

  // Conditional rendering for empty project arrays.
  if (!Array.isArray(projects) || projects.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  projects.forEach((project) => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupMobileMenu();
});
