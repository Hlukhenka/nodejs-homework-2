/** @format */

const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Contact.find({ owner });

  res.json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json({
    message: "Delete success",
  });
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.user);

  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  updateFavorite: ctrlWrapper(updateFavorite),
  removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
};
