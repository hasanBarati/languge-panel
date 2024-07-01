import { fetchLessonDetail, fetchSeasons } from '@/app/actions/lesson-details'
import Header from './header'
import Seasons from './seasons'


export default async function LessonDetail({
  params,
}: {
  params: { tag: string }
}) {
  const lessonDetail = await fetchLessonDetail(params.tag)
  const seasonsData = await fetchSeasons(params.tag)

  return (
    <div className=' p-4'>
      <Header data={lessonDetail} />
      <hr className='my-4'/>
      <Seasons data={seasonsData} />
    </div>
  )
}
