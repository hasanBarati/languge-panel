import { fetchLessonDetail, fetchSeasons } from '@/app/actions/lesson-details'
import Header from './header'
import Seasons from './seasons'
import Content from './content'

export default async function LessonDetail({
  params,
}: {
  params: { tag: string }
}) {
  const lessonDetail = await fetchLessonDetail(params.tag)
  const seasonsData = await fetchSeasons(params.tag)

  return (
    <div className=' '>
      <Header data={lessonDetail} />
      <div className='p-4'>
        <Content data={lessonDetail} />
        <hr className='my-4' />
        <Seasons data={seasonsData} />
      </div>
    </div>
  )
}
