module.exports = (req, res, next) => {
  const user = req.headers.username;
  if (user === req.body.username) {
    next();
  } else {
    res.status(401).json({
      you: "Sorry this is not your tool!"
    });
  }
};
