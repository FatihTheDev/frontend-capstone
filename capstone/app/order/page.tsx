import Image from "next/image"
import pizza from "../assets/pizza.jpg"
import salad from "../assets/salad.jpg"
import spaghetti from "../assets/spaghetti.jpg"
import wings from "../assets/wings.jpg"
import fries from "../assets/fries.jpg"

import water from "../assets/water.jpg"
import sparkling from "../assets/sparkling.jpg"
import coke from "../assets/coke.jpg"
import sprite from "../assets/sprite.jpg"

export default function Order() {
    return (
      <>
        <h1 className="text-3xl text-center mt-4 mb-8">Meals</h1>
        <div className="wrapper flex justify-center items-center">
          <div className="display bg-white w-[80%] max-w-4xl flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
            <ul className="w-full">
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={pizza} alt="Pizza image" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Pizza</h1>
                  <span className="text-green-700 block text-center mt-2">$2.99</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Feel the taste in the air. Pizza is the best that it can be!</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>
                </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={salad} alt="Salad image" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Salad</h1>
                  <span className="text-green-700 block text-center mt-2">$4.99</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Sing a ballad while eating the best salad!</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={spaghetti} alt="Spaghetti image" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Spaghetti</h1>
                  <span className="text-green-700 block text-center mt-2">$3.41</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Here comes the planeee!</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={fries} alt="Fries image" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Fries</h1>
                  <span className="text-green-700 block text-center mt-2">$2.11</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Enjoy the wonderful taste of fries.</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={wings} alt="Chicken Wings" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Chicken Wings</h1>
                  <span className="text-green-700 block text-center mt-2">$9.99</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Collect rings while eating our wings.</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="text-3xl text-center my-8">Drinks</h1>
        <div className="wrapper flex justify-center items-center">
          <div className="display bg-white w-[80%] max-w-4xl flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
            <ul className="w-full">
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={sparkling} alt="Sparkling Water" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Sparkling Water</h1>
                  <span className="text-green-700 block text-center mt-2">$4.00</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Are you not afraid of bubbles? If so, this is for you, g!</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={water} alt="Water" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Water</h1>
                  <span className="text-green-700 block text-center mt-2">$1.00</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Regular water. Nothing more nothing less.</h2>
                  <div className="flex justify-center items-center mt-6">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={coke} alt="Coca-Cola" className="w-64 h-32 mt-3 ml-3 rounded-lg fill-current"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Coca-Cola</h1>
                  <span className="text-green-700 block text-center mt-2">$5.43</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Feel the taste!</h2>
                  <div className="flex justify-center items-center mt-3">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
              <li className="mb-6">
                <div className="bg-gray-200 rounded-lg shadow-md p-4">
                  <Image src={sprite} alt="Sprite" className="w-64 h-32 mt-3 ml-3 rounded-lg"></Image>
                  <h1 className="text-2xl text-center text-yellow-800 mt-4">Sprite</h1>
                  <span className="text-green-700 block text-center mt-2">$3.46</span>
                  <h2 className="text-lg text-center mt-4 text-yellow-600">Fly with all your might like a kite with Sprite.</h2>
                  <div className="flex justify-center items-center mt-3">
                  <button className="bg-yellow-500 px-2 py-2 rounded-lg hover:bg-yellow-300 transition-all duration-500 text-center">Save to preferences</button>
                  </div>                
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
  