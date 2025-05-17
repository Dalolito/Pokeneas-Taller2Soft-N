const PokeneasController = require('../controllers/PokeneasController');
const express = require('express');

class WebRoutes {
    static init() {
        const router = express.Router();

        router.get('/pokenea', PokeneasController.show);
        return router;
    }
}

module.exports = WebRoutes;