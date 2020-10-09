const router = require("express").Router();

const {
     createUrl,
     getUrl
} = require("../controllers/shortUrl");

router.post("/create", createUrl);

router.get("/:shortUrl", getUrl)

module.exports = router;