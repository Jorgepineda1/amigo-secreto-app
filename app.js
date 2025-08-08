// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];

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
        li.textContent = `${index + 1}. ${nombre}`;
        li.className = 'amigo-item';
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
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
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
    
    // Hacer scroll hacia el resultado para que sea visible
    resultadoElement.scrollIntoView({ behavior: 'smooth' });
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
