import { useSession } from 'next-auth/react'
import {FC} from 'react'

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
    const {data: sessionData} = useSession()

    return (
        <div className='card'>
      <div className='card-back'>
        <div className='line-numbers'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className='variable'>const </span>
          <span className='function'>aboutMe </span>
          <span className='operator'>= </span>
          <span>{'{'}</span>
          <div className='indent'>
            {' '}
            <span className='property'>name</span>
            <span className='operator'>: </span>
            <span className='string'>Hi</span>
            <span>,</span>
          </div>
          <div className='indent'>
            {' '}
            <span className='property'>title</span>
            <span className='operator'>: </span>
            <span className='string'>ok</span>
            <span>,</span>
          </div>
          <div className='indent'>
            {' '}
            <span className='property'>contact</span>
            <span className='operator'>: </span>
            <span>{'{'}</span>
            <div className='indent'>
              {' '}
              <span className='property'>email</span>
              <span className='operator'>: </span>
              <span className='string'>haah</span>
              <span>,</span>
            </div>
            <div className='indent'>
              <span className='property'>website</span>
              <span className='operator'>:</span>
              <span className='string'>io</span>
            </div>
            <span>{'}'}</span>
          </div>
          <span>{'}'}</span>
        </code>
      </div>
      <div className='card-front'>
        Hello
      </div>
    </div>
    )
}

export default Card