
function animacion(){
    let textoAnimacion =[
        ["J","u","l","i","a","n"],
        ["D","a","v","i","d"]
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor_texto_animacion")

    function pintarTexto(){
        letraContador++;
        contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];

        if (letraContador === textoAnimacion[nivelArray].length -1) {
            clearInterval(intervalo);

            setTimeout(() => {
                intervalo = setInterval(() => {
                    contenedorAnimacion.textContent = "";
                    letraContador--;
                    textoAnimacion[nivelArray].pop();

                    textoAnimacion[nivelArray].forEach((elemento) => {
                        contenedorAnimacion.textContent += elemento;
                    });

                    if (letraContador < 0) {
                        clearInterval(intervalo);
                        nivelArray++;
                        intervalo = setInterval(pintarTexto, 150);

                        if (nivelArray > textoAnimacion.length -1) {
                            clearInterval(intervalo);
                            nivelArray = 0;
                            animacion();
                            
                        }
                    }
                })
            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto,150);
}
window.addEventListener("load",animacion);