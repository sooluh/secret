import { FC, useState, useEffect } from 'react'
import {
  Container,
  Text,
  useColorModeValue,
  Divider,
  Stack,
  ScaleFade
} from '@chakra-ui/react'

import Form from './components/Form'
import Card from './components/Card'
import Navbar from './components/Navbar'

import results from './libs/fetcher'

const App: FC = () => {
  const [messages, update] = useState<any[]>()
  const background = useColorModeValue('gray.50', 'gray.700')

  const reload = () => {
    results().then((messages: any) => {
      const childrens = messages.filter((item: any) => {
        return item.parent != null
      })

      const parents = messages
        .filter((item: any) => {
          return item.parent == null
        })
        .map((parent: any) => {
          parent.childrens = childrens.filter((child: any) => {
            return child.parent == parent.id
          })

          return parent
        })

      update(parents)
    })
  }

  useEffect(() => {
    reload()
  }, [])

  return (
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
        Ketikin apapun yang kamu pengen sampein ke aku.. tapi inget yaa, gaboleh
        nyeleneh lohh🥰
      </Text>

      <Form reloader={reload} />
      <Divider orientation="horizontal" w="full" my="6" />

      <Stack spacing="4" direction="column" mb="6">
        {messages ? (
          messages.map(item => (
            <ScaleFade initialScale={0.9} in={true}>
              <Card
                key={'message-' + item.id}
                message={item.message}
                background={background}
                date={item.created_at}
                childrens={item.childrens}
              />
            </ScaleFade>
          ))
        ) : (
          <Text>Memuat ...</Text>
        )}
      </Stack>
    </Container>
  )
}

export default App
