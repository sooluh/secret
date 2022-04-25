import { FC } from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  useColorMode
} from '@chakra-ui/react'

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box w="full" h="12" mb="4">
      <Flex w="full" h="full" alignSelf="center" alignItems="center">
        <Box>
          <Text
            fontFamily="Prompt"
            fontWeight="bold"
            fontSize="xl"
            letterSpacing="0.5px"
          >
            Confess
          </Text>
        </Box>

        <Spacer />

        <Box>
          <IconButton
            aria-label="Theme toggle"
            onClick={toggleColorMode}
            rounded="full"
            size="md"
            icon={colorMode == 'light' ? <IoMdMoon /> : <IoMdSunny />}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
