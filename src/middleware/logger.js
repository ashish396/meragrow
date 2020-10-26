var Constants = require("../utils/constants");
var logs = require("../utils/logger");

exports.logValidate = (req, res, next) => {
    if (Constants.EXCLUDED_URL.indexOf(req.url.split("/")[3]) == -1) {
        try {
            logs.logInsert(req).then(id => {
                req["log_id"] = id;
                res["log_id"] = id;
                next();
            });
        } catch (e) {
            next()
        }  
    } else {
        next();
    }
};