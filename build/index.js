"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send({
    name: "hello how are you? and you"
  });
});
app.listen("4000", function () {
  return console.log("server on http://localhost:4000");
});