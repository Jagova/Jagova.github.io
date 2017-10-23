var materias = [ 
    {nombre: 'Tecnologias Web', creditos: 8, optativa: true},
    {nombre: 'Pensamiento Computacional', creditos: 10, optativa: false},
    {nombre: 'Compiladores A', creditos: 10, optativa: false}
];

muestraMaterias();

function muestraMaterias(){
    var tabla = document.createElement('table');
    tabla.appendChild(creaEncabezado());
    

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

    var nombre = document.createElement('th');
    var textNombre = document.createTextNode('Nombre');
    nombre.appendChild(textNombre);

    
    var creditos = document.createElement('th');
    var textCreditos = document.createTextNode('Creditos');
    creditos.appendChild(textCreditos);

    
    var optativa = document.createElement('th');
    var textOptativa = document.createTextNode('Optativa');
    optativa.appendChild(textOptativa);

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
