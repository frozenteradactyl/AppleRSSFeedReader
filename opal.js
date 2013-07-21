var jsonQuery = require('json-query')

var context = {
    people: [
{name: 'Matt', country: 'NZ'},
{name: 'Pete', country: 'AU'}
  ]
}

var context2 = { 
    apps: [ 
{title: 'Action for Two - Philipp Imhof', ts: '2013-07-19T23:37:16.000Z', price: 0.99 },
{title: 'Action Z-Men Boy Heroes HD Full Version - Zen Capital Pty Ltd', ts: '2013-07-19T23:37:16.000Z', price: 2.99 },
{title: 'AddressMarks - храните закладки в адресной книге - Павел Маврин', ts: '2013-07-19T23:37:16.000Z', price: 0.99 },
{title: 'Advance Horoscope Pro - RTC Hubs Limited', ts: '2013-07-19T23:37:16.000Z', price: 0.99 }]}

    var context3 = { apps: 
		     [ { title: 'Action for Two - Philipp Imhof',
			 ts: '2013-07-19T23:37:16.000Z',
			 price: 0.99 },
    { title: 'Action Z-Men Boy Heroes HD Full Version - Zen Capital Pty Ltd',
      ts: '2013-07-19T23:37:16.000Z',
      price: 2.99 },
    { title: 'AddressMarks - храните закладки в адресной книге - Павел Маврин',
      ts: '2013-07-19T23:37:16.000Z',
      price: 0.99 },
    { title: 'Advance Horoscope Pro - RTC Hubs Limited',
      ts: '2013-07-19T23:37:16.000Z',
      price: 0.99 },
    { title: 'FunFx - Photo Editor with pro effects & filters plus fast camera & fx to share on facebook,flickr and dropbox - Entappie',
      ts: '2013-07-19T23:37:16.000Z',
      price: 0.99 } ] }


    console.log(jsonQuery('people[country=NZ].name', {
	rootContext: context
		    }).value);

    console.log(jsonQuery('apps[title=Action for Two - Philipp Imhof].price', {
	    rootContext: context3
		}).value);