const jwt = require('jsonwebtoken');
const jwtSecret = "test";

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[0];
        const decoded = jwt.verify(token,jwtSecret);
        req.userData = decoded;
        next();
    }catch (error){
        return res.status(401).json({
            message: 'Authentication failed'
        })
    }
}