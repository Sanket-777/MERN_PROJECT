const express = require("express");

const app = express();
const port = 4000;


app.get("/",(req,res)=>{
    return res.send("You are on Login Page");
});
const isadmin = (req,res,next)=>{
    console.log("Isadmin is Running");
    next();
}
const admin = (req,res)=>{
    return res.send("this is admin");
}
const isloggedin = (req,res,next)=>{
    console.log("IsLogged in is running");
    next();
}
app.get("/admin",isloggedin,isadmin,admin);
app.get("/signout",(req,res)=>{
    return res.send("You are going to signout");
});

app.listen(port,()=>{
    console.log("Server is up and Running....");
});
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })