import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box
} from '@chakra-ui/react'
import { FC } from 'react'

const Success: FC = () => (
  <Box w="full" mt="6">
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      borderRadius="lg"
    >
      <AlertIcon boxSize="40px" mr={0} />

      <AlertTitle mt={4} mb={1} fontSize="lg">
        Tara mak jreng!
      </AlertTitle>

      <AlertDescription maxWidth="sm">
        Makasih loh udah mau jujur, pesannya aku review dulu yaaw 🤗 nanti bakal
        ditampilin sekalian dibales kok
      </AlertDescription>
    </Alert>
  </Box>
)

export default Success
