const registeredUsers = require('../data/users.json');
const {DATA_NOT_FOUND, SUCCESS, DATABASE_GENERIC_ERROR} 
= require("../configuration/errorMessages");

const {dbAuthUserByUsername} = require('../dbCalls/dbGetUsers');

const authHandler = async (req, res) => {
    
    const {username, pwd} = req.body;

    if(!username||!pwd) {

        return res.status(400).json({
            status: 400,
            data: {},
            message: "error: username and password are required"
        });
    };

    try{
        const userFound = await dbAuthUserByUsername (username);

        const pwdMatch = userFound.password === pwd

        if (pwdMatch){
            //create a JWTs to use for the other routes that we want protected
            // a normal token
            // and a refresh Token
    
            const {password, ...safeNoPwdUser} = userFound;
    
            return res.status(200).json({
                status: 200,
                data: safeNoPwdUser,
                message: "user loged in"
            })
        } else {
            return res.status(401).json({
                status: 401,
                data: {},
                message: "error: unauthorized"
            });
        }

    }
    catch (err) {
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

module.exports = { authHandler };