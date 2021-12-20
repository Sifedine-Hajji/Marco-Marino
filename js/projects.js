const projects = [
  {
    name: "Annabelle",
    function: "branding, web",
    image: "https://www.marcomarino.design/images/annabelle.jpg",
  },
  {
    name: "Decathlon",
    function: "ui / ux design",
    image: "https://www.marcomarino.design/images/decathlon.png",
  },
  {
    name: "Evento Xtra",
    function: "ui / ux design",
    image: "https://www.marcomarino.design/images/eventoxtra-header.jpg",
  },
  {
    name: "El Flako",
    function: "branding, web",
    image: "https://www.marcomarino.design/images/flako.jpg",
  },
];

const projectsContainer = document.querySelector(".projects-container");

for (element of projects) {
  //creation de la carte projet
  const projectCard = document.createElement("div");
  projectCard.className = "card";
  projectsContainer.appendChild(projectCard);

  // creation du contenaire titre et fonction
  const titleAndFunction = document.createElement("a");
  titleAndFunction.className = "titles-container";
  titleAndFunction.href = "#";
  projectCard.appendChild(titleAndFunction);

  // ajout du nom de projet
  const projectName = document.createElement("h2");
  projectName.className = "project-title";
  projectName.textContent = element.name;
  titleAndFunction.appendChild(projectName);

  // ajout de la fonction exercer dans le projet
  const fonction = document.createElement("div");
  fonction.className = "project-function";
  fonction.textContent = element.function;
  titleAndFunction.appendChild(fonction);
}
