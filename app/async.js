exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	console.log(value);

  	return function() {
  		this.then = function(callback) {
  			callback(value);
  		}
  	}
  },

  manipulateRemoteData: function(url) {
  	console.log(url);
  }
};
