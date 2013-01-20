# Description:
#   A way to know who's best !
#
# Commands:
#   hubot who's best ?

module.exports = (robot) ->
        robot.respond /who\'s best \?/i, (msg) ->
                msg.send "INVENIETIS IS DA BEST"
