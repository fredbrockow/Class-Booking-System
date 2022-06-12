const {
    DATA_NOT_FOUND
} = require ('../configuration/errorMessages');

const {
    DB_NAME, CALENDAR_WEEK,
    getNewClient
}= require('../configuration/dbConfig');


const dbGetCalendar = async () => {
    const client = getNewClient();

    try{
         // connect to the client
         await client.connect();
    
         // connect to the database (db name is provided as an argument to the function)
         const db = client.db(DB_NAME);

         const response = await db.collection(CALENDAR_WEEK).find().toArray();

         if (response.length < 1 ){
            throw DATA_NOT_FOUND;
        }
        return response;
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
    dbGetCalendar
};