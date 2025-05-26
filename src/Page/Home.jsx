import axios from "axios"
import { useEffect, useState } from "react"
import Cart from "../Components/Cart"


const Home = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    const fectData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products?limit=8')
        setdata(res.data)
        console.log(res.data)
      } catch (error) {
        console.log("Error", error)

      }
    }
    fectData()
  },[])
  return (
    <>
      <div className="font-jost ">
        <div className=" bg-[url('./Pic.jpg')] bg-center bg-cover flex items-center h-screen px-4 lg:px-40">
          <div>
            <h3 className="font-bold text-2xl text-white">New Collection</h3>
            <h1 className="font-bold text-5xl mt-5 text-white">Luxury without <br /> Labels</h1>
            <p className="mt-5 text-white">Explore New-In Product and best Sellers</p>
            <button className="mt-5 py-2 px-6 bg-primary text-white rounded-lg hover:bg-white hover:text-primary">
              View Collection
            </button>
          </div>
        </div>
      </div>

      {/* best seller */}

      <div  className="mt-20 max-w-[90%] lg:max-w-5xl mx-auto font-jost">
        <h1 className="text-center text-2xl font-bold">Best Sellers</h1>
        <p className="text-center text-primary">Explore Our Best Seller Products</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            data.map(item => (
              <Cart key={item.id} data={item} />
            ))
          }




        </div>
      </div>
    </>
  )
}

export default Home