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

const CLASS_ALREADY_EXISTS = "a class with that title and teacher already exists";

const ERROR_INSERTING_TEACHER = "couldn't create a new teacher";

const ERROR_INSERTING_CLASS = "couldn't create a new class";

const TEACHER_DOES_NOT_EXIST = "couldn't find a teacher to assign to this class"


module.exports = {
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER,
    ERROR_INSERTING_CLASS, TEACHER_DOES_NOT_EXIST, CLASS_ALREADY_EXISTS
}