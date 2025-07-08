const User = require('../models/User');
const Link = require('../models/Link');

const getPublicProfile = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const links = await Link.find({ user: user._id, visible: true }).sort({ order: 1 });

  res.json({
    username: user.username,
    profilePicture: user.profilePicture,
    bio: user.bio,
    links
  });
};

module.exports = { getPublicProfile };
