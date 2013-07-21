var FeedParser = require('feedparser'), request = require('request');
var fs = require('fs');
var jsonQuery = require('json-query');
var theJSONentry2 = {apps: []};
var outputFilename = 'the.json';
var oneone = "https://itunes.apple.com/us/rss/newpaidapplications/limit=300/xml";
var myRePr = /Price\:<\/b>\s[\$]\d+\.\d\d/;
var price = "";
var price2 = "";
var price3 = 0;
var date = "";
// 2013-07-19T18:53:41.000Z
var reggie = /\d{4}\-\d{2}\-\d{2}\w\d{2}\:\d{2}\:\d{2}\.\d+\w/;
var dateF;
var sock = "";

//this script populates the.json; this script should be run once every 24 hours around 17:00 EDT

request(oneone)
    .pipe(new FeedParser())
    .on('error', function(error) {
	    console.log("ERROR IN FEED");
	})
    .on('meta', function (meta) {
	    console.log("METADATA FEED");
	})
    .on('readable', function () {
	    // do something else, then do the next thing
	    var stream = this, item;
	    while (item = stream.read()) {
		//console.log('Got article: %s', item.title || item.description);
		price = item.description.match(myRePr);
		price2 = String(price).replace("Price:</b> $","");
		price3 = parseFloat(price2);
		date = item.date;
		//sock = Object.prototype.toString.call(date);
		//console.log(date);
		//console.log(sock);
		//dateF = new Date((+date[1]));
		theJSONentry2.apps.push({title: item.title, ts: item.date, price: price3});
	    
	    }
	    fs.writeFile(outputFilename, JSON.stringify(theJSONentry2, null, 4), function(err) {
		    if(err) {
			console.log(err);
		    } 
                    else {
			console.log("JSON SAVED to the.json");
		    }
	    })
     })