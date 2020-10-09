const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require("shortid");

const urlSchema = new Schema({
     original: {
          type: 'String',
          required: [true, "Url is required"],
          trim: true
     },
     shortUrl: {
          type: 'String',
          default: shortId.generate
     },
     clicks: {
          type: 'Number',
          default:0
     }
});

module.exports = mongoose.model('ShortUrl', urlSchema);
