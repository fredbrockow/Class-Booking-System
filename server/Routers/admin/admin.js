const express = require('express');
const router = express.Router();

const ROLES = require ('../../configuration/roles.js');
const verifyRoles = require('../../middleware/verifyRoles.js');

const { adminAddTeacherHandler } = require('../../handlers/teacherHandler');
const { adminAddClassHandler } = require('../../handlers/classHandler')
const { adminGetAllUsersHandler } = require ('../../handlers/usersHandler')
// to get the users of the studio

router.get('/', (req, res) => {
    res.status(200).json("admin");
})

//get all users
router.get('/users', adminGetAllUsersHandler)

// add a teacher
router.post('/teacher', adminAddTeacherHandler);

//add a class
router.post('/class', adminAddClassHandler)

module.exports = router;