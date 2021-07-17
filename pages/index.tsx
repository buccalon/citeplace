import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mapping Citations</title>
        <meta name="description" content="Add coordinates to your Zotero library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Mapping Citations
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bruno.land/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project by Bruno Buccalon
        </a>
      </footer>
    </div>
  )
}
