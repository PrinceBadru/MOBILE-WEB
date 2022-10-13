const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const portfolio = document.querySelector('#portfolio');
const mobileMenuOptions = document.querySelectorAll('.mobile-menu-option');

hamburger.addEventListener('click', () => {
  portfolio.classList.remove('hide');
});
close.addEventListener('click', () => {
  portfolio.classList.add('hide');
});
mobileMenuOptions.forEach((element) => {
  element.addEventListener('click', () => {
    portfolio.classList.add('hide');
  });
});

const popupSection = document.getElementById('popup');
function closePopup() {
  popupSection.classList.add('hide');
}
const myWorksArray = [
  {
    projectId: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
  {
    projectId: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
  {
    projectId: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
  {
    projectId: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
  {
    projectId: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
  {
    projectId: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/works/SnapshootPortfolio.svg',
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    linkToLiveVersion: 'liveversion.com',
    linkToSource: 'github.com/PrinceBadru',
  },
];

// Dynamic Implentation of the My WOrk Section
const designNew = document.getElementById('designNew');
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < myWorksArray.length; i += 1) {
    const articleP = document.createElement('article');
    articleP.className += 'project';
    designNew.appendChild(articleP);

    const placeHolder = document.createElement('div');
    placeHolder.className += 'image-placeholder';
    articleP.appendChild(placeHolder);

    const placeHolderImg = document.createElement('img');
    placeHolderImg.alt = 'My Work Snapshot';
    placeHolderImg.src = myWorksArray[i].featuredImage;
    placeHolder.appendChild(placeHolderImg);

    const multi = document.createElement('h2');
    multi.className += 'multi';
    multi.innerHTML = myWorksArray[i].name;
    articleP.appendChild(multi);

    const lang = document.createElement('ul');
    lang.className += 'lang';
    articleP.appendChild(lang);

    for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
      const language = document.createElement('li');
      language.className += 'language';
      language.innerHTML = myWorksArray[i].technologies[j];
      lang.appendChild(language);
    }

    const butt = document.createElement('div');
    butt.className += 'butt';
    articleP.appendChild(butt);

    const btn = document.createElement('button');
    btn.className += 'btn';
    btn.innerHTML = ' See Project';
    butt.appendChild(btn);

    btn.addEventListener('click', () => {
      popupSection.classList.remove('hide');
      const contains = `<div class="card">
      <div class="card-header">
        <img class="close-button" id="closeButton" onClick="closePopup();" src="images/icons/cloasepopup.svg" alt="close Button"/>
      </div>
      <div class="card-body">
        <img src="${myWorksArray[i].featuredImage}" alt="my work Portrait"/>
        <div class="two-columns">
          <h4>Keeping track of hundreds of
            components</h4>
          <div class="display-centered">
            <a href="" class="btn-secondary">See Live <img src="images/icons/live.svg" alt="See PRoject Live"/></a>
            <a href="" class="btn-secondary">See Source <img src="images/icons/github.svg" alt="See Source Code"/></a>
          </div>
        </div>
        <div class="childs">
          <div class="asscories">
            <ul class="card-tags">`;

      let newContains = '';
      for (let j = 0; j < myWorksArray[i].technologies.length; j += 1) {
        const licontains = `<li>${myWorksArray[i].technologies[j]}</li>`;
        newContains += licontains;
      }
      const conatins2 = `</ul>
             
          </div>
          <p>${myWorksArray[i].description}</p>
          <div class="mobile-buttons">
            <a href="${myWorksArray[i].linkToLiveVersion}" class="btn-secondary">See Live <img src="images/icons/live.svg" alt="See PRoject Live"/></a>
            <a href="${myWorksArray[i].linkToSource}" class="btn-secondary">See Source <img src="images/icons/github.svg" alt="See Source Code"/></a>
          </div>
        </div>
      </div>
    </div>`;

      popupSection.innerHTML += contains + newContains + conatins2;
      const closeButton = document.getElementById('closeButton');
      closeButton.addEventListener('click', () => {
        closePopup();
      });
    });
  }
});
