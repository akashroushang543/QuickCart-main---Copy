'use client'
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddProduct = () => {

  const { getToken } = useAppContext();

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Earphone');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('offerPrice', offerPrice);
    formData.append('category', category);
    formData.append('brand', brand);
    formData.append('stock', stock);

    for (let i =0; i<files.length; i++) {
      formData.append('image', files[i]);
    }

    try {
      const token = await getToken()
      const { data } = await axios.post('/api/product/add', formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (data.success) {
        toast.success(data.message)
        setName('');
        setDescription('');
        setPrice('');
        setOfferPrice('');
        setCategory('Earphone');
        setBrand('');
        setStock('');
        setFiles([]);
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
   
  };

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">

            {[...Array(4)].map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input onChange={(e) => {
                  const updatedFiles = [...files];
                  updatedFiles[index] = e.target.files[0];
                  setFiles(updatedFiles);
                }} type="file" id={`image${index}`} hidden />
                <Image
                  key={index}
                  className="max-w-24 cursor-pointer"
                  src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                  alt=""
                  width={100}
                  height={100}
                />
              </label>
            ))}

          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium text-text-secondary" htmlFor="product-name">
            Product Name
          </label>
          <input
            id="product-name"
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label
            className="text-base font-medium text-text-secondary"
            htmlFor="product-description"
          >
            Product Description
          </label>
          <textarea
            id="product-description"
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none bg-bg-secondary text-text-primary placeholder:text-text-muted"
            placeholder="Type here"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium text-text-secondary" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue={category}
            >
              <option value="Earphone">Earphone</option>
              <option value="Prebuilt PC">Prebuilt PC</option>
              <option value="Air Cooler">Air Cooler</option>
              <option value="Cabinet">Cabinet</option>
              <option value="Cabinet Fans">Cabinet Fans</option>
              <option value="Cables">Cables</option>
              <option value="Converters / Adapters">Converters / Adapters</option>
              <option value="Game Controllers">Game Controllers</option>
              <option value="Gaming Chair">Gaming Chair</option>
              <option value="Graphics Card">Graphics Card</option>
              <option value="HDD">HDD</option>
              <option value="Headphones">Headphones</option>
              <option value="Keyboard">Keyboard</option>
              <option value="Liquid Cooler">Liquid Cooler</option>
              <option value="Microphone">Microphone</option>
              <option value="Monitor">Monitor</option>
              <option value="Motherboard">Motherboard</option>
              <option value="Mouse">Mouse</option>
              <option value="Mouse Pads">Mouse Pads</option>
              <option value="Power Supply">Power Supply</option>
              <option value="Processor">Processor</option>
              <option value="RAM">RAM</option>
              <option value="SSD">SSD</option>
              <option value="UPS">UPS</option>
              <option value="Powerbanks">Powerbanks</option>
              <option value="Laptop Adjustable Stand">Laptop Adjustable Stand</option>
              <option value="Speakers">Speakers</option>
              <option value="Virtual Reality (VR)">Virtual Reality (VR)</option>
              <option value="Accessories">Accessories</option>
              <option value="Audio Mixing Solution">Audio Mixing Solution</option>
              <option value="Webcam">Webcam</option>
              <option value="Capture Card">Capture Card</option>
              <option value="Stream Deck">Stream Deck</option>
              <option value="Prompter">Prompter</option>
              <option value="Thermal Paste">Thermal Paste</option>
              <option value="Selfie Stick">Selfie Stick</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium text-text-secondary" htmlFor="product-price">
              Product Price
            </label>
            <input
              id="product-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium text-text-secondary" htmlFor="offer-price">
              Offer Price
            </label>
            <input
              id="offer-price"
              type="number"
              placeholder="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium text-text-secondary" htmlFor="brand">
              Brand
            </label>
            <input
              id="brand"
              type="text"
              placeholder="Brand name"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-32">
            <label className="text-base font-medium text-text-secondary" htmlFor="stock">
              Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder="0"
              min="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 bg-bg-secondary text-text-primary placeholder:text-text-muted"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
              required
            />
          </div>
        </div>
        <button type="submit" className="px-8 py-2.5 bg-gradient-to-r from-neon-purple to-pink-500 text-bg-primary font-medium rounded hover:from-pink-500 hover:to-neon-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(123,44,191,0.5)] tracking-wide">
          ADD
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default AddProduct;