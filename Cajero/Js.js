class billete 
{
    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero(){
    let x = document.getElementById("Dinero");
    let dinero = x.value;
    
    for(let i of caja){
        
        if(dinero >0){
            div = Math.floor(dinero/i.valor)
            if(div > i.cantidad){
                div = i.cantidad;
            }
            entregado.push(new billete(i.valor,div))
            dinero -= (div * i.valor);
            
        }
    }
    for(let x of entregado){
        console.log(x)
    }
}



let b = document.getElementById("botton")
let inicio = b.addEventListener("click", entregarDinero)

let div = 0;
let entregado = [];


let caja = [];
caja.push(new billete(100,2));
caja.push(new billete(50,4));
caja.push(new billete(20,8));
caja.push(new billete(5,10));
