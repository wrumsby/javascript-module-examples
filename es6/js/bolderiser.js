import { $ } from 'dollar';

Bolderiser = function () {
};

Bolderiser.prototype = {
	embolden: function (id) {
		var el = $.byId(id);

		el.style.fontWeight = 'bold';
	}
};

export Bolderiser;
