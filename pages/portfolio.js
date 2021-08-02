import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serviços City Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portfolio <a href="#">City Digital</a>
        </h1>

      </main>
    </div>
  )
}