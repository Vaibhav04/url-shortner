const router = require("express").Router();

router.get("/", async(req, res) => {
     const urls = await URL.find({});
     res.render("home", {urls});
})
module.exports = router;