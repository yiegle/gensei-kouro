import Head from 'next/head'

type Props = {
  pageTitle: string,
  description: string,
}

const Meta = (props: Props) => {
  return (
    <Head>
      { props.pageTitle === "トップ" ? (
        <title>幻声航路</title>
      ) : (
        <title>幻声航路 - { props.pageTitle }</title>
      )}
      <meta name="description" content={ props.description } />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Meta