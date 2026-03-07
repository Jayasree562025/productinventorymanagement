const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');

// Inga dhaan mukkiam: (req, res, next) nu extra-va irundha adhai remove pannunga
router.post('/register', register); 
router.post('/login', login);

module.exports = router;