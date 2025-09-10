'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductFilters from "@/components/products/ProductFilters";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect } from "react";

const AllProducts = () => {

    const { products } = useAppContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setFilteredProducts(products);
        setLoading(false);
    }, [products]);

    const handleFilterChange = (filtered) => {
        setFilteredProducts(filtered);
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Navigation Header */}
                    <nav className="mb-6">
                        <ol className="flex items-center space-x-1 text-sm bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700 w-fit">
                            <li className="flex items-center">
                                <a href="/" className="text-gray-300 hover:text-orange-400 transition-all duration-200 flex items-center group">
                                    <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V9l4-4 4 4v8" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li className="text-gray-600 mx-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </li>
                            <li className="text-orange-400 font-semibold flex items-center">
                                <span className="bg-orange-400/10 px-2 py-1 rounded-md">
                                    All Products
                                </span>
                            </li>
                        </ol>
                    </nav>

                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            All Products
                        </h1>
                        <p className="text-gray-400">
                            Browse our complete collection of products
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <aside className="lg:col-span-1">
                            <ProductFilters 
                                products={products} 
                                onFilterChange={handleFilterChange} 
                            />
                        </aside>
                        
                        <main className="lg:col-span-3">
                            {filteredProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-400 text-lg">No products found</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {filteredProducts.map((product, index) => (
                                        <ProductCard key={index} product={product} />
                                    ))}
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;
