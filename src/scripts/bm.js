// Description:
//   Enjoy your day just a little more.
//
// Commands:
//   hubot show me the bonjour madame- Make sure hubot still knows the rules.
//
// Dependencies:
//   "cheerio": ">=0.10.5"
var cheerio = require('cheerio');
module.exports = function(robot) {
	
	var handleQuery = function(msg){
		return msg.http("http://www.bonjourmadame.fr/").get()(function(err, res, body) {
			$ = cheerio.load(body);
			return msg.send($('.photo-panel img').attr('src'));
		});
	};

	return robot.respond(/show me bonjour madame/i, handleQuery)
};

