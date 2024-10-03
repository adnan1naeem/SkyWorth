import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fullName,
      email,
      phone,
      icNumber,
      purchaseDate,
      addressLine1,
      addressLine2,
      state,
      postalCode,
      country,
      gender,
      brandSource,
      itemCategory,
      productModel,
      serialNumber,
      promotionalMaterials
    } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webskyworth@gmail.com",
        pass: "umkf qhhy dlal qxcc",
      },
    });

    const mailOptions = {
      from: email,
      to: "utahir@techtiz.co",
      subject: `New Feedback from ${fullName}`,
      text: `
                Name: ${fullName}
                Email: ${email}
                Phone: ${phone}
                Number: ${icNumber}
                purchaseDate: ${purchaseDate}
                addressLine1:${addressLine1}
                addressLine2:${addressLine2}
                State:${state}
                postalCode:${postalCode}
                Country: ${country}
                Gender: ${gender}
                brandSource: ${brandSource}
                itemCategory: ${itemCategory}
                productModel: ${productModel}
                serialNumber: ${serialNumber}
                promotionalMaterials: ${promotionalMaterials}
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
