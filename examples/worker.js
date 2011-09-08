importScripts('../consoleWorkerWorker.js');

console.log("Server says hi")

self.postMessage("foobar not from console.*");

