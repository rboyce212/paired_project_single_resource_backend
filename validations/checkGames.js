const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const banned = req.body.is_banned;
  if (typeof banned === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "is_banned must be type of boolean" });
  }
};

module.exports = { checkName, checkBoolean };
