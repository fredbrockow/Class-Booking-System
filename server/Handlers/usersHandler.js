const 
{
    DATA_NOT_FOUND, SUCCESS, BAD_DATA_FORMAT,
    CALENDAR_NO_CLASS_SLOT, CALENDAR_NO_MATCH_CLASS, CLASS_IS_FULL,
    ALREADY_REGISTER_IN_CLASS, NOT_REGISTERED_IN_CLASS
} 
= require("../configuration/errorMessages");

const { dbAdminGetUsers } = require('../dbCalls/dbAdminUsers');
const { dbUsersAddClass, dbUsersRemoveClass } = require('../dbCalls/dbUsers');
const { validateAddClass, validateRemoveClass } = require ('./handlers.utils.js')

const adminGetAllUsersHandler = async (req, res) => {
    try{
        const response = await dbAdminGetUsers();
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

const usersAddClass = async (req, res) => {

    const classInfo = req.body;
    
    if (!validateAddClass(classInfo)){
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
            const response = await dbUsersAddClass(classInfo);
            res.status(200).json(
                {
                    status: 200,
                    data: response,
                    message: {success : SUCCESS}
                }
            )
        }
        catch(err) {
            if (err === CALENDAR_NO_CLASS_SLOT) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_NO_CLASS_SLOT}
                    }
                )
            }
            else if (err === CALENDAR_NO_MATCH_CLASS){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_NO_MATCH_CLASS}
                    }
                )
            }
            else if (err === CLASS_IS_FULL){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CLASS_IS_FULL}
                    }
                )
            }
            else if (err === ALREADY_REGISTER_IN_CLASS){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : ALREADY_REGISTER_IN_CLASS}
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

const usersRemoveClass = async ( req, res ) => {
    const classInfo = req.body;

    if (!validateRemoveClass(classInfo)){
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
            const response = await dbUsersRemoveClass(classInfo);
            res.status(200).json(
                {
                    status: 200,
                    data: response,
                    message: {success : SUCCESS}
                }
            )
        }
        catch(err) {
            if (err === CALENDAR_NO_CLASS_SLOT) {
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_NO_CLASS_SLOT}
                    }
                )
            }
            else if (err === CALENDAR_NO_MATCH_CLASS){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : CALENDAR_NO_MATCH_CLASS}
                    }
                )
            }
            else if (err === NOT_REGISTERED_IN_CLASS){
                res.status(400).json(
                    {
                        status: 400,
                        data: req.body,
                        message: {error : NOT_REGISTERED_IN_CLASS}
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
};

module.exports = {
    adminGetAllUsersHandler, 
    usersAddClass, usersRemoveClass
}