import Meta from '../meta/meta'
import { Flex, Box, Heading } from "@chakra-ui/react"
import Navbar from '../layout/navbar'

export default function Home() {
  const pageTitle = 'トップ'
  const description = '相互参照のシナスタジア、幻視される<声>'

  return (
    <>
      <Meta pageTitle={ pageTitle } description={description} />
      <Box>
        <Heading as='h2' size='l' noOfLines={1} mb="40px">
          声に出して読みたい遠未来——the future [ai] voiced——
        </Heading>
        <Box display="flex" justifyContent="center" alignItems="center" fontSize="24px">
          <Navbar></Navbar>
        </Box>
      </Box>
    </>
  )
}
