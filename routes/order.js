const express = require("express");
const router = express.Router();
const CurrencyConvertor = require("../middlewares/currency-convertor");
const Order = require("../controllers/order");

router.post("/order", CurrencyConvertor, Order.PlaceOrder);

module.exports = router;
