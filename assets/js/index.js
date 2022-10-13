import { experiences } from './static-data.js';

const navBarOpen = document.querySelector('#navbar-h');
navBarOpen.addEventListener('click', () => {
  const navbarOptions = document.querySelector('#navbar - options');
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

function cardPopupOpen(cardId, experienceId) {
  const cardPopupOpen = document.querySelector(`#container${experienceId}`);
  cardPopupOpen.classList.replace('void-class', 'card-popup');

  const itemXwork = document.querySelector(`#itemx${experienceId}`);
  itemXwork.classList.replace('hidden', 'item-x');

  const articlePopup = document.querySelector(`#${experienceId}`);
  articlePopup.classList.replace('work-item', 'work-item-popup');

  const headerPopup = document.querySelector(`#header${experienceId}`);
  headerPopup.classList.replace('work-item-header', 'hidden');



  const figurePopup = document.querySelector(`#itemfig${experienceId}`);

  const textWork = document.querySelector(`#text${experienceId}`);

  const itemMain = document.querySelector(`#itemmain${experienceId}`);
  const divInfoWork = document.querySelector(`#divinfo${experienceId}`);
  itemMain.insertBefore(figurePopup, divInfoWork);

  const divInfoText = document.querySelector(`#divinfotext${experienceId}`);

  const itemSupportingText = document.createElement('p');
  itemSupportingText.className = 'supporting-text';
  itemSupportingText.id = `support${experienceId}`;
  itemSupportingText.textContent = cardId.supportingText;
  divInfoText.appendChild(itemSupportingText);

  divInfoText.classList.replace('hidden', 'work-text');
  textWork.classList.replace('work-text', 'hidden');

  const seeButton = document.querySelector(`#divseebutton${experienceId}`);
  seeButton.classList.replace('void-class', 'hidden');

  const divInfoButtons = document.querySelector(`#divinfobutton${experienceId}`);

  const greyLineDiv = document.createElement('div');
  greyLineDiv.id = `greylinediv${experienceId}`;
  divInfoButtons.appendChild(greyLineDiv);

  const greyLine = document.createElement('img');
  greyLine.classList = 'grey-line';
  greyLine.src = 'assets/images/grey-line.png';
  greyLineDiv.appendChild(greyLine);

  const extButDiv = document.createElement('div');
  extButDiv.className = 'void-class';
  extButDiv.id = `divextbutton${experienceId}`;
  divInfoButtons.appendChild(extButDiv);

  const externalUl = document.createElement('ul');
  externalUl.className = 'external-ul';
  extButDiv.appendChild(externalUl);

  cardId.links.forEach(link => {
    const externalLi = document.createElement('li');
    externalLi.className = 'external-link-button';
    externalUl.appendChild(externalLi);

    const [textContent, textHref, textIcon] = link;
    const liA = document.createElement('a');
    liA.textContent = textContent;
    liA.href = textHref;
    liA.className = 'li-a';
    externalLi.appendChild(liA);

    const liI = document.createElement('i');
    liI.className = textIcon;
    liA.appendChild(liI);
  });
}

function cardPopupClose(experienceId) {
  const cardPopupClose = document.querySelector(`#container${experienceId}`);
  cardPopupClose.classList.replace('card-popup', 'void-class');

  const itemXwork = document.querySelector(`#itemx${experienceId}`);
  itemXwork.classList.replace('item-x', 'hidden');

  const articlePopup = document.querySelector(`#${experienceId}`);
  articlePopup.classList.replace('work-item-popup', 'work-item');

  const headerPopup = document.querySelector(`#header${experienceId}`);
  headerPopup.classList.replace('hidden', 'work-item-header');

  const textWork = document.querySelector(`#text${experienceId}`);
  textWork.classList.replace('hidden', 'work-text');

  const seeButton = document.querySelector(`#divseebutton${experienceId}`);
  seeButton.classList.replace('hidden', 'void-class');

  const divInfoText = document.querySelector(`#divinfotext${experienceId}`);
  divInfoText.classList.replace('work-text', 'hidden');

  const itemSupportingText = document.querySelector(`#support${experienceId}`);
  itemSupportingText.remove();

  const divExtButton = document.querySelector(`#divextbutton${experienceId}`);
  divExtButton.remove();

  const figurePopup = document.querySelector(`#itemfig${experienceId}`);
  const headerWork = document.querySelector(`#header${experienceId}`);
  headerWork.appendChild(figurePopup);

  const greyLine = document.querySelector(`#greylinediv${experienceId}`);
  greyLine.remove();
}

function workCards() {
  let oddCard = 1;

  Object.entries(experiences).forEach(x => {
    const [experience, expData] = x;
    console.log(experience)
    const cards = document.querySelector('#a-work-container');

    const popupContainer = document.createElement('div');
    popupContainer.classList = 'void-class';
    popupContainer.id = `container${experience}`;
    cards.appendChild(popupContainer);

    const itemArticle = document.createElement('article');
    itemArticle.className = 'work-item';
    itemArticle.id = experience;

    if (oddCard % 2 === 0) { itemArticle.className += ' order-1'; }
    oddCard += 1;

    popupContainer.appendChild(itemArticle);

    const itemHeader = document.createElement('header');
    itemHeader.className = 'work-item-header';
    itemHeader.id = `header${experience}`;
    itemArticle.appendChild(itemHeader);

    const itemFigure = document.createElement('figure');
    itemFigure.className = 'work-img';
    itemFigure.id = `itemfig${experience}`;
    itemHeader.appendChild(itemFigure);

    const itemImg = document.createElement('img');
    itemImg.src = expData.image;
    itemImg.alt = expData.imageAlt;
    itemFigure.appendChild(itemImg);

    const itemMain = document.createElement('main');
    itemMain.className = 'work-main';
    itemMain.id = `itemmain${experience}`;
    itemArticle.appendChild(itemMain);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title-div';
    titleDiv.id = `titlediv${experience}`;
    itemMain.appendChild(titleDiv);

    const h3Div = document.createElement('div');
    h3Div.class = 'h3-div';
    h3Div.id = `h3div${experience}`;
    titleDiv.appendChild(h3Div);

    const itemH3 = document.createElement('H3');
    itemH3.textContent = expData.title;
    h3Div.appendChild(itemH3);

    const itemX = document.createElement('div');
    itemX.className = 'hidden';
    itemX.id = 'itemx' + experience;
    titleDiv.appendChild(itemX);

    const itemXi = document.createElement('i');
    itemXi.className = 'fa-solid fa-xmark';
    itemXi.onclick = function () {
      cardPopupClose(experience);
    };
    itemX.appendChild(itemXi);

    const itemProInf = document.createElement('div');
    itemProInf.className = 'project-info';
    itemProInf.id = 'proinf' + experience;
    itemMain.appendChild(itemProInf);

    const itemProjectClient = document.createElement('div');
    itemProjectClient.className = 'project-client';
    itemProjectClient.textContent = expData.projectClient;
    itemProInf.appendChild(itemProjectClient);

    expData.projectInfo.forEach(project => {
      let ProjectInfoText = document.createElement('div');
      ProjectInfoText.className = 'project-info-text';
      itemProInf.appendChild(ProjectInfoText);

      const ProjectInfoTextI = document.createElement('i');
      ProjectInfoTextI.className = 'fa-solid fa-circle fa-2xs';
      ProjectInfoText.appendChild(ProjectInfoTextI);

      ProjectInfoText = document.createElement('div');
      ProjectInfoText.className = 'project-info-text';
      ProjectInfoText.textContent = project;
      itemProInf.appendChild(ProjectInfoText);
    });

    const divInfoCard = document.createElement('div');
    divInfoCard.id = 'divinfo' + experience;
    divInfoCard.className = 'div-info';
    itemMain.appendChild(divInfoCard);

    const divInfoText = document.createElement('div');
    divInfoText.id = 'divinfotext' + experience;
    divInfoText.className = 'hidden';
    divInfoCard.appendChild(divInfoText);

    const divInfoButtons = document.createElement('div');
    divInfoButtons.id = 'divinfobutton' + experience;
    divInfoButtons.className = 'div-info-button';
    divInfoCard.appendChild(divInfoButtons);

    const divInfoAttr = document.createElement('div');
    divInfoAttr.id = 'divinfoattr' + experience;
    divInfoAttr.className = 'divinfoattr';
    divInfoButtons.appendChild(divInfoAttr);

    const MainP = document.createElement('p');
    MainP.className = 'work-text';
    MainP.id = 'text' + experience;
    MainP.textContent = expData.resume;
    divInfoAttr.appendChild(MainP);

    const workUl = document.createElement('ul');
    workUl.className = 'work-categories';
    divInfoAttr.appendChild(workUl);

    expData.languajes.forEach(languaje => {
      const workCat = document.createElement('li');
      workCat.className = 'work-cat';
      workCat.textContent = languaje;
      workUl.appendChild(workCat);
    });

    const voidDiv = document.createElement('div');
    voidDiv.className = 'void-class';
    voidDiv.id = 'divseebutton' + experience;
    divInfoAttr.appendChild(voidDiv);

    const projectButton = document.createElement('button');
    projectButton.className = 'see-project-button';
    projectButton.textContent = 'See Project';
    projectButton.onclick = function () {
      cardPopupOpen(expData, experience);
    };
    voidDiv.appendChild(projectButton);
  });
}

window.addEventListener('load', workCards(), false);