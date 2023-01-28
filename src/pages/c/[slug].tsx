import { useRouter } from 'next/router'
import {FC} from 'react'
import { cardRouter } from '../../server/api/routers/card'
import { trpc } from '../../utils/api'
import Head from 'next/head'
import Card from '../../components/card/card'
interface SlugProps{

}

const Slug: FC<SlugProps> =({}) =>{
    const router = useRouter()
    const {slug} = router.query
    if(typeof slug !== 'string') return null
    const {data: card} = trpc.card.getCard.useQuery({slug})
    return 
    <div className='absolute inset-0 grid place-items-center bg-gradient-to-br from bg-pink-200 to-purple-300'>
    <Head>
        <title>{card?.name} | {card?.title}</title>
    </Head>
        <Card card={card}/>
    </div>
}

export default Slug