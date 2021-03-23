import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GeoCities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Website
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>A Next App</p>
      </footer>
    </div>
  )
}
