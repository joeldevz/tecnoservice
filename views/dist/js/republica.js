'use strict'
$('#tarifa1').click(function(){
    if($('#tarifa1').is(':checked')){
        $('#pricefibra').text('0 €')
        $('#name-tarifa').text('Cero')
    }

})
$('#tarifa2').click(function(){
    if($('#tarifa2').is(':checked')){
        $('#pricefibra').text('6€')
        $('#name-tarifa').text('Mini +')
    }

})
$('#tarifa3').click(function(){
    if($('#tarifa3').is(':checked')){
        $('#pricefibra').text('10€')
        $('#name-tarifa').text('Pequeña +')
    }

})
$('#tarifa4').click(function(){
    if($('#tarifa4').is(':checked')){
        $('#pricefibra').text('10€')
        $('#name-tarifa').text('Pequeña ∞')

    }

})
$('#tarifa5').click(function(){
    if($('#tarifa5').is(':checked')){
        $('#pricefibra').text('15€')
        $('#name-tarifa').text('Mediana ∞')

    }
})
$('#tarifa6').click(function(){
    if($('#tarifa6').is(':checked')){
        $('#pricefibra').text('20€')
        $('#name-tarifa').text('Única ∞')

    }

})