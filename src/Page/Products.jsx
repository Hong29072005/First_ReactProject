import axios from "axios"
import Cart from "../Components/Cart"
import { useEffect, useState } from "react"
const Products = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    const fectData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setdata(res.data)
        console.log(res.data)
      } catch (error) {
        console.log("Error", error)

      }
    }
    fectData()
  }, [])

  return (
    <div className="mt-20 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
      <h1 className='text-center text-2xl mt-2'>All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          data.map(item => (
            <Cart key={item.id} data={item} />

          ))
        }

      </div>

    </div>
  )
}

export default Products