// console4Worker, the worker side

(function(){
	this.console	= {};
	// define all the methodes from console.*
	var methods	= ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
		"group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
	// go thru all methods
	for(var i = 0; i < methods.length; ++i){
		(function(method){
			// define this method in particular
			console[method]	= function(){
				self.postMessage({
					// mark this message as coming from console4Worker
					type	: "_console4Worker",
					data	: {
						// give it the function
						type	: method,
						data	: Array.prototype.slice.call(arguments)
					}
				});
			};
		})(methods[i]);		
	}
}.bind(this))();
