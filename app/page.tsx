import Image from 'next/image'
import { db } from './db'

export interface RstaurantCardType {
  id: number
  name: string

  price: number
}

const fetchData = async (): Promise<RstaurantCardType[]> => {
  const restaurants = await db.lessons.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      tag: true,
    },
  })
  return restaurants
}

export default async function Home() {
  return (
    <main className=' container '>
      
      <Image
        src='/images/header-banner.jpeg'
        alt='learn english'
        // width='150'
        // height='150'
         sizes="80vw"
         style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </main>
  )
}
