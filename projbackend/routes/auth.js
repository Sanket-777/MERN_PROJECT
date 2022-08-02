const { Router } = require("express");
const express = require("express");
const router = express.Router();

router.get("/signout",(req,res)=>{
    res.send("User Sign-Out");
})

module.exports  = router;
