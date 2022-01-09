const express = require("express");
const fpBlogsRouter = express.Router();
const fpBlogs = require("../contents/frontpageBlogs");

fpBlogsRouter.post("/", (req, res) => {
    res.send(fpBlogs);
})

module.exports = fpBlogsRouter;