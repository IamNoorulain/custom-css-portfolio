import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.description}>
        Feel free to reach out if you have any questions or would like to work together!
      </p>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  )
}