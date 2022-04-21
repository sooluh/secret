import { FC } from 'react'
import { Box, Spacer, Stack, Text } from '@chakra-ui/react'

const Card: FC<{
  message: string
  background: any
  date: string
  children: string
}> = ({ message, background, date, children }) => {
  return (
    <>
      <Box w="full" p={4} rounded="xl" backgroundColor={background}>
        <Stack direction="column">
          <Text>{message}</Text>
          <Text fontSize="xs" textColor="gray.500">
            {date}
          </Text>

          {children.trim() !== '' ? (
            <>
              <Spacer />
              <Box borderLeft="2px" borderColor="gray.500" pl={3}>
                <Text>{children}</Text>
              </Box>
            </>
          ) : null}
        </Stack>
      </Box>
    </>
  )
}

export default Card
