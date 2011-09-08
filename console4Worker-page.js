// console4Worker, the page side
this.console4Worker	=  {}

/**
 * Filter message events for console4Worker
 * 
 * @param {MessageEvent} event the event from the 'message' event
 * @return false if the message is for console4Worker, false otherwise 
*/
console4Worker.filterEvent	= function(event){
	// sanity check - check the event
	console.assert(event);
	if( 'data' in event === false )		return false;
	if( typeof event.data !== 'object' )	return false;
	if( 'type' in event.data === false )	return false;
	// get data from the event
	var type	= event.data.type;
	var data	= event.data.data;
	if( type !== '_console4Worker' )	return false;
	// ok now the event is for console4Worker
	console[data.type].apply(console, data.data);
	// return true to notify the event has been filtered
	return true;
}
