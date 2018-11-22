'use strict';
const config = require('./config');

const Airtable = require('airtable');
const base = new Airtable({apiKey: config.airtableApiKey})
      .base(config.airtableBase);

function listSpeakers(base, limit) {
    base('Speakers').select({
	// Selecting the first 3 records in Grid view:
	maxRecords: limit,
	view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
	// This function (`page`) will get called for each page of records.
	records.forEach(function(record) {
	    console.log('Retrieved', record.get('First Name'));
	});

	// To fetch the next page of records, call `fetchNextPage`.
	// If there are more records, `page` will get called again.
	// If there are no more records, `done` will get called.
	fetchNextPage();

    }, function done(err) {
	if (err) { console.error(err); return; }
    });
}


// [start exports]
module.exports = {
    base,
    listSpeakers
};
