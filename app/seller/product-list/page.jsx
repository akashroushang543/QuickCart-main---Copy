'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const ProductList = () => {

  const { router, getToken, user } = useAppContext()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSellerProduct = async () => {
    try{
      const token = await getToken()
      const { data } = await axios.get('/api/product/seller-list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (data.success) {
        setProducts(data.products)
        setLoading(false)
      }else {
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      fetchSellerProduct();
    }
  }, [user])

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      {loading ? <Loading /> : <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium text-text-primary">All Product</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-bg-secondary border border-gray-500/20">
          <table className=" table-fixed w-full overflow-hidden">
            <thead className="text-text-primary text-sm text-left bg-bg-primary">
              <tr>
                <th className="w-2/3 md:w-1/4 px-4 py-3 font-medium truncate text-neon-blue">Product</th>
                <th className="w-1/5 px-4 py-3 font-medium truncate max-sm:hidden text-neon-blue">Brand</th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden text-neon-blue">Category</th>
                <th className="px-4 py-3 font-medium truncate text-neon-blue">
                  Price
                </th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden text-neon-blue">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-text-primary">
              {products.map((product, index) => (
                <tr key={index} className="border-t border-gray-500/20 hover:bg-bg-primary/50 transition-colors">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="bg-gray-500/10 rounded p-2">
                      <Image
                        src={product.image[0]}
                        alt="product Image"
                        className="w-16"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <span className="truncate w-full text-text-primary">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden text-text-primary">{product.brand}</td>
                  <td className="px-4 py-3 max-sm:hidden text-text-primary">{product.category}</td>
                  <td className="px-4 py-3 text-text-primary">{product.offerPrice}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <button onClick={() => router.push(`/product/${product._id}`)} className="flex items-center gap-1 px-1.5 md:px-3.5 py-2 bg-gradient-to-r from-neon-blue to-sky-400 text-bg-primary hover:from-sky-400 hover:to-neon-blue transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] rounded-md font-medium text-xs sm:text-sm tracking-wide">
                        View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
      <Footer />
    </div>
  );
};

export default ProductList;