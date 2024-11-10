import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.description}>
        Hi, I'm [Your Name]. I'm a passionate developer specializing in web development.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>My Skills</h2>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h2>Featured Project</h2>
          <p>A brief description of your most impressive or recent project.</p>
          <a href="/about" className={styles.button}>Learn More</a>
        </div>
      </div>
    </div>
  )
}