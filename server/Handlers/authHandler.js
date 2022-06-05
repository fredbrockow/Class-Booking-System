const registeredUsers = require('../data/users.json');

const authHandler = async (req, res) => {
    
    const {username, pwd} = req.body;

    if(!username||!pwd) {

        return res.status(400).json({
            status: 400,
            data: req.body,
            message: "error: username and password are required"
        });
    };

    const userFound = registeredUsers.find(registeredUser => {
        return registeredUser.username === username
    });

   if (!userFound) {
        return res.status(401).json({
            status: 401,
            data: req.body,
            message: "error: unauthorized"
        });
    }

    // this is where you put the encryption part
    // const pwdMatch = await bcrypt.compare(pwd, userFound.password);

    const pwdMatch = userFound.password === pwd

    if (pwdMatch){
        //create a JWTs to use for the other routes that we want protected
        // a normal token
        // and a refresh Token

        const roles = Object.values(userFound.roles);

        return res.status(200).json({
            status: 200,
            data: {username :userFound.username, roles},
            message: "user loged in"
        })
    } else {
        return res.status(401).json({
            status: 401,
            data: req.body,
            message: "error: unauthorized"
        });
    }
};

module.exports = { authHandler };