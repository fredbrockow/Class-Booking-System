/**
 * @author Frederic Brockow
 * 
 *  module for all the erromessages associated with the
 *  try / catch / throw to insure uniformity, reduce bugs from typos,
 *  and easier maintenance
*/

const DATA_NOT_FOUND = "the data requested was not found";

const DATABASE_GENERIC_ERROR = "error communicating with the database"

const SUCCESS = "request was successfull";

const BAD_DATA_FORMAT = "missing fields or bad field format";

const ALREADY_EXISTS = "username or email address already exist";

const ERROR_INSERTING_TEACHER = "couldn't create a new teacher";


module.exports = {
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER
}