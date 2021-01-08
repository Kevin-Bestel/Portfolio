window.onload = function () {

    /* Burger-Menu Funktion */
    const menuBtn = document.getElementById('menu-btn');
    var whiteOverlay = document.getElementById('whiteOverlay');
    let menuLinks = document.getElementById('menu-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', function () {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuLinks.style.visibility = 'visible';
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuLinks.style.visibility = 'hidden';
            projectsInner.style.display = 'none';
            aboutMeInner.style.display = 'none';
            contactsInner.style.display = 'none';
            whiteOverlay.style.visibility = 'hidden';
            menuOpen = false;
        }
    });

    /* Die 3 clickbaren a Tags, für den Inhalt meines Portfolios */


    let projectsBtn = document.getElementById('projectsBtn');
    let projectsInner = document.getElementById('projects');
    let projectsOpen = false;
    projectsBtn.addEventListener('click', function () {
        if (!projectsOpen) {
            contactsInner.style.display = 'none';
            aboutMeInner.style.display = 'none';
            projectsBtn.classList.add('open');
            projectsInner.style.display = 'flex';
            whiteOverlay.style.visibility = 'visible';
            projectsOpen = true;
        } else {
            projectsBtn.classList.remove('open');
            projectsInner.style.display = 'none';
            projectsOpen = false;
        }
    });

    let aboutMeBtn = document.getElementById('aboutMeBtn');
    let aboutMeInner = document.getElementById('aboutMe');
    let aboutMeOpen = false;
    aboutMeBtn.addEventListener('click', function () {
        if (!aboutMeOpen) {
            contactsInner.style.display = 'none';
            projectsInner.style.display = 'none';
            aboutMeBtn.classList.add('open');
            aboutMeInner.style.display = 'flex';
            whiteOverlay.style.visibility = 'visible';
            aboutMeOpen = true;
        } else {
            aboutMeBtn.classList.remove('open');
            aboutMeInner.style.display = 'none';
            aboutMeOpen = false;
        }
    });

    let contactsBtn = document.getElementById('contactsBtn');
    let contactsInner = document.getElementById('contacts');
    let contactsOpen = false;
    contactsBtn.addEventListener('click', function () {
        if (!contactsOpen) {
            projectsInner.style.display = 'none';
            aboutMeInner.style.display = 'none';
            contactsBtn.classList.add('open');
            contactsInner.style.display = 'flex';
            whiteOverlay.style.visibility = 'visible';
            contactsOpen = true;
        } else {
            contactsBtn.classList.remove('open');
            contactsInner.style.display = 'none';
            contactsOpen = false;
        }
    });

    /* Impressum Anzeigen und footer vergrößern, zum besseren Lesen */

    let impressumBtn = document.getElementById('impressumBtn');
    let impressumInner = document.getElementById('impressum');
    let footer = document.getElementById('footer');
    let impressumOpen = false;
    impressumBtn.addEventListener('click', function () {
        if (!impressumOpen) {
            impressumBtn.classList.add('open');
            impressumInner.style.display = 'flex';
            footer.style.height = '75vh';
            impressumOpen = true;
        } else {
            impressumBtn.classList.remove('open');
            impressumInner.style.display = 'none';
            footer.style.height = '5vh';
            impressumOpen = false;
        }
    });


}