import Image from 'next/image'
import { db } from './db'
import Cart from './components/card'

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
  const data = await fetchData()
  console.log('data ia ', data)
  return (
    <main className=' container '>
      {/* <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        <Image
          src='/images/header-banner.jpeg'
          alt='learn english'
          fill
        />
      </div> */}

      <Cart>
        <Cart.Picture
          src='/images/header-banner.jpeg'
          alt='This is me'
          type='avatar'
        />
        <div>
          <Cart.Header>this is test header</Cart.Header>
          <Cart.Tag>this is test Tag</Cart.Tag>
          <Cart.Button
            // handleClick={()=>console.log("run")}
            text='button text'
          />
        </div>
      </Cart>
    </main>
  )
}
