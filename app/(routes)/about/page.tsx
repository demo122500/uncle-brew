import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import about_bg from "./img/about-bg.jpg";
import StoryPage from './components/about-story';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { BookHeart, Salad, SmilePlus } from 'lucide-react';


const AboutPage = () => {
  return (
    <Container className="px-4 md:px-12 my-12 rounded-md bg-white py-12">

      {/* hero-section */}
      <section className="flex items-center justify-center">
        <div className="grid gap-20 grid-cols-4 items-center justify-center">
          <div className="col-span-2 flex flex-col gap-4 items-start">
            <h1 className="text-4xl font-bold text-neutral-700">Welcome to Bite Bazaar</h1>
            <p className="text-lg font-semibold text-muted-foreground">Join us on a flavorful journey where every bite brings joy. Follow us on social media and stay updated with our latest delights!</p>
            <Button className="bg-hero mt-4 cursor-pointer">Explore Our Story</Button>
          </div>

          <div className="col-span-2 flex items-end justify-end" style={{filter: 'drop-shadow(0 0 0.75rem crimson)'}}>
            <Image src={about_bg} alt="about-bg" className="w-[600px] h-[300px] rounded-bl-full rounded-tr-full px-2"/>
          </div>
        </div>
      </section>

      {/* story-section */}
      <StoryPage />

      {/* values-section */}
      <section className="my-8 py-12 flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
          Our Values
        </h2>
        <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
          At Bite Bazaar, we don’t just serve food; we serve experiences. From the freshest ingredients to the most vibrant flavors, we ensure every meal is a celebration of taste!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <Salad className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">
              Fresh Ingredients
            </CardTitle>
            <CardDescription className="text-center">
              Every dish is crafted with the finest, freshest ingredients to bring you an unforgettable taste.
            </CardDescription>
          </Card>

          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <BookHeart className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">Exceptional Flavor</CardTitle>
            <CardDescription className="text-center">
              Our recipes are infused with creativity and passion, resulting in flavors that delight your palate.
            </CardDescription>
          </Card>

          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <SmilePlus className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">Fun Dining</CardTitle>
            <CardDescription className="text-center">
              We believe dining should be fun! Enjoy great food, great company, and great times at Bite Bazaar.
            </CardDescription>
          </Card>
        </div>
      </section>

    </Container>
  )
};

export default AboutPage;
