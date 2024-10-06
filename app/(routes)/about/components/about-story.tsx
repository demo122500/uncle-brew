import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { assets } from "../assets";

const StoryPage = () => {
  return (
    <Container className="mt-20">
      <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
        Our Journey
      </h2>

        <p className="w-full text-center md:w-[660px] text-base text-neutral-500 my-2">Bite Bazaar began with a simple idea: to bring people together over delicious food made with love. From our humble beginnings to becoming a favorite local spot, our journey has always been fueled by a passion for great flavors and an unwavering commitment to quality.</p>
        <div className="flex gap-10 py-8 space-x-4">
          <Image className="w-[400px] rounded-lg rounded-br-full rounded-t-full" style={{filter: 'drop-shadow(0 0 0.90rem pink)'}} src={assets.story_one} alt="Bite Bazaar's Beginnings" />
          <Image className="w-[400px] rounded-lg rounded-b-full rounded-tl-full" style={{filter: 'drop-shadow(0 0 0.90rem pink)'}} src={assets.story_two} alt="Behind the Scenes" />
        </div>
      </div>
    </Container>
  );
};

export default StoryPage;
