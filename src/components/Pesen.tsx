import { FC } from 'react'
import moment from 'moment'
import Lare from './Lare'
import Wangsuli from './Wangsuli'

const Pesen: FC<{
  id: number
  message: string
  date: string
  childrens?: any[]
}> = ({ id, message, date, childrens }) => {
  date = moment(date).locale('id').format('DD MMM YYYY HH:mm')

  return (
    <div className="pesen">
      <p className="unek-unek">
        {message}

        <small>{date}</small>
      </p>

      <Wangsuli parent={id} />

      <Lare childrens={childrens} />
    </div>
  )
}

export default Pesen
