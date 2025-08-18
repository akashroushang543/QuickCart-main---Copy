'use client'
import React, { useEffect, useState } from "react";
import { assets, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/seller/Footer";
import Loading from "@/components/Loading";

const ProductList = () => {

  const { router } = useAppContext()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData)
    setLoading(false)
  }

  useEffect(() => {
    fetchSellerProduct();
  }, [])

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      {loading ? <Loading /> : <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium text-text-primary">All Product</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className=" table-fixed w-full overflow-hidden">
            <thead className="text-text-primary text-sm text-left">
              <tr>
                <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium truncate text-text-secondary">Product</th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden text-text-secondary">Category</th>
                <th className="px-4 py-3 font-medium truncate text-text-secondary">
                  Price
                </th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden text-text-secondary">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-text-primary">
              {products.map((product, index) => (
                <tr key={index} className="border-t border-gray-500/20">
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
                  <td className="px-4 py-3 max-sm:hidden text-text-primary">{product.category}</td>
                  <td className="px-4 py-3 text-text-primary">${product.offerPrice}</td>
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