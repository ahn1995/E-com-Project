var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});router.get('/my-cart', function(req, res, next) {
  res.render('my-cart');
});router.get('/my-wishlist', function(req, res, next) {
  res.render('my-wishlist');
});router.get('/tour-detail', function(req, res, next) {
  res.render('tour-detail');
});router.get('/grid-view-2-column', function(req, res, next) {
  res.render('grid-view-2-column');
});

module.exports = router;
