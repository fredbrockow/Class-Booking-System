const express = require('express');
const router = express.Router();

const ROLES = require ('../../configuration/roles.js');
const verifyRoles = require('../../middleware/verifyRoles.js');

// to get the users of the studio

router.get('/', (req, res) => {
    res.status(200).json("admin");
})

module.exports = router;