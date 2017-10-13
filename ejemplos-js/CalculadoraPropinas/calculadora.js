var btnCalcular = document.getElementById('btnCalcular');


btnCalcular.addEventListener('click', function(){
    var propina = document.getElementById('propina');
    var propinaPersona = calculaPropina();
    propina.innerHTML = 'La propina por persona es de: $' + propinaPersona;
});

function calculaPropina()
{
    var calculadora = document.getElementById('calculadora');
    var personas = parseInt(calculadora.personas.value);
    var total = parseFloat(calculadora.total.value);
    var servicio = parseInt(calculadora,servicio.value);

    return total/personas*sercicio/100;
}