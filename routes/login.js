const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getConnection } = require("../database");
const path = require("path");
const key = "SECRET"

router.post("/register",async(req,res)=>{
    const conn = await getConnection();
    const {username,password,email} = req.body;
    const image = req.files?.avatar;
    console.log(req.body)
    const result = await conn.query(`SELECT email FROM users WHERE email = '${email}'`);
    if(result.length){
        return res.send({message:"Email already registered"})
    }
    const pass = bcrypt.hashSync(password,12);
    let dir;
    if(image){
        dir = path.resolve(__dirname,"../images/avatar/"+image.name);
        image.mv(dir)
    }
    console.log(image)
    await conn.query("INSERT INTO users SET ?",image ? {username,pass,email,avatar:`/avatar/${image.name}`} : {username,pass,email});
    const user = await conn.query(`SELECT email,username,avatar,pass,id FROM users WHERE email = '${email}'`);
    const token = jwt.sign(parseUser(user),key)
    res.json({message:"Register Succesfully.",token});
});

router.post("/",async(req,res)=>{
    const conn = await getConnection();
    const {email,password} = req.body;
    const user = await conn.query(`SELECT email,username,avatar,pass,id FROM users WHERE email = '${email}'`);
    if(!user.length) return res.json({message:"No hay una cuenta registrada con este email."})
    const userParsed = parseUser(user)
    if(!bcrypt.compareSync(password,userParsed.pass)) return res.json({message:"La contraseña es incorrecta."});
    const token = jwt.sign(userParsed,key);
    res.json({message:"Logged succesfully",token})
})



const parseUser = (user) =>JSON.parse(JSON.stringify(user[0]));

module.exports = router;