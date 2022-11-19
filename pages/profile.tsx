import { Box, Heading } from "@chakra-ui/react"
import Meta from '../meta/meta'

export default function Home() {
  const pageTitle = 'Profile'
  const description = 'Profile'

  return (
    <>
      <Meta pageTitle={ pageTitle } description={description} />
      <Box>
        <Heading as='h1' size='2xl' noOfLines={1} mb="32px">
          Profile
        </Heading>
        <Heading as='h2' size='xl' noOfLines={1}>
          Aquila Minakami
        </Heading>
      </Box>
    </>
  )
}
