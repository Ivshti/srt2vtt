var iconv = require("iconv-lite");
var charsetDetector = require("jschardet");

module.exports = {
  convertToUTF8: convertToUTF8
}

function convertToUTF8(buf, next) {

  var charset = charsetDetector.detect(buf).encoding;
  try { buf = iconv.decode(buf, charset).encode("utf8") } catch(e) { };

  next(null, buf);
}
