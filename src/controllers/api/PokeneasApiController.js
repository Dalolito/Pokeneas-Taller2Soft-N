const { Pokeneas } = require('../../database/Pokeneas');
const os = require('os');

class PokeneasApiController {
    static show(req, res) {
        const number = Math.floor(Math.random() * Pokeneas.length);
        const pokeneas = Pokeneas[number];
        const { id, name, height, ability } = pokeneas;

        let response = {
            id: id,
            name: name,
            height: height,
            ability: ability,
            hostName: os.hostname(),
        };

        res.send(response);
    }
}

module.exports = PokeneasApiController;