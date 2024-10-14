import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, category, title, details } = req.body;

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
      subject: `New Question/Answer Faq`,
      text: `
                Email: ${email}
                Category: ${category}
                Question: ${title}
                Answer: ${details}
            `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Faq Question/Answer sent successfully!" });
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
