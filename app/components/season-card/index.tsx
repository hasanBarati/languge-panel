import Image from 'next/image'
import { ReactNode } from 'react'

function SeasonCart({ children }:{children:ReactNode}) {
  return (
    <div dir='rtl'  className=' rounded-lg  border-2 p-2 flex gap-4  mx-2 [&>*]:text-xsm'>
      {children}
    </div>
  )
}

function Header({ title }: { title: string }) {
  return (
    <div>
      <p className=' font-bold  '>{title}</p>
    </div>
  )
}
function Tag({ qunatity,title }: { qunatity: number,title:string }) {
  return <p className=' text-gray-400'>{qunatity} {title}</p>
}

function Body({ children }:{children:ReactNode}) {
  return <div className='flex flex-col justify-center gap-2'>{children}</div>
}

function Picture({ src, alt }:{src:string,alt:string}) {
  return (
    <Image
      //   className={`Card__image${type ? ' Card__image--' + type : ''}`}
      src={src}
      alt={alt}
      width='100'
      height='100'
    />
  )
}
SeasonCart.Header = Header
SeasonCart.Picture = Picture
SeasonCart.Tag = Tag

SeasonCart.Body = Body


export default SeasonCart
