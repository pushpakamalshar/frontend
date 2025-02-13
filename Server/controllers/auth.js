const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, dob, bloodGroup, gender } =
      req.body;

    let existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dob,
      bloodGroup,
      gender,
    });

    const token = jwt.sign({ id: user._id, email }, "string");
    res.cookie("token", token);
    const { password: pass, ...userData } = user.toObject();
    return res.status(200).json({ user: userData });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(401).json({ message: "user not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "invalid password" });

    const token = jwt.sign({ email, id: user.id }, process.env.JWT_SECRET);
    res.cookie("token", token).status(200).json({ token, email });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { login, register };
