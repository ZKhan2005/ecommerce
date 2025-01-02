"use client";
import { Button } from "@/components/ui/button";
import { Menue } from "@/data";
// import Link from "next/link";
// import { useState } from "react";


// create interface for props type
interface ButtonProps {
  Menue: Menue;
  Text: string;
}

// create interface for send data to localstorage
export interface LocalStorageType {
  item: Menue;
  quantity: number;
}

export default function CartButton({ Menue, Text }: ButtonProps) {
  // item quantity
  const quantity = 1;
  
  // create object and pass two entity for send data to local storage
  const items: LocalStorageType = {
    item: Menue,
    quantity: quantity,
  };


   // State for showing success message
  //  const [message, setMessage] = useState<string | null>(null);

  // create a function call when we want to add item in cart and buy
  const addToCart = (menue: LocalStorageType) => {
    //  cheack already exist data in local storage
    const existingCart = localStorage.getItem("cart");
    // if data is already in localstorage so convert data json to object if data is not in localstorage so create empty array
    const cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if the item already exists in the cart using optional chaining
    const existingItem = cart.find(
      (cartItem: LocalStorageType) => cartItem.item?.id === menue.item.id
    );

    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += menue.quantity;
    } else {
      // If the item doesn't exist, add the new item to the cart
      cart.push(menue);
     
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart); // Check the updated 
    
    // Show the success message
    // setMessage(`${menue.item.name} has been added to your cart!`);

    // // Hide the message after 3 seconds
    // setTimeout(() => {
    //   setMessage(null);
    // }, 3000);

  };

  return (
    <>
      <Button
        className="bg-[#AD343E] w-[100%] text-white hover:bg-[#8d2d35]"
        onClick={() =>  addToCart(items) } >
        {Text}
      </Button>

      {/* {message && (
        <div
          className="mt-4 p-4 text-center bg-green-400  text-green-900 rounded-md shadow-md absolute top-[50%] w-[90%]"
          
        >
          <p className="text-center">{message}</p>
          <Link href={'/cart'} className=" text-xl text-green-950 underline"> Check here</Link>
        </div>
      )} */}
    </>
  );
}

