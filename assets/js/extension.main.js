// script.js
if (history.replaceState) {
    var newUrl = window.location.href.replace('.html', ''); // Reemplaza '.html' con tu extensión
    history.replaceState(null, null, newUrl);
}
