const https = require("https");
currency_categories = require("../constants/currency_categories.js");
const CURRENCY_CONVERTER_API_KEY = "5Io9mi3wLM1v6ujKFq5YBNm9f2KEKEdo";

module.exports = (req, res, next) => {
  const orderData = req.body;

  if (orderData.currency === currency_categories.EUR) {
    return next(); // No need for currency convert
  }

  // let myHeaders = new fetch.Headers();
  // myHeaders.append("apikey", CURRENCY_CONVERTER_API_KEY);

  // let requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  //   headers: myHeaders,
  // };

  let requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      apikey: CURRENCY_CONVERTER_API_KEY,
    },
    redirect: "follow",
  };

  fetch(
    `https://api.apilayer.com/fixer/convert?to=${currency_categories.EUR}&from=${orderData.currency}&amount=${orderData.totalCost}`
  ),
    requestOptions
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

  next();

  // console.log(orderData.totalCost);
  // console.log("Convert Currency API");

  // orderData.totalCost = (2 * orderData.totalCost).toFixed(2);
  // console.log(orderData.totalCost);

  // https.get(
  //   `https://data.fixer.io/api/latest?access_key=${API_KEY}&base=EUR&symbols=GBP,USD${testFunction(
  //     res
  //   )}`
  // ),
  //   // (response) => {
  //   //   console.log(response.rates);
  //   // };

  //   // https.get(
  //   //   `https://data.fixer.io/api/latest?access_key=${API_KEY}&base=EUR&symbols=GBP,USD`
  //   // );
};
