const Link = require('../models/Link');

const getLinks = async (req, res) => {
  const links = await Link.find({ user: req.user.id }).sort({ order: 1 });
  res.json(links);
};

const createLink = async (req, res) => {
  const { title, url, order, visible } = req.body;
  const link = await Link.create({ user: req.user.id, title, url, order, visible });
  res.status(201).json(link);
};

const updateLink = async (req, res) => {
  const { id } = req.params;
  const { title, url, order, visible } = req.body;
  const link = await Link.findOneAndUpdate(
    { _id: id, user: req.user.id },
    { title, url, order, visible },
    { new: true }
  );
  res.json(link);
};

const deleteLink = async (req, res) => {
  const { id } = req.params;
  await Link.findOneAndDelete({ _id: id, user: req.user.id });
  res.status(204).send();
};

module.exports = { getLinks, createLink, updateLink, deleteLink };
