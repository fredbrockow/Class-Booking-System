const {DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR} 
= require("../configuration/errorMessages");

const { dbGetAllClasses, dbGetClassById } = require('../dbCalls/dbGetClass');
const { containsOnlyNumbers } = require('./handlers.utils');

const getAllClassesHandler = async (req, res) => {
    
    try{
        const response = await dbGetAllClasses();
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

const getClassByIdHandler = async (req, res) => {
    
    const classId = req.params.classId;

    if (!containsOnlyNumbers(classId)){
        res.status(404).json(
            {
                status: 404,
                data: {classId},
                message: {error : DATA_NOT_FOUND}
            }
        )
        return;
    }

    try {
        const response = await dbGetClassById(parseInt(classId));
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

module.exports = {
    getAllClassesHandler, getClassByIdHandler
}