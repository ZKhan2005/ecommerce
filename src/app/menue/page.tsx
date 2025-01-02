import { Menue } from "@/data";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import CartButton from "@/app/components/addCartButton";

export default async function MenuePage() {
  const req = await fetch(`https://milestone-03-e-commerce-website.vercel.app/api/breakfast`,{cache : "no-store"});
  const res: Menue[] = await req.json();
  const dishes = await fetch(`https://milestone-03-e-commerce-website.vercel.app/api/dishes`,{cache : "no-store"})
  const disheRes : Menue[]=await dishes.json();
  const drinks = await fetch(`https://milestone-03-e-commerce-website.vercel.app/api/drinks`,{cache : "no-store"})
  const drinkRes : Menue[] = await drinks.json();
  const desserts = await fetch(`https://milestone-03-e-commerce-website.vercel.app/api/desserts`,{cache : "no-store"})
  const dessertRes : Menue[] = await desserts.json();

  const a = res.slice(0,2)
  const b = disheRes.slice(0,2)
  const c = drinkRes.slice(0,2)
  const d = dessertRes.slice(2,4)


  const allItems = a.concat(b,c,d)


  return (
    <main className="h-auto w-full">
      <section className="h-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-7 md-lg:grid-cols-3 screen:grid-cols-3 px-4 my-10 justify-center">
        { allItems.map((menue: Menue) => (
          <div
            key={menue.id}
            className="lg:w-full w-full md-lg:w-[340px] screen:w-[325px] md:w-full h-auto bg-white rounded-2xl shadow-lg"
          >
            <div className="w-full h-56 rounded-3xl relative">
              <Image
                src={menue.image}
                height={230}
                width={350}
                alt={menue.name}
                className="rounded-3xl h-full w-full"
              />

              <section>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="absolute top-2 h-8 w-8 left-2 hover:bg-[#650e82] hover:text-white bg-[#6f0e82] opacity-90 font-bold hover:opacity-70 text-white text-5xl p-2 rounded-full"
                    >
                      <MdAddShoppingCart />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]  w-[90%]">
                    <DialogHeader>
                      <DialogTitle className="text-center text-3xl ">
                        {menue.name}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-3">
                      <div className="w-full">
                        <Image
                          src={menue.image}
                          height={200}
                          width={200}
                          alt={menue.name}
                          className="w-full h-36 rounded-2xl"
                        />
                      </div>
                      <div className="w-full">
                        <p className="">{menue.description}</p>
                        <h2 className="text-xl text-center  text-[#611b79] font-bold">{`Price : $ ${menue.price}`}</h2>
                      </div>
                    </div>

                    <DialogFooter className="flex  g gap-3  w-[100%]">
                      <CartButton Menue={menue} Text='Add to Cart'/>
                    <Link href={'/cart'} className="w-[100%]">  <CartButton Menue={menue} Text='Buy Now'/> </Link>
                     
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </section>
            </div>
            <div className="w-full h-36 mt-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl text-[#7b34ad]">${menue.price}</h3>
              <h2 className="text-2xl text-[#070707]">{menue.name}</h2>
              <p className="px-5 text-center text-[#070707]">{menue.about}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        
      </section>
    </main>
  );
}
