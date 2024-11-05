import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'
// Register new user Logic

export const RegisterController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        message: "User with this email already exists",
        success: false,
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();
    res.status(200).send({
      message: "fine",
      user,
    });
    console.log(user);
  } catch (error) {
    console.log("error in registration");
  }
};

export const LoginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if email or password is provided
      if (!email || !password) {
        return res.status(400).send({
          success: false,
          message: "Invalid email or password",
        });
      }
  
      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email not found",
        });
      }
  
      // Check if the password matches
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(401).send({
          success: false,
          message: "Invalid password",
        });
      }
  
      // Generate JWT token
      const token = JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
  
      // Successful response
      res.status(200).send({
        success: true,
        message: "Login successful",
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
        token,
      });
    } catch (error) {
      console.error("Error in LoginController:", error);
      res.status(500).send({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  };


  export const testController=(req,res)=>{
    res.status(200).send({
        message:'signed in successfully'
    })

  }