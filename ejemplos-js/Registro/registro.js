var formulario = document.getElementById('registro');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre())
        evento.preventDefault();
    if(!verificaContraseña())
        evento.preventDefault();
    if(!verificaTerminos())
        evento.preventDefault();

    var mensaje = document.getElementById('mensaje');
    mensaje.innerHTML = 'Oli prro';
});

function verificaNombre()
{
    return true;
}

function verificaContraseña()
{
    return true;
}

function verificaTerminos()
{
    return true;
}