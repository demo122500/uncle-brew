"use client";

import Container from "@/components/container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-hero mt-[150px]">
      <Container>
        <div className="flex items-center justify-center flex-col h-[40vh] mt-10">
          <div className="flex items-start justify-center gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-neutral-800">Bite Bazaar.</h2>
              <p className="text-[14px] text-neutral-100 max-w-[400px]">Join us on a flavorful journey where every bite brings joy. Follow us on social media and stay updated with our latest delights!</p>
              <div className="flex items-center justify-start gap-2">
                <FacebookIcon className="h-6 w-6"/>
                <InstagramIcon className="h-6 w-6"/>
                <YoutubeIcon className="h-6 w-6"/>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-900 uppercase">Menu</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Home</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Why Choose</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Special Menu</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Regular Food</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Special Chefs</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-900 uppercase">Help</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Privacy</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Terms & Condition</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Policy</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-900 uppercase">Contact</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">+000 0000 0000</li>
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">info@bitebazaar.com</li>
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">ABC Street, Philippines</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-2xl font-bold text-neutral-900 uppercase">Subscribe</h2>
              <p className="text-[14px] text-neutral-100 max-w-[300px]">Don&apos;t miss out! Sign up to receive delicious updates, exclusive offers, and more.</p>
              <div className="flex items-center justify-center">
                <input type="email" placeholder="Enter your email" className="outline-none w-[220px] px-4 py-2 bg-pink-100 rounded-s-full"/>
                <Button className="rounded-e-full bg-pink-400 text-black hover:text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-8">
          <p className="text-center text-xs text-black">
            &copy; 2024 Bite Bazaar, Inc. All Rights Reserved
          </p>
          <p className="text-center text-xs text-black">Developer: <span className="hover:text-white cursor-pointer">Rommel Belia</span></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
