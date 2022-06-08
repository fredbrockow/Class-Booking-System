const {DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR} 
= require("../configuration/errorMessages");

const { dbGetCalendar } = require ('../dbCalls/dbGetCalendar.js');

const getCalendarHandler = async (req, res) => {

    try{
        const response = await dbGetCalendar();
        res.status(200).json(
            {
                status: 200,
                data: response,
                message: {sucess : SUCCESS}
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

module.exports = {
    getCalendarHandler
}