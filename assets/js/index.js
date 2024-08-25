$(window).scroll(function () {
    if ($("#menu").offset().top > 300) {
        $("#menu").addClass("bg-color2");
        $("#menu").removeClass("bg-navegacion");
    } else {
        $("#menu").removeClass("bg-color2");
        $("#menu").addClass("bg-navegacion");
    }

});


document.getElementById("formulario1").addEventListener('submit', validar);

function validar(evt) {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    console.log(nombre);
    console.log(correo);
    console.log(telefono);
    alert(correo)

}


