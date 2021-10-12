const { getConnection } = require("../database")
const router = require("express").Router()
const jwt = require("jsonwebtoken")
const parseToken = require("../utils/parseToken");

router.get("/",verify,async(req,res)=>{
    const conn = await getConnection();
    const {id} = jwt.decode(req.token);
    const users = await conn.query(`SELECT * FROM users WHERE users.id = ${id}`).map((usuario)=>{
        if(usuario.avatar){
            const buffer = Buffer.from(usuario.avatar)
            const base64 = buffer.toString("base64");
            return {username:usuario.username,email:usuario.email,avatar:`data:image/png;base64,${base64}`}
        }else return {username:usuario.username,email:usuario.email}
    })
    res.send(users)
})

function verify(req,res,next){
    const auth = parseToken(req.headers["authorization"]);
    req.token = auth;
    if(auth && jwt.verify(auth,"SECRET")){
        req.token = auth;
        res.status(200)
        next();
    }else res.status(403);
}
module.exports = router;