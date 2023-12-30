// Reemplaza 'TU_API_KEY' con tu clave de API de ipinfo.io
var apiKey = 'e719a800710601';

// Función para obtener la información de ubicación basada en la IP
function obtenerUbicacion() {
    var apiUrl = 'https://ipinfo.io/json?token=' + apiKey;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Verificar si el país no es México (MX)
        if (data.country !== 'MX') {
            // Oculta la página y muestra el mensaje si el usuario no está en México
            document.body.style.display = 'none';
            alert("Disponible solo en mexico, contacta al creador por instagram para obtener acceso sin problemas @cm23l");
        } else {
            // Muestra la página si el usuario está en México
            document.body.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error al obtener la ubicación:', error);
        // Muestra un mensaje si hay un error al obtener la ubicación
        document.body.innerHTML = '<h1>Hubo un error al intentar obtener la ubicación. Por favor, intenta nuevamente.</h1>';
    });
}

// Llama a la función al cargar la página
window.addEventListener('load', obtenerUbicacion);