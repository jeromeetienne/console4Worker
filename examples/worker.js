importScripts('../console4Worker-worker.js');

console.log("Server says hi")

console.assert('something true', "wow");

console.assert('', "wow");

self.postMessage("foobar not from console.*");

