var jsonQuery = require('json-query');

var context = {
    people: [
{name: 'Matt', country: 'NZ'},
{name: 'Pete', country: 'AU'}
  ]
}

    console.log(jsonQuery(['people[country=NZ]', {rootContext: context}]));