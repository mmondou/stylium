import { EmailTemplate } from '@components/EmailTemplate';
import { Resend } from 'resend';

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Site Stylium <noreply@stylium.fr>',
    to: ['contact@stylium.fr', 'mondou.michael@gmail.com', 'sarahmondou@outlook.fr'],
    subject: 'Prise de rendez-vous',
    react: EmailTemplate(req.body),
  })
    .then((response) => {
      if (response.error) {
        res.status(400).json(response);
      } else {
        res.status(200).json(response);
      }
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
