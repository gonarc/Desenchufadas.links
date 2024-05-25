function openYouTubeVideo(videoId) {
    // Intentar abrir el video en la aplicación de YouTube
    var appLink = 'youtube://' + videoId;
    var webLink = 'https://www.youtube.com/watch?v=' + videoId;

    // Crear un elemento iframe invisible para redirigir al esquema de la aplicación
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appLink;
    document.body.appendChild(iframe);

    // Después de un pequeño retraso, redirigir al enlace web si la aplicación no se abre
    setTimeout(function() {
        window.location.href = webLink;
    }, 2000);
}