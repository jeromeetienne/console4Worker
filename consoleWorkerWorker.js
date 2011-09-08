// consoleWorker, the worker side

(function(){
	this.console		= {};
	var names	= ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml"
			, "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
	for(var i = 0; i < names.length; ++i){
		(function(name){
			console[name]	= function(){
				//if( name === "log" )	return;
				self.postMessage({
					type	: "_consoleWorker",
					data	: {
						type	: name,
						data	: Array.prototype.slice.call(arguments)
					}
				});
			};
		})(names[i]);		
	}
}.bind(this))();
