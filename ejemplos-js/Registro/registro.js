var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContraseña() || !verificaTerminos())
        evento.preventDefault();
    else
        {  
            mensaje.innerHTML = 'Tu registro fue realizado con éxito';
        }
});

function verificaNombre()
{
    var expReg = /[a-z]/i;
    

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
    var letras = /[a-z]/i;
    var numeros = /[0-9]/i;

    if(formulario.pwd.value.length<8)
        {
            mensaje.innerHTML = 'La contraseña debe contener al menos 8 caracteres';
            return false;
        }
    if(formulario.pwd.value != formulario.rpwd.value)
    {
        mensaje.innerHTML = 'La contraseñas no coincien';
        return false;
    }

    return true;
}

function verificaTerminos()
{
    if(formulario.terminos.value == false)
    {
        mesanje.innerHTML = 'Debes aceptar los terminos y condiciones';
        return false;
    }
    return true;
}