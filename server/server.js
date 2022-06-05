const path = require('path');
const express = require('express');



const app = express();
const port = 5000;

//to be able to handle form data from the req
app.use(express.urlencoded({ extended: false }));
//to be able to handle json format from the req
app.use(express.json())
//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));



app.use('/server', require('./Routers/testRoutes'));
app.use('/login', require('./Routers/auth'));
app.use("/users", require('./Routers/users/users'));

app.listen (port, () => {
    console.log(`app running, listening on port ${port}`);
})

