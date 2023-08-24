const header = document.querySelector('#header');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const password = document.querySelector('#password');
const mensaje = document.createElement('p');

form.addEventListener('submit', validarFormulario);
email.addEventListener('blur', validarFormulario);
password.addEventListener('blur', validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  //Validar que sea un correo valido
  if (e.target.type === 'email') {
    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(e.target.value)) {
      mensaje.remove('warnings');
    } else {
      mensajeError('email no valido');
    }
  }
  if (e.target.type === 'password') {
    if (e.target.value === '') {
      mensajeError('Todos los campos son obligatorios');
    } else {
      mensaje.remove(warnings);
    }
  }
}

function mensajeError(mensajeDeError) {
  mensaje.textContent = mensajeDeError;
  mensaje.classList.add('warnings');

  header.appendChild(mensaje);
}

function limpiarHTML() {
  mensajeError.innerHTML = '';
}
