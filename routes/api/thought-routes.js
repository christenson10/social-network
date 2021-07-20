const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thought-controller');

// /api/users
router
  .route('/')
  .get(getAllThoughts)
  .post(createThoughts);

// /api/users/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;