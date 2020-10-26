exports.logInsert = req => {
  let sql = "INSERT INTO log (user_id, request, url ,created_on) VALUES (?,?,?,?)";
  return new Promise((resolve, reject) => {
    con.query(sql, [req.body.user_id, JSON.stringify(req.body), req.originalUrl, Date.now()], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.insertId);
      }
    });
  });
};

exports.logUpdate = (res, insertId, err = "") => {
  let sql = "UPDATE log SET response= ?, error=?, updated_on= ? WHERE log_id = ?";
  con.query(sql, [JSON.stringify(res),err,  Date.now(), insertId], (err, result) => {
    if (err) {
      return;
    } else {
      return;
    }
  });
};