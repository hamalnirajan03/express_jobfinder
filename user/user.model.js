import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 155,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
    maxlength: 10,
  },
  userType: {
    type: String,
    enum: ["Seeker", "Provider"],
    required: true,
    trim: true,
  },
  personName: {
    type: String,
    required: false,
    trim: true,
    minlength: 3,
    maxlength: 155,
    nullable: true,
  },
  ogranizationName: {
    type: String,
    required: false,
    trim: true,
    minlength: 3,
    maxlength: 155,
    nullable: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
});

//create Table
export const User = mongoose.model("User", userSchema);
