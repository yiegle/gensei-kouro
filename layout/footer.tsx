import { Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <footer >
      <Box
        display="flex"
        position="fixed"
        bottom="16px"
        p="16px"
        fontSize="16px"
        height="30px"
        right="30px"
      >
        <p>
          all contents are edited by 水上晶(Aquila Minakami)
        </p>
      </Box>
    </footer>
  )
}

export default Footer
