/* ConspiraCat QR decoding worker. Uses jsQR (Apache License 2.0, see vendor/LICENSE-jsQR.txt). */
importScripts('vendor/jsQR.js');
self.onmessage = function (e) {
  var d = e.data, r = null;
  try { r = jsQR(new Uint8ClampedArray(d.data), d.w, d.h, { inversionAttempts: d.invert ? 'attemptBoth' : 'dontInvert' }); } catch (err) { r = null; }
  self.postMessage({ text: r ? r.data : null });
};
