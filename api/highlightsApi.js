const express = require("express");
const highlightRouter = express.Router();
const highlights = require("../contents/highlights")

highlightRouter.post("/", (req, res) => {
    res.send(highlights);
})

module.exports = highlightRouter;