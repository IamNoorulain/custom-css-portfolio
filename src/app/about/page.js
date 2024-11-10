import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        I'm a web developer with a passion for creating beautiful and functional websites.
        With experience in React, Next.js, and other modern web technologies, I strive to
        deliver high-quality solutions for every project.
      </p>
      <div className={styles.experience}>
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Web Developer at TechCorp</h3>
            <p>2020 - Present</p>
            <p>Developed and maintained various web applications using React and Next.js.</p>
          </li>
          <li>
            <h3>Junior Developer at StartupInc</h3>
            <p>2018 - 2020</p>
            <p>Assisted in the development of responsive websites and web applications.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}