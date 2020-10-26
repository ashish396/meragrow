var jwt = require("jsonwebtoken");
var Constants = require("../utils/constants");
var response = require("../utils/response");
var crypto = require("crypto");

exports.createToken = content => {
  var token = jwt.sign(content, "h5mAwdtyeLb09tU7BhslaG81Z3ZYkHF3HA03PXRUUWHEHH4H10", { expiresIn: "12h" });
  return token;
};

exports.verifyToken = (req, res, next) => {
  if (Constants.EXCLUDED_URL.indexOf(req.url.split("/")[3]) == -1) {
    try {
      var verify = jwt.verify(req.headers.authorization.split(" ")[1], "ThisIsSomethingThatIMustHideFromOthers");
      if (verify) {
        let sql = "SELECT token from user WHERE user_id=?";
        con.query(sql, [verify.user_id], (err, result) => {
          if (err) {
            response.onError(res, Constants.Strings.ERROR, 404, JSON.stringify(err));
          } else if (result.length === 0) {
            response.onError(res, Constants.Strings.TOKEN_EXPIRED, 401);
          } else {
            if (!!result[0].token) {
              next();
            } else {
              response.onError(res, Constants.Strings.TOKEN_EXPIRED, 401);
            }
          }
        });
      }
    } catch (e) {
      response.onError(res, Constants.Strings.TOKEN_EXPIRED, 401, JSON.stringify(e));
    }
  } else {
    next();
  }
};

