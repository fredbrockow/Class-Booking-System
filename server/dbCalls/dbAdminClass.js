const 
{
    DATA_NOT_FOUND, CLASS_ALREADY_EXISTS, ERROR_INSERTING_CLASS, 
    TEACHER_DOES_NOT_EXIST
} 
= require ('../configuration/errorMessages');

const {
    DB_NAME, TEACHERS, YOGA_CLASSES,
    getNewClient
}= require('../configuration/dbConfig');

const { getUniqueId } = require ('./db_utils');

const dbAdminAddClass = async (classInfo) => {

    const client = getNewClient();

    try{
        await client.connect();
        const db = client.db(DB_NAME);

        // check if teacher exists

        const foundTeacher = await db.collection(TEACHERS).findOne({ id: classInfo.teacher });

        if (foundTeacher === null) {
            
            throw TEACHER_DOES_NOT_EXIST;
        }

        // check if class already exists

        const foundClass = await db.collection(YOGA_CLASSES)
        .findOne(
            {   
                title : classInfo.title,
                teacher: classInfo.teacher
            }
        );
        if (foundClass !== null) {
            throw CLASS_ALREADY_EXISTS;
        }

        //ready to insert
        const id = getUniqueId();

        const response = await db.collection(YOGA_CLASSES)
        .insertOne(
            {id:id,imgSrc:"/public/Hatha.jpg",...classInfo, isActive:true}
        );
        
        if(response.acknowledged){
            return {id:id,imgSrc:"/public/Hatha.jpg",...classInfo, isActive:true};
        }
        else
        {
            throw ERROR_INSERTING_CLASS
        }
    }
    catch (err) {
        throw err;
    }
    finally {
        // close the connection to the database server
        client.close();
    }
}

module.exports = {
    dbAdminAddClass
}