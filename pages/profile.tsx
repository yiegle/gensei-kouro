import { Box, Heading, Link, Text } from "@chakra-ui/react"
import Meta from '../meta/meta'

export default function Home() {
  const pageTitle = 'Profile'
  const description = 'Profile'

  return (
    <>
      <Meta pageTitle={ pageTitle } description={description} />
      <Box display="flex" flexFlow="column" justifyContent="flex-start">
        <Heading as='h1' size='2xl' noOfLines={1} mb="32px">
          Profile
        </Heading>
        <Box mt="24px" lineHeight="28px" fontSize="24px">
          <Heading as='h1' size='xl' noOfLines={1} mb="32px">
            Self-Introduction
          </Heading>
          <Text p="10px 0">HN: Aquila Minakami（水上晶） / orifuji</Text>
          <Text p="10px 0">Job: IT Engineer(Web Backend, Frontend, Infrastructure) / Facilitator / Scholar(Amateur)</Text>
          <Text p="10px 0">Hobbies: Philosophy / Game / Anime / Swimming / DTM</Text>
          <Text p="10px 0">Affiliations: ROXX inc, Staff / CULTIBASE Lab Member</Text>
        </Box>
        <Box mt="24px" lineHeight="28px" display="flex" flexFlow="column" fontSize="24px">
          <Heading as='h1' size='xl' noOfLines={1} mb="32px">
            Links
          </Heading>
          <Link href="https://note.com/orifuji" isExternal p="10px 0" mb="12px">note</Link>
          <Link href="https://github.com/orifuji" isExternal p="10px 0" mb="12px">github</Link>
          <Link href="https://bookmeter.com/users/1276206" isExternal p="10px 0" mb="12px">bookmeter</Link>
        </Box>
      </Box>
    </>
  )
}
