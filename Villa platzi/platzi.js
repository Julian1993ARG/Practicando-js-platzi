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

//Inico img en cada animal
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca)

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo)

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo)

perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load", cargarPerro)

//Fin img

// funcion para cargar
function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar()
}

function cargarVaca()
{
  vaca.cargaOk = true;
  dibujar()
}

function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar()
}

function cargarPollo()
{
  pollo.cargaOk = true;
  dibujar()
}
function cargarPerro()
{
  perro.cargaOk = true;
  dibujar()
}
//Fin funcion cargar 

//Dibujar si cargo
function dibujar () 
{ 
  let cant = 5;
  let i = 0;

  if(fondo.cargaOk)
  {    
    papel.drawImage(fondo.imagen, 0 , 0);    
  }
  if(vaca.cargaOk)
  { while (i<cant)
    {
      var randox = aleatorio(0,400);
      var randoy = aleatorio(0,400);
      papel.drawImage(vaca.imagen, randox , randoy);
      i++ 
    }
    cant = 3;
    i = 0;
  }
  if(cerdo.cargaOk)
  { while (i<=cant)
    {
      var randox = aleatorio(0,400);
      var randoy = aleatorio(0,400);
      papel.drawImage(cerdo.imagen,  randox , randoy);
      i++
    }
    cant = 2;
    i = 0;
  }
  if(pollo.cargaOk)
  { while (i<=cant)
    {
      var randox = aleatorio(0,400);
      var randoy = aleatorio(0,400);
      papel.drawImage(pollo.imagen,  randox , randoy);
      i++ 
    }
  }
  if(perro.cargaOk)
  {
    papel.drawImage(perro.imagen,  250 , 250);
  }  
  
  
}

function aleatorio (min, max)
{
  let resultado;
  resultado = Math.floor(Math.random() * (max - min +1))+ min;
  return resultado;
}

