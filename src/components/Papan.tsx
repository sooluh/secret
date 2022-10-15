import { FC } from 'react'
import moment from 'moment'
import Gineman from './Gineman'

const Papan: FC = () => {
  const name = import.meta.env.VITE_APP_NAME

  const now = moment().locale('id')
  const that = moment('2004-06-22').locale('id')
  const birthday = that.date() === now.date() && that.month() === now.month()

  const description = birthday
    ? 'Heyy, hari ini ulang tahun akuu lohh... mauu ngucapin apa cobaa sekarang?? 😝'
    : 'Ketikin apapun yang kamu pengen sampein ke aku.. tapi inget yaa, gaboleh nyeleneh lohh!'

  return (
    <div className="papan">
      <h1>{name}</h1>

      <p className="katrangan">{description}</p>

      <Gineman />
    </div>
  )
}

export default Papan
