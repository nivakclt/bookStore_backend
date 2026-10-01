const users = require("../Models/userModel");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//registration  //http://localhost:3000/register + POST +{data}
exports.userRegister = async (req, res) => {
  // console.log("Inside register controller function")
  console.log("REGISTER HIT");

  const { username, email, password } = req.body;
  if (username && email && password) {
    try {
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        res.status(403).json({ msg: "User Already Exists!!`" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await users.create({
          username,
          email,
          password: hashedPassword,
        });
        res.status(201).json(response);
      }
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ msg: "Enter valid data" });
  }
};

//login-middleware

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await users.findOne({ email });
  if (existingUser) {
    console.log(existingUser);
    const passwordResult = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (passwordResult) {
      const token = jwt.sign(
        { userId: existingUser._id, userMail: existingUser.email },
        process.env.SECRET_KEY,
      );
      res.status(200).json({ token: token, user: existingUser });
    } else {
      res.status(401).json({ msg: "Invalid Email/Password" });
    }
  } else {
    res.status(401).json({ msg: "Invalid Email/Password" });
  }
};

// google auth
exports.googleLogin = async (req, res) => {
  const { email, name, picture } = req.body;
  const existingUser = await users.findOne({ email });
  if (existingUser) {
    existingUser.picture = picture;
    await existingUser.save();
    console.log(existingUser);
    const token = jwt.sign(
      { userId: existingUser._id, userMail: existingUser.email },
      process.env.SECRET_KEY,
    );

    res.status(200).json({ token: token, user: existingUser });
  } else {
    const newUser = await users.create({
      username: name,
      email,
      password: "123",
      picture: picture,
    });
    console.log(newUser);
    const token = jwt.sign(
      { userId: newUser._id, userMail: newUser.email },
      process.env.SECRET_KEY,
    );
    res.status(200).json({ token: token, user: newUser });
  }
};

//profile edit
exports.profileEdit = (req, res) => {
  console.log(req.body)
  console.log(req.file)
  console.log(req.params)
  console.log(req.query)
  console.log(req.payload)
  res.status(200).json("Profile");
};
