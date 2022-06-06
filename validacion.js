/* Accedemos al formulario */
const formulario = document.getElementById('formulario');
/* Almacena los inputs del formulario */
const inputs = document.querySelectorAll('#formulario input');

/* Propiedades con expresiones regulares */
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,15}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	edad: /^\d{0,100}$/ // Entre 0 y 100 años.
}

/* Comprueba los campos */
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo_Nombre').classList.remove('form_Grupo-incorrecto');
                document.getElementById('grupo_Nombre').classList.add('form_Grupo-correcto');
            }else {
                document.getElementById('grupo_Nombre').classList.add('form_Grupo-incorrecto');
                document.getElementById('grupo_Nombre').classList.remove('form_Grupo-correcto');
            }
        break;
        case "apellido":
            
        break;
        case "email":
            
        break;
        case "edad":
            
        break;
        case "sexo":
            
        break;
        case "interes":
            
        break;
    }
}
/* Cuando el usuario escriba y levante la tecla, realiza una comprobacion */
/* Cuando el usuario escriba y de un click fuera del formulario, realiza una comprobacion */
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
/* Cuando el usuario presione el boton, ejecuta la funcion */
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});