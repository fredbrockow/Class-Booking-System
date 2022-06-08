const express = require('express');
const router = express.Router();

const {getAllClassesHandler, getClassByIdHandler} = require('../handlers/classHandler');

router.get('/', getAllClassesHandler);

router.get('/:classId', getClassByIdHandler);

module.exports = router;