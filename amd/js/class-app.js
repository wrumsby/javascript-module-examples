(function () {
	'use strict';


	require(['jquery', 'class'], function ($, Ticker) {
		var ticker = new Ticker(),
			list = $('#output'),
			item = $('<li/>');

		item.append(ticker.next());
		list.append(item);
	});

	require(['jquery', 'class'], function ($, Ticker) {
		var ticker = new Ticker(),
			list = $('#output'),
			item = $('<li/>');

		item.append(ticker.next());
		list.append(item);
	});
} ());
