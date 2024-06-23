import Image from 'next/image'
import CarouselComponent from './components/carosel'
import { db } from './db'
import { ProductType } from './types'

const fetchData = async (): Promise<ProductType[]> => {
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
  // const data = await fetchData()
  const data = [
    { id: 1, name: 'jhgj', price: 0, tag: 'yy' },
    { id: 4, name: 'gfg', price: 1000, tag: 'ff' },
    { id: 5, name: 'gfg', price: 1000, tag: 'ff' },
  ]
  console.log('data ia ', data)
  return (
    
      <main>
        <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        <Image
          src='/images/header-banner.jpeg'
          alt='learn english'
          fill
        />
      </div>
        <CarouselComponent items={data} title='دوره جامع' />
        <CarouselComponent items={data} title='دوره پادکست' />
        <CarouselComponent items={data} title='دوره جامع' />
 
  
      </main>
 
  )
}
