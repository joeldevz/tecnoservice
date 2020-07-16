

function generatePDF(req, res) {
    console.log(req.query)
    let params = req.query
    var f = new Date();
    const name = f.getDate() + (f.getMonth() + 1) + f.getFullYear() + f.getTime() + '.pdf';
    let fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()

    const web = `http://tecnoservices.es/generatepdf?fibra=${params.dataFibra}&pricefri=${params.priceFibra}&fijo=${params.dataFijo}&pricefij=${params.priceFijo}&M1=${params.data1}&P1=${params.price1}&M2=${params.data2}&P2=${params.price2}&M3=${params.data3}&P3=${params.price3}&M4=${params.data4}&P4=${params.price4}&total=${params.total}&date=${fecha}&name=${params.name}&surname=${params.surname}&province=${params.province}&cp=${params.cp}&dir=${params.dir}`;
    console.log(web, name);
    const puppeteer = require('puppeteer');
    (async () => {
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
         const page = await browser.newPage();

        await page.goto(web, { waitUntil: 'networkidle2' });
        await page.pdf({ path: "./views/dist/pdf/" + name, format: 'A4' });
        await browser.close();
        await res.status(200).send({ msg: name })
    })();
}
module.exports = { generatePDF }