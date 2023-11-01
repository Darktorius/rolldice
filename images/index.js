
// Generar un número aleatorio entre 1 y 6


 function rolldice(){

    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumber1 =Math.floor(Math.random() * 6) + 1;

// Utilizar querySelector para seleccionar el elemento <img> por su ID
var imgElement2 = document.querySelector(".img2");
var imgElement1= document.querySelector(".img1");

// Construir la ruta de la imagen basada en el número aleatorio
var imagePath2 = "dice" + randomNumber2 + ".png";
var imagePath1 ="dice" + randomNumber1 + ".png";
// Utilizar setAttribute para establecer el atributo src
imgElement2.setAttribute("src", imagePath2);
imgElement1.setAttribute("src", imagePath1);


 }


var button= document.querySelector("button");



button.addEventListener("click", rolldice);


