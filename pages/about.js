import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>

        <p className={styles.description}>
          Back to <Link href="/">home page</Link>
        </p>
        </main>
    </div>
  )
}
