document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor de la entrada
    const noteText = document.getElementById('noteInput').value;

    // Crear un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = noteText;

    // Agregar el elemento a la lista
    document.getElementById('noteList').appendChild(li);

    // Limpiar el campo de entrada
    document.getElementById('noteInput').value = '';
});
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtén los valores de los campos
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    
    // Crea un contenedor para la nueva nota
    const note = document.createElement('div');
    note.className = 'note';
    
    // Crea el título de la nota
    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    note.appendChild(noteTitle);
    
    // Crea el contenido de la nota
    const noteContent = document.createElement('p');
    noteContent.textContent = content;
    note.appendChild(noteContent);
    
    // Crea un botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete-button';
    note.appendChild(deleteButton);
    
    // Agrega un evento de clic para eliminar la nota
    deleteButton.addEventListener('click', function() {
    note.remove();
    });
    
    // Agrega la nueva nota a la lista de notas
    document.getElementById('notesList').appendChild(note);
    
    // Limpia el formulario
    document.getElementById('noteForm').reset();
});
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtén los valores de los campos
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    
    // Crea un contenedor para la nueva nota
    const note = document.createElement('div');
    note.className = 'note';
    
    // Crea el título de la nota
    const noteTitle = document.createElement('h2');
    noteTitle.textContent = title;
    note.appendChild(noteTitle);
    
    // Crea el contenido de la nota
    const noteContent = document.createElement('p');
    noteContent.textContent = content;
    note.appendChild(noteContent);
    
    // Crea un botón de editar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit-button';
    note.appendChild(editButton);
    
    // Crea un botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.className = 'delete-button';
    note.appendChild(deleteButton);
    
    // Agrega un evento de clic para editar la nota
    editButton.addEventListener('click', function() {
      // Muestra el formulario de edición
    const editForm = document.createElement('form');
    editForm.innerHTML = `
        <input type="text" id="editTitle" value="${title}">
        <textarea id="editContent">${content}</textarea>
        <button type="submit">Guardar cambios</button>
    `;
    note.appendChild(editForm); 
      // Agrega un evento de envío para guardar los cambios
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTitle = document.getElementById('editTitle').value;
        const newContent = document.getElementById('editContent').value;
        noteTitle.textContent = newTitle;
        noteContent.textContent = newContent;
        editForm.remove();
    });
    });
    
    // Agrega un evento de clic para eliminar la nota
    deleteButton.addEventListener('click', function() {
    note.remove();
    });
    
    // Agrega la nueva nota a la lista de notas
    document.getElementById('notesList').appendChild(note);
    
    // Limpia el formulario
    document.getElementById('noteForm').reset();
});