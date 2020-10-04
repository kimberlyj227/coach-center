const router = require("express").Router();
const gymnastRoutes = require("./gymnasts");
const userRoutes = require("./users");

// gymnast routes
router.use("/gymnasts", gymnastRoutes);
router.use("/users", userRoutes)

module.exports = router;
