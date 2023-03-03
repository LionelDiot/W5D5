{
  function changeTitles() {
    document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP !"
    document.querySelectorAll('h1+p')[0].innerHTML = " THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
  }

  function changeCallToActions() {
    document.querySelectorAll('.btn-primary')[0].innerHTML = "OK Je veux tester !"
    document.querySelectorAll('.btn-primary')[0].href = "http://www.thehackingproject.org"
    document.querySelectorAll('.btn-secondary')[0].innerHTML = "Non merci"
  }

  function changeLogoName() {
    document.querySelectorAll('strong')[0].innerHTML = "The THP Experience";
    document.querySelectorAll('strong')[0].style.fontSize = "2em";
  }

  function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let i = 0;
    while (i < imagesArray.length) {
      document.querySelectorAll('.card-img-top')[i].src = imagesArray[i];
      console.log(`${document.querySelectorAll('.card-img-top')[i].src} `);
      i++
    }
  }

  function deleteLastCards() {
    let cartes = document.querySelectorAll('.card');
    for (let i = 8; i >= 6; i--) {
      cartes[i].remove();
    }
  }

  function changeCardsText() {
    document.querySelectorAll('.card-text')[0].innerHTML = '<u>Carte HTML</u> : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web" ';
    document.querySelectorAll('.card-text')[1].innerHTML = '<u>Carte CSS</u> : "Les feuilles de style en cascade, généralement appelées CSS de l’anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML" ';
    document.querySelectorAll('.card-text')[2].innerHTML = '<u>Carte JS</u> : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C’est un langage orienté objet à prototype." ';
  }

  function changeViewButtons() {
    let i = 0
    while (i < 6) {
      document.querySelectorAll('.btn-group .btn:first-child')[i].classList = 'btn btn-sm btn-success';
      i++;
    }
  }

  function makeWeirdPyramid() {
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    document.querySelectorAll('main .row')[0].parentNode.appendChild(newRow);
    document.querySelectorAll('main .row')[1].appendChild(document.querySelectorAll('.col-md-4')[5]);

  }

  changeLogoName();
  changeTitles();
  changeCallToActions();
  changeCardsText();
  populateImages();
  deleteLastCards();
  changeViewButtons();
  makeWeirdPyramid();

  // console.log(`${document.querySelectorAll('.compte-moi li').length} `) ;
}