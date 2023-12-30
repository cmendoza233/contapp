document.addEventListener("contextmenu", function (e) {
      e.preventDefault(); // Deshabilitar menú contextual con clic derecho
    });
    
    
// Boton Scroll
// Obtén el botón
var scrollBtn = document.getElementById("scrollBtn");

// Muestra u oculta el botón al hacer scroll
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Desplázate suavemente hacia la parte superior de la página
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Comentarios  

// Obtén elementos del DOM
var divFijo = document.getElementById("divFijo");
var mostrarDivBtn = document.getElementById("mostrarDivBtn");

// Función para mostrar el div
function mostrarDiv() {
  divFijo.style.display = "flex";
}

// Función para cerrar el div
function cerrarDiv() {
  divFijo.style.display = "none";
}
