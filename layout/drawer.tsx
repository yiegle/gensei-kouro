import { useDisclosure, Box, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import React from "react"
import Navbar from "./navbar"

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} backgroundColor="black" borderColor="white">
        <HamburgerIcon color="white" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={btnRef}
        colorScheme="black"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Navbar/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default DrawerMenu
