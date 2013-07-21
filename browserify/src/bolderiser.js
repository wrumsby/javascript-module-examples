var $ = require('./dollar.js');

var Bolderiser = function () {
};

Bolderiser.prototype = {
	embolden: function (id) {
		var el = $.byId(id);

		el.style.fontWeight = 'bold';
	}
};

module.exports = Bolderiser;