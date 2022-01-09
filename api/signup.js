const express = require("express");
const signupRouter = express.Router();
let allUsers = [];

signupRouter.post("/",(req, res) => {
    const newUser = { ...req.body, isLoggedIn: false };
    if (allUsers.length > 0){
        allUsers.map((userData) => {
            if (userData.userEmail === req.body.userEmail) {
                res.send("Existing User");
                res.end();
                return;
            }
        })
    }
    else {
        registerdUsers.push(newUser);
        res.send("Registered");
        res.end();
    }
});

module.exports = { signupRouter, allUsers };