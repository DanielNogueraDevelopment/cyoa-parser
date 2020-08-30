function say(a) {
    console.log(a);
}

say("loading modules...");
var fs = require("fs");
var express = require("express");
var render = require("./render.js")
say("loading story.JSON...");
var storyFile = fs.readFileSync("./story.JSON");
say("Attempting to parse story.JSON information...");
var parsedStory;
try { parsedStory = JSON.parse(storyFile); } catch (e) { say("YO!  fatal json parse error here!!!  here is the error message bro:" + e); }
var s = parsedStory.story;
var meta = parsedStory.meta;
say("generating express routes...")
var app = express();
app.use(express.static(__dirname + '/public'));
app.get("/story/:index", function(req, res) {
    return res.send(render(s[req.params.index]))
})

say("initiating server on port 3000!")
app.listen(3000, function(error) { if (!error) { say("Server online!") } })