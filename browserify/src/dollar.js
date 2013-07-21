module.exports = {
	byId: function(id) {
		return document.getElementById(id);
	},

	bySelector: function(selector) {
		return document.querySelectorAll(selector);
	}
};
