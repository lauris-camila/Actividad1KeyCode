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
