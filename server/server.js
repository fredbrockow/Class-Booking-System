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



app.use('/server', require('./routers/testRoutes'));
app.use('/login', require('./routers/auth'));
app.use("/users", require('./routers/users/users'));
app.use("/admin", require('./routers/admin/admin'));

app.listen (port, () => {
    console.log(`app running, listening on port ${port}`);
})

