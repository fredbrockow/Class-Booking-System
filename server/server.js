const path = require('path');
const express = require('express');

const app = express();
const port = 5000;

//to be able to handle form data from the req
app.use(express.urlencoded({ extended: false }));
//to be able to handle json format from the req
app.use(express.json())
//serve static files
app.use('/public', express.static(path.join(__dirname, '/public')));


// Test Route
app.use('/server', require('./routers/testRoutes'));

// Roles Routes
app.use('/login', require('./routers/auth'));
app.use("/users", require('./routers/users/users'));
app.use("/admin", require('./routers/admin/admin'));

//public get routes
app.use('/teacher', require('./routers/teacher'));
app.use('/class', require('./routers/class') );

// Calendar Routes
app.use('/calendar', require('./routers/calendar'));

// 404
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'routers', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.listen (port, () => {
    console.log(`app running, listening on port ${port}`);
})

