require("dotenv").config();

const {
    DB_NAME, USERS, YOGA_CLASSES, CALENDAR_WEEK, TEACHERS,
    getNewClient
}= require('./configuration/dbConfig');

const usersData = require('./data/dbDataUsers.json');
const calendarWeek = require('./data/calendarWeek.json');
const teachers = require('./baseData/teachers.json');
const yogaClasses = require('./baseData/yogaClass.json');

// const { MONGO_URI } = process.env;


const insertDataBase = async (collection_name, data_to_insert) => {

    const client = getNewClient()
    try {
        // connect to the client
        await client.connect();
    
        // connect to the database (db name is provided as an argument to the function)
        const db = client.db(DB_NAME);
        console.log("connected!");
    
        //add datas
        const response = await db.collection(collection_name).insertMany(data_to_insert);
    }
    catch (err){
        console.log(err);
    }
    finally {
        // close the connection to the database server
        client.close();
        console.log("disconnected!");
    }
};

const dbBatchImport = async () => {

    await insertDataBase(TEACHERS, teachers)
    .then(() => console.log('done inserting teachers data '));

    await insertDataBase(YOGA_CLASSES, yogaClasses)
    .then(() => console.log('done inserting yoga classes data '));

    await insertDataBase(CALENDAR_WEEK, calendarWeek)
    .then(() => console.log('done inserting a week of the calendar data '));

    await insertDataBase(USERS, usersData)
    .then(() => console.log('done inserting the users data '));
}

dbBatchImport()
.then(()=> {
    console.log('batch import done');
});