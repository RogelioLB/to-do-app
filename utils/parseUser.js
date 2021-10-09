module.exports = parseUser = (user) =>{
    const userParded = JSON.parse(JSON.stringify(user[0]));
    const buffer = Buffer.from(userParded.avatar)
    const base64 = buffer.toString("base64");
    return {id:userParded.id,username:userParded.username,email:userParded.email,avatar:`data:image/png;base64,${base64}`,pass:userParded.pass}
}