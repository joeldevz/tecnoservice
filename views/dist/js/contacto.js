
$('#sendemail').click(function () {
    validar()
})
function validar() {
    email = $('#email').val()
    name = $('#name').val()
    phone = $('#phone').val()
    message = $('#message').val()
    asunto = $('#asunto').val()
    if (phone == 0) {
        return alertify.alert('Error al Validar', 'Introduzca un telefono', function () { alertify.error('Número No Valido'); });
    }
    if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        return alertify.alert('Error al Validar', 'Introduzca un correo valido', function () { alertify.error('Email No Valido'); });
    }
    if(asunto== "0"){
        return alertify.error('Seleccione un Asunto'); ;

    }
    if(!($('#checkPolitica').is(':checked'))){
        return alertify.error('Politica de Privacidad no Aceptada'); ;
    }
    sendemail()
}
function sendemail() {
    email = $('#email').val()
    name = $('#name').val()
    phone = $('#phone').val()
    message = $('#message').val()
    asunto = $('#asunto').val()
    $.ajax({
        url: "/api/sendemail",
        type: 'post',
        data: { email, name, phone, message, asunto }
    }).done(function (res) {
        if (res['cod'] == 400) {
            alertify.error('Error al enviar el mensaje. Intentelo más tarde'); ;
        }
        alertify.success('Mensaje Enviado'); ;
    });
}