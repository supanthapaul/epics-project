const moment = require('moment');

function formatMessage(from, text) {
  return {
    from,
    text,
    time: moment().format('h:mm a'),
		isUserMessage: false
  };
}

module.exports = formatMessage;