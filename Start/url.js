const url = require("url");

const adress = "http://theosimodel.herokuapp.com"

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl)