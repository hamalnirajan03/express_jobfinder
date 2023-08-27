import express from "express";
import bcrypt from "bcrypt";
import { User } from "./user.model.js";
import jwt from "jsonwebtoken";

const router = express.Router();

//Register User
// JOi:Validation
router.post("/users/register", async (req, res) => {
  let newUser = req.body;

  const user = await User.findOne({
    email: newUser.email,
  });

  if (user) {
    return res.status(409).send({
      message: "User with this email already exist in our system",
    });
  }
  newUser.password = await bcrypt.hash(req.body.password, 8);
  //   console.log(req.body.password, hasshedPassword);
  //   console.log(req.body);

  //   newUser.password = hasshedPassword;

  await User.create(newUser);

  return res.status(201).send({
    message: "User is Registered Successfully",
  });
});

router.get("/users/login", async (req, res) => {
  //   console.log(req.body);
  const loginCredentials = req.body;

  const user = await User.findOne({
    email: loginCredentials.email,
  });

  if (!user) {
    return res.status(401).send({
      message: "Invalid Credentials",
    });
  }

  const passwordMatch = await bcrypt.compare(
    loginCredentials.password,
    user.password
  );

  if (!passwordMatch) {
    return res.status(401).send({
      message: "Password does not matched",
    });
  }

  user.password = undefined;
  //   console.log("Password Match");

  // genertae access token
  const accesstoken = jwt.sign(
    { _id: user._id },
    "hamalhamalhamal12345hamalhamal",
    {
      expiresIn: "1d",
    }
  );
  console.log(accesstoken);

  return res.status(200).send({ user, accesstoken });
});

export default router;
