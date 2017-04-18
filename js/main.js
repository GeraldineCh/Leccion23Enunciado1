//Cajas base
var caja1 = document.createElement('div');
caja1.id = 'contenedor1';

var caja2 = document.createElement('div');
caja2.id = 'contenedor2';

var body = document.querySelector('body');
body.appendChild(caja1);
body.appendChild(caja2);


//Primera caja
var rosa = document.createElement("div");
rosa.id = 'rosa';
rosa.style.margin = "30px auto";
rosa.style.width = "200px";
rosa.style.height = "200px";
rosa.style.background = "rgb(237, 70, 47)";
document.getElementById("contenedor1").appendChild(rosa);

var morado = document.createElement("div");
morado.id = 'morado';
morado.style.width = "100px";
morado.style.height = "100px";
morado.style.background = "rgb(117, 46, 128)";
morado.style.position = "relative";
morado.style.top = "50px";
morado.style.left = "50px";
document.getElementById("rosa").appendChild(morado);

var amarillo = document.createElement("div");
amarillo.style.width = "50px";
amarillo.style.height = "50px";
amarillo.style.background = "rgb(255, 248, 53)";
amarillo.style.position = "relative";
document.getElementById("morado").appendChild(amarillo);


//Segunda caja
var azul = document.createElement("div");
azul.id = 'azul';
azul.style.width = "200px";
azul.style.height = "200px";
azul.style.background = "rgb(0, 72, 251)";
azul.style.margin = "auto";
document.getElementById("contenedor2").appendChild(azul);

var verde = document.createElement("div");
verde.id = 'verde';
verde.style.width = "100px";
verde.style.height = "100px";
verde.style.background = "rgb(56, 120, 4)";
verde.style.position = "relative";
verde.style.top = "50px";
verde.style.left = "50px";
document.getElementById("azul").appendChild(verde);

var negro = document.createElement("div");
negro.id = 'negro';
negro.style.width = "50px";
negro.style.height = "50px";
negro.style.background = "black";
negro.style.position = "relative";
negro.style.top = "-50px";
negro.style.left = "-50px";
document.getElementById("verde").appendChild(negro);