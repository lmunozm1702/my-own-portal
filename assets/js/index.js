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

const experiences = {
  work1: {
    title: 'Tonic',
    projectClient: 'CANOPY',
    projectInfo: ['Back End Dev', 2015],
    resume: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languajes: ['html', 'css', 'javaScript'],
    image: 'assets/images/tonic.png',
    imageAlt: ''
  },
  work2: {
    title: 'Multi-Post Stories',
    projectClient: 'FACEBOOK',
    projectInfo: ['Full Stack Dev', 2015],
    resume: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languajes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: 'assets/images/multi-post.png',
    imageAlt: ''
  },
  work3: {
    title: 'Facebook 360',
    projectClient: 'FACEBOOK',
    projectInfo: ['Back End Dev', 2015],
    resume: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languajes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: 'assets/images/facebook-360.png',
    imageAlt: ''
  },
  work4: {
    title: 'Uber Navigation',
    projectClient: 'UBER',
    projectInfo: ['Lead Developer', 2018],
    resume: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languajes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    image: 'assets/images/uber-navigation.png',
    imageAlt: ''
  }
}

function workCards() {
  let oddCard = 1;
  for (let experience in experiences) {
    console.log(experiences[experience].title)

    let cards = document.querySelector("#a-work-container");
    //console.log(cards)

    //<article class="work-item">
    let itemArticle = document.createElement("article");
    itemArticle.className = "work-item";

    //set the image at left or right of the card for desktop version
    if (oddCard % 2 == 0) { itemArticle.className += " order-1"; }
    oddCard += 1;

    cards.appendChild(itemArticle);

    //<header class="work-item-header">
    let itemHeader = document.createElement("header");
    itemHeader.className = "work-item-header";
    itemArticle.appendChild(itemHeader);

    //<figure class="work-img"></figure>
    let itemFigure = document.createElement("figure");
    itemFigure.className = "work-img";
    itemHeader.appendChild(itemFigure);

    //<img src="assets/images/tonic.png" alt="Project Tonic Prevew Image">
    let itemImg = document.createElement("img")
    itemImg.src = experiences[experience].image;
    itemImg.alt = experiences[experience].imageAlt;
    itemFigure.appendChild(itemImg);

    //<main class="work-main">
    let itemMain = document.createElement("main");
    itemMain.className = "work-main";
    itemArticle.appendChild(itemMain);

    //<h3>Tonic</h3>
    let itemH3 = document.createElement("H3");
    itemH3.textContent = experiences[experience].title;
    itemMain.appendChild(itemH3);

    //<div class="project-info">
    let itemProInf = document.createElement("div");
    itemProInf.className = "project-info";
    itemMain.appendChild(itemProInf);

    //<div class="project-client">CANOPY</div>
    let itemProjectClient = document.createElement("div");
    itemProjectClient.className = "project-client";
    itemProjectClient.textContent = experiences[experience].projectClient;
    itemProInf.appendChild(itemProjectClient);

    //Loop for:
    //<div class="project-info-text"><i class="fa-solid fa-circle fa-2xs"></i></div>
    //<div class="project-info-text">Back End Dev</div>
    experiences[experience].projectInfo.forEach(project => {
      let ProjectInfoText = document.createElement("div");
      ProjectInfoText.className = "project-info-text";
      itemProInf.appendChild(ProjectInfoText);

      let ProjectInfoTextI = document.createElement("i");
      ProjectInfoTextI.className = "fa-solid fa-circle fa-2xs";
      ProjectInfoText.appendChild(ProjectInfoTextI);

      ProjectInfoText = document.createElement("div");
      ProjectInfoText.className = "project-info-text";
      ProjectInfoText.textContent = project;
      itemProInf.appendChild(ProjectInfoText);
    });

    //<p class="work-text">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    MainP = document.createElement("p")
    MainP.className = "work-text";
    MainP.textContent = experiences[experience].resume;
    itemMain.appendChild(MainP);

    //<ul class="work-categories"></ul>
    workUl = document.createElement("ul")
    workUl.className = "work-categories";
    itemMain.appendChild(workUl);

    //Loop for:
    //<li class="work-cat">html</li>
    //<li class="work-cat">css</li>
    //<li class="work-cat">javaScript</li>
    experiences[experience].languajes.forEach(languaje => {
      let workCat = document.createElement("li");
      workCat.className = "work-cat";
      workCat.textContent = languaje;
      workUl.appendChild(workCat);
    });

    //<div><button class="see-project-button">See Project</button></div>
    /******************************************************************/

  }
}

window.addEventListener('load', workCards(), false);
