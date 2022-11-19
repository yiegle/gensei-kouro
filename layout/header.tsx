import { Box, Heading, Link } from "@chakra-ui/react"
import DrawerMenu from './drawer'

const Header = () => {
  return (
    <Box display="flex" flexFlow="column" justifyContent="center" alignItems="center" width="100%">
      <Box display="flex" justifyContent="flex-end" alignItems="center" width="100%">
        <DrawerMenu />
      </Box>
      <header>
        <Heading as='h1' size='2xl' noOfLines={1}>
          <Link href="/">幻声航路</Link>
        </Heading>
      </header>
    </Box>
  )
}

export default Header
