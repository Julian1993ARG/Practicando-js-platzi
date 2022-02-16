let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d")
let mapa = "imagenes/tile.png";

let fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

function dibujar (event ) 
{
  papel.drawImage(fondo, 0 , 0);
  
}

function aleatorio (min, max)
{
  let resultado;
  resultado = Math.floor(Math.random() * (max - min +1))+ min;
  return resultado;
}
