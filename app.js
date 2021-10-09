const express = require("express");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload")
const app = express();

require("./database");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"./images")))
app.use(express.static(path.resolve(__dirname,"./to-do-app/build")));

app.set("port",process.env.PORT || 3000);

app.use("/api",require("./routes/things"));
app.use("/users",require("./routes/users"));
app.use("/api/login",require("./routes/login"));

app.get("/*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./to-do-app/build/index.html"))
})

app.listen(app.get("port"),()=>console.log(`Listen in port ${app.get("port")}`));