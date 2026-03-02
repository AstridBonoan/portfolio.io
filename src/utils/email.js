// This file contains the logic to send emails using EmailJS from the contact form.
import emailjs from '@emailjs/browser';

export function sendContactEmail({ name, email, message }) {
  // Replace these with your EmailJS service, template, and user IDs
  const serviceId = 'service_gzeify6';
  const templateId = 'template_2xe7bsb';
  const publicKey = 'sNE42j4Lqc2fiF6fq';

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
