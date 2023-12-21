export const EmailTemplate = (bodyData) => {
  const { service, date, location, email, phone } = bodyData;

  return (
    <div>
      <h1>Nouvelle demande de prestation !</h1>
      <p><strong>Service</strong> : {service === 'maquillage' ? 'Maquillage' : 'Ongles / Nail\'art'}</p>
      <p><strong>Date</strong> : {date}</p>
      <p><strong>Lieu</strong> : {location}</p>
      <p><strong>Email</strong> : {email}</p>
      {phone && <p><strong>Téléphone</strong> : {phone}</p>}
    </div>
  )
};
