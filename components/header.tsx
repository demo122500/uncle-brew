"use client";

import { cn } from "@/lib/utils";
import Container from "@/components/container";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/main-nav";
import { useEffect, useState } from "react";
import CartActionButton from "./cart-action";
import Image from "next/image";
import { assets } from "../public/assets/assets";

interface HeaderProps {
  userId: string | null;
}

const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full z-50 transition",
        scrolled ? "fixed top-0 bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-12 flex h-16 items-center">
          <Link
            href={"/"}
            className="uppercase flex items-center justify-center font-bold text-hero text-lg md:text-xl"
          >
            <Image src={assets.logo} alt="logo" className="w-28"/>
          </Link>

          {/* main navigation bar */}
          <MainNav scrolled={scrolled} />

          {userId ? (
            <div className="ml-10 flex items-center space-x-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex items-center space-x-2 ml-10">
              <Link href={"/sign-in"}>
                <Button variant="outline" className={cn("h-8 rounded-full bg-transparent text-white", scrolled ? "bg-black shadow-lg" : "bg-transparent")}>Sign in</Button>
              </Link>
            </div>
          )}

          {userId && <CartActionButton scrolled={scrolled}/>}
        </div>
      </Container>
    </header>
  );
};

export default Header;
