var jsonQuery = require('json-query');
var fs = require('fs');
var file = __dirname + '/the.json';
var file2 = __dirname + '/theNew.json';
var myJSON = require(file);
var myNewJSON = require(file2);
var sock;
var tit1 = [];
var count1 = 0;
var tit2 = [];
var count2 = 0;
var tit3 = "";
var hits = 0;
var theJSONentry3 = {apps: []};
var outputFileName = __dirname + "/theHits.json";
var htmlOutputFileName = __dirname + "/theHTML.html";
var htmlString = "<table>";

/*    console.log(jsonQuery('people[country=NZ].name', {
	    rootContext: context
	    }).value); */

/*
fs.readFile(file, 'utf8', function (err, data) {
	if (err) {
	    console.log('Error: ' + err);
	    return;
	}
 
	data = JSON.parse(data);
	myJSON = data;
	console.log(myJSON); //dir?
});
*/

function getPrice(nat) {
    var qry = 'apps[title=' + nat + '].price';
    sock = jsonQuery(qry, {
    rootContext: myJSON
    }).value;
    return sock;
}

function getPrice2(nat) {
    var qry = 'apps[title=' + nat + '].price';
    sock = jsonQuery(qry, {
	    rootContext: myNewJSON
	}).value;
    return sock;
}

//console.log(jsonQuery('apps[price=1.99].title', {rootContext: myJSON}).value);
//var tiger = jsonQuery('.price', {rootContext: myJSON}).value;
//console.log(tiger);

//sock = jsonQuery('apps[price=0.99].title', {
//            rootContext: myJSON
//		}).value;

//console.log(sock);

//console.log(Object.prototype.toString.apply(sock));

//this one works
//console.log(jsonQuery('apps[price=0.99].title', { rootContext: myNewJSON }).value);


//console.log(jsonQuery('people[country=NZ].name', {
//	    rootContext: myJSON
//		}).value);

myJSON.apps.forEach(function(apps){
	tit1.push(jsonQuery('.title', {rootContext: myJSON, context: apps}).value);
	count1 += 1;
})

myNewJSON.apps.forEach(function(apps){
	tit2.push(jsonQuery('.title', {rootContext: myNewJSON, context: apps}).value);
	count2 += 1;
})

for(var i = 0; i < tit2.length-1; i++) {
    for(var j = 0; j < tit1.length-1; j++) {
	if(tit2[i] == tit1[j]) {
	    htmlString = htmlString + "<tr><td>";
	    if(getPrice2(tit2[i]) != getPrice(tit1[j])) {
		theJSONentry3.apps.push({title: tit2[i], price: getPrice2(tit2[i])});
		htmlString = htmlString + "<tc><td>" + tit2[i] + "</td><td>" + getPrice2(tit2[i]) + "</td></tc>";
		hits++;
	    }
	    htmlString = htmlString + "</td></tr>";
	}
    }
}
htmlString = htmlString + "</table>";

fs.writeFile(outputFileName, JSON.stringify(theJSONentry3, null, 4), function(err) {
	if(err) {
	    console.log(err);
	}
	else {
	    console.log("JSON SAVED to theHits.json");
	}
    })

fs.writeFile(htmlOutputFileName, htmlString, function(err) {
	if(err) {
	    console.log(err);
	}
	else {
	    console.log("HTML SAVED to theHTML.html");
	}
    })



//console.log(getPrice("Transfusionen pocketcards - Börm Bruckmeier Verlag GmbH")); //should be $4.99

//console.log(tit2);
console.log(hits);