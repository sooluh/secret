import { FC } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

const Card: FC<{ message: string; background: any; date: string }> = ({
    message,
    background,
    date
}) => {
    return (
        <>
            <Box w="full" p="4" rounded="xl" backgroundColor={background}>
                <Stack direction="column">
                    <Text>{message}</Text>
                    <Text fontSize="xs" textColor="gray.500">
                        {date}
                    </Text>
                </Stack>
            </Box>
        </>
    )
}

export default Card
