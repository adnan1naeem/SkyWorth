import nodemailer from "nodemailer";
export const config = {
  api: {
    bodyParser: true,
  },
};

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
      promotionalMaterials,
      purchaseReceipt,
      warrantyCard,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "webskyworth@gmail.com",
        pass: "umkf qhhy dlal qxcc",
      },
    });

    const mailOptions = {
      from: email,
      to: "aali@techtiz.co",
      subject: `New Feedback from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        IC Number: ${icNumber}
        Purchase Date: ${purchaseDate}
        Address Line 1: ${addressLine1}
        Address Line 2: ${addressLine2}
        State: ${state}
        Postal Code: ${postalCode}
        Country: ${country}
        Gender: ${gender}
        Brand Source: ${brandSource}
        Item Category: ${itemCategory}
        Product Model: ${productModel}
        Serial Number: ${serialNumber}
        Promotional Materials: ${promotionalMaterials}
      `,
      attachments: [],
    };

    if (purchaseReceipt) {
      const base64Data = purchaseReceipt.split(",")[1]; 
      const filenameReceipt = `purchase_receipt_${Date.now()}.jpeg`;

      mailOptions.attachments.push({
        filename: filenameReceipt,
        content: base64Data, 
        encoding: 'base64', 
        contentType: "image/jpeg",
      });
    }


    if (warrantyCard) {
      const base64Data = warrantyCard.split(",")[1]; 
      const filenameWarranty = `warranty_card_${Date.now()}.jpeg`;

      mailOptions.attachments.push({
        filename: filenameWarranty,
        content: base64Data,
        encoding: 'base64',
        contentType: "image/jpeg",
      });
    }
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Feedback sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
