const express = require("express");
const router = express.Router({ mergeParams: true });

// /api
router.use("/telegram", require("./telegram.routes"));

module.exports = router;
