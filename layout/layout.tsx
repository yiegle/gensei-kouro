import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Box
      display="flex"
      flexFlow="column"
      textColor="white"
      alignItems=""
      width="100%"
      minHeight="1200px"
      minWidth="800px"
    >
      <Box display="flex" justifyContent="center" mb="64px">
        <Header />
      </Box>
      <Box display="flex" justifyContent="center">
        <main>{children}</main>
      </Box>
      <Box display="flex" justifyContent="center">
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
