const 
{
    DATABASE_GENERIC_ERROR, 
    CLASS_DOES_NOT_EXISTS, CALENDAR_DAY_ISSUE, CALENDAR_TIME_SLOT_ISSUE
} 
= require ('../configuration/errorMessages');

const {
    DB_NAME, CALENDAR_WEEK, YOGA_CLASSES,
    getNewClient
}= require('../configuration/dbConfig');

const { getUniqueId } = require ('./db_utils');

const dbAdminAddClassToCalendar = async (classInfo) => {

    const client = getNewClient();

    try{
        await client.connect();
        const db = client.db(DB_NAME);

        //check if the class exists
        const checkClass = await db.collection(YOGA_CLASSES).findOne({id:classInfo.class});
        if (checkClass === null ){
            throw CLASS_DOES_NOT_EXISTS;
        }
    
        //check if the slot is still available
        const checkSlot = await db.collection(CALENDAR_WEEK).findOne({dayName:classInfo.dayName});
        if (checkClass === null ){
            throw CALENDAR_DAY_ISSUE;
        }
        
        if (checkSlot[classInfo.slotKey] !== null){
            throw CALENDAR_TIME_SLOT_ISSUE;
        }

        //ready to update
        const updateObject = {class: classInfo.class, student:[]};

        const updateSlot = await db.collection(CALENDAR_WEEK).findOneAndUpdate(
            {dayName:classInfo.dayName},
            {$set:{ [classInfo.slotKey]: updateObject}}
        );
        
        if(updateSlot.lastErrorObject.updatedExisting){

            updateSlot.value[classInfo.slotKey] = updateObject;

            return updateSlot.value;
        }
        else{
            throw DATABASE_GENERIC_ERROR;
        }
    }
    catch (err) {
        throw err
    }
    finally {
        // close the connection to the database server
        client.close();
    }
};

module.exports = {
    dbAdminAddClassToCalendar
}