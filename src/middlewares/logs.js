const logRouters = async (req, res, next) => {
  console.log("[REQ] --->", req.path);
  next();
};

module.exports = { logRouters };
