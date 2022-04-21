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
import fetch from './libs/fetcher'

const App: FC = () => {
  const [data, set] = useState<any[]>()
  const background = useColorModeValue('gray.50', 'gray.700')

  useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    fetch().then((data: any) => {
      const childrens = (data as any).filter((item: any) => {
        return item.parent != null
      })

      const parents = (data as any)
        .filter((item: any) => {
          return item.parent == null
        })
        .map((parent: any) => {
          const children = childrens.filter((child: any) => {
            return child.parent == parent.id
          })

          parent.children = children.length > 0 ? children.shift().message : ''

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
          p="4"
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
                date={new Date(item.created_at).toLocaleString()}
                message={item.message}
                background={background}
                children={item.children}
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
