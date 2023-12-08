/** @format */

const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { validateBody, isValid, authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValid, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValid,
  validateBody(schemas.favoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", authenticate, isValid, ctrl.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValid,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
