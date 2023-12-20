document.addEventListener("DOMContentLoaded", function () {

    function handleReadMoreClick(event) {
        var tarjetaContenido = event.target.closest('.tarjeta-contenido');
        var contenidoExpandido = tarjetaContenido.querySelector('.contenido-expandido');

        if (contenidoExpandido.style.maxHeight) {
            // Si ya está expandido, contraer
            contenidoExpandido.style.maxHeight = null;
            event.target.innerText = 'Leer más';
        } else {
            // Si no está expandido, expandir
            contenidoExpandido.style.maxHeight = contenidoExpandido.scrollHeight + 'px';
            event.target.innerText = 'Mostrar menos';
        }
    }

    var readMoreButtons = document.querySelectorAll('.tarjeta-contenido .btn');
    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', handleReadMoreClick);
    });
});
