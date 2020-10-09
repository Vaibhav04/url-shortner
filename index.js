const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
     DB_PATH,
     PORT
} = require("./config")


app.use(express.urlencoded());
const homeRoutes = require("./routes/home");
const urlRoutes = require("./routes/shortUrl");

app.use("/", homeRoutes);
app.use("/url", urlRoutes);

app.set("view engine", "ejs");

app.listen(PORT, async() => {
     try {
          await mongoose.connect(DB_PATH)
          console.log("connected to db and server");
     } catch (error) {
          console.log(error);
     }
})
