const express = require('express');
const router = express.Router();
const { authHandler } = require('../Handlers/authHandler')

router.post("/", authHandler);

module.exports = router;