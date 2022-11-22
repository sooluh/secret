import Lare from './Lare'
import { FC } from 'react'
import moment from 'moment'
import Wangsuli from './Wangsuli'

const Pesen: FC<{ id: number; message: string; date: string }> = ({
  id,
  message,
  date
}) => {
  date = moment(date).locale('id').format('DD MMM YYYY HH:mm')

  return (
    <div className="pesen">
      <p className="unek-unek">
        {message}

        <small>{date}</small>
      </p>

      <Wangsuli parent={id} />
      <Lare id={id} />
    </div>
  )
}

export default Pesen
