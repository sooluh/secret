import { FC, useState } from 'react'
import { Online } from 'react-detect-offline'
import { Box, Textarea, Text, Button, VStack, Spinner } from '@chakra-ui/react'

import Success from './Success'
import Offline from './Offline'

import { send } from '../libs/fetcher'

const Form: FC<{ reloader: any }> = ({ reloader }) => {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(1)

  const submit = async () => {
    const value = String(message).trim()
    if (value.length == 0) return

    setStatus(2)
    const response = await send(value)
    reloader()

    setStatus(3)
    return response != null ? setMessage('') : ''
  }

  const update = (evt: any) => {
    setMessage(evt.target.value)
  }

  return (
    <>
      <Online>
        {status === 3 ? (
          <Success />
        ) : (
          <Box w="full" my="4">
            <VStack spacing="4" align="start">
              <Text>Pesan:</Text>

              <Textarea
                value={message}
                onChange={update}
                w="full"
                placeholder="Ketikin pesan kamu disini ..."
                isDisabled={status >= 2}
              />

              <Button onClick={submit} size="md" rounded="lg">
                {status === 2 ? <Spinner /> : 'Kirim'}
              </Button>
            </VStack>
          </Box>
        )}
      </Online>

      <Offline />
    </>
  )
}

export default Form
