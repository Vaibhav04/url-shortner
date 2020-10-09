const URL = require("../models/ShortUrl");

const {
     getUrls
} = require("../controllers/shortUrl");

const getUrls = async(req, res) => {
     const urls = await URL.find({});
     res.render("home", {urls});
}

module.exports = getUrls;