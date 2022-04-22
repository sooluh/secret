import { FC, useState, useEffect } from 'react'
import {
  Container,
  Text,
  useColorModeValue,
  Divider,
  Stack
} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'
import results from './libs/fetcher'

const App: FC = () => {
  const [data, set] = useState<any[]>()
  const background = useColorModeValue('gray.50', 'gray.700')

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    results().then((data: any) => {
      const childrens = (data as any).filter((item: any) => {
        return item.parent != null
      })

      const parents = (data as any)
        .filter((item: any) => {
          return item.parent == null
        })
        .map((parent: any) => {
          parent.childrens = childrens.filter((child: any) => {
            return child.parent == parent.id
          })

          return parent
        })

      set(parents)
    })
  }

  return (
    <>
      <Container maxW="container.lg" my="4">
        <Navbar />

        <Text
          textAlign="center"
          backgroundColor={background}
          p="6"
          rounded="xl"
          w="full"
          fontSize="md"
          fontWeight="normal"
          letterSpacing="0.5px"
        >
          Ketikin apapun yang kamu pengen sampein ke aku, tapi inget, jangan
          nyeleneh yaa 🥰
        </Text>

        <Form refresher={refresh} />
        <Divider orientation="horizontal" w="full" my="6" />

        <Stack spacing="4" direction="column" mb="6">
          {data ? (
            data.map(item => (
              <Card
                key={'message-' + item.id}
                message={item.message}
                background={background}
                date={item.created_at}
                childrens={item.childrens}
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
