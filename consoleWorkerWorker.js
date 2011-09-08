// consoleWorker, the worker side


(function(){
	this.console	= {};
	// for each console.* methods, bind it to the given .postMessage()
	var methods	= ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml"
			, "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
	// loop over all the methods
	for(var i = 0; i < methods.length; ++i){
		// bind this particular method methods
		console[methods[i]]	= function(){
			self.postMessage({
				// to mark this message as coming from consoleWorker
				type	: "_consoleWorker",
				data	: {
					// pass this method
					type	: methods[i],
					// pass all the arguments too
					data	: Array.prototype.slice.call(arguments)
				}
			});
		};
	}
}.bind(this))();
