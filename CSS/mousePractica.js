xx = addEventListener("mousemove", dibujarMouse)
var cuadrito = document.getElementById("dibujito");
var papel = cuadrito.getContext("2d");
yy = addEventListener("mousemove", dibujarMouse)
document.addEventListener("keydown", dibujarTeclado);
let x,y;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };

function dibujarMouse(evento)
{
    
    if(evento.buttons == 1)
    {
        dibujarLinea("green",x,y,evento.layerX,evento.layerY, papel )
        x = evento.layerX;
        y = evento.layerY;
    }
    else
    {
        x = evento.layerX;
        y = evento.layerY;
    }
}


function bordes()
{
    dibujarLinea("black", 1,1,300,1,papel)
    dibujarLinea("black", 300,1,300,300,papel)
    dibujarLinea("black", 1,300,300,300,papel)
    dibujarLinea("black", 1,1,1,300,papel)
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

bordes()
dibujarLinea("red", 149, 149, 151, 151, papel)


function dibujarTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}