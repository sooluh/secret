import { FC } from 'react'
import { Offline as Detect } from 'react-detect-offline'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box
} from '@chakra-ui/react'

const Offline: FC = () => (
  <Detect>
    <Box w="full" mt="6">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="170px"
        borderRadius="lg"
      >
        <AlertIcon boxSize="40px" mr={0} />

        <AlertTitle mt={4} mb={1} fontSize="lg">
          Ke NASA yuk?
        </AlertTitle>

        <AlertDescription maxWidth="sm">
          Periksa dulu atuh koneksi internetnya, bisi ada kendala kan? 🤨
        </AlertDescription>
      </Alert>
    </Box>
  </Detect>
)

export default Offline
