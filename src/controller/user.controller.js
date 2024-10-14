const { addNewUser, getAllUsers } = require("../services/user.service");

const addUserController = (req, res) => {
  try {
    const { name, lastname, email } = req.body;
    const user = addNewUser(name, lastname, email);
    res.render("home.pug", { user });
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
};

const getAllUsersController = (req, res) => {
  try {
    const users = getAllUsers();
    res.render('allUsers.pug', { users });
  } catch(e) {
    console.log(e);
    res.status(500).send('Internal Sever Error');
  }
}

const showForm = (req, res) => {
  res.render("form.pug");
};

module.exports = {
    addUserController,
    getAllUsersController,
    showForm
}