import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password ,role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
      message: "All fields are required"
    });
  }
    // Check User Exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "User Already Exists !!"
      });
    }

    // Hash Password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create User
    await User.create({
      name,
      email,
      password: hashPassword
    });

    res.status(201).json({
      message: "User Registered Successfully !!"
    });

  } catch (error) {
    console.log("User Registration Failed:", error.message);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};


export const login = async (req,res) =>{
  try {
    const {email , password} = req.body;

    if (!email || !password) {
      return res.status(400).json({
      message: "All fields are required"
    });
  }
    const user = await User.findOne({email});

    if(!user){
      console.log("Invaild User !");
      return res.status(404).json({
      success:false,
      message:"User not found. Please Register."
});
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
      return res.status(401)
      .json({message:"Invaild Credentials"});
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: process.env.EXPIRE_IN }
);

    res.json({
            message:"Login Sucessfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
  } catch (error) {
    console.log("Login Failed ",error.message);
    return res.status(500)
    .json({message:"Internal Server Error"});
  }
}
