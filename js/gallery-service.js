'use strict'

var gProjectsNum = 4;
var gProjs;


function createProjects(projectsNum) {
    var projects = [];
    for (var i = 0; i < projectsNum; i++) {
        projects[i] = createProject('pacman', 'pacman',
            'best game ever', 'very good practice',
            'https://github.com/RoeeFurman/myGallery')
    }
    return projects;
}

function createProject(id, name, title, desc, url, lables) {
    return {
        id,
        name,
        title,
        desc,
        url,
        // imgSRC,
        publishedAt: Date.now(),
        lables
    }
}
