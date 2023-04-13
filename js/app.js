let seccionActual = 'sobremi';
let posicionActual = 0;

function activar(seccion)
{
    seccionActual = seccion;
    let elemento = document.getElementById(seccion);
    elemento.style.opacity = 1;
    elemento.style.display = '';
    posicionarPersonaje(posicionActual);
}

function posicionarPersonaje(posicion)
{
    let personaje = document.getElementById('personaje');
    let hueco = document.getElementsByClassName('hueco')[posicion];    
    let huecoRect = hueco.getBoundingClientRect();    
    personaje.style.left = huecoRect.left + "px";
    personaje.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + huecoRect.top + "px";   
}

function desactivar(seccion, posicion)
{
    if (seccion != seccionActual)
    {
        if(document.body.scrollHeight > document.body.clientHeight)
            alert("Scroll");

        posicionActual = posicion;
        posicionarPersonaje(posicionActual);

        let elemento = document.getElementById(seccionActual);
        elemento.style.opacity = 1;
        let idIntervalo = setInterval(() => {
            if (elemento.style.opacity > 0.1)
                elemento.style.opacity -= 0.1;
        }, 100);
        setTimeout(() => {
            clearInterval(idIntervalo);
            elemento.style.display = 'none';
            activar(seccion);
        }, 1000);
    }
}

window.addEventListener('load', function()
{   
    document.getElementById('materiales').style.display = 'none';
    document.getElementById('cursos').style.display = 'none';
    posicionarPersonaje(0);

    this.addEventListener('resize', (event) => {
        posicionarPersonaje(posicionActual);
    });
});
