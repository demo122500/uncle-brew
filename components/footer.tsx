"use client";

import Container from "@/components/container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import assets from "@/public/assets/assets";

const Footer = () => {
  return (
    <footer className="bg-hero mt-[150px]">
      <Container>
        <div className="flex items-center justify-center flex-col h-[40vh] mt-10">
          <div className="flex items-start justify-center gap-12">
            <div className="flex flex-col gap-4">
              <Image src={assets.logo} alt="logo" className="w-[150px]"/>
              <p className="text-[14px] text-neutral-100 max-w-[400px]">Join us on a flavorful journey where every bite brings joy. Follow us on social media and stay updated with our latest delights!</p>
              <div className="flex items-center justify-start gap-2">
                <FacebookIcon className="h-6 w-6 text-white"/>
                <InstagramIcon className="h-6 w-6 text-white"/>
                <YoutubeIcon className="h-6 w-6 text-white"/>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-100 uppercase">Menu</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Home</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Why Uncle Brew</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Effortless Ordering</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Download App</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">App Benefits</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">App Features</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-100 uppercase">Help</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Privacy</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Terms & Condition</li>
                <li className="text-neutral-300 text-[14px] font-semibold hover:text-white cursor-pointer hover:underline">Policy</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="text-2xl font-bold text-neutral-100 uppercase">Contact</h2>
              <ul className="flex flex-col gap-1 mt-2">
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">+000 0000 0000</li>
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">info@unclebrew.com</li>
                <li className="text-neutral-300 text-[14px] font-semibold cursor-pointer">ABC Street, Philippines</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-2xl font-bold text-neutral-100 uppercase">Subscribe</h2>
              <p className="text-[14px] text-neutral-100 max-w-[300px]">Don&apos;t miss out! Sign up to receive delicious updates, exclusive offers, and more.</p>
              <div className="flex items-center justify-center">
                <input type="email" placeholder="Enter your email" className="outline-none w-[220px] px-4 py-2 bg-white rounded-s-full"/>
                <Button className="rounded-e-full bg-neutral-300 text-black hover:text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-8">
          <p className="text-center text-xs text-white">
            &copy; 2024 Uncle Brew PH. All Rights Reserved
          </p>
          <p className="text-center text-xs text-white">Developer: <a href="https://beliarommel.vercel.app"><span className="hover:text-white cursor-pointer">Rommel Belia</span></a></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
