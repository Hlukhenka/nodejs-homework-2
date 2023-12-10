/** @format */

const validateImageUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "File not attached" });
  }

  next();
};

module.exports = validateImageUpload;
