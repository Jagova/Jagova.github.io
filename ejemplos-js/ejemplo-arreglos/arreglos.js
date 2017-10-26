var materiasOriginal = [ 
    {nombre: 'Tecnologias Web', creditos: 8, optativa: true},
    {nombre: 'Pensamiento Computacional', creditos: 10, optativa: false},
    {nombre: 'Compiladores A', creditos: 10, optativa: false},
    {nombre: 'Graficacion A', creditos: 8, optativa: false},
    {nombre: 'Humanidades B', creditos: 3, optativa: true},
    {nombre: 'Sistemas Operativos B', creditos: 10, optativa: false},
    {nombre: 'Ingles 5', creditos: 0, optativa: false},
    {nombre: 'Arquitectura B', creditos: 8, optativa: false},
    {nombre: 'Control por Computadora', creditos: 12, optativa: false},
    {nombre: 'Compiladores B', creditos: 10, optativa: true},
    {nombre: 'Programacion de Sistemas', creditos: 12, optativa: true},
    {nombre: 'Programacion Visual', creditos: 10, optativo: true}
];

var materias = materiasOriginal;
var orden = 0;

var materiasFiltro = materias;


var tabla = document.createElement('table');
tabla.setAttribute('id','tabla');
var buscador = document.getElementById('buscador')

muestraMaterias();

tabla.addEventListener('click', function (evento) {
    materias = materiasFiltro;
    var seleccion = evento.target;
    var nombre = document.getElementById('nombre');
    var creditos = document.getElementById('creditos');
    var optativa = document.getElementById('optativa');
    if (seleccion == nombre) {
        materias.sort(compara);
        if(orden == 1)
        {
            orden = 0;
            materias = materias.reverse();
        }
        else
            orden = 1;
        limpia();
    }
    else if(seleccion == creditos){
            materias.sort(function (m1, m2) {
                return m1.creditos - m2.creditos;         
            });
            if(orden == 2)
            {
                orden = 0;
                materias = materias.reverse();
            }
            else
                orden = 2;
            limpia();
            }
     else if(seleccion == optativa) {
                materias.sort(function (m1, m2) {
                    return m1.optativa - m2.optativa;
                });  
                if(orden == 3)
                {
                    orden = 0;
                    materias = materias.reverse();
                }
                else
                    orden = 3;
            limpia();               
        }
    });

buscador.addEventListener('keyup',function(){
    materiasFiltro = buscarFiltro(materias, buscador.value );
    materias = materiasFiltro;     
        limpia();
        console.log(materiasFiltro);
    materias = materiasOriginal;
})

function muestraMaterias(){    
    tabla.appendChild(creaEncabezado());

    materias.forEach(function(mat){
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

    muestraMaterias();
    
}

function buscarFiltro(materias, palabra){
    console.log(nombre);

    return materias.filter(function (mat){
        return mat.nombre.toLowerCase().includes(palabra.toLowerCase());
    });
}