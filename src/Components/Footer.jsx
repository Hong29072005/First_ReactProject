import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary py-8 text-white font-jost'>
            <div className='max-w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between'>
                <h2 className='text-xl '>CopyRighyt <span>&#169;</span>2023 KH</h2>
                <ul className='flex gap-3'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer