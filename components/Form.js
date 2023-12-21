import styles from './Form.module.css'
import {useState} from "react";

export default function Form() {

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target);
    const value = Object.fromEntries(formData.entries());

    await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((response) => {
        setSuccess(response.ok)
      })
      .catch(() => {
        setSuccess(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
    ;
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Formatage de la date en format ISO (YYYY-MM-DD)
  const tomorrowISO = tomorrow.toISOString().split('T')[0];

  return (
    <>
      {success !== null && (
        <>
          {success === true && (
            <div className="alert">
              <p>Votre demande a bien été envoyée.</p>
              <p>Vous recevrez une réponse dans les plus brefs délais !</p>
            </div>
          )}
          {success === false && (
            <div className="alert alert--error">
              <p>Une erreur est survenue lors de l&apos;envoi de votre demande. Veuillez réessayer.</p>
            </div>
          )}
        </>
      )}
      {success !== true && (
        <form
          name="appointment"
          className={styles.form}
          onSubmit={onSubmit}>
          <div className={styles.form__cols}>
            <div className={styles.form__row}>
              <label htmlFor="service">Prestation souhaitée</label>
              <select id="service" name="service" required>
                <option value="maquillage">Maquillage</option>
                <option value="nail-art">Ongles / Nail&apos;art</option>
              </select>
            </div>

            <div className={styles.form__row}>
              <label htmlFor="date">Date de la prestation</label>
              <input id="date" type="date" name="date" required min={tomorrowISO} />
            </div>
          </div>

          <div className={styles.form__row}>
            <label htmlFor="location">Lieu de la prestation</label>
            <input id="location" type="text" name="location" required />
          </div>

          <div className={styles.form__cols}>
            <div className={styles.form__row}>
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" type="email" name="email" required />
            </div>

            <div className={styles.form__row}>
              <label htmlFor="phone">Numéro de téléphone <span className={styles['label-optional']}>(Optionnel)</span></label>
              <input id="phone" type="tel" name="phone" />
            </div>
          </div>

          <button className="btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      )}
    </>
  )
}
