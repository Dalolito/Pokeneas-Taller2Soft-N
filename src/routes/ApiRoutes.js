const PokeneasApiController = require('../controllers/api/PokeneasApiController');
const express = require('express');

class ApiRoutes {
    static init() {
        const router = express.Router();

        router.get('/pokenea', PokeneasApiController.show);
        return router;
    }
}

module.exports = ApiRoutes;