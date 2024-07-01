import Image from "next/image"

export default function LessonDetailLayout({
  children,

}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  return (
    <>
      <div className=''>
         <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        {/* <Image
          src='/images/header-banner.jpeg'
          alt='learn english'
          fill
        /> */}
      </div>
        {children}
      </div>
    </>
  )
}
