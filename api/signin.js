const express = require("express");
const signinRouter = express.Router();
const { allUsers } = require("./signup");

signinRouter.post("/",(req, res) => {
    let access = false;
    if(allUsers.length === 0){
        res.send("Please Sign Up");
        res.end();
        return;
    }
    else{
        allUsers.map((userData) => {
            if(userData.userEmail === req.body.email && userData.userPassword === req.body.password){
                userData.isLoggedIn = true;
                access = true;
                res.status(200).send("Logged In");
                res.end()
                return;
            }
        })
    }
    if (!access)
        res.send("Please check your Email and Password");
});

module.exports = signinRouter;