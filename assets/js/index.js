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

  const projectInfoPopup = document.querySelector(`#proinf${experienceId}`);

  const figurePopup = document.querySelector(`#itemfig${experienceId}`)

  const textWork = document.querySelector(`#text${experienceId}`);

  const itemMain = document.querySelector(`#itemmain${experienceId}`);
  let divInfoWork = document.querySelector(`#divinfo${experienceId}`);
  itemMain.insertBefore(figurePopup, divInfoWork)

  let divInfoText = document.querySelector(`#divinfotext${experienceId}`)

  let itemSupportingText = document.createElement('p');
  itemSupportingText.className = 'supporting-text';
  itemSupportingText.id = `support${experienceId}`;
  itemSupportingText.textContent = cardId.supportingText;
  divInfoText.appendChild(itemSupportingText);

  divInfoText.classList.replace('hidden', 'work-text');
  textWork.classList.replace('work-text', 'hidden');

  let seeButton = document.querySelector(`#divseebutton${experienceId}`);
  seeButton.classList.replace('void-class', 'hidden');

  let divInfoButtons = document.querySelector(`#divinfobutton${experienceId}`);

  let greyLineDiv = document.createElement('div')
  greyLineDiv.id = `greylinediv${experienceId}`;
  divInfoButtons.appendChild(greyLineDiv);

  let greyLine = document.createElement('img');
  greyLine.classList = 'grey-line'
  greyLine.src = 'assets/images/grey-line.png'
  greyLineDiv.appendChild(greyLine);

  let extButDiv = document.createElement('div');
  extButDiv.className = 'void-class';
  extButDiv.id = `divextbutton${experienceId}`;
  divInfoButtons.appendChild(extButDiv);

  let externalUl = document.createElement('ul');
  externalUl.className = 'external-ul';
  extButDiv.appendChild(externalUl);

  cardId.links.forEach(link => {
    //console.log(link);
    let externalLi = document.createElement('li');
    externalLi.className = 'external-link-button';
    externalUl.appendChild(externalLi);

    let liA = document.createElement('a');
    liA.textContent = link[0];
    liA.href = link[1];
    liA.className = 'li-a'
    externalLi.appendChild(liA);

    let liI = document.createElement('i');
    liI.className = link[2];
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

  let seeButton = document.querySelector(`#divseebutton${experienceId}`);
  seeButton.classList.replace('hidden', 'void-class');

  let divInfoText = document.querySelector(`#divinfotext${experienceId}`);
  divInfoText.classList.replace('work-text', 'hidden');

  let itemSupportingText = document.querySelector(`#support${experienceId}`)
  itemSupportingText.remove();

  let divExtButton = document.querySelector(`#divextbutton${experienceId}`);
  divExtButton.remove();

  const figurePopup = document.querySelector(`#itemfig${experienceId}`)
  const headerWork = document.querySelector(`#header${experienceId}`)
  headerWork.appendChild(figurePopup);

  let greyLine = document.querySelector(`#greylinediv${experienceId}`);
  greyLine.remove();
}

window.addEventListener('load', workCards(), false);

function workCards() {
  let oddCard = 1;
  for (const experience in experiences) {
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
    itemImg.src = experiences[experience].image;
    itemImg.alt = experiences[experience].imageAlt;
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
    itemH3.textContent = experiences[experience].title;
    h3Div.appendChild(itemH3);

    const itemX = document.createElement('div');
    itemX.className = 'hidden';
    itemX.id = 'itemx' + experience;
    titleDiv.appendChild(itemX);

    let itemXi = document.createElement('i');
    itemXi.className = 'fa-solid fa-xmark';
    itemXi.onclick = function () {
      cardPopupClose(experience);
    };
    itemX.appendChild(itemXi);

    let itemProInf = document.createElement('div');
    itemProInf.className = 'project-info';
    itemProInf.id = 'proinf' + experience;
    itemMain.appendChild(itemProInf);

    let itemProjectClient = document.createElement('div');
    itemProjectClient.className = 'project-client';
    itemProjectClient.textContent = experiences[experience].projectClient;
    itemProInf.appendChild(itemProjectClient);

    experiences[experience].projectInfo.forEach(project => {
      let ProjectInfoText = document.createElement('div');
      ProjectInfoText.className = 'project-info-text';
      itemProInf.appendChild(ProjectInfoText);

      let ProjectInfoTextI = document.createElement('i');
      ProjectInfoTextI.className = 'fa-solid fa-circle fa-2xs';
      ProjectInfoText.appendChild(ProjectInfoTextI);

      ProjectInfoText = document.createElement('div');
      ProjectInfoText.className = 'project-info-text';
      ProjectInfoText.textContent = project;
      itemProInf.appendChild(ProjectInfoText);
    });

    let divInfoCard = document.createElement('div');
    divInfoCard.id = 'divinfo' + experience;
    divInfoCard.className = 'div-info';
    itemMain.appendChild(divInfoCard);

    let divInfoText = document.createElement('div');
    divInfoText.id = 'divinfotext' + experience;
    divInfoText.className = 'hidden';
    divInfoCard.appendChild(divInfoText);

    let divInfoButtons = document.createElement('div');
    divInfoButtons.id = 'divinfobutton' + experience;
    divInfoButtons.className = 'div-info-button'
    divInfoCard.appendChild(divInfoButtons);

    let divInfoAttr = document.createElement('div');
    divInfoAttr.id = 'divinfoattr' + experience;
    divInfoAttr.className = 'divinfoattr';
    divInfoButtons.appendChild(divInfoAttr);

    let MainP = document.createElement('p')
    MainP.className = 'work-text';
    MainP.id = 'text' + experience;
    MainP.textContent = experiences[experience].resume;
    divInfoAttr.appendChild(MainP);

    let workUl = document.createElement('ul')
    workUl.className = 'work-categories';
    divInfoAttr.appendChild(workUl);

    experiences[experience].languajes.forEach(languaje => {
      let workCat = document.createElement('li');
      workCat.className = 'work-cat';
      workCat.textContent = languaje;
      workUl.appendChild(workCat);
    });

    let voidDiv = document.createElement('div');
    voidDiv.className = 'void-class';
    voidDiv.id = 'divseebutton' + experience;
    divInfoAttr.appendChild(voidDiv);

    let projectButton = document.createElement('button');
    projectButton.className = 'see-project-button';
    projectButton.textContent = 'See Project';
    projectButton.onclick = function () {
      cardPopupOpen(experiences[experience], experience);
    };
    voidDiv.appendChild(projectButton);
  }
}

