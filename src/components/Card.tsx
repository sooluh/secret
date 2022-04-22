import { FC } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import moment from 'moment'

const Card: FC<{
  message: string
  background: any
  date: string
  childrens: any[]
}> = ({ message, background, date, childrens }) => {
  date = moment(date).locale('id').format('DD MMM YYYY HH:mm')

  return (
    <>
      <Box w="full" p={4} rounded="xl" backgroundColor={background}>
        <Stack direction="column">
          <Box mb={2}>
            <Text>{message}</Text>
            <Text fontSize="xs" textColor="gray.500">
              {date}
            </Text>
          </Box>

          {childrens.length > 0 ? (
            <Stack spacing="2" direction="column-reverse">
              {childrens.map(child => (
                <Box
                  key={'replies-' + child.id}
                  borderLeft="2px"
                  borderColor="gray.500"
                  pl={3}
                >
                  <Text>{child.message}</Text>
                </Box>
              ))}
            </Stack>
          ) : null}
        </Stack>
      </Box>
    </>
  )
}

export default Card
