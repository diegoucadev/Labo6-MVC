const {
  addUserController,
  showForm,
  getAllUsersController
} = require("../controller/user.controller");

const router = require("express").Router();
router.get("/", showForm);
router.post("/home", addUserController);
router.get('/allUsers', getAllUsersController);
module.exports = router;
