/** @format */

// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");

const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

// const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async (req, res) => {
  const data = await Contact.find();

  console.log(data);
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
  const result = await Contact.create(req.body);

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
