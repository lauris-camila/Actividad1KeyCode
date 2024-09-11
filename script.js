document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nota = document.getElementById('noteInput').value;
    const note = document.createElement('li');
    note.textContent = nota;
    document.getElementById('noteList').appendChild(note);
    // Agregar botones de eliminar y editar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    note.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() { note.remove(); });
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    note.appendChild(editButton);
    editButton.addEventListener('click', function() { /* código para mostrar formulario de edición */ });
});