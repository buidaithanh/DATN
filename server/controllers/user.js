const User = require("../model/User");
const ErrorHandler = require("../utils/ErrorHandler");
module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userEmail = User.findOne({ email: email });
  try {
    if (userEmail) {
      return next(new ErrorHandler("user already exists", 400));
    }
    const user = {
      name,
      email,
      password,
    };
    const newUser = new User.create(user);
    res.json({ message: "User created", user: newUser });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};
