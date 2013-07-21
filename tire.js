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

var absPath = "file:///Users/frozenteradactyl/Documents/Web_development/Programming/javascript/bitsdujour/theHTML.txt"; 
var pathFS = "/Users/frozenteradactyl/Documents/Web_development/Programming/javascript/bitsdujour/theHTML.html";
var pathURL = "http://theHTML.html";
var finalPath = "http://192.168.1.2:8000/theHtml.html";

function myFunction()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp=new XMLHttpRequest();
	}
    else
	{// code for IE6, IE5
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
    
    xmlhttp.open('GET', finalPath, false);
    xmlhttp.send();
    var topaz = xmlhttp.responseText;

    //html.body.innerHTML;
    //var txt = document.open('HTML.txt');
    //alert(txt);
    //var html = "<p>test</p>";
    //var cat = Object.prototype.toString.call(html1);
    //document.getElementById("feed").innerHTML= "Testing";
    return topaz;
}