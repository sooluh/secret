import { FC, useState } from 'react'
import { Online } from 'react-detect-offline'
import { Box, Textarea, Text, Button, VStack, Spinner } from '@chakra-ui/react'

import Success from './Success'
import Offline from './Offline'

import { send } from '../libs/fetcher'

const Form: FC<{ reloader: any }> = ({ reloader }) => {
  const [confess, renew] = useState('')
  const [status, post] = useState(1)

  const submit = async () => {
    const value = String(confess).trim()
    if (value.length == 0) return

    post(2)
    const response = await send(value)
    reloader()

    post(3)
    return response != null ? renew('') : ''
  }

  const update = (evt: any) => {
    renew(evt.target.value)
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
                value={confess}
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
