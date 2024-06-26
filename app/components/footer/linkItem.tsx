'use client'
import Link from 'next/link'
import React, { Children } from 'react'
import { LinksData } from './linksData'
import { SvgIcon } from '@/app/utils/svgSprite'
import { usePathname } from 'next/navigation'

export default function LinkItem() {
  const pathname = usePathname()

  return (
    <div className='flex justify-between gap-4 p-2 items-center  h-footerHeight w-svw border border-t-2 sticky  bottom-0 z-50 bg-white  '>
      {Children.toArray(
        LinksData.map(link => (
          <Link href={link.href} className='flex flex-col items-center text-sm'>
            <SvgIcon
              icon={link.icon}
              width={30}
              color={`${pathname === link?.href ? 'red' : ''}`}
            />
            {link.title}
          </Link>
        )),
      )}
    </div>
  )
}
