var z = aleatorio(10,20);
document.write("El numero es " + z)
function aleatorio(min,max)
{
    let resultado = Math.floor(Math.random() * (max - min +1)) + min;
    return resultado
}