const express = require('express');
const router = express.Router();

// to get the users of the studio

router.get('/', (req, res) => {
    res.status(200).json("users");
})

module.exports = router;
