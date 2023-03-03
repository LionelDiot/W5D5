{
  console.log(` Le nombre de p est de : ${document.getElementsByTagName("p").length} `) ;
  console.log(`le contenu de l'id "coucou" est : ${document.getElementById("coucou").textContent}`) ;
  console.log(`le troisième a pointe vers l'url: ${document.getElementsByTagName("a")[2].href}`) ;
  console.log(`Il y a ${document.getElementsByClassName("compte-moi").length} éléments avec .compte-moi.`) ;
  console.log(`Il y a ${document.querySelectorAll('.compte-moi li').length} éléments <li> avec .compte-moi.`) ;
  console.log(`Il y a ${document.querySelectorAll('ol li.compte-moi').length} éléments <li> dans <ol> avec .compte-moi`) ;
  console.log(`Le contenu caché: ${document.querySelectorAll('div ul:nth-of-type(2) li:first-of-type')[0].textContent}`) ;
}