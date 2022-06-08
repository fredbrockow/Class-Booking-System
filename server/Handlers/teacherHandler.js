const {DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR} 
= require("../configuration/errorMessages");

const { dbGetAllTeachers, dbGetTeacherById } = require('../dbCalls/dbGetTeacher');
const { containsOnlyNumbers } = require('./handlers.utils');

const getAllTeachersHandler = async (req, res) => {
    
    try{
        const response = await dbGetAllTeachers();
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

const getTeacherByIdHandler = async (req, res) => {
    
    const teacherId = req.params.teacherId;

    if (!containsOnlyNumbers(teacherId)){
        res.status(404).json(
            {
                status: 404,
                data: {teacherId},
                message: {error : DATA_NOT_FOUND}
            }
        )
        return;
    }

    try {
        const response = await dbGetTeacherById(parseInt(teacherId));
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
                    data: {teacherId},
                    message: {error : err}
                }
            )
        }else{
            res.status(500).json(
                {
                    status: 500,
                    data: {teacherId},
                    message: {error : err}
                }
            )
        }
    
    }
};

module.exports = {
    getAllTeachersHandler, getTeacherByIdHandler
}