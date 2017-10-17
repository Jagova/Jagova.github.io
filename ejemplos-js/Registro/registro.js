var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() ||!verificaContraseña() ||!verificaTerminos())
        evento.preventDefault();
    else
        {  
            mensaje.innerHTML = 'Oli prro';
        }
});

function verificaNombre()
{
    var expReg = /a-z]/i;
    

    if(expReg.test(formulario.user.value.charAt(0)))
        {
            mensaje.innerHTML = "";
            return true;
        }
    else
        {
            mensaje.innerHTML = 'El nombre de usuario debe iniciar con una letra';
            return false;
        }
    
}

function verificaContraseña()
{
    return true;
}

function verificaTerminos()
{
    return true;
}