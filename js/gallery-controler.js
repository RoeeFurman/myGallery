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
        <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal('${project.id}')" href="#portfolioModal1">

          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img width="500px" height="500px" class="img-fluid" src="img/portfolio/${project.imgSRC}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.desc}</p>
          <button type="button" class="btn btn-primary btn-sm" onclick="window.open('${project.url}','_blank')">Check it out</button>
        </div>
        </div>`);

    // document.querySelector('.projects-row').innerHTML = strHTMLs.join('');
    var $elDiv = $('.projects-row');
    return $elDiv.html(strHTMLs);

    // <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    // document.querySelector('.todos-total-count').innerText = getTodosCount()
    // document.querySelector('.todos-active-count').innerText = getActiveTodosCount()
}

function onOpenModal(id) {
    console.log('opening ', id);
    // window.location.href = "#portfolioModal1";
    var currProj = getProjById(id);
    console.log(currProj);

    var $elName = $('.modal-body h2');
    $elName.text(currProj.name);

    var $elDesc = $('.item-intro');
    $elDesc.text(currProj.desc);

    var $elImg = $('.img-modal');
    $elImg.attr('src', `img/portfolio/${currProj.imgSRC}`);
}


function onSubmit() {
    var $elSubjectVal = $('.subject-value').val()
    var $elBodyVal = $('.body-value').val()

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=roeefurman1@gmail.com&su=${$elSubjectVal}&body=${$elBodyVal}`;

    window.open(url, '_blank');

}

