// const navbarOpen = document.getElementById('nabvar-h');
const navBarOpen = document.querySelector('#navbar-h');
navBarOpen.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-right-text', 'nav-right-text-open');

  const closeIcon = document.querySelector('#close-icon-c');
  closeIcon.classList.replace('hidden', 'close-icon-visible');
});

const navBarClose = document.querySelector('#navbar-c');
navBarClose.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');

  const closeIcon = document.querySelector('#close-icon-c');
  closeIcon.classList.replace('close-icon-visible', 'hidden');
});

const sectionWorkClose = document.querySelector('#work-c');
sectionWorkClose.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
});

const sectionAboutClose = document.querySelector('#about-c');
sectionAboutClose.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
});

const sectionContactClose = document.querySelector('#contact-c');
sectionContactClose.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar-options');
  navbarOptions.classList.replace('nav-right-text-open', 'nav-right-text');
});
