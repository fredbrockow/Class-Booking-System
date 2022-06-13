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


// Roles Routes
app.use('/login', require('./routers/auth'));
app.use("/users", require('./routers/users/users'));
app.use("/admin", require('./routers/admin/admin'));

//public get routes
app.use('/teacher', require('./routers/teacher'));
app.use('/class', require('./routers/class') );

// Calendar Routes
app.use('/calendar', require('./routers/calendar'));

app.post('/testform', (req,res) => {

    if(true){
        res.status(200).json({
            status: 200,
            data: {
                    calendar: {
                        _id: "62a66d9f6aaf86e492688ff8",
                        dayName: "thursday",
                        slot1: null,
                        slot2: {
                            class: "6bcd5576-00ed-460a-b2d3-15f034ff41c2",
                            student: [
                                "4c8e58c0-788a-45d4-89e4-2b6101339b76",
                                "f1e2776d-8352-468b-b790-611d9956213c",
                                "03e03516-cc4b-4e58-9ed4-b78470055af3",
                                "1f257bab-3c45-491e-9417-8f2cd26c2276",
                                "197a4ad6-1176-4f2e-80e2-ac5fff3a0249",
                                "53c57b41-76ef-4c0c-8c44-c394d0bc16ef",
                                "628e575a-26e5-40b6-adf1-fb7e4db73eb9",
                                "8f7118e9-518c-413c-a422-be603a353ca0",
                                "111111111-1111-111111111-11-111111111"
                            ]
                        },
                        slot3: {
                            class: "6bcd5576-00ed-460a-b2d3-15f034ff41c2",
                            student: [
                                "393fc25b-c68c-438c-9ff2-a1328d07e73d",
                                "f1e4c0cf-9f4c-4fc1-afa4-103204033018",
                                "967d6c67-151d-491a-8f82-d6ed231acf4d",
                                "862e5fe4-c73b-484a-9cb6-a5d9bbe4b06d"
                            ]
                        },
                        slot4: null,
                        slot5: null,
                        slot6: null
                    },
                    user: {
                        dayName: "thursday",
                        slot: "slot2",
                        classId: "6bcd5576-00ed-460a-b2d3-15f034ff41c2"
                    }
                },
            message: {success:"request was successfull"}
        });
    }else{
        res.status(400).json({
            status: 400,
            data: req.body,
            message: {error:"somekind of error"}
        });

    }
})

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

