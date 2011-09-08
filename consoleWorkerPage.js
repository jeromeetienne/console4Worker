// consoleWorker, the page side
this.consoleWorker	=  {}

/**
 * return false if the message isnt for consoleWorker
 * 
 * @param {MessageEvent} event the event from the 'message' event
*/
consoleWorker.filterEvent	= function(event){
	// sanity check - check the event
	console.assert(event);
	if( 'data' in event === false )		return false;
	if( typeof event.data !== 'object' )	return false;
	if( 'type' in event.data === false )	return false;
	// get data from the event
	var type	= event.data.type;
	var data	= event.data.data;
	if( type !== '_consoleWorker' )	return false;
	// ok now the event is for consoleWorker
	console[data.type].apply(console, data.data);
	// return true to notify the event has been filtered
	return true;
}

/**
 * The callback to handle event
 * @param {MessageEvent} event the event from the 'message' event
*/
consoleWorker._callback	= function(event){
	console.log("consoleWorker.bind():", event.data, event)
	// 
	if( consoleWorker.filterEvent(event) )	return;
}

/**
 * make it bind a given worker
 * @param {Worker} Worker the webworker to bind from now on
*/
consoleWorker.bind	= function(worker){
	worker.addEventListener('message', this._callback, false);
}

/**
 * make it unbind a given worker
 * @param {Worker} Worker the webworker to no more bind
*/
consoleWorker.unbind	= function(worker){
	worker.removeEventListener('message', this._callback, false);
}
