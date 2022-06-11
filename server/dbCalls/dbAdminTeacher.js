const 
{
    DATA_NOT_FOUND, ALREADY_EXISTS, ERROR_INSERTING_TEACHER
} 
= require ('../configuration/errorMessages');

const {
    DB_NAME, TEACHERS,
    getNewClient
}= require('../configuration/dbConfig');

const { getUniqueId } = require ('./db_utils');


const dbAdminAddTeacher = async (teacherInfo) => {
    const client = getNewClient();

    try{
        await client.connect();
        const db = client.db(DB_NAME);
        console.log("connected!");

        const foundTeacher = await db.collection(TEACHERS).findOne(
            { $or: [
                {username : teacherInfo.username},
                {email: teacherInfo.email}
            ]}
        );
        
        if (foundTeacher !== null) {
            throw ALREADY_EXISTS;
        }
        const id = getUniqueId();
        const response = await db.collection(TEACHERS)
        .insertOne(
            {id:id,...teacherInfo}
        );
        
        if(response.acknowledged){
            return {id:id,...teacherInfo};
        }
        else
        {
            throw ERROR_INSERTING_TEACHER
        }
    }
    catch (err) {
        throw err;
    }
}

module.exports = {dbAdminAddTeacher}