const 
{
    DATA_NOT_FOUND, SUCCESS,  
    BAD_DATA_FORMAT, CLASS_ALREADY_EXISTS, ERROR_INSERTING_CLASS,
    TEACHER_DOES_NOT_EXIST
} 
= require("../configuration/errorMessages");

const { dbGetAllClasses, dbGetClassById } = require('../dbCalls/dbGetClass');
const { dbAdminAddClass }= require('../dbCalls/dbAdminClass')
const { containsOnlyNumbers, validateClass } = require('./handlers.utils');

const getAllClassesHandler = async (req, res) => {
    
    try{
        const response = await dbGetAllClasses();
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

const getClassByIdHandler = async (req, res) => {
    
    const classId = req.params.classId;

    try {
        const response = await dbGetClassById(classId);
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
                    data: {classId},
                    message: {error : err}
                }
            )
        }else{
            res.status(500).json(
                {
                    status: 500,
                    data: {classId},
                    message: {error : err}
                }
            )
        }
    
    }
};

const adminAddClassHandler = async (req, res) => {

    const classInfo = req.body;
    
    if (!validateClass(classInfo)){
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
            const response = await dbAdminAddClass(classInfo);
            res.status(200).json(
                {
                    status: 200,
                    data: response,
                    message: {success : SUCCESS}
                }
            )
        }
        catch(err) {
            if (err === CLASS_ALREADY_EXISTS) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CLASS_ALREADY_EXISTS}
                    }
                )
            }
            else if (err === ERROR_INSERTING_CLASS){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : ERROR_INSERTING_CLASS}
                    }
                )
            }
            else if (err === TEACHER_DOES_NOT_EXIST){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : TEACHER_DOES_NOT_EXIST}
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
    getAllClassesHandler, getClassByIdHandler, adminAddClassHandler
}