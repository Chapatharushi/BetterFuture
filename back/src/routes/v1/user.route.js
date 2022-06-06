const express = require("express");

const UserController = require("../../controllers/user.controller.js");

//route - /api/v1/user
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", UserController.findAllUsers);
router.get("/:id", UserController.findOneUser);
router.post("/", UserController.createUser);
router.post("/login", UserController.userLogin);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.userDelete);
router.post("/", UserController.tokenValid);

module.exports = router;
