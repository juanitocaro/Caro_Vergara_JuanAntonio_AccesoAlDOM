document.addEventListener('DOMContentLoaded', function () {
    const tituloPrincipal = document.getElementById('tituloPrincipal');
    tituloPrincipal.textContent = "Bienvenido al gestor interactivo de tareas";

    const btnActualizarNombre = document.getElementById('btnActualizarNombre');

    btnActualizarNombre.addEventListener('click', function () {
        const inputNombre = document.getElementById('inputNombre').value;
        const colorUsuario = document.getElementById('colorUsuario').value;
        const mensajeBienvenida = document.getElementById('mensajeBienvenida');
        mensajeBienvenida.textContent = "Bienvenido " + inputNombre;
        mensajeBienvenida.style.color = colorUsuario;
    })

    const btnAgregarTarea = document.getElementById('btnAgregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    btnAgregarTarea.addEventListener('click', function () {
        const inputTarea = document.getElementById('inputTarea').value;
        if (inputTarea !== '') {
            listaTareas.innerHTML += `<li>${inputTarea} <button class="boton">Eliminar</button></li> `
        }


    })

    listaTareas.addEventListener('click', function (event) {
        if (event.target.classList.contains('boton')) {
            event.target.parentNode.remove();
        }




    })



    const cuadroInfo = document.querySelector(".cuadroInfo");

    // if (cuadroInfo) {
    cuadroInfo.addEventListener("mouseover", function () {
        cuadroInfo.style.backgroundColor = "yellow";
    });
    cuadroInfo.addEventListener('mouseout', function () {
        cuadroInfo.style.backgroundColor = "";
    });
    //}

    const cuadroInfo2 = document.querySelectorAll('.cuadroInfo')[1];
    cuadroInfo2.addEventListener('dblclick', function () {
        cuadroInfo2.style.display = "none";
    })


    const imagenGaleria = document.querySelectorAll(".imagenGaleria");

    imagenGaleria.forEach(imagen => {
        imagen.addEventListener('click', function () {
            if (imagen.width === 300) {
                imagen.width = 100;
            } else {
                imagen.width = 300;
            }
        })
    })
    const btnOcultarTareas = document.getElementById("btnOcultarTareas");

    btnOcultarTareas.addEventListener('click', function () {

       if (listaTareas.style.visibility== "visible"){
        listaTareas.style.visibility="hidden";
       }else{
        listaTareas.style.visibility="visible";
       }
    })
    const btnAlternarTema = document.getElementById ("btnAlternarTema");
    btnAlternarTema.addEventListener("click", function() {
        if (document.body.style.backgroundColor=="black"){

            document.body.style.backgroundColor="white";
            document.body.style.color="";

        }else{
            document.body.style.backgroundColor="black";
            document.body.style.color="white";

        }
    })









})