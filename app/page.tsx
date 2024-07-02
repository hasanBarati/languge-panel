import CarouselComponent from './components/carosel'
import Header from './components/header'
import { db } from './db'
import { ProductType } from './types'

const fetchData = async (): Promise<ProductType[]> => {
  const restaurants = await db.lessons.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      tag: true,
      tagName:true,
      category:true
    },
  })
  return restaurants
}


export default async function Home() {
  const data= await fetchData()

  const comprehensiveCourse=data.filter(item=>item.category ==="english")
  const podcastCourse=data.filter(item=>item.category ==="podcast")

  return (
    <main>
        <Header />
      {/* <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        <Image
          src='/images/header-banner.jpeg'
          alt='learn english'
          fill
        />
      </div> */}
      <CarouselComponent items={comprehensiveCourse} title='دوره جامع' />
      <CarouselComponent items={podcastCourse} title='دوره پادکست' />
      {/* <CarouselComponent items={data} title='دوره جامع' /> */}
    </main>
  )
}
