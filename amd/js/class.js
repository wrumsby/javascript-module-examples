define([], function () {
	function Ticker () {
		this.seed = 0;
	}

	Ticker.prototype = {
		next: function () {
			return this.seed++;
		}
	};

	return Ticker;
});