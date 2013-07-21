(function () {
	var i = 0;

	YUI.add('singleton', function (Y) {
		'use strict';

		Y.Singleton = {
			next: function () {
				return i++;
			}
		};
	}, '0.0.0', {
		requires: []
	});
} ());
