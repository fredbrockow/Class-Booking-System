const 
{
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, CLASS_ALREADY_EXISTS, ERROR_INSERTING_CLASS,
    TEACHER_DOES_NOT_EXIST
} 
= require("../configuration/errorMessages");

const { dbAdminGetUsers } = require('../dbCalls/dbAdminUsers');

const adminGetAllUsersHandler = async (req, res) => {
    try{
        const response = await dbAdminGetUsers();
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
    adminGetAllUsersHandler
}