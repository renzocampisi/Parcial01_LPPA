window.onload = function () {
/* Accedemos al formulario */
const formulario = document.getElementById('formulario');
/* Almacena los inputs del formulario */
const inputs = document.querySelectorAll('#formulario input');

/* Propiedades con expresiones regulares */
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos = {
    nombre: 'false',
    apellido: 'false',
    correo: 'false', 
    edad: 'false', 
    sexo: 'false', 
    interes: 'false',
    pais: 'false'
}

/* Comprueba los campos */
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_Nombre').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Nombre').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Nombre .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['nombre'] = true;
            }else {
                document.getElementById('grupo_Nombre').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Nombre').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Nombre .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['nombre'] = false;
            }
        break;
        case "apellido":
            if(expresiones.apellido.test(e.target.value)){
                document.getElementById('grupo_Apellido').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Apellido').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Apellido .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['apellido'] = true;
            }else {
                document.getElementById('grupo_Apellido').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Apellido').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Apellido .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['apellido'] = false;
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo_Email').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Email').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Email .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['correo'] = true;
            }else {
                document.getElementById('grupo_Email').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Email').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Email .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['correo'] = false;
            }
        break;
        case "edad":
            const edadInput = document.getElementById('edad').value;
            if(edadInput<=100 && edadInput>0){
                document.getElementById('grupo_Edad').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Edad').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Edad .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['edad'] = true;
            }else {
                document.getElementById('grupo_Edad').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Edad').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Edad .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['edad'] = false;
            }
        break;
        case "sexo":
            if(!document.querySelector('input[name="hombre"]:checked')) {
                document.getElementById('grupo_Sexo').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Sexo').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Sexo .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['sexo'] = true;
            }else {
                document.getElementById('grupo_Sexo').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Sexo').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Sexo .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['sexo'] = false;
            }
        break;
        case "interes":
            if(!document.querySelector('input[name="interes"]:checked')) {
                document.getElementById('grupo_Interes').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Interes').classList.add('form_Grupo-correcto');
                document.querySelector('#grupo_Interes .form_Input_Error').classList.remove('form_Input_Error-activo');
                campos['interes'] = true;
            }else {
                document.getElementById('grupo_Interes').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Interes').classList.remove('form_Grupo-correcto');
                document.querySelector('#grupo_Interes .form_Input_Error').classList.add('form_Input_Error-activo');
                campos['interes'] = false;
            } 
        break;
        case "pais":
            
        break;
    }
}

/* const validarEdad = () => {
    const inputEdad = document.getElementById('edad')

    if(inputEdad>0 && inputEdad<100){
        document.getElementById('grupo_Edad').classList.remove('form_Grupo-incorrecto');
        document.getElementById('grupo_Edad').classList.add('form_Grupo-correcto');
        document.querySelector('#grupo_Edad .form_Input_Error').classList.remove('form_Input_Error-activo');
    } else {
        document.getElementById('grupo_Edad').classList.add('form_Grupo-incorrecto');
        document.getElementById('grupo_Edad').classList.remove('form_Grupo-correcto');
        document.querySelector('#grupo_Edad .form_Input_Error').classList.add('form_Input_Error-activo');
    }
} */
/* Funcion para validar el/los campos y reducir codigo */
/* Expresion = que expresion se quiere utilizar para validar */
/* input = sale extrae del evento (e.target) */
/* const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('form_Grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('form_Grupo-correcto');
        document.querySelector(`#grupo_${campo} .form_Input_Error`).classList.remove('form_Input_Error-activo');
    }else {
        document.getElementById(`grupo_${campo}`).classList.add('form_Grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('form_Grupo-correcto');
        document.querySelector(`#grupo_${campo} .form_Input_Error`).classList.add('form_Input_Error-activo');
    }
} */
/* Cuando el usuario escriba y levante la tecla, realiza una comprobacion */
/* Cuando el usuario escriba y de un click fuera del formulario, realiza una comprobacion */
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
/* Cuando el usuario presione el boton, ejecuta la funcion */
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    /* const intereses = document.getElementById('interes'); */
    if(campos.nombre && campos.apellido && campos.correo && campos.edad == null) {
        formulario.reset();

        document.getElementById('form_Mensaje_Exito').classList.add('form_Mensaje_Exito-activo')
        setTimeout(() => {
            document.getElementById('form_Mensaje_Exito').classList.remove('form_Mensaje_Exito-activo')
        }, 5000)

        document.querySelectorAll('.form_Grupo-correcto').forEach((correcto) => {
            correcto.classList.remove('form_Grupo-correcto');
        })
    } else {
        document.getElementById('form_Mensaje').classList.add('form_Mensaje-activo');
    }
});

}