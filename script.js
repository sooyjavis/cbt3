const ventanaEmergente = document.getElementById('ventana-emergente');
        const descripcionPersona = document.getElementById('descripcion-persona');

        // Agregar evento de mouseover a las imágenes de los elementos con clase "persona"
        document.querySelectorAll('.persona img').forEach(imagen => {
            imagen.addEventListener('mouseover', () => {
                const descripcion = imagen.parentNode.querySelector('.titulo').getAttribute('data-descripcion');
                descripcionPersona.textContent = descripcion;
                ventanaEmergente.style.display = 'block';
            });
        });

        // Agregar evento de mouseout para ocultar la ventana emergente
        document.querySelectorAll('.persona img').forEach(imagen => {
            imagen.addEventListener('mouseout', () => {
                ventanaEmergente.style.display = 'none';
            });
        });