const URL = require("../models/ShortUrl");

const createUrl = async (req, res) => {
     const {url} = req.body;
     await URL.create({original:url})
     res.redirect("/")
}

const getUrl = async (req, res) => {
     const short = req.params.shortUrl;
     const url = await URL.findOne({shortUrl: short})
     if(short === null) res.status(404);
     await URL.findByIdAndUpdate(url._id, {$inc: {clicks: 1}});
     res.redirect(url.original);
}

module.exports = {
     createUrl,
     getUrl
}