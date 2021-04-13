$(document).ready(function() {
    
    $('#btnSend').click(function(){

        var error = '';

        // Validando el nombre******************
        if( $('#names').val() == '' ){
            error += '<p>Write your name</p>';
            $('#names').css("border-bottom-color", "#007E48")
        } else{
            $('#names').css("border-bottom-color", "#5A5A5A")
        }
        // Validando correo ********************
        if( $('#email').val() == '' ){
            error += '<p>Enter your email</p>';
            $('#email').css("border-bottom-color", "#007E48")
        } else{
            $('#names').css("border-bottom-color", "#5A5A5A")
        }
        //  Validando mensaje ******************
        if( $('#message').val() == '' ){
            error += '<p>Write your message</p>';
            $('#message').css("border-bottom-color", "#007E48")
        } else{
            $('#names').css("border-bottom-color", "#5A5A5A")  
        }

        // Enviar mensaje
        if(error == '' == false){
            var messageModal = '<div class="modal-wrap">'+
                                    '<div class="message-modal">'+
                                      '<h3>Errors found</h3>'+
                                       error+
                                       '<span id="btnClose">CLOSE</span>'+
                                    '</div>'+

                                '</div>'

            $('body').append(messageModal);

        }

        // Cerrar ventaja
        $('#btnClose').click(function(){
           $('.modal-wrap').remove();
        });
    });

});