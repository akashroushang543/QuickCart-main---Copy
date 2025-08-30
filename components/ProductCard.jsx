import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router } = useAppContext()

    const discountPercentage = product.price > product.offerPrice 
        ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
        : 0;

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="group flex flex-col items-start gap-2 max-w-[220px] w-full cursor-pointer bg-bg-card/50 backdrop-blur-sm border border-neon-blue/50 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:border-neon-blue/60 hover:shadow-neon-blue hover:scale-105 hover-neon"
        >
            {/* Product Image Container with Responsive Aspect Ratio */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-tertiary">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    width={300}
                    height={300}
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
                
                {/* Neon overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Discount badge */}
                {discountPercentage > 0 && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {discountPercentage}% OFF
                    </div>
                )}

                {/* Neon corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Details with Neon Text */}
            <div className="w-full space-y-1 flex flex-col flex-1">
                <p className="text-sm sm:text-base font-semibold text-text-primary truncate group-hover:text-neon-blue transition-colors duration-300">{product.name}</p>
                <p className="text-xs text-text-secondary max-sm:hidden truncate group-hover:text-neon-purple transition-colors duration-300">{product.description}</p>
                
                {/* Rating with neon stars */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <p className="text-xs text-neon-green">{4.5}</p>
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image
                                key={index}
                                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 transition-all duration-300 ${
                                    index < Math.floor(4) 
                                        ? 'filter brightness-0 invert sepia-[1] saturate-[5] hue-rotate-[180deg]' 
                                        : 'opacity-50'
                                } group-hover:scale-110`}
                                src={index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon}
                                alt="star_icon"
                            />
                        ))}
                    </div>
                </div>

                {/* Price Display with Discount */}
                <div className="flex flex-col items-start gap-1 mt-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg sm:text-xl font-bold text-neon-blue">
                            {currency}
                            <span className="text-text-primary group-hover:text-neon-blue transition-colors duration-300">{product.offerPrice}</span>
                        </p>
                        {discountPercentage > 0 && (
                            <span className="text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded">
                                {discountPercentage}% OFF
                            </span>
                        )}
                    </div>
                    {product.price > product.offerPrice && (
                        <p className="text-sm text-text-muted line-through">{currency}{product.price}</p>
                    )}
                </div>

                {/* Buy Now Button at Bottom */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        router.push('/product/' + product._id);
                    }}
                    className="w-full mt-2 px-4 py-2 text-sm font-bold bg-yellow-400 text-gray-900 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                    Buy Now
                </button>
            </div>

            {/* Neon border animation on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-blue/50 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>
    )
}

export default ProductCard