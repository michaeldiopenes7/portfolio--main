document.addEventListener("DOMContentLoaded", () => {
  loadComponent("../modules/layout/sidebar.component.html", "#sidebarContainer");
  loadComponent("../modules/layout/topbar.component.html", "#topbarContainer");
  loadComponent("../modules/layout/welcome.content.html", "#contentContainer");

  // Folder toggle behavior
  window.toggleFolder = (id) => {
    const folder = document.getElementById(id);
    if (folder) {
      folder.classList.toggle("active");
    }
  };
});

function loadComponent(path, selector) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(err => {
      console.error(`Failed to load ${path}:`, err);
    });
}
