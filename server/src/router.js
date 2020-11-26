const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const AuthController = require('./controllers/AuthController');
const ProdsController = require('./controllers/ProdsController');
/**
 * Middlewares
 */
const isAuthenticated = require('./middleware/isAuthenticated');



// Auth
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);



// Implementadas
router.get('/home', [isAuthenticated]);
router.post('/prods/createProd', ProdsController.createProd);
router.get('/prods/find',[isAuthenticated], ProdsController.find);



module.exports = (app) => app.use(router);