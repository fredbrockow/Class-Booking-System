const {
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER,
    ERROR_INSERTING_CLASS, TEACHER_DOES_NOT_EXIST, CLASS_ALREADY_EXISTS,
    CLASS_DOES_NOT_EXISTS, CALENDAR_DAY_ISSUE, CALENDAR_TIME_SLOT_ISSUE
} 
= require("../configuration/errorMessages");

const { dbGetCalendar } = require ('../dbCalls/dbGetCalendar.js');
const { dbAdminAddClassToCalendar } = require('../dbCalls/dbAdminCalendar')
const { validateClassToAddToCalendar } = require('./handlers.utils');

const getCalendarHandler = async (req, res) => {

    try{
        const response = await dbGetCalendar();
        res.status(200).json(
            {
                status: 200,
                data: response,
                message: {success : SUCCESS}
            }
        )
    }
    catch (err){
        if(err === DATA_NOT_FOUND){
            res.status(404).json(
                {
                    status: 404,
                    data: {},
                    message: {error : err}
                }
            )
        }else{
            res.status(500).json(
                {
                    status: 500,
                    data: {},
                    message: {error : err}
                }
            )
        }
    }
};

const adminAddClassToCalendarHandler = async (req,res) => {

    const classInfo = req.body;

    if (!validateClassToAddToCalendar(classInfo)){
        res.status(400).json(
            {
                status: 400,
                data: req.body,
                message: {error : BAD_DATA_FORMAT}
            }
        )
        return;
    }
    else {

        try{
            const response = await dbAdminAddClassToCalendar(classInfo);
            res.status(200).json(
                {
                    status: 200,
                    data: response,
                    message: {success : SUCCESS}
                }
            )
        }
        catch(err) {
            if (err === CLASS_DOES_NOT_EXISTS) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CLASS_DOES_NOT_EXISTS}
                    }
                )
            }
            else if (err === CALENDAR_DAY_ISSUE) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_DAY_ISSUE}
                    }
                )
            }
            else if (err === CALENDAR_TIME_SLOT_ISSUE) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_TIME_SLOT_ISSUE}
                    }
                )
            }
            else {
                res.status(500).json(
                    {
                        status: 500,
                        data: req.body,
                        message: {error : err}
                    }
                )
            }
        }
    }

}

module.exports = {
    getCalendarHandler, adminAddClassToCalendarHandler
}