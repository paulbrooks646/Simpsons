const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", userController.getUser);
router.delete("/logout", userController.logout);
router.put("/update/:user_id", userController.update);

module.exports = router;
