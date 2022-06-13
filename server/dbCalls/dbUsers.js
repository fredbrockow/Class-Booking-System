const 
{
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER,
    ERROR_INSERTING_CLASS, TEACHER_DOES_NOT_EXIST, CLASS_ALREADY_EXISTS,
    CLASS_DOES_NOT_EXISTS, CALENDAR_DAY_ISSUE, CALENDAR_TIME_SLOT_ISSUE,
    CALENDAR_NO_CLASS_SLOT, CALENDAR_NO_MATCH_CLASS, CLASS_IS_FULL,
    ALREADY_REGISTER_IN_CLASS
} 
= require ('../configuration/errorMessages');

const {CLASS_MAX_CAPACITY } = require ('../configuration/ClassConfig')

const {
    DB_NAME, USERS, YOGA_CLASSES, CALENDAR_WEEK,TEACHERS,
    getNewClient
}= require('../configuration/dbConfig');

const dbUsersAddClass = async (classInfo) => {
    

    const client = getNewClient();

    try{
        await client.connect();
        const db = client.db(DB_NAME);
    
        //check if the slot has the correct class
        const checkSlot = await db.collection(CALENDAR_WEEK).findOne({dayName:classInfo.dayName});
        
        if (checkSlot[classInfo.slotKey] === null){
            throw CALENDAR_NO_CLASS_SLOT;
        }
        // console.log(checkSlot[classInfo.slotKey]);
        const classTarget = checkSlot[classInfo.slotKey].class;
        const studentTarget = checkSlot[classInfo.slotKey].student;
        // console.log("classTarget ", classTarget);
        // console.log("studentTarget ", studentTarget);

        //check if it is the correct class
        if(classTarget !== classInfo.classId){
            throw CALENDAR_NO_MATCH_CLASS
        }

        // check if class is full
        if (studentTarget.length >= CLASS_MAX_CAPACITY) {
            throw CLASS_IS_FULL
        }

        // check if user is already enrolled in that class:
        const foundStudent = studentTarget.find (user => user === classInfo.userId);
        if(foundStudent) throw ALREADY_REGISTER_IN_CLASS

        //ready to update:

        //update user
        const updatedUser = await db.collection(USERS).updateOne(
            {
                id: classInfo.userId
            },
            {
                $push : {classes : {
                        "dayName": classInfo.dayName,
                        "slot" : classInfo.slotKey,
                        "classId": classInfo.classId
                    }
                }
            }
        );

        
        //update calendar
        studentTarget.push(classInfo.userId);

        
        const updateObj = {
            class: classTarget,
            student: studentTarget
        }

        const updatedCalendar = await db.collection(CALENDAR_WEEK).findOneAndUpdate(
            {dayName:classInfo.dayName},
            {$set:{ [classInfo.slotKey]: updateObj}}
        );

        // console.log("updatedCalendar.value ", updatedCalendar.value);

        const newCalendar = updatedCalendar.value;
        newCalendar[classInfo.slotKey].student.push(classInfo.userId);

            return {
                calendar: newCalendar,
                user : {
                    "dayName": classInfo.dayName,
                    "slot" : classInfo.slotKey,
                    "classId": classInfo.classId
                }
            }

    }
    catch (err){
        throw err;
    }
    finally {
        // close the connection to the database server
        client.close();
    }

}

module.exports = {
    dbUsersAddClass
}