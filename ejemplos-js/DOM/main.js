var btnAgregar = document.getElementById("btnAgregar");
//btnAgregar.onclick = agregaCaja;

btnAgregar.addEventListener('click', function anonima() {
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    if(contenido != '')
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

function anonima() {

}
