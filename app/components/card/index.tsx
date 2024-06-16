


import Image from 'next/image'
import ButtonClient from './button'

function Cart({ children }) {
    console.log(children)
  return <div className=''>{children}</div>
}

function Header({ children }) {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  )
}
function Tag({ children }) {
  return (
    <div>
      <p>{children}</p>
    </div>
  )
}

function Picture({ src, alt, type }) {
  return (
    <Image
      //   className={`Card__image${type ? ' Card__image--' + type : ''}`}
      src={src}
      alt={alt}
      width='150'
      height='150'
    />
  )
}
Cart.Header = Header
Cart.Picture = Picture
Cart.Tag = Tag
Cart.Button = ButtonClient
export default Cart
