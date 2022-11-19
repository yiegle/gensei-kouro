import { Stack, Link, LinkProps } from "@chakra-ui/react";

const Navbar = () => {
  const HoverLink = (props: LinkProps) => <Link rounded="base" _hover={{bg:"gray.200"}} p={2} {...props } />

  return (
    <Stack as="nav">
      <HoverLink href="/article">Articles</HoverLink>
      <HoverLink href="/profile">Profile</HoverLink>
      <HoverLink href="/contact">Contact</HoverLink>
    </Stack>
  )
}

export default Navbar
