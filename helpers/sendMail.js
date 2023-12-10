/** @format */

const nodemailer = require("nodemailer");
// const sgMail = require("@sendgrid/mail");

require("dotenv").config();
// const { SENDGRID } = process.env;

// sgMail.setApiKey(SENDGRID);

// const sendMail = async (data) => {
//   const email = { ...data, from: "anastasiagluhenka@gmail.com" };
//   await sgMail.send(email);

//   return true;
// };

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "anastasiagluhenka@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendMail = async (data) => {
  const email = { from: "anastasiagluhenka@meta.ua", ...data };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendMail;
