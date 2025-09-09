import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const OrderSummary = () => {

  const { currency, router, getCartCount, getCartAmount, getToken, user, cartItems, setCartItems, products } = useAppContext()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    try{
    const token = await getToken()
    const {data} = await axios.get('api/user/get-address', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (data.success) {
      setUserAddresses(data.addresses)
      if (data.addresses.length > 0) {
        setSelectedAddress(data.addresses[0])
      }
    }else{
      toast.error(data.message)
    }
    }catch(error){
      toast.error(error.message)
    }
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const calculateProductDiscount = () => {
    let totalDiscount = 0;
    for (const itemId in cartItems) {
      const product = products.find(p => p._id === itemId);
      if (product && product.price > product.offerPrice) {
        const discountPerItem = product.price - product.offerPrice;
        totalDiscount += discountPerItem * cartItems[itemId];
      }
    }
    return Math.floor(totalDiscount * 100) / 100;
  };

  const applyPromoCode = async () => {
    if (!promoCode.trim()) {
      toast.error('Please enter a promo code');
      return;
    }
    
    try {
      const token = await getToken();
      const { data } = await axios.post('/api/promo/validate', {
        code: promoCode,
        amount: getCartAmount()
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (data.success) {
        setPromoDiscount(data.discount);
        toast.success(`Promo code applied! ${data.discount}% discount`);
      } else {
        toast.error(data.message || 'Invalid promo code');
      }
    } catch (error) {
      toast.error('Failed to apply promo code');
    }
  };

  const createOrder = async () => {
    try{
      if(!selectedAddress){
        toast.error('Please select an address')
        return
      }
      let cartItemsArray = Object.keys(cartItems).map((key) => {
        return {
          product: key,
          quantity: cartItems[key],
        }
      })
      cartItemsArray = cartItemsArray.filter(item => item.quantity > 0)
      if (cartItemsArray.length === 0) {
        toast.error('Please add items to cart')
      
      }
      const token = await getToken()
      const { data } = await axios.post('/api/order/create', {
        items: cartItemsArray,
        address: selectedAddress._id,
        promoCode: promoCode,
        promoDiscount: promoDiscount
      },{
        headers: {Authorization: `Bearer ${token}`}
      })
      if (data.success){
        toast.success(data.message)
        setCartItems({})
        setPromoCode('')
        setPromoDiscount(0)
        router.push('/order-placed')

      }else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)

    }
  }

  useEffect(() => {
    if (user){
      fetchUserAddresses();
    }
    }, [user])

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">
      <h2 className="text-xl md:text-2xl font-medium text-text-primary">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-text-secondary block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-bg-secondary text-text-primary focus:outline-none border border-gray-500/30"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-base font-medium uppercase text-text-secondary block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-grow w-full outline-none p-2.5 text-text-primary bg-bg-secondary border border-gray-500/30 placeholder:text-text-muted"
            />
            <button 
              onClick={applyPromoCode}
              className="bg-gradient-to-r from-neon-orange to-orange-500 text-bg-primary px-9 py-2 hover:from-orange-500 hover:to-neon-orange transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,149,0,0.5)] rounded font-medium tracking-wide">
              Apply
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-500/30 pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Subtotal ({getCartCount()} items)</span>
            <span className="text-text-primary">{currency}{getCartAmount()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Discount</span>
            <span className="text-green-400">-{currency}{((calculateProductDiscount() + (getCartAmount() * promoDiscount / 100)).toFixed(2))}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Shipping</span>
            <span className="text-text-primary">{currency}50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Tax (2%)</span>
            <span className="text-text-primary">{currency}{Math.round(getCartAmount() * 0.02)}</span>
          </div>
          <div className="flex justify-between text-lg font-medium border-t border-gray-500/30 pt-2">
            <span className="text-text-primary">Total</span>
            <span className="text-text-primary">{currency}{Math.round(getCartAmount() * 1.02 + 50 - calculateProductDiscount() - (getCartAmount() * promoDiscount / 100))}</span>
          </div>
        </div>
        
        <button onClick={createOrder} className="w-full bg-gradient-to-r from-neon-orange to-orange-500 text-bg-primary py-3 mt-5 hover:from-orange-500 hover:to-neon-orange transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,149,0,0.5)] rounded font-medium tracking-wide">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;