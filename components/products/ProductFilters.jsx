"use client";

import { useState, useEffect } from 'react';

export default function ProductFilters({ products, onFilterChange }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [brands, setBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const uniqueBrands = [...new Set(products.map(product => product.brand))].sort();
    setBrands(uniqueBrands);
  }, [products]);

  useEffect(() => {
    let filteredProducts = [...products];

    // Brand filter
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }

    // Discount percentage filter
    if (discountPercentage > 0) {
      filteredProducts = filteredProducts.filter(product => {
        if (product.price && product.offerPrice && product.price > product.offerPrice) {
          const discount = ((product.price - product.offerPrice) / product.price) * 100;
          return discount >= discountPercentage;
        }
        return false;
      });
    }

    // Price range filter
    if (priceRange.min !== '') {
      filteredProducts = filteredProducts.filter(product => 
        product.offerPrice >= parseFloat(priceRange.min)
      );
    }
    if (priceRange.max !== '') {
      filteredProducts = filteredProducts.filter(product => 
        product.offerPrice <= parseFloat(priceRange.max)
      );
    }

    // Sorting
    filteredProducts.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.offerPrice;
          bValue = b.offerPrice;
          break;
        case 'rating':
          aValue = a.rating || 0;
          bValue = b.rating || 0;
          break;
        case 'name':
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    onFilterChange(filteredProducts);
  }, [selectedBrands, discountPercentage, priceRange, sortBy, sortOrder, products]);

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setDiscountPercentage(0);
    setPriceRange({ min: '', max: '' });
    setSortBy('name');
    setSortOrder('asc');
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          Clear All
        </button>
      </div>
      
      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Brands</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand, index) => (
            <label key={brand || `brand-${index}`} className="flex items-center cursor-pointer hover:text-blue-400 transition-colors">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-300">{brand || 'Unknown'}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Price Range</h4>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Discount Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Discount %</h4>
        <select
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(parseInt(e.target.value))}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="0">All Items</option>
          <option value="10">10% or more</option>
          <option value="20">20% or more</option>
          <option value="30">30% or more</option>
          <option value="40">40% or more</option>
          <option value="50">50% or more</option>
          <option value="60">60% or more</option>
          <option value="70">70% or more</option>
        </select>
      </div>

      {/* Sort Options */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Sort By</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-sm focus:outline-none focus:border-blue-500 mb-2"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}