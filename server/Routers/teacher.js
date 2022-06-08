const express = require('express');
const router = express.Router();

const {getAllTeachersHandler} = require('../handlers/teacherHandler');

router.get('/', getAllTeachersHandler);

module.exports = router;