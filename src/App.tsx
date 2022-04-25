import {
  Container,
  Text,
  useColorModeValue,
  Divider,
  Stack,
  ScaleFade
} from '@chakra-ui/react'
import moment from 'moment'
import { FC, useState, useEffect } from 'react'

import Form from './components/Form'
import Card from './components/Card'
import Navbar from './components/Navbar'

import results from './libs/fetcher'

const App: FC = () => {
  const [data, setData] = useState<any[]>()
  const background = useColorModeValue('gray.50', 'gray.700')

  const reload = () => {
    results().then((data: any) => {
      const childrens = data.filter((item: any) => {
        return item.parent != null
      })

      const parents = data
        .filter((item: any) => {
          return item.parent == null
        })
        .map((parent: any) => {
          parent.childrens = childrens.filter((child: any) => {
            return child.parent == parent.id
          })

          return parent
        })

      setData(parents)
    })
  }

  const birthday = () => {
    const that = moment('2004-06-22').locale('id')
    const now = moment().locale('id')

    return that.date() === now.date() && that.month() === now.month()
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
        {birthday() ? (
          <>
            Heyy, hari ini ulang tahun akuu lohh... mauu ngucapin apa cobaa
            sekarang?? 😝
          </>
        ) : (
          <>
            Ketikin apapun yang kamu pengen sampein ke aku.. tapi inget yaa,
            gaboleh nyeleneh lohh 🥰
          </>
        )}
      </Text>

      <Form reloader={reload} />
      <Divider orientation="horizontal" w="full" my="6" />

      <Stack spacing="4" direction="column" mb="6">
        {data ? (
          data.map(item => (
            <ScaleFade key={'message-' + item.id} initialScale={0.9} in={true}>
              <Card
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
