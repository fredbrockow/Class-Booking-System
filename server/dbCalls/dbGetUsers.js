const {
    DATA_NOT_FOUND
} = require ('../configuration/errorMessages');

const {
    DB_NAME, USERS,
    getNewClient
}= require('../configuration/dbConfig');

const {remove_id, remove_idFromArray}= require('./db_utils');

const dbAuthUserByUsername = async (username) => {
    const client = getNewClient();

    try{
        // connect to the client
        await client.connect();
   
        // connect to the database (db name is provided as an argument to the function)
        const db = client.db(DB_NAME);

        const response = await db.collection(USERS).findOne({username:username});

        if (response === null ){
            throw DATA_NOT_FOUND;
        }
       return remove_id(response);
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
    dbAuthUserByUsername
}