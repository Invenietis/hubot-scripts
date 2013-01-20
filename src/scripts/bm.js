// Description:
//   Enjoy your day just a little more.
//
// Commands:
//   hubot show me bonjour madame - Show the last 'bonjour madame'.
//   hubot show me au revoir madame - Show the last au 'revoir madame'.
//   hubot show me bonjour mademoiselle - Show the last au 'bonjour mademoiselle'.
//
// Dependencies:
//   "cheerio": ">=0.10.5"

var sites = [
	{ url : 'http://www.bonjourmadame.fr/', selector : '.photo-panel img' },
	{ url : 'http://www.aurevoirmadame.fr/', selector : '.photo a img' },
	{ url : 'http://www.bonjourmademoiselle.fr/', selector : '.photo a img' }
];

var cheerio = require('cheerio');
module.exports = function(robot) {
	
	var processSite = function(site, msg){
		return msg.http(site.url).get()(function(err, res, body) {
			$ = cheerio.load(body);
			return msg.send($(site.selector).attr('src'));
		});
	};

	robot.respond(/show me bonjour madame/i, function(msg){
		return processSite(sites[0], msg);
	});
	robot.respond(/show me au revoir madame/i, function(msg){
		return processSite(sites[1], msg);
	});
	robot.respond(/show me bonjour mademoiselle/i, function(msg){
		return processSite(sites[2], msg);
	});
};

