import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
const ProductDetail = () => {
    const [plus , setPlus] = useState(0)

    const [data, setdata] = useState([])
    const round = useParams()
    console.log(round)

    useEffect(() => {
        const fectData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${round.id}`)
                setdata(res.data)
                console.log(res.data)
            } catch (error) {
                console.log("Error", error)

            }
        }
        fectData()
    })
    return (
        <div className='mt-1'>
            <div className='max-w-[90%] lg:max-w-6xl mx-auto font-jost'>
                <ul className='flex items-center '>
                    <li><Link to="/">Home </Link></li>
                    <li><a href=""><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </span></a></li>
                    <li><Link to="/products">Products</Link ></li>
                    <li><a href=""><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </span></a></li>
                    <li ><a className='font-bold' href="">Men Clothes</a></li>
                </ul>

                <div className='mt-20 '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                        
                        <img className='w-full h-full lg:px-24' src={data.image} alt="" />

                        <div>
                            <h3 className='font-bold text-xl'>Men clothing</h3>
                            <h1 className='font-bold text-3xl mt-2'>{data.title}</h1>
                            <h1 className='font-bold text-3xl mt-2'>${data.price}</h1>
                            <div className='flex items-center gap-4'>
                                <div className='flex gap-2 items-center mt-4'>
                                    <span onClick={() => setPlus(plus - 1)} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
                                    </svg>
                                    </span>
                                    <h3>{plus}</h3>
                                    <span onClick={() => setPlus(plus + 1)} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                    </svg>
                                    </span>
                                </div>
                                <button className='py-2 px-6 bg-blue-400  mt-4 rounded-lg text-white'>Add to card</button>
                                <button className='py-2 px-6 bg-yellow-400 mt-4 rounded-lg text-white'> Buy Now</button>
                                

                            </div>
                            <p className='mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima qui voluptate pariatur nesciunt voluptas aliquid natus reprehenderit ipsa dolores! Dolorem maxime eveniet qui aperiam fuga beatae cumque. Mollitia commodi alias consequuntur atque, saepe possimus rerum consequatur, optio maxime provident sint modi voluptatem officia. Culpa maiores fugiat animi et ipsa?</p>

                        </div>





                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail