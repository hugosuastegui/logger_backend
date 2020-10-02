const passport = require("passport");

require("./serializers");
require("./localStrategy");
require("./googleStrategy");

module.exports = passport;
