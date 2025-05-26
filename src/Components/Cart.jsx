import React from 'react'
import { Link } from 'react-router'
const Cart = (props) => {
    const {data}=props
    return (
        <Link to={`/productDetail/${data.id}`} className="my-10 border border-gray-200 ">
            <figure className='h-[3x60px] lg:h-[260px]'>
                <img className="px-2 w-full h-full object-cover" src={data.image} alt="" />
            </figure>
            <div className="p-2">
                <h3 className="text-xl line-clamp-1">{data.title}</h3>
                <p className='text-red-500'>${data.price}</p>
            </div>
        </Link>

    )
}

export default Cart