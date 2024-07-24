'use server';

import { z } from "zod"
import nodemailer from 'nodemailer';
import { formSchema } from "./types";

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
  console.log('hey', values);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: 'smithms91@gmail.com',
      pass: 'puzw hljq bkee jqds'
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `GLWD Contact - ${values.email}`,
      to: "smithms91@gmail.com",
      subject: `[GLWD] Email From - ${values.email}`,
      text: `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nMessage: ${values.message}`,
      html: `<p><strong>Email from: ${values.name}</strong> ${values.email}</p><p><strong>Phone:</strong> ${values.phone}</p><p><strong>Message:</strong> ${values.message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }
}