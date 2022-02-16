let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");




let fondo =
{
  url: "imagenes/tile.png",
  cargaOk: false
}
let vaca =
{
  url: "imagenes/vaca.png",
  cargaOk: false
}
let cerdo =
{
  url: "imagenes/cerdo.png",
  cargaOk: false
}
let pollo =
{
  url: "imagenes/pollo.png",
  cargaOk: false
}
let perro =
{
  url: "imagenes/perro.png",
  cargaOk: false
}
fondo.imagen = new Image();
fondo.imagen = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar()
}



function dibujar () 
{
  if(fondo.cargaOk)
    papel.drawImage(fondo.url, 0 , 0);
}

function aleatorio (min, max)
{
  let resultado;
  resultado = Math.floor(Math.random() * (max - min +1))+ min;
  return resultado;
}


console.log(fondo)