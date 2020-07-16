'use strict'
$('#tarifa1').click(function(){
    if($('#tarifa1').is(':checked')){
        $('#pricefibra').text('6,95€')
        $('#llamada').text("0 cént./min")
    }

})
$('#tarifa2').click(function(){
    if($('#tarifa2').is(':checked')){
        $('#pricefibra').text('9,95€')
        $('#llamada').text("SIN LIMITE")
    }

})
$('#tarifa3').click(function(){
    if($('#tarifa3').is(':checked')){
        $('#pricefibra').text('14,95€')
        $('#llamada').text("SIN LIMITE")
    }

})
$('#tarifa4').click(function(){
    if($('#tarifa4').is(':checked')){
        $('#pricefibra').text('19,95€')
        $('#llamada').text("SIN LIMITE")
    }

})