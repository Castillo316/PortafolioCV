/* ============================ typing animation ==================================*/
var typed = new Typed(".typing", {
    strings:["","Diseñador Web","Administrador de Servidores","Monitoreo de Datos","Implementación de Redes de Datos"],
    typeSpeed:100,
    Backspeed:80,
    loop:true
})

document.querySelectorAll(".pro-skill-progress").forEach((bar) => {

    const width = bar.getAttribute("data-width");

    bar.style.setProperty("--progress-width", width);

});


const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

let isPlaying = false;

musicBtn.addEventListener("click", () =>
{
    if(isPlaying)
    {
        music.pause();
        musicBtn.classList.remove("active");
    }
    else
    {
        music.play();
        musicBtn.classList.add("active");
    }

    isPlaying = !isPlaying;
});

/* volumen elegante */
music.volume = 0.65;

