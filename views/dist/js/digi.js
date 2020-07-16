'use strict'
$('#fibra1').click(function () {
    configuracion()
})
$('#fibra2').click(function () {
    configuracion()
})
$('input:radio[name=movil1]').click(function () {
    configuracion()
})
$('input:radio[name=movil2]').click(function () {
    configuracion()
})
$('input:radio[name=movil3]').click(function () {
    configuracion()
})
$('input:radio[name=movil4]').click(function () {
    configuracion()
})
$('input:radio[name=fijo]').click(function () {
    configuracion()
})
$('#checkfijo').prop('disabled', true)
$("input:radio[name=movil1]").prop('disabled', true);
$("input:radio[name=movil2]").prop('disabled', true);
$("input:radio[name=movil3]").prop('disabled', true);
$("input:radio[name=movil4]").prop('disabled', true);
$("input:radio[name=fijo]").prop('disabled', true);
$("input:radio[name=fibra]").prop('disabled', true);
$("input:radio[name=fibra]:checked+label").addClass('inputDisabled')
$("input:radio[name=fijo]:checked+label").addClass('inputDisabled')
$("input:radio[name=movil1]:checked+label").addClass('inputDisabled')
$("input:radio[name=movil2]:checked+label").addClass('inputDisabled')
$("input:radio[name=movil3]:checked+label").addClass('inputDisabled')
$("input:radio[name=movil4]:checked+label").addClass('inputDisabled')

$('#checkFibra').click(function () {
    configuracion()
    if ($('#checkFibra').is(':checked')) {
        $("input:radio[name=fibra]").prop('disabled', false);
        $('#checkfijo').prop('disabled', false)
        $("input:radio[name=fibra]:checked+label").removeClass('inputDisabled')
        changeprice()

    } else {
        $('#checkfijo').prop('disabled', true)
        $("input:radio[name=fibra]").prop('disabled', true);
        $("#checkfijo").prop('checked', false);
        $("input:radio[name=fibra]:checked+label").addClass('inputDisabled')
        changeprice()

        checkfijo()
    }
})
$('#checkfijo').click(function () {
    configuracion()
    checkfijo()
})
function checkfijo() {
    if ($('#checkfijo').is(':checked')) {
        $("input:radio[name=fijo]").prop('disabled', false);
        $("input:radio[name=fijo]:checked+label").removeClass('inputDisabled')
    } else {
        $("input:radio[name=fijo]").prop('disabled', true);
        $("input:radio[name=fijo]:checked+label").addClass('inputDisabled')
    }
}
$('#checkMobile1').click(function () {
    configuracion()
    if ($('#checkMobile1').is(':checked')) {
        $("input:radio[name=movil1]").prop('disabled', false);
        $("input:radio[name=movil1]:checked+label").removeClass('inputDisabled')
        $('#mobile2').show()
    } else {
        $("input:radio[name=movil1]").prop('disabled', true);
        $("input:radio[name=movil1]:checked+label").addClass('inputDisabled')
        $('#mobile2').hide()

    }
})
$('#checkMobile2').click(function () {
    configuracion()
    if ($('#checkMobile2').is(':checked')) {
        $("input:radio[name=movil2]").prop('disabled', false);
        $("input:radio[name=movil2]:checked+label").removeClass('inputDisabled')
        $('#mobile3').show()
    } else {
        $("input:radio[name=movil2]").prop('disabled', true);
        $("input:radio[name=movil2]:checked+label").addClass('inputDisabled')
        $('#mobile3').hide()
    }
})
$('#checkMobile3').click(function () {
    configuracion()
    if ($('#checkMobile3').is(':checked')) {
        $("input:radio[name=movil3]").prop('disabled', false);
        $("input:radio[name=movil3]:checked+label").removeClass('inputDisabled')
        $('#mobile4').show()
    } else {
        $("input:radio[name=movil3]").prop('disabled', true);
        $("input:radio[name=movil3]:checked+label").addClass('inputDisabled')
        $('#mobile4').hide()
    }
})
$('#checkMobile4').click(function () {
    configuracion()
    if ($('#checkMobile4').is(':checked')) {
        $("input:radio[name=movil4]").prop('disabled', false);
        $("input:radio[name=movil4]:checked+label").removeClass('inputDisabled')
    } else {
        $("input:radio[name=movil4]").prop('disabled', true);
        $("input:radio[name=movil4]:checked+label").addClass('inputDisabled')
    }
})
let fibra1 = 25;
let fibra2 = 30;
const fijo1 = 1
const fijo2 = 5
const fijo3 = 3
const price1 = { price: 3, priceofer: 2, call: "100 min", mb: 500 + " mb", mboferta: 1 + "GB", name: 'Mini' }
const price2 = { price: 10, priceofer: 6, call: "Llamadas Ilimitadas", mb: 5 + "GB", mboferta: 10 + "GB", name: 'Ilimitado' }
const price3 = { price: 15, priceofer: 9, call: "Llamadas Ilimitadas", mb: 12 + "GB", mboferta: 24 + "GB", name: 'Ilimitado' }
const price4 = { price: 20, priceofer: 12, call: "Llamadas Ilimitadas", mb: 30 + "GB", mboferta: 60 + "GB", name: 'Ilimitado' }
const price5 = { price: 5, priceofer: 3, call: "100 min", mb: 1.5 + "GB", mboferta: 3 + "GB", name: 'Combo' }
const price6 = { price: 10, priceofer: 6, call: "400 min", mb: 5 + "GB", mboferta: 10 + "GB", name: 'Combo' }
const price7 = { price: 15, priceofer: 9, call: "800 min", mb: 12 + "GB", mboferta: 24 + "GB", name: 'Combo' }
const price8 = { price: 20, priceofer: 12, call: "2000 min", mb: 30 + "GB", mboferta: 60 + "GB", name: 'Combo' }
const price9 = { price: 5, priceofer: 3, call: "0 min", mb: 3 + "GB", mboferta: 6 + "GB", name: 'Navega' }
const price10 = { price: 10, priceofer: 6, call: "0 min", mb: 6 + "GB", mboferta: 12 + "GB", name: 'Navega' }
function configuracion() {
    let total = 0;
    let description = "";
    const checkFibra = $('#checkFibra').is(':checked');
    const checkMobile = $('#checkMobile1').is(':checked');
    const checkMobile2 = $('#checkMobile2').is(':checked');
    const checkMobile3 = $('#checkMobile3').is(':checked');
    const checkMobile4 = $('#checkMobile4').is(':checked');
    const checkfijo = $('#checkfijo').is(':checked')
    const movil1 = $('input:radio[name=movil1]:checked').val()
    const movil2 = $('input:radio[name=movil2]:checked').val()
    const movil3 = $('input:radio[name=movil3]:checked').val()
    const movil4 = $('input:radio[name=movil4]:checked').val()
    if (checkFibra) {
        if ($('#fibra1').is(':checked')) {
            total = fibra1
            description = `<tr><td>Fibra 50Mb</td><td>25€</td></tr>`
            $('#pricefijo').text(fijo2)
        } else if ($('#fibra2').is(':checked')) {
            total = fibra2
            description = `<tr><td>Fibra 500Mb</td><td>30€</td></tr>`
            $('#pricefijo').text(fijo3)
        }
        if (checkfijo) {
            if ($('#fijo1').is(':checked')) {
                total = total + fijo1
                description = description + `<tr><td>DIGI tel</td><td>${fijo1}€</td></tr>`
            } else if ($('#fijo2').is(':checked')) {
                if ($('input:radio[name=fibra]:checked').val() == "fibra2") {
                    total = total + fijo3
                    description = description + `<tr><td>DIGI tel(500 min)</td><td>${fijo3}€</td></tr>`
                } else {
                    total = total + fijo2
                    description = description + `<tr><td>DIGI tel(500 min)</td><td>${fijo2}€</td></tr>`
                }
            }
        }
    }
    if (checkMobile) {
        const mobile = ofert(movil1)
        total = total + mobile["price"]
        description = description + mobile["description"]
        if (checkMobile2) {
            const mobile2 = ofert(movil2)
            total = total + mobile2["price"]
            description = description + mobile2["description"]
            if (checkMobile3) {
                const mobile3 = ofert(movil3)
                total = total + mobile3["price"]
                description = description + mobile3["description"]
                if (checkMobile4) {
                    const mobile4 = ofert(movil4)
                    total = total + mobile4["price"]
                    description = description + mobile4["description"]
                }
            }
        }
    }
    if (total == 0) {
        $("#descargar").prop('disabled', true);
    } else {
        $("#descargar").prop('disabled', false);
    }
    $('#total').text(total + '€')
    $('#description').html(description)
    return { description, total }
}
function ofert(ofert) {
    const checkFibra = $('#checkFibra').is(':checked');
    if (checkFibra) {
        switch (ofert) {
            case "product1":
                return ({ price: price1['priceofer'], description: `<tr><td>${price1['name']} (${price1['mboferta']})</td> <td>${price1['priceofer']} €</td>` })
                break;

            case "product2":
                return ({ price: price2['priceofer'], description: `<tr><td>${price2['name']} (${price2['mboferta']})</td> <td>${price2['priceofer']} €</td>` })
                break;
            case "product3":
                return ({ price: price3['priceofer'], description: `<tr><td>${price3['name']} (${price3['mboferta']})</td> <td>${price3['priceofer']} €</td>` })
                break;
            case "product4":
                return ({ price: price4['priceofer'], description: `<tr><td>${price4['name']} (${price4['mboferta']})</td> <td>${price4['priceofer']} €</td>` })
                break;
            case "product5":
                return ({ price: price5['priceofer'], description: `<tr><td>${price5['name']} (${price5['mboferta']})</td> <td>${price5['priceofer']} €</td>` })
                break;
            case "product6":
                return ({ price: price6['priceofer'], description: `<tr><td>${price6['name']} (${price6['mboferta']})</td> <td>${price6['priceofer']} €</td>` })
                break;
            case "product7":
                return ({ price: price7['priceofer'], description: `<tr><td>${price7['name']} (${price7['mboferta']})</td> <td>${price7['priceofer']} €</td>` })
                break;
            case "product8":
                return ({ price: price8['priceofer'], description: `<tr><td>${price8['name']} (${price8['mboferta']})</td> <td>${price8['priceofer']} €</td>` })
                break;
            case "product9":
                return ({ price: price9['priceofer'], description: `<tr><td>${price9['name']} (${price9['mboferta']})</td> <td>${price9['priceofer']} €</td>` })
                break;
            case "product10":
                return ({ price: price10['priceofer'], description: `<tr><td>${price10['name']} (${price10['mboferta']})</td> <td>${price10['priceofer']} €</td>` })
                break;
            default:
                return "default"
                break;

        }
    } else {
        switch (ofert) {
            case "product1":
                return ({ price: price1['price'], description: `<tr><td>${price1['name']} (${price1['mb']})</td> <td>${price1['price']}€</td>` })
                break;

            case "product2":
                return ({ price: price2['price'], description: `<tr><td>${price2['name']} (${price2['mb']})</td> <td>${price2['price']}€</td>` })
                break;
            case "product3":
                return ({ price: price3['price'], description: `<tr><td>${price3['name']} (${price3['mb']})</td> <td>${price3['price']}€</td>` })
                break;
            case "product4":
                return ({ price: price4['price'], description: `<tr><td>${price4['name']} (${price4['mb']})</td> <td>${price4['price']}€</td>` })
                break;
            case "product5":
                return ({ price: price5['price'], description: `<tr><td>${price5['name']} (${price5['mb']})</td> <td>${price5['price']}€</td>` })
                break;
            case "product6":
                return ({ price: price6['price'], description: `<tr><td>${price6['name']} (${price6['mb']})</td> <td>${price6['price']}€</td>` })
                break;
            case "product7":
                return ({ price: price7['price'], description: `<tr><td>${price7['name']} (${price7['mb']})</td> <td>${price7['price']}€</td>` })
                break;
            case "product8":
                return ({ price: price8['price'], description: `<tr><td>${price8['name']} (${price8['mb']})</td> <td>${price8['price']}€</td>` })
                break;
            case "product9":
                return ({ price: price9['price'], description: `<tr><td>${price9['name']} (${price9['mb']})</td> <td>${price9['price']}€</td>` })
                break;
            case "product10":
                return ({ price: price10['price'], description: `<tr><td>${price10['name']} (${price10['mb']})</td> <td>${price10['price']}€</td>` })
                break;
            default:
                return "default"
                break;

        }
    }

}
changeprice()
function changeprice() {
    const checkFibra = $('#checkFibra').is(':checked');
    if (checkFibra) {
        $('span[name=price1]').html(price1['priceofer'])
        $('span[name=price2]').html(price2['priceofer'])
        $('span[name=price3]').html(price3['priceofer'])
        $('span[name=price4]').html(price4['priceofer'])
        $('span[name=price5]').html(price5['priceofer'])
        $('span[name=price6]').html(price6['priceofer'])
        $('span[name=price7]').html(price7['priceofer'])
        $('span[name=price8]').html(price8['priceofer'])
        $('span[name=price9]').html(price9['priceofer'])
        $('span[name=price10]').html(price10['priceofer'])
        $('p[name=name1]').html(`${price1['mboferta']} <br> ${price1['call']}`)
        $('p[name=name2]').html(`${price2['mboferta']} ${price2['call']}`)
        $('p[name=name3]').html(`${price3['mboferta']} ${price3['call']}`)
        $('p[name=name4]').html(`${price4['mboferta']} ${price4['call']}`)
        $('p[name=name5]').html(`${price5['mboferta']} ${price5['call']}`)
        $('p[name=name6]').html(`${price6['mboferta']} ${price6['call']}`)
        $('p[name=name7]').html(`${price7['mboferta']} ${price7['call']}`)
        $('p[name=name8]').html(`${price8['mboferta']} ${price8['call']}`)
        $('p[name=name9]').html(`${price9['mboferta']} ${price9['call']}`)
        $('p[name=name10]').html(`${price10['mboferta']} ${price10['call']}`)

    } else {
        $('span[name=price1]').html(price1['price'])
        $('span[name=price2]').html(price2['price'])
        $('span[name=price3]').html(price3['price'])
        $('span[name=price4]').html(price4['price'])
        $('span[name=price5]').html(price5['price'])
        $('span[name=price6]').html(price6['price'])
        $('span[name=price7]').html(price7['price'])
        $('span[name=price8]').html(price8['price'])
        $('span[name=price9]').html(price9['price'])
        $('span[name=price10]').html(price10['price'])
        $('p[name=name1]').html(`${price1['mb']} <br> ${price1['call']}`)
        $('p[name=name2]').html(`${price2['mb']} ${price2['call']}`)
        $('p[name=name3]').html(`${price3['mb']} ${price3['call']}`)
        $('p[name=name4]').html(`${price4['mb']} ${price4['call']}`)
        $('p[name=name5]').html(`${price5['mb']} <br>${price5['call']}`)
        $('p[name=name6]').html(`${price6['mb']} <br>${price6['call']}`)
        $('p[name=name7]').html(`${price7['mb']} <br>${price7['call']}`)
        $('p[name=name8]').html(`${price8['mb']} <br>${price8['call']}`)
        $('p[name=name9]').html(`${price9['mb']} <br>${price9['call']}`)
        $('p[name=name10]').html(`${price10['mb']} <br>${price10['call']}`)
    }

}

$('#carouselExampleControls').carousel('pause')
$('#carouselExampleControls1').carousel('pause')
$('#carouselExampleControls2').carousel('pause')
$('#carouselExampleControls3').carousel('pause')
function movilUndefine(data) {
    if (data === undefined) {
        return "";

    }
    return data
}
$('#load').hide()
function Pregeneratepdf() {
    let name = $('#name').val()
    let surname = $('#surname').val()
    let dir = $('#dir').val()
    let province = $('#province').val()
    let cp = $('#cp').val()
    if ((name == "" || name === undefined) && (surname == "" || surname === undefined) && (dir == "" || dir === undefined) && (province == "" || province === undefined) && (cp == "" || cp === undefined)) {
        generatepdf()
    } else {
        if ($('#politica').is(':checked')) {
            generatepdf()
        }else{
            alertify.error('Acepte la Política');
        }
    }

}
function generatepdf() {
    let name = $('#name').val()
    let surname = $('#surname').val()
    let dir = $('#dir').val()
    let province = $('#province').val()
    let cp = $('#cp').val()
    $('#load').show()


    const total = configuracion()
    let description = total["description"].trim()
    description = description.replace(/<tr>/g, "")
    description = description.replace(/<\/tr>/g, "")
    description = description.replace(/<td>/g, "")
    description = description.split("</td>")
    console.log(description)
    let dataFibra;
    let priceFibra;
    let dataFijo;
    let priceFijo;
    let data1;
    let price1;
    let data2;
    let price2;
    let data3;
    let price3;
    let data4;
    let price4;
    if (description[0] == 'Fibra 50Mb' || description[0] == 'Fibra 500Mb') {
        dataFibra = description[0]
        priceFibra = description[1]
        if (description[2] == 'DIGI tel' || description[2] == 'DIGI tel(500 min)') {
            dataFijo = description[2]
            priceFijo = description[3]

            data1 = description[4]
            price1 = description[5]
            data2 = description[6]
            price2 = description[7]
            data3 = description[8]
            price3 = description[9]
            data4 = description[10]
            price4 = description[11]
        } else {
            dataFijo = "Fijo 0"
            priceFijo = "0"
            data1 = description[2]
            price1 = description[3]
            data2 = description[4]
            price2 = description[5]
            data3 = description[6]
            price3 = description[7]
            data4 = description[8]
            price4 = description[9]
        }
    } else {
        dataFibra = "Fibra 0"
        priceFibra = "0"
        dataFijo = "Fijo 0"
        priceFijo = "0"
        data1 = description[0]
        price1 = description[1]
        data2 = description[2]
        price2 = description[3]
        data3 = description[4]
        price3 = description[5]
        data4 = description[6]
        price4 = description[7]
    }
    data1 = movilUndefine(data1)
    price1 = movilUndefine(price1)
    data2 = movilUndefine(data2)
    price2 = movilUndefine(price2)
    data3 = movilUndefine(data3)
    price3 = movilUndefine(price3)
    data4 = movilUndefine(data4)
    price4 = movilUndefine(price4)

    name = movilUndefine(name)
    surname = movilUndefine(surname)
    province = movilUndefine(province)
    dir = movilUndefine(dir)
    cp = movilUndefine(cp)
    console.log(dataFibra, priceFibra, dataFijo, priceFijo, data1, price1, data2, price2, data3, price3, data4, price4, total["total"], name, surname, dir, cp, province)

    $.ajax({
        url: `/api/pdf`,
        type: 'get',
        data: { dataFibra, priceFibra, dataFijo, priceFijo, data1, price1, data2, price2, data3, price3, data4, price4, total: total["total"], name, surname, dir, cp, province }
    }).done(function (res) {
        $('#load').hide()
        console.log("echo")
        location.href = "./api/download/" + res['msg'];
    });
}
