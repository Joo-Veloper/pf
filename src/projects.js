"use strict";

// category
const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectContainer = document.querySelector(".projects");

categories.addEventListener("click", (event) => {
  console.log(event);
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  console.log(filter);

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  //Active
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter){
      //filter
  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
  }, 250);
}
