const nodemailer = require("nodemailer");

exports.enviar = (req, res) => {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        const {name, email, phone, message, asunto} = req.body
        contentHTML = ` <h1>Mensaje de Contacto</h1>

        <div>nombre: ${name} <br> email: ${email} <br> telefono: ${phone} <br>Mensaje: <br> ${message} </div> <br> <p>Si desea responder a este cliente de click en el correo electronico</p>`
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.serviciodecorreo.es",
            port: 465, auth: {
                user: "services@tecnoservices.es", // generated ethereal user
                pass: "Tvarxshgjgw1" // generated ethereal password
            }
        });

        // send mail with defined transport object
        var mailOptions = {
            from: 'services@tecnoservices.es',
            to: 'info@tecnoservices.es',
            subject: asunto,
            html: contentHTML
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({cod:400, error })

            } else {
                console.log('Email enviado: ' + info.response);
                res.send({cod:200, info: info.response })
            }
        });
    }

    main().catch(console.error);
}