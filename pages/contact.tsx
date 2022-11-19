import { Box, Heading } from "@chakra-ui/react"
import Meta from '../meta/meta'

export default function Home() {
  const pageTitle = 'Contact'
  const description = 'Contact'

  return (
    <>
      <Meta pageTitle={ pageTitle } description={description} />
      <Box>
        <Heading as='h1' size='2xl' noOfLines={1}>
          Contact
        </Heading>
      </Box>
    </>
  )
}
