const express = require('express');
const router = express.Router();

const {getCalendarHandler} = require('../handlers/calendarHandler');

router.get('/', getCalendarHandler);

module.exports = router;