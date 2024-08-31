document.addEventListener('DOMContentLoaded', () => {
    const principal = document.getElementById('siguiente');
    
    if (principal) {
        principal.addEventListener('click', e => {
            e.preventDefault();
            const contenedor = document.querySelector('.container');
            if (contenedor) {
                contenedor.innerHTML = `
                 <h1>Portafolio</h1>
        <div class="nav">
            <a class="line" href="/acerca.html">Sobre mi</a>
            <a href="/proyectos.html">Proyectos</a>
            <a href="/contactos.html">Contactos</a>
        </div>

        <div class="contenedor-acerca">
            <div class="acerca1">
                <img src="/images/acerca.png" alt="persona_estudia" class="persona_acerca">
            </div>
            <div class="acerca">
                <h6>Soy una persona responsable y comprometida con todos los días superarse a sí misma. Creo que los
                    límites están hechos para romperse y eso me ha llevado a desarrollar proyectos que en un inicio
                    veía como imposibles. Me apasiona ver donde he llegado y me apasiona donde llegaré. Quiero
                    enseñarle al mundo que los límites no te detienen sino que te ayudan a crecer.
                    <br><br>
                    "Insistir, persistir y nunca desistir" es el lema de vida que me ha acompañado a superar cada
                    nuevo reto en la vida y en programación.
                <div class="boton">
                    <button onclick="window.open('https://www.canva.com/design/DAGKpxreQwA/C1cBhW7s30fa6keIZu12JQ/edit?utm_content=DAGKpxreQwA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', '_blank')" class="hoja_vida">
                        <strong>Hoja de vida</strong>
                    </button>
                    </h6>
                </div>
            </div>
        </div>

        <div class="contendor_vm">
            <div class="mv">
                <h2>Visión</h2>
                <br><br>
                <h6>Mi visión como profesional es desafiar las fronteras establecidas y demostrar que los límites están
                    hechos para romperse. En los próximos años, me veo como una programadora de software innovadora, con
                    un profundo conocimiento en mi campo y una habilidad excepcional para comunicar ideas. Mi trabajo estará
                    enfocado en desarrollar soluciones que empoderen a las personas y amplíen las posibilidades para
                    todos, para "Que nadie te diga que el límite es el cielo, cuando hay huellas en la luna". Mi objetivo
                    es dejar un mensaje significativo en el mundo, contribuyendo a la transformación del panorama
                    tecnológico y social.</h6>
                <img src="/images/vision.png" alt="">
            </div>

            <div class="mv">
                <h2>Misión</h2>
                <br><br>
                <h6>Como desarrolladora fullstack, mi objetivo es utilizar mis habilidades técnicas junto con
                    empatía, perseverancia y mi capacidad para comunicar ideas de manera clara y efectiva, inspirar a
                    otros a perseguir sus propias metas y superar los desafíos con creatividad y determinación. Estoy enfocada a
                    contribuir al avance del panorama tecnológico, creando herramientas y plataformas que amplíen las
                    posibilidades para todos, asegurándome de que nadie se sienta limitado por las barreras tradicionales.
                    Al hacerlo, espero dejar un legado significativo que demuestre que, con la determinación correcta, no
                    hay fronteras que no se puedan superar.</h6>
                <img src="/images/mision.png" alt="">
            </div>
        </div>
        <h2>Competencias</h2>
        <div class="container_valores">
            <span><img src="/images/comprobado.png" alt="">Trabajo en equipo</span>
            <span><img src="/images/comprobado.png" alt="">Autodidacta</span>
            <span><img src="/images/comprobado.png" alt="">Adaptabilidad</span>
            <span><img src="/images/comprobado.png" alt="">Empatía</span>
            <span><img src="/images/comprobado.png" alt="">Creatividad</span>
        </div>
                `;
            }
        });
    }
});
