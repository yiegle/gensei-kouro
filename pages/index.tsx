import Meta from '../meta/meta'
import { Link, Stack, Box, Heading } from "@chakra-ui/react"

export default function Home() {
  const pageTitle = 'トップ'
  const description = '相互参照のシナスタジア、幻視される<声>'

  return (
    <>
      <Meta pageTitle={ pageTitle } description={description} />
      <Box>
        <Heading as='h2' size='xl' noOfLines={1} mb="40px">
        ———星海を之く道
        </Heading>
        <Heading as='h2' size='md' noOfLines={1} mb="40px">
          あるいはそれは、声に出して読まれた遠未来——the future [ai] voiced——
        </Heading>
        <Heading as='h2' size='md' noOfLines={1} mb="40px">
          あるいはそれは、かつて編まれた詩たちの墓標
        </Heading>
        <Heading as='h2' size='md' noOfLines={1} mb="80px">
          あるいはそれは、相互理解という夢
        </Heading>
        <Box display="flex" justifyContent="space-around" fontSize="20px">
          <Link href="/article">Articles</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/contact">Contact</Link>
        </Box>
      </Box>
    </>
  )
}
