const express = require("express");
const router = express.Router();
const Menu = require("../controllers/Menu");

router.get("/menu", Menu.FetchAll);

module.exports = router;
