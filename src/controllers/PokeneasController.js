const os = require('os');
const { Pokeneas } = require('../database/Pokeneas');

class PokeneasController {
    static show(req, res) {
        const number = Math.floor(Math.random() * Pokeneas.length);
        const pokenea = Pokeneas[number];
        const { image, quote } = pokenea;
        
        const viewData = {
            image: image,
            quote: quote,
            hostname: os.hostname(),
        };
        
        res.render('pokenea/show', {viewData: viewData});
    }
}

module.exports = PokeneasController;