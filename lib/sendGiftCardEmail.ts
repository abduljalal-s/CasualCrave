import emailjs from '@emailjs/browser';

export const sendGiftCardEmail = async ({
  userName,
  telegramUsername,
  giftCardID,
}: {
  userName: string;
  telegramUsername: string;
  giftCardID: string;
}) => {
  const templateParams = {
    user_name: userName,
    telegram_username: telegramUsername,
    gift_card_id: giftCardID,
  };

  try {
    const response = await emailjs.send(
      'service_d7d7xr9',     // Replace with your actual EmailJS service ID
      'template_1f9sj03',    // Replace with your actual template ID
      templateParams,
      'dy_2_dnDP-cEn4wf0'      // Replace with your EmailJS public key
    );
    console.log('Email successfully sent!', response.status, response.text);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
