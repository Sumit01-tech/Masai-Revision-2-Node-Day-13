const express = require('express');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.post('/register', validateUser, (req, res) => {
    res.status(201).json({
        success: true,
        message: 'User registered successfully'
    });
});
module.exports = router;