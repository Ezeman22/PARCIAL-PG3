/*
o	Crea un archivo script.js.
o	Obtén referencias a los elementos del DOM: el input de texto (#tareaInput), el botón de agregar (#agregarTareaBtn) y la lista de tareas (#listaDeTareas).
o	Agrega un event listener al botón agregarTareaBtn para el evento click.
o	Dentro de la función manejadora del evento:
	Obtén el valor actual del input de texto.
	Verifica que el input no esté vacío (si está vacío, no hagas nada o puedes mostrar una alerta simple).
	Crea un nuevo elemento de lista (<li>) dinámicamente.
	Establece el textContent de ese <li> con el valor obtenido del input.
	Agrega un nuevo event listener a cada <li> creado para que, al hacer clic en una tarea, esta alterne la clase CSS .tarea-completada (si no la tiene, la agrega; si la tiene, la quita). Utiliza el método classList.toggle().
	Añade el nuevo <li> como hijo a la lista listaDeTareas.
	Limpia el contenido del input de texto después de agregar la tarea.

*/

const tareaInput = document.getElementById('tareaInput');
const agregarTareaBtn = document.getElementById('agregarTareaBtn');
const listaDeTareas = document.getElementById('listaDeTareas');

agregarTareaBtn.addEventListener('click', () => {
    const textoTarea = tareaInput.value.trim();
    // esta vacio
    if (textoTarea === '') {
        alert('Escribir tarea por faor.');
        return;
    }
    //creo el elemento
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;
    nuevaTarea.addEventListener('click', () => {
        nuevaTarea.classList.toggle('tarea-completada');
    });
    //lo agrego
    listaDeTareas.appendChild(nuevaTarea);
    tareaInput.value = '';
    // Actualizar las tareas"
    actualizarMensaje();
});

//funcion para ocultar el no tareas del html
const noTareasMensaje = document.getElementById('noTareasMensaje');
function actualizarMensaje() {
  noTareasMensaje.style.display = listaDeTareas.children.length === 0 ? 'block' : 'none';
}

// actuliza el mensaje desde el vamos y despues oculta si se agrego tareas o si no hay tareas
actualizarMensaje();

