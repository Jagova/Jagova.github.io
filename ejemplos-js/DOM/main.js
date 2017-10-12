var btnAgregar = document.getElementById("btnAgregar");
//btnAgregar.onclick = agregaCaja;
var padre = document.getElementById("contenedor");

//delegacion de eventos
padre.addEventListener('click', function(evento){
    var hijo = evento.target;
    if(hijo != this)  //validar que no se hizo click en el mismo contenedor
        this.removeChild(hijo);
});

btnAgregar.addEventListener('click', function anonima() {   
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    if (contenido != '')
        agregaCaja(contenido);
});

function agregaCaja(texto) {
    //var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    
    nuevo.appendChild(texto);
    nuevo.setAttribute("class", "caja");
    var seccion = document.getElementsByTagName('section');
    seccion[0].appendChild(nuevo);

   
    
}




