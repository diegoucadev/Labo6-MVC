const { save, getAll, User } = require("../models/user.model");

const addNewUser = (name, lastname, email) => {
  const newUser = new User(name, lastname, email);
  return save(newUser);
};

const getAllUsers = () => {
  const allUsers = getAll();
  return allUsers;
}

module.exports = {
  addNewUser,
  getAllUsers
};
