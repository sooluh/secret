import { FC, useState } from 'react'
import { Offline, Online } from 'react-detect-offline'
import {
  Box,
  Textarea,
  Text,
  Button,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import { send } from '../libs/fetcher'

const Form: FC<{ refresher: any }> = ({ refresher }) => {
  const [message, set] = useState('')

  const submit = async () => {
    if (String(message).trim().length == 0) return

    const data = await send(message)
    refresher()

    return data != null ? set('') : ''
  }

  const update = (evt: any) => {
    set(evt.target.value)
  }

  return (
    <>
      <Online>
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
      </Online>

      <Offline>
        <Box w="full" mt="6">
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="170px"
          >
            <AlertIcon boxSize="40px" mr={0} />

            <AlertTitle mt={4} mb={1} fontSize="lg">
              Sedang Luring!
            </AlertTitle>

            <AlertDescription maxWidth="sm">
              Periksa koneksi internet Anda, pastikan semuanya tidak ada kendala
              😏
            </AlertDescription>
          </Alert>
        </Box>
      </Offline>
    </>
  )
}

export default Form
