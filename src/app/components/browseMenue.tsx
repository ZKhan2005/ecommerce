'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Bmenue {
    id: number,
    title: string,
    description: string,
    image: string
}

const BrowseMenue: Bmenue[] = [
 { id: 1, title: 'Breakfast', description: 'Fuel your day with our delicious and nutritious breakfast, crafted to energize and delight.', image: '/image/browseMenue/icon(1).png' },
 { id: 2, title: 'Main Dishes', description: 'Savor our flavorful main dishes, crafted to make every meal unforgettable.', image: '/image/browseMenue/icon (2).png' }, 
 { id: 3, title: 'Drinks', description: 'Refresh yourself with our delightful selection of beverages, crafted perfection.', image: '/image/browseMenue/icon (3).png' },
 { id: 4, title: 'Desserts', description: 'Indulge in our heavenly desserts, the perfect sweet ending to your meal.', image: '/image/browseMenue/icon (4).png'},]

 


export default function Browse_menue() {
    return (
    
         <main className="w-full"> 
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-serif text-center font-medium  my-8">Browse Our Menu</h1>
        <section className="flex justify-center overflow-x-hidden  ">
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}

          className=" w-[100vw]   "    >
      <CarouselContent className="px-3">
        {BrowseMenue.map((menue) => (
          <CarouselItem key={menue.id} className=" md:basis-1/2 lg:basis-1/4  ">
            <div className="p-1">
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="flex aspect-square items-center justify-center p-6  w-full h-[350px] md:h-80 lg:h-auto bg-[#FFFFFF] border border-[#DBDFD0] px-6  rounded-2xl   flex-col ">
                  <Image src={menue.image} height={50} width={100} alt={`${menue.title} `} className="mt-6" />
                       <h2 className="text-2xl font-bold text-[#000000] mt-7 mb-4">{menue.title}</h2>
                       <p className="text-[#060605] mx-4 mb-7">{menue.description}</p>
                       <Button variant="ghost" ><Link href="/menue" className="text-[#8e208a] font-bold ">Explore Menu</Link></Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </section>
   
        </main> 
    )
}