export interface ContactFormData {
  name: string;
  email: string;
  telefon?: string;
  nachricht: string;
}

export const sendContactEmail = (data: ContactFormData) => {
  const subject = `Kontaktanfrage von ${data.name}`;
  const body = `
Name: ${data.name}
E-Mail: ${data.email}
${data.telefon ? `Telefon: ${data.telefon}\n` : ''}
Nachricht:
${data.nachricht}
  `.trim();

  const mailtoUrl = `mailto:office@mh-beton.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
  return Promise.resolve(); // Für Kompatibilität mit dem bestehenden Code
};
