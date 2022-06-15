const 
{
    CALENDAR_NO_CLASS_SLOT, CALENDAR_NO_MATCH_CLASS, CLASS_IS_FULL,
    ALREADY_REGISTER_IN_CLASS, NOT_REGISTERED_IN_CLASS
} 
= require ('../configuration/errorMessages');

const {CLASS_MAX_CAPACITY } = require ('../configuration/ClassConfig')

const {
    DB_NAME, USERS, CALENDAR_WEEK,
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
        const classTarget = checkSlot[classInfo.slotKey].class;
        const studentTarget = checkSlot[classInfo.slotKey].student;

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

const dbUsersRemoveClass = async (classInfo) => {
    const client = getNewClient();

    try{
        await client.connect();
        const db = client.db(DB_NAME);

        /**
         *  CHECK FOR THE CALENDAR
         */
        //check if the slot has the correct class
        const checkSlot = await db.collection(CALENDAR_WEEK).findOne({dayName:classInfo.dayName});
        
        if (checkSlot[classInfo.slotKey] === null){
            throw CALENDAR_NO_CLASS_SLOT;
        }
        // from Calendar
        const classTarget = checkSlot[classInfo.slotKey].class;
        const studentTarget = checkSlot[classInfo.slotKey].student;

        //check if it is the correct class
        if(classTarget !== classInfo.classId){
            throw CALENDAR_NO_MATCH_CLASS
        }

        // check if user is enrolled in that class:
        const foundStudent = studentTarget.find (user => user === classInfo.userId);
        if(!foundStudent) throw NOT_REGISTERED_IN_CLASS;


        // updating Calendar
        const newStudentArr = studentTarget.filter((user) => user !== classInfo.userId);
        const updateObject = {class: classInfo.classId, student:newStudentArr};

        const updateSlot = await db.collection(CALENDAR_WEEK).findOneAndUpdate(
            {dayName:classInfo.dayName},
            {$set:{ [classInfo.slotKey]: updateObject}}
        );

        /**
         *  CHECK FOR THE USER
         */
        const targetUser = await db.collection(USERS).findOne(
            {
                id: classInfo.userId
            },
        );

        //making sure we are removing the right class
        let newArrClasses = [];
        let isClassFound = false;

        if (targetUser.classes.length > 0){
           targetUser.classes.forEach((klass) => {
                if(klass.dayName === classInfo.dayName){
                    if(klass.slot === classInfo.slotKey){
                        if(klass.classId === classInfo.classId){
                            isClassFound = true;
                            return;
                        }
                    }
                }
                newArrClasses.push(klass)
            })
            if (!isClassFound) throw NOT_REGISTERED_IN_CLASS
        }
       
        // updating the user
        updatedUser = await db.collection(USERS).findOneAndUpdate(
            {id:classInfo.userId},
            {$set:{ classes: newArrClasses}}
        );

        return newArrClasses;

    } 
    catch(err) {
        throw err;
    }
    finally {
        // close the connection to the database server
        client.close();
    }
}
module.exports = {
    dbUsersAddClass, dbUsersRemoveClass
}