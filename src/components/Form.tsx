import { FC, useState } from 'react'
import { Box, Textarea, Text, Button, VStack } from '@chakra-ui/react'
import { send } from '../libs/fetchData'

const Form: FC<{ refresher: any }> = ({ refresher }) => {
  const [message, set] = useState('')

  const submit = async () => {
    if (String(message).length == 0) return

    const data = await send(message)
    refresher()

    return data != null ? set('') : ''
  }

  const update = (evt: any) => {
    set(evt.target.value)
  }

  return (
    <>
      <Box w="full" my="4">
        <VStack spacing="4" align="start">
          <Text>Pesan:</Text>

          <Textarea
            value={message}
            onChange={update}
            w="full"
            placeholder="Ketikin pesan kamu disini ..."
          />

          <Button onClick={submit} size="md" rounded="lg">
            Kirim
          </Button>
        </VStack>
      </Box>
    </>
  )
}

export default Form
