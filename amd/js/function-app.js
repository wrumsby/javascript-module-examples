(function () {
	'use strict';

	require(['jquery', 'function'], function ($, toUpperCase) {
		var el = $('#output'),
			html = toUpperCase(el.html());

		el.html(html);
	});
} ());