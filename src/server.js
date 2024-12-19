const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://your-frontend-domain.com', // Update with your frontend domain
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(formData) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'shubhambhardwajdbd@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: '22cs01031@iitbbs.ac.in',
      subject: 'Contact Form Submission',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    return await transport.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send('Missing required fields: name, email, and message');
  }
  try {
    const result = await sendMail(req.body);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message || error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
