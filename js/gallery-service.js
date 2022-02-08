'use strict'

var gProjectsNum = 4;
var gProjs;


function createProjects(projectsNum) {
    var projects = [];
    
    projects[0] = createProject('pacman', 'Pacman','best game ever', 'Classic board game', 'https://roeefurman.github.io/Pacman/', 'pacman1.png');
    projects[1] = createProject('MineSweeper', 'MineSweeper','Classic board game', 'Best seller board game', 'https://roeefurman.github.io/Mine-Sweeper/',
    'minesweeper.jpeg');
    projects[2] = createProject('Touch-Nums', 'Touch-Nums','best game ever', 'Awsome board game ', '','touch-nums.png');
    projects[3] = createProject('Ball-board', 'Ball-board','best game ever', 'Board game', '','ballboard.png');
    projects[4] = createProject('Chess', 'Chess','best game ever', 'The classic chess', '','chess.png');
    projects[5] = createProject('Book Shop', 'Book Shop','best game ever', 'Best tool for book Shop managers', '','bookshop.png');

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