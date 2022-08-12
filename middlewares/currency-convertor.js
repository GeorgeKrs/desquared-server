// const https = require("https");
const fetch = require("node-fetch");
const CURRENCY = require("../constants/currency_categories");

exports.ConvertCurrency = (req, res, next) => {
  res.locals.orderData = req.body;

  if (res.locals.orderData.currency === CURRENCY.CATEGORIES.EUR) {
    res.locals.orderData.totalCost_OtherCurrency =
      res.locals.orderData.totalCost_EUR;
    return next(); // No need for currency convert
  }

  let requestOptions = {
    headers: { apikey: process.env.CURRENCY_CONVERTER_API_KEY },
  };

  fetch(
    `https://api.apilayer.com/fixer/convert?to=${res.locals.orderData.currency}&from=${CURRENCY.CATEGORIES.EUR}&amount=${res.locals.orderData.totalCost_EUR}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      let tempCost;
      tempCost = data.info.rate * res.locals.orderData.totalCost_EUR;
      tempCost = Math.round(tempCost * 100) / 100;
      res.locals.orderData.totalCost_OtherCurrency = tempCost;

      next();
    })
    .catch((err) => {
      res.sendStatus(500);
      throw err;
    });
};
