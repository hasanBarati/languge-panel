import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex justify-between p-2 items-center'>
      <Image alt='logo' width='40' height='40' src='/icons/logo.png' />
      <div className='flex gap-x-2'>
        <p>PH</p>
        <p>NOT</p>
      </div>
    </div>
  )
}
