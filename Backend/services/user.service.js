const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await userModel.findOne({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });

  // Example usage of userModel to avoid unused variable warning
  return user;
};
