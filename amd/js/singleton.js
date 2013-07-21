define([], function () {
	'use strict';

	var i = 0;

	return {
		next: function () {
			return i++;
		}
	};
});