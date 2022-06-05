const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req?.roles){
            return res.status(401).json({
                status: 401,
                data: req.body,
                message: "error: unauthorized"
            });
        }
    
        const arrRoles = [...allowedRoles];

        const result = req.roles
        .map ((role) => {
                return arrRoles.includes(role);
            })
        .find(element => element === true);

        if(!result){
            return res.status(401).json({
                status: 401,
                data: req.body,
                message: "error: unauthorized"
            });
        }
        next();
    }
}

module.exports = verifyRoles;