'use strict'

var gProjectsNum = 4;
var gProjs;


function createProjects(projectsNum) {
    var projects = [];
    
    projects[0] = createProject('pacman', 'Pacman','best game ever', 'very good practice', 'https://roeefurman.github.io/Pacman/', 'pacman1.png');
    projects[1] = createProject('MineSweeper', 'MineSweeper','best game ever', 'very good practice', 'https://roeefurman.github.io/Mine-Sweeper/',
    'minesweeper.jpeg');
    projects[2] = createProject('Touch-Nums', 'Touch-Nums','best game ever', 'very good practice', '','touch-nums.png');
    projects[3] = createProject('Ball-board', 'Ball-board','best game ever', 'very good practice', '','ballboard.png');
    projects[4] = createProject('Chess', 'Chess','best game ever', 'very good practice', '','chess.png');
    // for (var i = 0; i < projectsNum; i++) {
    //     projects[i] = createProject('pacman', 'pacman',
    //         'best game ever', 'very good practice',
    //         'https://github.com/RoeeFurman/myGallery')
    // }
    return projects;
}

function createProject(id, name, title, desc, url, imgSRC, lables) {
    return {
        id,
        name,
        title,
        desc,
        url,
        imgSRC,
        publishedAt: Date.now(),
        lables
    }
}


function getProjById(id){
    return gProjs.find(proj => proj.id=== id);
}