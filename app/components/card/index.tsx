import Image from 'next/image'
import ButtonClient from './button'
import { ReactNode } from 'react'

function Cart({ children }:{children:ReactNode}) {
  return (
    <div dir='rtl'  className=' rounded-lg  border-2 p-2 flex gap-4  mx-2 [&>*]:text-xsm'>
      {children}
    </div>
  )
}

function Header({ title }: { title: string }) {
  return (
    <div>
      <h2 className=' font-bold  '>{title}</h2>
    </div>
  )
}
function Tag({ tag }: { tag: string }) {
  return <p className=' text-gray-400'>{tag}</p>
}
function Price({ price }: { price: number }) {
  return (
    <div className='mt-2'>
      <p className=' '>{price} تومان</p>
    </div>
  )
}

function Body({ children }:{children:ReactNode}) {
  return <div>{children}</div>
}

function Picture({ src, alt, type }) {
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
Cart.Header = Header
Cart.Picture = Picture
Cart.Tag = Tag
Cart.Button = ButtonClient
Cart.Body = Body
Cart.Price = Price

export default Cart
