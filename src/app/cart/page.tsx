"use client";
import { useEffect, useState } from "react";
import { LocalStorageType } from "../components/addCartButton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cart () {
    // local storage data store after object converting
  const [cartItem, setCartItem] = useState<LocalStorageType[]>([]);
  const [confirmOrder , setConfirmOrder] = useState<boolean>(false)

 

  // Load cart items from localStorage only once when the component mounts
  useEffect(() => {
    
  // store data from localStorage
  const dataFromLocalStorage = localStorage.getItem("cart");
    if (dataFromLocalStorage) {
      setCartItem(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  // remove item from cart
  const handleRemove = (id: number) => {
    const updatedCart = cartItem.filter((item) => item.item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to increase or decrease the quantity of a specific item
  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cartItem.map((item) =>
      item.item.id === id
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCartItem(updatedCart); // Update state with the new quantities
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };


// calculate items total
  const calculateSubtotal = () => { 
    const amount = cartItem.reduce(
      (total, item) => total + item.item.price * item.quantity,  0
    );
    return amount; 
  };
  
  // shipping cost
  const SHIPPING_COST = 150 
  // total cost
  const total = calculateSubtotal() + SHIPPING_COST;
  
  

  const OrderConfirm = ()=>{
    setConfirmOrder(true)
    localStorage.clear()
}


  return (
    <main className=" h-full w-full flex justify-center">
        {cartItem.length > 0 ? (
          <> 
      <section className={`h-auto w-[90%] my-12 flex flex-col justify-center px-5 ${confirmOrder ? 'hidden' : 'block'}`}>
        <table className="w-full ">
          <thead>
            <tr className="bg-[#4d0b94]">
              <th scope="col" className=" p-4 text-xl text-white ">
                Product
              </th>
              <th scope="col" className=" p-3  text-white">
                Price
              </th>
              <th scope="col" className=" p-3 text-white">
                Quantity
              </th>
              <th scope="col" className="p-3 text-white">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr key={item.item.id} className="border-b-2 border-[#6d0687]">
                {/* product  */}
                <td className="flex flex-col sm:flex-row  justify-center sm:gap-6 gap-3 py-5">
                  <Image
                    src={item.item.image}
                    alt={item.item.name}
                    height={100}
                    width={150}
                    className="rounded-md"
                  />

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0b0b0b] ml-3 ">
                      {item.item.name}
                    </h3>
                    <button
                      onClick={() => handleRemove(item.item.id)}
                      className="text-red-700 hover:text-[#56026f]  ml-3 transition duration-200 underline "
                    >
                      Remove
                    </button>
                  </div>
                </td>
                {/* product Price  */}
                <td className="text-center font-bold">{item.item.price}</td>
                {/* product quantity  */}

                <td>
                  <div className="flex items-center sm:w-32 w-20 border border-[#580486] overflow-hidden">
                    <button
                      className="sm:px-3 px-2 font-bold w-full py-1 bg-[#5f037b] hover:bg-[#18a2a7] text-white"
                      onClick={() => handleQuantityChange(item.item.id, false)}
                    >
                      -
                    </button>
                    <span className="sm:px-6 px-2 py-1">{item.quantity}</span>

                    <button
                      onClick={() => handleQuantityChange(item.item.id, true)}
                      className="sm:px-3 px-2 font-bold w-full py-1 bg-[#530273] hover:bg-[#530478]  text-white"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="text-center font-bold">
                  {(item.item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          
          </tbody>
          <tfoot >
          <tr>
              <td colSpan={2} className='text-end p-3'>
                SubTotal
              </td>
              <td colSpan={3} className=" text-end  p-3" > {Number(calculateSubtotal()).toFixed(2)}</td>
            </tr>

            <tr>
              <td colSpan={2} className='text-end p-3'>
              Shipping
              </td>
              <td colSpan={3} className=" text-end p-3" > {SHIPPING_COST.toFixed(2)}</td>
            </tr>
            <tr >
              <td colSpan={2} className='text-end  p-3'>
                Total
              </td>
              <td colSpan={3} className=" text-end p-3" > {total.toFixed(2)}</td>
            </tr>          
          </tfoot>
          
        </table>
        <Button variant="destructive"  className="bg-[#51067c]  text-white hover:bg-[#400178] font-bold text-xl " onClick={()=> OrderConfirm()}>Confirm Order</Button>
      </section>
      {confirmOrder ?
      <section className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-[#5d0286] mb-4">✅ Order Confirmed!</h1>
        <h2 className="text-lg text-gray-700 mb-6">
          🎉 Your order has been successfully placed. Thank you for shopping with us!
        </h2>
        <Button asChild className="bg-[#590694] text-white px-6 py-2 rounded hover:bg-[#4e0371]">
          <Link href="/menue">Continue Shopping</Link>
        </Button>
      </div>
    </section>
    
      :''}
      </>
      )
      
        
      :(

        <section className="h-screen flex justify-center items-center ">
        <div className="text-center max-w-lg w-full  shadow-lg rounded-xl py-6 px-4 space-y-6">
          <h2 className="text-[#6a068f]  font-extrabold text-2xl ">
            🛒 No items in the cart
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            {`Looks like you haven't added anything yet.` }
          </p>
          <Link
            href="/menue"
            className="inline-block bg-[#470467]  text-white font-medium py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-[#6309b1]  transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
      

      )}
    </main>
  );
}
