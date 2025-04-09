const jwt = require("jsonwebtoken");
const User = require("../models/user");
const user = require("../models/user");

const protect = async (req, res, next)=>{
    const token = req.header.authorization?.split("")[1];
    if(!token) return res.status(401).json({message: "user is not authorized, token missing"});

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.User = await User.findById(decoded.id).select("-password");
        next();
    }catch(err){
        res.status(401).json({msg:"not authorized user , token invalid"});
    }
};

const admin =  (req,res,next)=>{
    if(req.user && req.user.role === "admin"){
        next();
    }else{
        res.status(401).json({msg:"not authorized user"});
    };

};

module.exports = {protect, admin};