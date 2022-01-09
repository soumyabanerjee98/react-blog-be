const express = require("express");
const allBlogsRouter = express.Router();
const allBlogs = require("../contents/allBlogs");

allBlogsRouter.post("/",(req, res) => {
    console.log("accepted", req.body.currentPage);
    let pages = req.body.currentPage;
    res.status(200).send(allBlogs[pages]);
})

module.exports = allBlogsRouter;