var dollar = {
	byId: function(id) {
		return document.getElementById(id);
	},

	bySelector: function(selector) {
		return document.querySelectorAll(selector);
	}
};

export dollar;
