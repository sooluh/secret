import { FC } from 'react'
import moment from 'moment'
import { Box, Spacer, Stack, Text } from '@chakra-ui/react'
import Comments from './Comments'

const Card: FC<{
  message: string
  background: any
  date: string
  childrens: any[]
}> = ({ message, background, date, childrens }) => (
  <Box w="full" p={4} rounded="xl" backgroundColor={background}>
    <Stack direction="column">
      <Box>
        <Text>{message}</Text>
        <Text fontSize="xs" textColor="gray.500">
          {moment(date).locale('id').format('DD MMM YYYY HH:mm')}
        </Text>
      </Box>

      {childrens.length > 0 ? (
        <>
          <Spacer />
          <Comments data={childrens} />
        </>
      ) : null}
    </Stack>
  </Box>
)

export default Card
