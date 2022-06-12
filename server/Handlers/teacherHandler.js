const 
{
    DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR, 
    BAD_DATA_FORMAT, ALREADY_EXISTS, ERROR_INSERTING_TEACHER
} 
= require("../configuration/errorMessages");

const { dbGetAllTeachers, dbGetTeacherById } = require('../dbCalls/dbGetTeacher');
const {dbAdminAddTeacher} = require('../dbCalls/dbAdminTeacher')
const { validatePerson } = require('./handlers.utils');

const getAllTeachersHandler = async (req, res) => {
    
    try{
        const response = await dbGetAllTeachers();
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
        }
        else{
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

    try {
        const response = await dbGetTeacherById(teacherId);
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

const adminAddTeacherHandler = async (req, res) => {
    console.log(req.body);

    const personInfo = req.body;

    if (!validatePerson(personInfo)){
        res.status(400).json(
            {
                status: 400,
                data: req.body,
                message: {error : BAD_DATA_FORMAT}
            }
        )
        return;
    }else {
        try{
            const response = await dbAdminAddTeacher(personInfo);
            res.status(200).json(
                {
                    status: 200,
                    data: response,
                    message: {success : SUCCESS}
                }
            )
        }
        catch(err) {
            if (err === ALREADY_EXISTS) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : ALREADY_EXISTS}
                    }
                )
            }
            else if (err === ERROR_INSERTING_TEACHER){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : ERROR_INSERTING_TEACHER}
                    }
                )
            }
            else {
                res.status(500).json(
                    {
                        status: 500,
                        data: {},
                        message: {error : err}
                    }
                )
            }
        }
    }
}

module.exports = {
    getAllTeachersHandler, getTeacherByIdHandler, adminAddTeacherHandler
}