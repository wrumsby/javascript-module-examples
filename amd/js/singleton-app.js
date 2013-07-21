(function () {
	'use strict';

	require(['jquery', 'singleton'], function ($, ticker) {
		var list = $('#output'),
			item = $('<li/>');

		item.append(ticker.next());
		list.append(item);
	});

	require(['jquery', 'singleton'], function ($, ticker) {
		var list = $('#output'),
			item = $('<li/>');

		item.append(ticker.next());
		list.append(item);
	});
} ());
