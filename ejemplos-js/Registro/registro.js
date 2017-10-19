var formulario = document.getElementById('registro');
var mensaje = document.getElementById('mensaje');
var nivel = document.getElementById('nivelPwd');

formulario.pwd.addEventListener('keyup', function(){
    var letras = (/[a-z]/i).test(formulario.pwd.value);
    var numeros = (/[0-9]/i).test(formulario.pwd.value);
    var simbolos = (/[!"#$%&/()]/).test(formulario.pwd.value);

    if(letras && numeros && simbolos)
        {
            retro.innerHTML = 'Segura<br>';
            retro.className = 'nivel-seguro';
        }
    else if(letras && numeros)
    {
        retro.innerHTML = 'Mediana<br>';
        retro.className = 'nivel-medio';
    }
    else if(letras)
    {
        retro.innerHTML = 'Debil<br>';
        retro.className = 'debil';
    }
});



formulario.addEventListener('submit', function(evento){
    if(!verificaNombre() || !verificaContraseña() || !verificaTerminos())
        evento.preventDefault();
    else
        {  
            evento.preventDefault();
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
    if(formulario.terminos.checked != true)
    {
        mensaje.innerHTML = 'Debes aceptar los terminos y condiciones';
        return false;
    }
    return true;
}