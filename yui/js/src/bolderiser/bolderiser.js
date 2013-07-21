YUI.add('bolderiser', function (Y) {
	'use strict';

	var Bolderiser = function () {
	};

	Bolderiser.prototype = {
		embolden: function (el) {
			var node = new Y.one(el);

			node.setStyle('font-weight', 'bold');
		}
	};

	Y.Bolderiser = Bolderiser;
}, '0.0.1', {
	requires: ['node-code', 'node-style']
});