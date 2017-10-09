function imprimeNumeros(max)
{
    for(var i= 0; i<max;i++)
        {
            document.write(i + "<br/>");
        }
}

function imprimeArreglo(arreglo)
{
    for(var i= 0; i<arreglo.length;i++)
        {
            document.write(arreglo[i] + "<br/>");
        }
}

document.write("Hola desde JavaScript");

imprimeNumeros(5);

window.alert("Que son 13!!!!!!");
console.log("tiritiriti tiritiritiri");

//deficion de arreglos literal
var arreglo1 = [10,20,30];
imprimeArreglo(arreglo1);

//notacion de constructor de arreglo
var arreglo2 = new Array(1,2,3);
imprimeArreglo(arreglo2);


//definicion de objetos literal 
var triangulo = {
    base: 3,
    altura: 5,
    area : function() {
        console.log("area es igual a " + (this.base + this.altura)/2)
    }
}

