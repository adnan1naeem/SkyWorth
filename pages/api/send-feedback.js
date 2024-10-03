import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, phone, city, address, comments } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webskyworth@gmail.com",
        pass: "umkf qhhy dlal qxcc",
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: "mhassan@techtiz.co",
      subject: `New Feedback from ${fullName}`,
      text: `
                Name: ${fullName}
                Email: ${email}
                Phone: ${phone}
                City: ${city}
                Address: ${address}
                Comments: ${comments}
            `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Feedback sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
