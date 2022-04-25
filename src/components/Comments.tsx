import { FC } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

const Comments: FC<{ data: any[] }> = ({ data }) => (
  <Stack spacing="2" direction="column-reverse">
    {data.map(message => (
      <Box
        key={'replies-' + message.id}
        borderLeft="2px"
        borderColor="gray.500"
        pl={3}
      >
        <Text>{message.message}</Text>
      </Box>
    ))}
  </Stack>
)

export default Comments
