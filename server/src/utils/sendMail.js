import nodemailer from "nodemailer";

export const sendMail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    debug: true,
  });

  const emailOptions = {
    from: "Cinema support<support@cinema.com>",
    to: option.email,
    subject: option.subject,
    text: option.message,
  };

  await transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Email Send: ", info.response);
  });
};
