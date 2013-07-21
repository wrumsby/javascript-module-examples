define(['jquery'], function ($) {
	'use strict';

	var Bolderiser = function () {
	};

	Bolderiser.prototype = {
		embolden: function (el) {
			var $el = $(el);

			$el.css('font-weight', 'bold');
		}
	};

	return Bolderiser;
});
