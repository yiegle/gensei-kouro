import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '../layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: 'black',
        },
      },
    },
  })

  return (
      <ChakraProvider theme={ theme }>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  )
}
