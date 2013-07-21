Ext.define('My.Bolderiser', {
	requires: ['Ext.Element'],

	embolden: function (el) {
		var element = Ext.get(el);

		element.setStyle('font-weight', 'bold');
	}
});