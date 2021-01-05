window.onload = function () {

    /* Burger-Menu Funktion */
    const menuBtn = document.getElementById('menu-btn');
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
            menuOpen = false;
        }
    });

    /* Die 3 clickbaren a Tags, für den Inhalt meines Portfolios */
    let projectsBtn = document.getElementById('projectsBtn');
    let projectsInner = document.getElementById('projects');
    let projectsOpen = false;
    projectsBtn.addEventListener('click', function () {
        if (!projectsOpen) {
            contactsInner.style.visibility = 'hidden';
            aboutMeInner.style.visibility = 'hidden';
            projectsBtn.classList.add('open');
            projectsInner.style.visibility = 'visible';
            projectsOpen = true;
        } else {
            projectsBtn.classList.remove('open');
            projectsInner.style.visibility = 'hidden';
            projectsOpen = false;
        }
    });

    let aboutMeBtn = document.getElementById('aboutMeBtn');
    let aboutMeInner = document.getElementById('aboutMe');
    let aboutMeOpen = false;
    aboutMeBtn.addEventListener('click', function () {
        if (!aboutMeOpen) {
            contactsInner.style.visibility = 'hidden';
            projectsInner.style.visibility = 'hidden';
            aboutMeBtn.classList.add('open');
            aboutMeInner.style.visibility = 'visible';
            aboutMeOpen = true;
        } else {
            aboutMeBtn.classList.remove('open');
            aboutMeInner.style.visibility = 'hidden';
            aboutMeOpen = false;
        }
    });

    let contactsBtn = document.getElementById('contactsBtn');
    let contactsInner = document.getElementById('contacts');
    let contactsOpen = false;
    contactsBtn.addEventListener('click', function () {
        if (!contactsOpen) {
            projectsInner.style.visibility = 'hidden';
            aboutMeInner.style.visibility = 'hidden';
            contactsBtn.classList.add('open');
            contactsInner.style.visibility = 'visible';
            contactsOpen = true;
        } else {
            contactsBtn.classList.remove('open');
            contactsInner.style.visibility = 'hidden';
            contactsOpen = false;
        }
    });
}