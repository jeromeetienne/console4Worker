console4Worker is console.* API for WebWorkers.

WebWorkers are hard to debug. On top of that, console.* API is unavailable
in WebWorkers. It doesn't help. console4Worker tries to fill this gap.
See the [live demo]. You can find it in the examples/ directory.


# how does it work ?

a console.* object is declared in the worker. It intercepts all console.* calls and
pass them to the page thread. a direct approach.

# page side

To include the script, simply do

    <script src="console4Worker-page.js"></script>

Then in your message event listener, add the following line

    if( console4Worker.filterEvent(event) )	return;

So you should have something like

    worker.addEventListener('message', function(event){
        // filter this event if it is from console4Worker
        if( console4Worker.filterEvent(event) )	return;

        // ...
        // here handle your own events

    }, false);

# worker side

First you include the script with

    importScripts('console4Worker-worker.js');

Then you use console.* as you would normally do

