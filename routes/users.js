const { getConnection } = require("../database")
const router = require("express").Router()
const jwt = require("jsonwebtoken")
const parseToken = require("../utils/parseToken");

router.get("/",verify,async(req,res)=>{
    const conn = await getConnection();
    const users = await conn.query("SELECT * FROM users").map((usuario)=>{
        const buffer = Buffer.from(usuario.avatar)
        const base64 = buffer.toString("base64");
        return {username:usuario.username,email:usuario.email,avatar:`data:image/png;base64,${base64}`}
    })
    res.send(users)
})

function verify(req,res,next){
    const auth = parseToken(req.headers["authorization"]);
    if(auth && jwt.verify(auth,"SECRET")){
        req.token = auth;
        res.status(200)
        next();
    }else res.status(403);
}
module.exports = router;