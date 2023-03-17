const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.listContacts));

router.get("/favorite", authenticate, ctrlWrapper(ctrl.favoriteContacts));

router.get("/paginate", authenticate, ctrlWrapper(ctrl.paginateContacts));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeContact));

module.exports = router;
