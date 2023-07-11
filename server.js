const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const path = require('path');
const cors = require('cors')
const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname + '/public')));

app.use(cors());

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/order", (req, res) => {
  const order = req.body;

  sendOrderEmail(order)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error sending order email:", error);
      res.sendStatus(500);
    });
});

async function sendOrderEmail(order) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: "alexxholly11@gmail.com",
      to: "tvoishopua@gmail.com",
      subject: "New Order",
      text: JSON.stringify(order, null, 2),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending order email:", error);
    throw error;
  }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
});