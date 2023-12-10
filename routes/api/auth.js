/** @format */

const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const {
  validateBody,
  authenticate,
  upload,
  validateImageUpload,
} = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  validateImageUpload,
  ctrl.updateAvatar
);

module.exports = router;
