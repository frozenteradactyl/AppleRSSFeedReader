var FeedParser = require('feedparser'), request = require('request');
var fs = require('fs');
var theJSONEntryNew = {apps: []};
var outputFilename = 'theNew.json';
var twoTwo = "https://itunes.apple.com/us/rss/newpaidapplications/limit=300/xml";
var myRePr = /Price\:<\/b>\s[\$]\d+\.\d\d/;
var price = "";
var price2 = "";
var price3 = 0;
var date = "";

//this parses the latest feed from Apple into theNew.json every 15 minutes for use by rose.js to
//compare to the.json

request(twoTwo)
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
                theJSONEntryNew.apps.push({title: item.title, ts: item.date, price: price3});

            }
            fs.writeFile(outputFilename, JSON.stringify(theJSONEntryNew, null, 4), function(err) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("JSON SAVED to theNew.json");
                    }
		})
		})
