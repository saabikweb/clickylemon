# Portfolio Contact Form Backend

This is a simple Node.js/Express backend API for handling contact form submissions from your portfolio site. It accepts POST requests, validates input, and sends an email to the site owner using nodemailer.

## Features
- Accepts POST requests at `/api/contact` with `name`, `email`, and `message` fields
- Validates input
- Sends an email to the site owner
- CORS enabled for frontend integration

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root with the following:
   ```env
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_TO=your_destination_email@gmail.com
   ```
   (Use a Gmail app password for best results)
3. Start the server:
   ```bash
   npm start
   ```

## API
- **POST** `/api/contact`
  - Body: `{ name, email, message }`
  - Returns: `{ success: true }` or `{ error: "..." }`

---

> Replace the email credentials with your own. Never commit your `.env` file.
