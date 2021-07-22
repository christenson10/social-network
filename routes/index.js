const router = require('express').Router();
const userRoutes = require('./user-routes');
const pizzaRoutes = require('./api/comment-routes');
const htmlRoutes = require('./html/html-routes');

router.use('/users', userRoutes);
router.use('/comments', pizzaRoutes);
router.use('/', htmlRoutes);

module.exports = router;