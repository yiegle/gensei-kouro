import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>幻声航路</title>
        <meta name="description" content="幻声航路 - 水上晶" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>記事一覧</h2>
      </main>

      <footer className={styles.footer}>
        <p>
          by 水上晶
        </p>
      </footer>
    </div>
  )
}
