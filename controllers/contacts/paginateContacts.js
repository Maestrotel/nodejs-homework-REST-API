const { Contact } = require("../../models/contact");

const paginate = require("mongoose-paginate");

const paginateContacts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 7;
  const options = {
    page,
    limit,
    sort: { author: 1 },
  };

  const result = await Contact.paginate({}, options);
  res.json(result);
};

module.exports = paginateContacts;
