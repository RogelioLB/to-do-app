const router = require("express").Router();
const {getConnection} = require("../database")
const path = require("path");
const jwt = require("jsonwebtoken")
const parseToken = require("../utils/parseToken");
const parseUser = require("../utils/parseUser");

router.get("/things",async(req,res)=>{
    try{
        const conn = await getConnection();
        let result = await conn.query("SELECT `states`.`state`, `things`.*,`users`.`username`,`users`.`avatar` FROM things LEFT JOIN states ON `things`.`id_state` = `states`.`id` LEFT JOIN users ON `things`.`id_user` = `users`.`id`");
        result = await Promise.all(result.map(async(thing)=>{
            console.log(thing)
            const images = await conn.query("SELECT path FROM images WHERE images.id_thing = "+thing.id).map((image)=>{
                console.log(image)
                const buffer = Buffer.from(image.path)
                const base64 = buffer.toString("base64");
                return {path:"data:image/png;base64,"+base64};
            })
            return {images,title:thing.title,description:thing.description,created_at:thing.created_at,state:thing.state,user:parseUser([{username:thing.username,avatar:thing.avatar}])}
        }));
        res.json(result)
    }catch(err){
        console.log(err)
    }
})

router.post("/things",verify,async(req,res)=>{
    const conn = await getConnection();
    const user = jwt.decode(req.token);
    const {title,description,state} = req.body;
    const files = Array.isArray(req.files?.files) ? req.files?.files : Array(req.files?.files);
    console.log(Boolean(files.length))
    const returnedThing = await conn.query("INSERT INTO things SET ?",{title,description,id_state:state,id_user:user.id});
    if(files.length){
        files.forEach(async(file)=>{
            const dirname = path.resolve(__dirname,"../images/files/"+file.name);
            file.mv(dirname)
            await conn.query("INSERT INTO images SET ?",{id_thing:`${returnedThing.insertId}`,path:file.data});
        })
    }
    res.send("Uploaded sucessfully.");
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