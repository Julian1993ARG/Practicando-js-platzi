let move = 
{
    DOWN:40,
    UP:38,
    RIGHT:39,
    LEFT:37
}

let a = document.getElementById("dibujito");
let zona = a.getContext("2d")
let e = document.addEventListener("keydown", dibujarConFlechas)
let x=150;
let y=150;
let mover = 7;



function recuadrar()
{
    dibujar("black", 1, 1, 1, 299, zona, 3)
    dibujar("black", 1, 1, 299, 1, zona, 3)
    dibujar("black", 299, 1, 299, 299, zona, 3)
    dibujar("black", 1, 299, 299, 299, zona, 3)
}

function dibujar (color, xi, yi, xf, yf, zona, tamaño)
{
    zona.beginPath();
    zona.strokeStyle = color;
    zona.lineWidth = tamaño;
    zona.moveTo(xi, yi);
    zona.lineTo(xf, yf);
    zona.stroke();
    zona.closePath();

};

recuadrar();


function dibujarConFlechas(dato)
{   
    let xx =document.getElementById("strong")
    let tamaño = xx.value; 
    
    let r = document.getElementById("colorcito");
    let color = r.value;
    
    if(dato.keyCode == move.UP){
        dibujar(color, x, y, x, y - mover, zona, tamaño);
        y -= mover
    }
    else if(dato.keyCode == move.DOWN){
        dibujar(color, x, y, x, y + mover, zona, tamaño);
        y += mover
    }
    else if(dato.keyCode == move.RIGHT){
        dibujar(color, x, y, x + mover, y , zona, tamaño);
        x += mover
    }
    else if(dato.keyCode == move.LEFT){
        dibujar(color, x, y, x - mover, y, zona, tamaño);
        x -= mover
    }
}

