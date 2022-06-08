const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const DB_NAME = "booking_calendar";
const USERS = "users";
const YOGA_CLASSES = "yoga_classes";
const CALENDAR_WEEK = "calendar_week";
const TEACHERS = "teachers"


const getNewClient = () => {
    return new MongoClient(MONGO_URI, options);
}

module.exports = {
    DB_NAME, USERS, YOGA_CLASSES, CALENDAR_WEEK,TEACHERS,
    getNewClient
}