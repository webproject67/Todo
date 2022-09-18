import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const sendMail = async (email: string, uuid: string): Promise<void> => {
  const emailClient = process.env.EMAIL_CLIENT;
  const emailClientId = process.env.EMAIL_CLIENT_ID;
  const emailClientSecret = process.env.EMAIL_CLIENT_SECRET;
  const emailRedirectUri = process.env.EMAIL_REDIRECT_URI;
  const emailRefreshToken = process.env.EMAIL_REFRESH_TOKEN;

  const OAuth2Client = new google.auth.OAuth2(
    emailClientId,
    emailClientSecret,
    emailRedirectUri
  );

  OAuth2Client.setCredentials({ refresh_token: emailRefreshToken });

  const accessToken = (await OAuth2Client.getAccessToken()) as string;

  const smtpTransport: SMTPTransport.Options = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: emailClient,
      clientId: emailClientId,
      clientSecret: emailClientSecret,
      refreshToken: emailRefreshToken,
      accessToken,
    },
  };

  const transport = nodemailer.createTransport(smtpTransport);

  const mailOptions = {
    from: `TODO <${emailClient}>`,
    to: email,
    subject: `Активация аккаунта "TODO"`,
    html: `
      <div>
        <h1>Регистрация на сайте "TODO".</h1>
        <p>Для активации вашего аккаунта необходимо перейти по ссылке:</p>
        <p>
          <a href="${uuid}">${uuid}</a>
        </p>
        <p>Спасибо!</p>
      </div>
    `,
  };

  await transport.sendMail(mailOptions);
};

export default sendMail;
