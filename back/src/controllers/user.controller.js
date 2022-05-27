const UserService = require("../services/user.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

//Create and Save a new users
const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { fullname, nic, dob, gender, email, phonenu, school, qualification } = req.body;

    const result = await UserService.createUsers({
      fullname,
      nic,
      dob,
      gender,
      email,
      phonenu,
      school,
      qualification,
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

const findAllUsers = async function (req, res) {
  // Validate request parameters, queries using express-validator
  try {
    var users = await UserService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single user exercise with an id
const findOneUser = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullname, nic, dob, gender, email, phonenu, school, qualification } = req.body;

    const result = await UserService.updateUser({
      id,
      fullname,
      nic,
      dob,
      gender,
      email,
      phonenu,
      school,
      qualification,
    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Delete a user with the specified id in the request
const userDelete = async ( req, res ) => {
  try {
    const id = req.params.id;
    const result = await UserService.deleteUser(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  createUser,
  findOneUser,
  findAllUsers,
  updateUser,
  userDelete,
};
