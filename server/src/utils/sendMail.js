import nodemailer from "nodemailer";

export const sendMail = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: process.env.MAIL_PORT || "587",
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME || "hhoang1072003@gmail.com",
      pass: process.env.MAIL_PASSWORD || "haot uajs iszh jmqt",
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
