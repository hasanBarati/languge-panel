import SeasonCart from '@/app/components/season-card'
import { Season } from '@/app/types'
import Link from 'next/link'

function Seasons({ data }: { data: Season[] }) {
  return (
    <>
      <h2>فصل ها</h2>
      {data.map((item, index) => (
        <Link
          className='flex flex-col gap-4 mt-4'
          href={`/lesson-details/${item.name}`}
          key={index}
        >
          <SeasonCart>
            <SeasonCart.Picture
              src='/images/header-banner.jpeg'
              alt='This is me'
            />
            <SeasonCart.Body>
              <SeasonCart.Header title={item.name} />
              <SeasonCart.Tag qunatity={item.qunatity} title={'فایل'} />
            </SeasonCart.Body>
          </SeasonCart>
        </Link>
      ))}
    </>
  )
}

export default Seasons
