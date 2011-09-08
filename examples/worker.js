importScripts('../console4Worker-worker.js');

console.log("Server says hi")

self.postMessage("foobar not from console.*");

