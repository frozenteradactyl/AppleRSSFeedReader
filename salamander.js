/*
So here’s your challenge!
You can see on our site that we don’t sell any iPhone apps. It would be great if we did, but Apple doesn’t allow coupons so we simply can’t do it the same way we sell desktop software.
 
What apple does allow is developers to change the price of their iPhone app on a daily basis.
They also publish RSS feeds of all the apps here:
http://itunes.apple.com/rss
 
What we want is to have a page on BitsDuJour listing all the iPhone apps that have dropped their price in the last 24 hours.
 
Your challenge is to tell us how you would build it, using whatever technology you think would be best, and be as detailed as possible.
 
Deadline is Monday 22nd – please leave the subject line as-is in your reply.
 
Good luck! – and you probably guessed that we actually do want to build this, so your reply counts.
 
*/

"use strict"

var theJSONentry2 = [];
//var fs = require('fs');
//fs.createWriteStream('sample.txt', {start: 90, end: 99});
var outputFilename = 'the.json';
file = outputFilename.files[0];

function myFunction()
{
    alert("Hello World!");
}

function addtohist(var1, var2, var3)
{
    theJSONentry2.push({title: var1, ts: var2, price: var3});
    //fs.writeFile(outputFilename, JSON.stringify(theJSONentry2, null, 4), function(err) {
    //    if(err) {
    //	console.log(err);
    //    } else {
    //	console.log("JSON saved to ");
    //    }
    //});

}