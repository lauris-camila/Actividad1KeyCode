document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor de la entrada
    const noteText = document.getElementById('noteInput').value;

    // Crear un nuevo div para la nota
    const note = document.createElement('div');
    note.classList.add('note'); // Agregar la clase 'note' para aplicar los estilos

    // Crear un párrafo para el contenido de la nota
    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    // Añadir el contenido al contenedor de la nota
    note.appendChild(noteContent);

    // Agregar la nota a la lista de notas
    document.getElementById('noteList').appendChild(note);

    // Limpiar el campo de entrada
    document.getElementById('noteInput').value = '';
});
