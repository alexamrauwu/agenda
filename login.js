$(document).ready(function() {

    $('#acceder').click(function() {

        var nombre = document.getElementById("nombre").value;
        var pass = document.getElementById("passw").value;
        var url = 'index.php';   

            $.ajax({
                type: "POST",
                url: "login.php",
                data: {
                    usuario: nombre,
                    pass: pass
                },
                success: function(response) {

                    if(response == true){

                        Swal.fire({
                            icon: 'success',
                            title: 'Acceso correcto',
                            showConfirmButton: false,
                            timer: 1400
                          }).then((value) => {
                            window.location.href=url;
                        });
        
                    }else if(response == false){
        
                        Swal.fire({
                            icon: 'error',
                            title: 'A ocurrido un error, intenta mas tarde',
                            showConfirmButton: false,
                            timer: 1400
                          }).then((value) => {
                            location.reload();
                        });
        
                    }
                   
                    
                }
            });
        
                       
    });

});