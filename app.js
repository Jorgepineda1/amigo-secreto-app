// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];
// Array para almacenar los amigos ya seleccionados
let amigosSeleccionados = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Verificar que el nombre no esté duplicado
    if (listaAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    mostrarListaAmigos();
    
    // Enfocar el campo de entrada para facilitar la entrada de más nombres
    inputAmigo.focus();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaElement.innerHTML = '';
    
    // Agregar cada nombre a la lista
    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        const estaSeleccionado = amigosSeleccionados.includes(nombre);
        li.textContent = `${index + 1}. ${nombre}`;
        li.className = estaSeleccionado ? 'amigo-item seleccionado' : 'amigo-item';
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, agrega al menos un amigo antes de sortear.');
        return;
    }
    
    // Verificar si todos ya han sido seleccionados
    if (amigosSeleccionados.length >= listaAmigos.length) {
        alert('Todos los amigos ya han sido seleccionados. Haz clic en "Reiniciar Sorteo" para empezar de nuevo.');
        return;
    }
    
    // Obtener lista de amigos disponibles (no seleccionados)
    const amigosDisponibles = listaAmigos.filter(amigo => !amigosSeleccionados.includes(amigo));
    
    // Generar un índice aleatorio de los disponibles
    const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigosDisponibles[indiceAleatorio];
    
    // Agregar a la lista de seleccionados
    amigosSeleccionados.push(amigoSorteado);
    
    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
    
    // Actualizar la visualización de la lista
    mostrarListaAmigos();
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSorteado) {
    const resultadoElement = document.getElementById('resultado');
    
    // Limpiar resultados anteriores
    resultadoElement.innerHTML = '';
    
    // Crear y mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    li.className = 'resultado-item';
    resultadoElement.appendChild(li);
    
    // Mostrar información adicional
    const infoLi = document.createElement('li');
    infoLi.textContent = `Seleccionados: ${amigosSeleccionados.length} de ${listaAmigos.length}`;
    infoLi.className = 'info-item';
    resultadoElement.appendChild(infoLi);
    
    // Si todos han sido seleccionados, mostrar mensaje especial
    if (amigosSeleccionados.length >= listaAmigos.length) {
        const finalLi = document.createElement('li');
        finalLi.textContent = '¡Todos los amigos han sido seleccionados!';
        finalLi.className = 'final-item';
        resultadoElement.appendChild(finalLi);
    }
    
    // Hacer scroll hacia el resultado para que sea visible
    resultadoElement.scrollIntoView({ behavior: 'smooth' });
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Limpiar la lista de seleccionados
    amigosSeleccionados = [];
    
    // Limpiar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    // Actualizar la visualización de la lista
    mostrarListaAmigos();
    
    // Mostrar mensaje de reinicio
    const mensajeLi = document.createElement('li');
    mensajeLi.textContent = 'Sorteo reiniciado. ¡Puedes volver a sortear!';
    mensajeLi.className = 'reinicio-item';
    resultadoElement.appendChild(mensajeLi);
}

// Función para manejar la tecla Enter en el campo de entrada
function manejarTeclaEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agregar event listener para la tecla Enter cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', manejarTeclaEnter);
    
    // Enfocar el campo de entrada al cargar la página
    inputAmigo.focus();
});
