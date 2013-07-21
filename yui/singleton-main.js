(function () {
	'use strict';

	YUI.applyConfig({
		filter: 'raw',

		modules: {
			singleton: {
				type: 'js',
				base: './js/src/',
				requires: []
			}
		}
	});

	YUI().use(['node-base', 'singleton'], function (Y) {
		'use strict';

		Y.one('#output').setHTML(Y.Singleton.next());
	});

	YUI().use(['node-base', 'singleton'], function (Y) {
		'use strict';

		Y.one('#output').setHTML(Y.Singleton.next());
	});
} ());