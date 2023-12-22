import Users from "../models/User.js";
import { generateTokenForUser } from "../utils/auth.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      res.status(404).json({ message: "Email Already exists" });
      return;
    }

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password,
    });

    const generatedToken = generateTokenForUser(user);

    res.cookie("tookie", generatedToken);

    res
      .status(201)
      .json({ success: true, message: "Registration successfull", data: user });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Invalid Email" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(404).json({ message: "Invalid Password" });
    }

    const generatedToken = generateTokenForUser(user);

    res.cookie("token", generatedToken);

    res.status(201).json({
      success: true,
      message: "Login successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
