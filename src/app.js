import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres = ['the', 'our'];
  let adjetivos = ['great', 'big'];
  let sustantivos = ['jogger', 'racoon'];
  let extensiones = ['.com', '.es'];

  pronombres.forEach(pronombre => {
      adjetivos.forEach(adjetivo => {
          sustantivos.forEach(sustantivo => {

              let domain = `${pronombre}${adjetivo}${sustantivo}`;

              extensiones.forEach(extension => {
                  console.log(`${domain}` + extension);
              });
      
          });
      });
  });
  console.log("Hello Rigo from the console!");
};
