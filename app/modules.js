exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
  	function Module(greeting, name) {
  		this.name = name;
  	  this.greeting = greeting;
  	  this.sayIt = () => {
  	  	return this.greeting + ', ' + this.name;
  	  };
  	}

  	return new Module(str1, str2);
  }
};
