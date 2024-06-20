import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 '>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Catr Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis doloribus delectus ad 
            dignissimos similique voluptas necessitatibus ipsa reiciendis, fuga libero hic officia, 
            nulla placeat omnis nemo! Tempore repudiandae obcaecati quo?Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Odit facilis, dicta totam architecto, placeat explicabo vitae 
            id vero ipsa quia cumque ea omnis voluptatem nemo quibusdam. Alias repellendus deserunt vero?</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nam? Deleniti voluptas
             explicabo doloribus sed ipsa magni rem placeat repellendus ipsum error blanditiis iste 
             corporis quis, minima perspiciatis quos cumque. Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Sint enim suscipit, ullam dolor neque, porro eos voluptatum facere natus 
             libero fugit maxime nihil ratione quaerat optio dolores non odit veritatis!</p>
      </div>
    </div>
  )
}

export default ProductDescription
