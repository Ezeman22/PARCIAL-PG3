document.addEventListener('DOMContentLoaded', () => {

    //parte para agregar tareas
    const formulario =document.getElementById('formulario');
    const inputTarea = document.getElementById('tarea');
    const listaTareas = document.getElementById('listatareas');
    const mensaje = document.getElementById('msj');
    
    //parte para eliminar tareas
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        // Verificar si la lista de tareas está vacía y mostrar/ocultar el mensaje
        if (listaTareas.children.length === 0) {
                 mensaje.setAttribute('hidden', 'false');
            }
            else    
            {
                 mensaje.setAttribute('hidden', 'true');
            }

        // Agregar la tarea a la lista
        const tarea = inputTarea.value.trim();
        if (tarea !== '') {
            // Crear un nuevo elemento de lista con la tarea y el botón de eliminar
            const radio1 = document.createElement('input');
            radio1.type ='radio'; 
            radio1.value = 'Completada';
            // Agregar un evento al radio para marcar la tarea como completada
            radio1.onclick = () => {
                if (radio1.checked) {
                    console.log('Tarea completada:', tarea);
                    li.style.textDecoration = 'line-through';
                } else {
                    li.style.textDecoration = 'none';
                }
            };

            const li = document.createElement('li');
            const boton = document.createElement('input');
            boton.type ='button'; 
            boton.value = 'Eliminar';
           // Agregar un evento al botón para eliminar la tarea
            boton.onclick = () => {
                console.log('Tarea eliminada:', tarea);
                li.remove();
            };

            li.appendChild(radio1);

            li.appendChild(document.createTextNode(tarea));
            li.appendChild(boton);
            
          
            listaTareas.appendChild(li);
            inputTarea.value = '';
        }
        else {
            alert('Por favor, ingresa una tarea.');
        }
    });


});