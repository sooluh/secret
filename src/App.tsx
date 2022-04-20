import { FC, useState, useEffect } from 'react'
import { Container, Text, useColorModeValue, Divider, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'
import fetch from './libs/fetchData'

const App: FC = () => {
    const [data, set] = useState<any[]>()
    const background = useColorModeValue('gray.50', 'gray.700')

    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        fetch().then((item: any) => set(item))
    }

    return (
        <>
            <Container maxW="container.lg" my="4">
                <Navbar />

                <Text
                    textAlign="center"
                    backgroundColor={background}
                    p="8"
                    rounded="xl"
                    w="full"
                    fontSize="md"
                    fontWeight="normal"
                    letterSpacing="0.5px"
                >
                    Ungkapin aja apapun yang pengen kamu sampein 😉
                </Text>

                <Form refresher={refresh} />
                <Divider orientation="horizontal" w="full" my="6" />

                <Stack spacing="6" direction="column-reverse" mb="8">
                    {data ? (
                        data.map(item => (
                            <Card
                                key={'message-' + item.id}
                                date={new Date(item.created_at).toLocaleString()}
                                message={item.message}
                                background={background}
                            />
                        ))
                    ) : (
                        <Text>Memuat ...</Text>
                    )}
                </Stack>
            </Container>
        </>
    )
}

export default App
