'use strict'


init();

function init() {
    gProjs = createProjects(gProjectsNum);
    renderProjects();
}

// createProjects(gProjectsNum);
// renderProjects();

function renderProjects() {

    var strHTMLs = gProjs.map(project =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${project.name}.jfif" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.desc}</p>
        </div>
        </div>`);

    document.querySelector('.projects-row').innerHTML = strHTMLs.join('');

    // document.querySelector('.todos-total-count').innerText = getTodosCount()
    // document.querySelector('.todos-active-count').innerText = getActiveTodosCount()
}




// id,
// name,
// title,
// desc,
// url,
// publishedAt: Date.now(),
// labels: ["Matrixes", "keyboard events"],