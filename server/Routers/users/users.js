const express = require('express');
const router = express.Router();

const ROLES = require ('../../configuration/roles.js');
const verifyRoles = require('../../middleware/verifyRoles.js');

const {usersAddClass, usersRemoveClass} = require('../../handlers/usersHandler')

// to get the users of the studio

router.get('/', (req, res) => {
    res.status(200).json("users");
})

router.patch('/addClass', usersAddClass);

router.patch('/removeClass', usersRemoveClass);


module.exports = router;
