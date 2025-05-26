import React from 'react'

const About = () => {
  return (
    <div className='max-w-[90%] lg:max-w-5xl mx-auto mt-32'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 font-jost'>
        <img className='rounded-lg' src="./about us.jpg" alt="" />
        <div>
          <h1 className='text-3xl font-bold'>Our Story</h1>
          <p className='mt-5 text-lg '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Maxime possimus voluptatibus quidem dolore, aliquid obcaecati
            corporis natus doloremque et, consequuntur aliquam officia odio
            consectetur optio minus? Nobis illo dolor tempore quo commodi
            officia similique labore, ad alias incidunt, nisi consequatur
            delectus? Quo consequuntur blanditiis in nemo magnam maiores
            excepturi odio.</p>
        </div>
      </div>

    </div>
  )
}

export default About