// This file contains the logic to send emails using EmailJS from the contact form.
import emailjs from '@emailjs/browser';

export function sendContactEmail({ name, email, message }) {
  // Replace these with your EmailJS service, template, and user IDs
  const serviceId = 'service_gzeify6';
  const templateId = 'template_2xe7bsb';
  const publicKey = 'sNE42j4Lqc2fiF6fq';

  const templateParams = {
    name,    // matches {{name}} in template
    email,   // matches {{email}} in template
    message, // matches {{message}} in template
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
