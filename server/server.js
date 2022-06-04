const path = require('path');
const express = require('express');


const app = express();
const port = 5000;

app.get ("/server", (req, res) => {
    res.status(200).json("bacon");
});

app.listen (port, () => {
    console.log(`app running, listening on port ${port}`);
})

