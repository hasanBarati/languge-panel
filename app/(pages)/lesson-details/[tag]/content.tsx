


import React from 'react'

function Content({ data }: { data: { description?: string } }) {
  return (
    <div>
      <h2 className='text-md font-bold mb-4 '>توضیحات</h2>
      <p>{data.description}</p>
    </div>
  )
}

export default Content
