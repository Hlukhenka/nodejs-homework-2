/** @format */

const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { validateBody, isValid } = require("../../middlewares");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValid, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.patch(
  "/:contactId/favorite",
  isValid,
  validateBody(schemas.favoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", isValid, ctrl.removeContact);

router.put(
  "/:contactId",
  isValid,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;
