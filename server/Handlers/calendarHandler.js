const {DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR} 
= require("../configuration/errorMessages");

const { dbGetCalendar } = require ('../dbCalls/dbGetCalendar.js');

const getCalendarHandler = async (req, res) => {

    // console.log("I am getting called");
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








// const { yoga_classes, a_week}  = require('../data/weeklyClasses');

// const getCalendarHandler = async (req, res) => {

//     res.status(200).json({
//         status: 200,
//         data: {
//             yoga_classes: yoga_classes,
//             calendar : a_week
//         },
//         message: "success"
//     });
// }

module.exports = {
    getCalendarHandler
}