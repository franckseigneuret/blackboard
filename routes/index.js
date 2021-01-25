var express = require('express');
var router = express.Router();

const Articles = require('../models/articles')
const Orders = require('../models/orders')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  let articlesList = await Articles.find()
  res.render('catalog', { articlesList });
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  let ordersList = await Orders.find()
  res.render('orders-list', {ordersList});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  // const order = await Orders.findById(req.query.id)
  // console.log('order == ', order)

  
  const currentOrder = await Orders.findById(req.query.id).populate('articles').exec();
  console.log('currentOrder == ', currentOrder)
  res.render('order', { currentOrder });
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
