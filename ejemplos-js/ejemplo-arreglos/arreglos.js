var materias = [ 
    {nombre: 'Tecnologias Web', creditos: 8, optativa: true},
    {nombre: 'Pensamiento Computacional', creditos: 10, optativa: false},
    {nombre: 'Compiladores A', creditos: 10, optativa: false},
    {nombre: 'Graficacion A', creditos: 8, optativa: false},
    {nombre: 'Humanidades B', creditos: 3, optativa: true},
    {nombre: 'Sistemas Operativos B', creditos: 10, optativa: false}
];

var materiasFiltro = [];
var busqueda = false;

var tabla = document.createElement('table');
var buscarBtn = document.getElementById('buscar');
var buscador = document.getElementById('buscador')
var limpiarBtn = document.getElementById('limpiar');

muestraMaterias(materias);

buscarBtn.addEventListener('click', function(){
    materiasFiltro = buscarFiltro(materias, buscador.value );

    busqueda = true;
    limpia();
    console.log(materiasFiltro);
});

limpiarBtn.addEventListener('click',function(){
    busqueda = false;
    buscador.value = '';
    limpia();
});

function muestraMaterias(materias){
    
    tabla.appendChild(creaEncabezado());
    tabla.setAttribute('id','tabla');
    
    tabla.addEventListener('click', function (evento) {
        var seleccion = evento.target;
        var nombre = document.getElementById('nombre');
        var creditos = document.getElementById('creditos');
        var optativa = document.getElementById('optativa');
        if (seleccion == nombre) {
            materias.sort(compara);
            limpia();
        }
        else if(seleccion == creditos){
                materias.sort(function (m1, m2) {
                    return m1.creditos - m2.creditos;
                });
                limpia();
                }
         else if(seleccion == optativa) {
                    materias.sort(function (m1, m2) {
                        return m1.optativa - m2.optativa;
                    });  
                limpia();               
            }

        });
    

    console.log('forNormal');
    for(var i=0; i<materias.length;i++){
        console.log('Nombre: ' + materias[i].nombre );
        console.log('Creditos: ' + materias[i].creditos );
        console.log('Optativa: ' + materias[i].optativa );
    }


    console.log('forEach');
    materias.forEach(function(mat){
        console.log('Nombre: ' + mat.nombre );
        console.log('Creditos: ' + mat.creditos );
        console.log('Optativa: ' + mat.optativa ? 'Si' : 'No' );

        tabla.appendChild(creaFila(mat));
    });
        document.body.appendChild(tabla);
    
}

function creaEncabezado(){
    var encabezado = document.createElement('tr');
    encabezado.setAttribute('id','encabezado');

    var nombre = document.createElement('th');
    var textNombre = document.createTextNode('Nombre');
    nombre.appendChild(textNombre);
    nombre.setAttribute('id','nombre');

    
    var creditos = document.createElement('th');
    var textCreditos = document.createTextNode('Creditos');
    creditos.appendChild(textCreditos);
    creditos.setAttribute('id','creditos');

    
    var optativa = document.createElement('th');
    var textOptativa = document.createTextNode('Optativa');
    optativa.appendChild(textOptativa);
    optativa.setAttribute('id','optativa');

    encabezado.appendChild(nombre);
    encabezado.appendChild(creditos);
    encabezado.appendChild(optativa);

    return encabezado;
}

function creaFila(mat)
{
    var reglon = document.createElement('tr');

    var nombre = document.createElement('td');
    var textNombre = document.createTextNode(mat.nombre);
    nombre.appendChild(textNombre);

    var creditos = document.createElement('td');
    var textcreditos = document.createTextNode(mat.creditos);
    creditos.appendChild(textcreditos);

    var optativa = document.createElement('td');
    var textoptativa = document.createTextNode(mat.optativa ? 'Si' : 'NO');
    optativa.appendChild(textoptativa);

    reglon.appendChild(nombre);
    reglon.appendChild(creditos);
    reglon.appendChild(optativa);

    return reglon;
}

function compara(materia1, materia2) {
    if (materia1.nombre === materia2.nombre) return 0;
    else if (materia1.nombre < materia2.nombre) return -1;
    else return 1;
}

function limpia(){
    while(tabla.firstChild)
        tabla.removeChild(tabla.firstChild);

    if(busqueda == false)
        muestraMaterias(materias);
    else
        muestraMaterias(materiasFiltro);
    
    
}

function buscarFiltro(materias, palabra){
    console.log(nombre);

    return materias.filter(function (mat){
        return mat.nombre.toLowerCase().includes(palabra.toLowerCase());
    });
}