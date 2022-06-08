const express = require('express');
const router = express.Router();

const {getAllTeachersHandler, getTeacherByIdHandler} = require('../handlers/teacherHandler');

router.get('/', getAllTeachersHandler);

router.get('/:teacherId', getTeacherByIdHandler);

module.exports = router;