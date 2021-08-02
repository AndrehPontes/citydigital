import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>City Digital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          CITY<a href="#">DIGITAL</a>
        </h1>

        <p className={styles.description}>
          Desenvolvimento Web e Marketing Digital{' '}
          <code className={styles.code}>fale conosco</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Desenvolvimento Web &rarr;</h3>
            <p>Criação de sites modernos, seus usuários poderão navegar de maneira simples e intuitiva em qualquer dispositivo, perfeito para gerar negócios e resultados</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>E-commece &rarr;</h3>
            <p>Desenvolvimento de Lojas Virtuais e E-commerce customizados e integrados com os principais getways e intermediadores de pagamento.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>SEO &rarr;</h3>
            <p>Otimizamos seu site para alcançar as  primeiras posições do Google, Bing e Yahoo, fazendo com que sua empresa se destaque da concorrência na busca orgânica (gratuita)..</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Google Ads &rarr;</h3>
            <p>
            Criamos anúncios no Google para divulgar a sua empresa e aumentar os resultados de forma rápida e direcionada exatamente para o seu público-alvo.
            </p>
          </a>
        </div>
      </main>


    </div>
  )
}