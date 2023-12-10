/** @format */

const { Schema, model } = require("mongoose");
const { HandleMongooseError } = require("../helpers");
const Joi = require("joi");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: String,
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
    required: true,
  },
  avatarURL: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
    required: true,
  },
  verificationCode: {
    type: String,
    default: "",
    required: true,
  },
});

userSchema.post("save", HandleMongooseError);

const User = model("user", userSchema);
const emailSchema = Joi.object({ email: Joi.string().required() });

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  emailSchema,
};

module.exports = { schemas, User };
