function openYouTubeApp(videoId) {
    var appLink = 'youtube://www.youtube.com/watch?v=' + videoId;
    var webLink = 'https://www.youtube.com/watch?v=' + videoId;

    // Intentar abrir la aplicación de YouTube
    var timeout = setTimeout(function() {
        window.location.href = webLink;
    }, 1000);

    window.location.href = appLink;

    // Verificar si la redirección a la app se realizó
    window.onblur = function() {
        clearTimeout(timeout);
    };
}