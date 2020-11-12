const express = require('express');
const router = express.Router();


/**
 * Controllers
 */
const AuthController = require('./controllers/AuthController');

/**
 * Middlewares
 */
const isAuthenticated = require('./middleware/isAuthenticated');


// Auth
router.post('/auth/login', AuthController.login);
router.post('/auth/register', AuthController.register);


// Implementadas
router.get('/home', [isAuthenticated]);



module.exports = (app) => app.use(router);