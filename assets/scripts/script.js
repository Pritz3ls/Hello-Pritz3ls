const pages = ['landing', 'games', 'arts', 'contact', 'projects']
let plen = pages.length;

const projects = ['hell', 'baseball', 'cow', 'horror']
let rlen = projects.length;

// Pages
function showPage(id) {
    hideAllPage();

    var x = document.getElementById(id)
    x.style.display = "block"
}

function hideAllPage() {
    for (let index = 0; index < plen; index++) {
        var y = document.getElementById(pages[index])
        y.style.display = "none"
    }
}

// Box Cover Art
function showProject(id) {
    hideAllProjects();
    hideBoxCoverMenu();
    var x = document.getElementById(id)
    x.style.display = "block"
    window.scrollTo(0,0)
}


function showBoxCoverMenu() {
    var boxCoverMenu = document.getElementById("boxCoverMenu")
    boxCoverMenu.style.display = "block"
    hideAllProjects();
    window.scrollTo(0,0)
}
function hideBoxCoverMenu() {
    var boxCoverMenu = document.getElementById("boxCoverMenu")
    boxCoverMenu.style.display = "none"
}

function hideAllProjects() {
    for (let index = 0; index < rlen; index++) {
        var y = document.getElementById(projects[index])
        y.style.display = "none"
    }
}

// Gallery
let artPreview = document.getElementById("preview");
let artText = document.getElementById("artText");
let expandImg = document.getElementById("expanded");

function viewArt(imgS){
    expandImg.src = imgS.src;
    artText.innerHTML = imgS.alt;
    artPreview.style.display = "flex";
}
function hideArt(){
    artPreview.style.display = "none";
}