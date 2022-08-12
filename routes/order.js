const express = require("express");
const router = express.Router();
const CurrencyMiddleware = require("../middlewares/currency-convertor");
const Order = require("../controllers/order");

router.post("/order", CurrencyMiddleware.ConvertCurrency, Order.PlaceOrder);
router.get("/orders", Order.FetchOrders);

module.exports = router;
