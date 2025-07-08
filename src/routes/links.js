const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const {
  getLinks,
  createLink,
  updateLink,
  deleteLink
} = require('../controllers/linkController');

router.use(protect);

router.get('/', getLinks);
router.post('/', createLink);
router.put('/:id', updateLink);
router.delete('/:id', deleteLink);

module.exports = router;
