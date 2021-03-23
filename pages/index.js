import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { attributes, react as HomeContent } from '../content/home.md';


export default function Home() {
  let { title, cats } = attributes;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A Basic <a href="https://nextjs.org">Next App</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>

      </main>

      <div className={styles.article}>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>



      <footer className={styles.footer}>
        <p>Powered by Next</p>
      </footer>
    </div>
  )
}
