//const navbarOpen = document.getElementById('nabvar-h');
const navBarOpen = document.querySelector('#navbar-h');
navBarOpen.addEventListener('click', function () {
    const navbarOptions = document.querySelector('#navbar-options');
    navbarOptions.classList.replace('nav-right-text', 'nav-right-text-open');
}
);

const navBarClose = document.querySelector('#navbar-c');
navBarClose.addEventListener('click', function () {
    const navbarOptions = document.querySelector('#navbar-options');
    navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
}
);

const sectionWorkClose = document.querySelector('#work-c');
sectionWorkClose.addEventListener('click', function () {
    const navbarOptions = document.querySelector('#navbar-options');
    navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
}
);

const sectionAboutClose = document.querySelector('#about-c');
sectionAboutClose.addEventListener('click', function () {
    const navbarOptions = document.querySelector('#navbar-options');
    navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
}
);

const sectionContactClose = document.querySelector('#contact-c');
sectionContactClose.addEventListener('click', function () {
    const navbarOptions = document.querySelector('#navbar-options');
    navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
}
);

