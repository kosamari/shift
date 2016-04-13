importScripts('./lib/grafi.js')

self.onmessage = function (message) {
  var processed = grafi.blur(message.data)
  self.postMessage(processed, [processed.data.buffer])
}