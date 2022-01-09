const express = require("express");
const app = express();
const cors = require("cors");
const signup = require("./api/signup");
const signin = require("./api/signin");
const allBlogs = require("./api/allBlogsApi");
const frontpageBlogs = require("./api/fpBlogsApi");
const highlights = require("./api/highlightsApi");


app.use(express.json());
app.use(cors());
app.use("/api/v1/signup", signup);
app.use("/api/v1/signin/", signin);
app.use("/api/v1/blogs", allBlogs);
app.use("/api/v1/home", frontpageBlogs);
app.use("/api/v1/highlights", highlights);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server Started", PORT);
})