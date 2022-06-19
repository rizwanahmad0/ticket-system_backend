const express = require("express");
const userController = require('../controllers/user.controller')
const router = express.Router();

router.post("/create",userController.createUser);
router.post("/login",userController.login);


router.post("/ticket",userController.createTicket);
router.get("/ticket",userController.getAllToken);
router.get("/ticket/:id",userController.getTicketById);

router.route("/resolve")
.post(userController.updateTicket);

router.post("/comment",userController.userComment);

module.exports = router;
