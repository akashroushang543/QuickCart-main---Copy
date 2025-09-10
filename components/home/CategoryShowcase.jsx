// "use client";

// import Link from 'next/link';
// import Image from 'next/image'; 
// import { assets } from "../../assets/assets";

// const categories = [
//   { name: "Earphone", image: assets.apple_earphone_image },
//   { name: "Prebuilt PC", image: assets.asus_laptop_image },
//   { name: "Air Cooler", image: assets.header_macbook_image },
//   { name: "Cabinet", image: assets.macbook_image },
//   { name: "Cabinet Fans", image: assets.samsung_s23phone_image },
//   { name: "Cables", image: assets.bose_headphone_image },
//   { name: "Converters / Adapters", image: assets.cannon_camera_image },
//   { name: "Game Controllers", image: assets.playstation_image },
//   { name: "Gaming Chair", image: assets.header_macbook_image },
//   { name: "Graphics Card", image: assets.macbook_image },
//   { name: "HDD", image: assets.samsung_s23phone_image },
//   { name: "Headphones", image: assets.headban },
//   { name: "Keyboard", image: assets.apple_earphone_image },
//   { name: "Liquid Cooler", image: assets.asus_laptop_image },
//   { name: "Microphone", image: assets.cannon_camera_image },
//   { name: "Monitor", image: assets.header_macbook_image },
//   { name: "Motherboard", image: assets.macbook_image },
//   { name: "Mouse", image: assets.playstation_image },
//   { name: "Mouse Pads", image: assets.samsung_s23phone_image },
//   { name: "Power Supply", image: assets.bose_headphone_image },
//   { name: "Processor", image: assets.apple_earphone_image },
//   { name: "RAM", image: assets.asus_laptop_image },
//   { name: "SSD", image: assets.cannon_camera_image },
//   { name: "UPS", image: assets.header_macbook_image },
//   { name: "Powerbanks", image: assets.macbook_image },
//   { name: "Laptop Adjustable Stand", image: assets.playstation_image },
//   { name: "Speakers", image: assets.samsung_s23phone_image },
//   { name: "Virtual Reality (VR)", image: assets.bose_headphone_image },
//   { name: "Accessories", image: assets.apple_earphone_image },
//   { name: "Audio Mixing Solution", image: assets.asus_laptop_image },
//   { name: "Webcam", image: assets.cannon_camera_image },
//   { name: "Capture Card", image: assets.header_macbook_image },
//   { name: "Stream Deck", image: assets.macbook_image },
//   { name: "Prompter", image: assets.playstation_image },
//   { name: "Thermal Paste", image: assets.samsung_s23phone_image },
//   { name: "Selfie Stick", image: assets.bose_headphone_image },
// ];

// export default function CategoryShowcase() {
//   return (
//     <section className="py-16 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-white">
//           Browse by Category
//         </h2>
        
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {categories.map((category) => {
//             const encodedCategory = encodeURIComponent(category.name);
//             return (
//               <Link
//                 key={category.name}
//                 href={`/category/${encodedCategory}`}
//                 className="group relative overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-square relative">
//                   <Image
//                     src={category.image}
//                     alt={category.name} 
//                     fill // 3. Use the 'fill' prop to make the image cover its parent container
//                     sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw" // Recommended for performance
                   
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center items-end">
//                     <span className="bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-orange-500 transition-all duration-300">
//                         {category.name}
//                     </span>
//                 </div>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from 'next/link';
import Image from 'next/image';
import { assets } from "../../assets/assets";

const categories = [
  { name: "Earphone", image: assets.earphone },
  { name: "Prebuilt PC", image: assets.pc },
  { name: "Air Cooler", image: assets.air_cooler },
  { name: "Cabinet", image: assets.cabinet },
  { name: "Cabinet Fans", image: assets.cabinet_fan },
  { name: "Cables", image: assets.cable },
  { name: "Converters / Adapters", image: assets.adapter },
  { name: "Game Controllers", image: assets.game_controller },
  { name: "Gaming Chair", image: assets.header_macbook_image },
  { name: "Graphics Card", image: assets.macbook_image },
  { name: "HDD", image: assets.samsung_s23phone_image },
  { name: "Headphones", image: assets.headban },
  { name: "Keyboard", image: assets.apple_earphone_image },
  { name: "Liquid Cooler", image: assets.asus_laptop_image },
  { name: "Microphone", image: assets.cannon_camera_image },
  { name: "Monitor", image: assets.header_macbook_image },
  { name: "Motherboard", image: assets.macbook_image },
  { name: "Mouse", image: assets.mouse },
  { name: "Mouse Pads", image: assets.samsung_s23phone_image },
  { name: "Power Supply", image: assets.bose_headphone_image },
  { name: "Processor", image: assets.apple_earphone_image },
  { name: "RAM", image: assets.asus_laptop_image },
  { name: "SSD", image: assets.cannon_camera_image },
  { name: "UPS", image: assets.header_macbook_image },
  { name: "Powerbanks", image: assets.macbook_image },
  { name: "Laptop Adjustable Stand", image: assets.playstation_image },
  { name: "Speakers", image: assets.samsung_s23phone_image },
  { name: "Virtual Reality (VR)", image: assets.bose_headphone_image },
  { name: "Accessories", image: assets.apple_earphone_image },
  { name: "Audio Mixing Solution", image: assets.asus_laptop_image },
  { name: "Webcam", image: assets.cannon_camera_image },
  { name: "Capture Card", image: assets.header_macbook_image },
  { name: "Stream Deck", image: assets.macbook_image },
  { name: "Prompter", image: assets.playstation_image },
  { name: "Thermal Paste", image: assets.samsung_s23phone_image },
  { name: "Selfie Stick", image: assets.bose_headphone_image },
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const encodedCategory = encodeURIComponent(category.name);
            return (
              <Link
                key={category.name}
                href={`/category/${encodedCategory}`}
                className="group relative overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 17vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* --- MODIFIED SECTION START --- */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-1.5 flex justify-center items-end">
                      <span className="bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 group-hover:bg-orange-500 transition-all duration-300">
                          {category.name}
                      </span>
                  </div>
                  {/* --- MODIFIED SECTION END --- */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

