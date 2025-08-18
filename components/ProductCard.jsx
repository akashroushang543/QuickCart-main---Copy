import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router } = useAppContext()

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="group flex flex-col items-start gap-2 max-w-[220px] w-full cursor-pointer bg-bg-card/50 backdrop-blur-sm border border-neon-blue/10 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:border-neon-blue/30 hover:shadow-neon-blue hover:scale-105 hover-neon"
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
                
                {/* Heart icon with neon styling */}
                <button className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-gradient-to-r from-neon-pink to-pink-400 backdrop-blur-sm rounded-full border border-transparent hover:from-pink-400 hover:to-neon-pink transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,20,147,0.5)]">
                    <Image
                        className="h-3 w-3 sm:h-4 sm:w-4 filter brightness-0 invert"
                        src={assets.heart_icon}
                        alt="heart_icon"
                    />
                </button>

                {/* Neon corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Details with Neon Text */}
            <div className="w-full space-y-1">
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

                {/* Price and Buy Button - Mobile responsive */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full pt-1 sm:pt-2 gap-1 sm:gap-2">
                    <div className="flex-shrink-0">
                        <p className="text-base sm:text-lg font-bold text-neon-blue">
                            {currency}
                            <span className="text-text-primary group-hover:text-neon-blue transition-colors duration-300">{product.offerPrice}</span>
                        </p>
                        {product.originalPrice > product.offerPrice && (
                            <p className="text-xs text-text-muted line-through">{currency}{product.originalPrice}</p>
                        )}
                    </div>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push('/product/' + product._id);
                        }}
                        className="hidden sm:block w-full sm:w-auto px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium border-2 border-transparent bg-gradient-to-r from-neon-purple to-pink-500 text-bg-primary hover:from-pink-500 hover:to-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,44,191,0.5)] whitespace-nowrap"
                    >
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Neon border animation on hover */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-blue/50 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
        </div>
    )
}

export default ProductCard