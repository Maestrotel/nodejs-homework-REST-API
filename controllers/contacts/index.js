const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");
const removeContact = require("./removeContact");
const favoriteContacts = require("./favoriteContacts");
const paginateContacts = require("./paginateContacts");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateFavorite,
  removeContact,
  favoriteContacts,
  paginateContacts,
};
