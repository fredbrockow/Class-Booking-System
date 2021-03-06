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

const CLASS_DOES_NOT_EXISTS = "the class does not exist";

const ERROR_INSERTING_TEACHER = "couldn't create a new teacher";

const ERROR_INSERTING_CLASS = "couldn't create a new class";

const TEACHER_DOES_NOT_EXIST = "couldn't find a teacher to assign to this class";

const CALENDAR_DAY_ISSUE = "there was a problem retrieving the day in that Calendar";

const CALENDAR_TIME_SLOT_ISSUE = "there is already a Class assigned to that Time Slot for that day in the Calendar";

const CALENDAR_NO_CLASS_SLOT = "there is no Class assigned to that Time Slot";

const CALENDAR_NO_MATCH_CLASS = "the Class for that time slot doesn't match the request";

const CLASS_IS_FULL = "the selected class is full";

const ALREADY_REGISTER_IN_CLASS = "already enrolled in that class";

const NOT_REGISTERED_IN_CLASS = "user is not registered in this class"

module.exports = {
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER,
    ERROR_INSERTING_CLASS, TEACHER_DOES_NOT_EXIST, CLASS_ALREADY_EXISTS,
    CLASS_DOES_NOT_EXISTS, CALENDAR_DAY_ISSUE, CALENDAR_TIME_SLOT_ISSUE, 
    CALENDAR_NO_CLASS_SLOT, CALENDAR_NO_MATCH_CLASS, CLASS_IS_FULL, 
    ALREADY_REGISTER_IN_CLASS, NOT_REGISTERED_IN_CLASS
}