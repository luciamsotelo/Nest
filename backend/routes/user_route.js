// user_route.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// Define routes
router.get('/', userController.getAllUsers);

module.exports = router;
