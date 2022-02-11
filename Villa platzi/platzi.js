var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown" , moverPastor);

var cantidadvacas = aleatorio(0, 16);
var cantidadpollo = aleatorio(0, 16);
var cantidadcerdos = aleatorio(0, 16);

var movimiento = 40;
var x = 420;
var y = 420;

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var perro = {
  url: "perro.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load", cargarPerro);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas(){
  vaca.cargaOK = true;
  vaca.x = [];
  vaca.y = [];
  for(var n=0; n < cantidadvacas; n++){
    vaca.x[n] = aleatorio(0,7) * 60;
    vaca.y[n] = aleatorio(0,7) * 60;
  }
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  cerdo.x = [];
  cerdo.y = [];
  for(var l=0; l < cantidadcerdos; l++){
    cerdo.x[l] = aleatorio(0,7) * 60;
    cerdo.y[l] = aleatorio(0,7) * 60;
  }
  dibujar();
}

function cargarPollos(){
  pollo.cargaOK = true;
  pollo.x = [];
  pollo.y = [];
  for(var e=0; e < cantidadpollo; e++){
    pollo.x[e] = aleatorio(0,7) * 60;
    pollo.y[e] = aleatorio(0,7) * 60;
  }
  dibujar();
}

function cargarPerro(){
  perro.cargaOK = true;
  dibujar()
}

function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK){
    for(v = 0; v < cantidadvacas; v++){
      papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
    }
  }
  if(pollo.cargaOK){
    for(p = 0; p < cantidadpollo; p++){
      papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
    }
  }
  if(cerdo.cargaOK){
    for(c = 0; c < cantidadcerdos; c++){
      papel.drawImage(cerdo.imagen, cerdo.x[c], cerdo.y[c]);
    }
  }
  if(perro.cargaOK){
    papel.drawImage(perro.imagen, x, y);
  }
}

function moverPastor(evento){
  switch (evento.keyCode){
    case teclas.UP:
        y = y - movimiento;
        if(y < -40){
          y = 500;
        }
        dibujar();
        break;
    case teclas.DOWN:
        y = y + movimiento
        if(y > 500){
           y = 0;
        }
        dibujar();
        break;
    case teclas.LEFT:
        x = x - movimiento;
        if(x < -40){
           x = 500;
        }
        dibujar();
        break;
    case teclas.RIGHT:
        x = x + movimiento;
        if(x > 500){
           x = 0;
        }
        dibujar();
        break;
      default:
  }
}

function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}