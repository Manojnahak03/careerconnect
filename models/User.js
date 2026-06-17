import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["Job Seeker", "Employer", "Admin"],
    default: "Job Seeker"
  },

  image: {
    type: String,
    default: ""
  },

  education: {
    type: String
  },

  skills: [{
    type: String
  }],

  experience: {
    type: String
  },

  cv: {
    type: String
  },

  phone: {
    type: String
  },

  location: {
    type: String
  }

}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;