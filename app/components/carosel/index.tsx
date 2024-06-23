'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cart from '../card'
import { ProductType } from '@/app/types'
import Link from 'next/link'

const CarouselComponent = ({
  items,
  title,
}: {
  items: ProductType[]
  title?: string
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    rtl: true,
    // centerPadding: '50px',

    className: 'center',
    centerMode: true,
  }

  return (
    <div className='p-2'>
      <h2 className='text-md font-bold mb-4 mx-4'>{title}</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Link href={`/lesson-details/${item.tag}`} key={index}>
            <Cart>
              <Cart.Picture
                src='/images/header-banner.jpeg'
                alt='This is me'
                type='avatar'
              />
              <Cart.Body>
                <Cart.Tag tag={item.tag} />
                <Cart.Header title={item.name} />
                <Cart.Price price={item.price} />
              </Cart.Body>
            </Cart>
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselComponent
