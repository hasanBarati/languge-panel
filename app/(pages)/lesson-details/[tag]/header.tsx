"use client"

import { SvgIcon } from '@/app/utils/svgSprite'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'

function Header({ data }: { data: { description?: string } }) {
  const router = useRouter()
  return (
    <div>
      <div style={{ position: 'relative', width: '100vw', height: '50vh' }}>
        <SvgIcon
          icon='prev'
          width={30}
          color={`red`}
          className={' absolute top-0 right-2 z-50'}
          onClick={()=>router.back()}
        />
        <Image src='/images/header-banner.jpeg' alt='learn english' fill />
      </div>
    </div>
  )
}

export default Header
