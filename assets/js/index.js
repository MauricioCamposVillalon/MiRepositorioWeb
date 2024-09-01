
{
    const modal = document.getElementById('modalcontacto');

  

    document.getElementById("git").href = "https://github.com/MauricioCamposVillalon";
    document.getElementById("lkldn").href = "https://www.linkedin.com/in/mauricio-campos-villalon/";
    document.getElementById("correo").href = "mailto:thoyferr@gmail.com";

    $(window).scroll(function () {
        if ($("#menu").offset().top > 200) {
            $("#menu").addClass("bg-color2");
            $("#menu").removeClass("bg-navegacion");
        } else {
            $("#menu").removeClass("bg-color2");
            $("#menu").addClass("bg-navegacion");
        }

    });


    const formulario = `
    <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Ingrese Datos de Contacto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid    border img-circular">
                            <!-- Aqui comienza el Formulario-->
                            <form class="row g-3 p-4 was-validated" id="formulario1">
                                <div class="col-md-12 mt-1">
                                    <label class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="nombremodal" name="nombremodal" placeholder="Ingrese Nombre" required>
                                    <p class="errorNombre col-error" ></p>
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label">Correo</label>
                                    <input type="email" class="form-control" id="mail"   placeholder="Ingrese su correo" required>
                                    <p class="errorMail col-error" s></p>
                                </div>
                                <div class="col-md-12">
                                    <label for="inputAddress" class="form-label">Telefono</label>
                                    <input type="text" class="form-control" id="telefono" placeholder="+56-" pattern="[0-9]+" required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Ingrese su consulta o Solicitud</label>
                                    <textarea class="form-control" id="comentario" rows="3" required></textarea>
                                    <div class="invalid-feedback">
                                    Por favor ingrese un mensaje antes de enviar. </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-primary">enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                   

                </div>
            </div>`;


    modal.innerHTML = formulario;




    console.log(modal);



    let formula = document.getElementById("formulario1");
    formula.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let txtnombre = document.getElementById("nombremodal").value;
        let txtasunto = document.getElementById("mail").value;
        smsPaso(txtnombre,txtasunto);
       

    });

    
    function smsPaso(nomb,correo) {
        alert(nomb+" \n Muchas gracias.\n Pronto me contactare a su correo "+correo);
        $('#modalcontacto').modal('hide')
        document.getElementById("nombremodal").value="";
        document.getElementById("mail").value="";
        document.getElementById("telefono").value="";
        document.getElementById("comentario").value="";

    };






}
