const {
    DATA_NOT_FOUND
} = require ('../configuration/errorMessages');

const {
    DB_NAME, TEACHERS,
    getNewClient
}= require('../configuration/dbConfig');

const {remove_id, remove_idFromArray}= require('./db_utils');


const dbGetAllTeachers = async () => {

    const client = getNewClient();

    try{
        // connect to the client
        await client.connect();
   
        // connect to the database (db name is provided as an argument to the function)
        const db = client.db(DB_NAME);

        const response = await db.collection(TEACHERS).find().toArray();

        if (response.length < 1 ){
           throw DATA_NOT_FOUND;
       }
       return remove_idFromArray(response);
   }
   catch (err) {
       throw err;
   }
   finally {
       // close the connection to the database server
       client.close();
   }
};

const dbGetTeacherById = async (teacherId) => {
    const client = getNewClient();

    try{  
        // connect to the client
        await client.connect();
    
        // connect to the database (db name is provided as an argument to the function)
        const db = client.db(DB_NAME);
        
        const response = await db.collection(TEACHERS).findOne({id:teacherId});

        if (response === null ){
            throw DATA_NOT_FOUND;
        }
        return remove_id(response);
    }
    catch (err){
        throw err;
    }
    finally{
        // close the connection to the database server
        client.close();
    }   
}


module.exports = {
    dbGetAllTeachers, dbGetTeacherById
}