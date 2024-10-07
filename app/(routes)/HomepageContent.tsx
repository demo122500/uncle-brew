"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../../public/assets/assets";
import { PopularContent } from "@/components/popular-content";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Circle,
  Coffee,
  CreditCard,
  CupSoda,
  FileHeart,
  LogIn,
  Timer,
  Truck,
} from "lucide-react";
import AdPopup from "@/components/AdPopup";
import { useInView } from "react-intersection-observer";
import { Products } from "@/types.db";

export const revalidate = 0;

interface HomepageContentProps {
  products: Products[];
  newProducts: Products[];
}

const HomepageContent = ({ products, newProducts }: HomepageContentProps) => {
  const { ref: heroRef, inView: heroVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: popularRef, inView: popularVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: whyRef, inView: whyVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: overviewRef, inView: overviewVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: benefitsRef, inView: benefitsVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: downloadRef, inView: downloadVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: featuresRef, inView: featuresVisible } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <>
      <Container className="px-4 md:px-12">
        {/* Display the AdPopup only if there is a latest product */}
        {newProducts?.slice(0, 1).map((item) => (
          <AdPopup key={item.id} data={item} />
        ))}

        <section
          ref={heroRef}
          className={`grid grid-cols-1 md:grid-cols-2 py-24 pt-16 ${
            heroVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-start justify-start gap-4 animate-slide-in-left">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Coffee?
            </p>

            <h2 className="text-5xl font-bold tracking-wider uppercase text-black my-4">
              Start your <span className="block py-4">morning with</span>
              <span className="block py-4">Uncle Brew Coffee</span>
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Craving the perfect brew? Head over to Uncle Brew, where aroma
              meets passion! From bold espressos to creamy lattes, satisfy your
              senses with every sip. Don&apos;t wait your next favorite cup is
              just a pour away!{" "}
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero hover:bg-black/80">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full"
                  variant={"outline"}
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image
                src={assets.food}
                alt="Hero"
                className="object-cover w-full h-full absolute mb-8 animate-slide-in"
                style={{ filter: 'drop-shadow(30px 10px 50px gray)'}}
              />
            </div>
          </div>
        </section>

        {/* popular section */}
        <section
          ref={popularRef}
          className={`flex flex-col gap-12 ${
            popularVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={assets.logo} alt="logo" className="w-48" />
            <h2 className="text-5xl font-bold">Popular Menu</h2>
            <p className="text-sm text-muted-foreground text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              voluptate fugapariatur <br /> inventore quidem nisi vitae,
              molestiae architecto corporis id!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-20 md:gap-8 my-4 py-12">
            {products?.slice(0, 4).map((item) => (
              <PopularContent key={item.id} data={item} />
            ))}
          </div>
        </section>

        {/* why choose us section */}
        <section
          ref={whyRef}
          className={`my-4 py-12 flex flex-col items-center justify-center ${
            whyVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-black my-4">
            Why Uncle Brew?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            At Uncle Brew, we don&apos;t just brew coffee, we craft moments.
            From the finest beans to the richest aromas, we ensure every cup is
            a celebration of flavor and comfort!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <CupSoda className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Serve Quality Coffee
              </CardTitle>
              <CardDescription className="text-center">
                Every cup is brewed with the finest, freshest beans to bring you
                an unforgettable experience that&apos;s rich in flavor and
                aroma.
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <FileHeart className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">Best Quality</CardTitle>
              <CardDescription className="text-center">
                Craving coffee? We&apos;ve got you covered! Our quick and
                reliable delivery service brings your favorite brew straight to
                your door, steaming hot and ready to savor.
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">Fast Delivery</CardTitle>
              <CardDescription className="text-center">
                From bold brews to smooth blends, our menu is packed with
                options that cater to every coffee craving, preference, and
                mood!
              </CardDescription>
            </Card>
          </div>
        </section>

        {/* How  it works section */}
        <section
          ref={overviewRef}
          className={`my-4 py-12 flex flex-col items-center justify-center ${
            overviewVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-4xl font-bold tracking-wider flex flex-col items-center text-black my-4">
            Effortless Ordering:{" "}
            <span className="text-neutral-500">A Quick Overview</span>
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            -- How It Works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full my-2 mt-12">
            <div className="relative w-full">
              <Image
                fill
                alt="chef one"
                className="w-full h-full object-cover"
                src={assets.uc_model}
                style={{ filter: "drop-shadow(0 -2mm 6mm rgb(0, 0, 0))" }}
              />
            </div>

            <div className="relative flex flex-col gap-12 items-center md:min-h-[520px]">
              <div className="flex items-center gap-8 w-full">
                <div>
                  <LogIn className="w-20 h-20 bg-black text-white p-[28px] rounded-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Sign Up
                  </h2>
                  <p className="text-base text-neutral-500 font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum recusandae provident possimus, modi labore
                    praesentium?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 w-full">
                <div>
                  <Circle
                    fill="black"
                    className="w-20 h-20 bg-neutral-400 text-white p-[28px] rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Explore Coffee Menu
                  </h2>
                  <p className="text-base text-neutral-500 font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum recusandae provident possimus, modi labore
                    praesentium?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 w-full">
                <div>
                  <CreditCard
                    fill="black"
                    className="w-20 h-20 bg-neutral-400 text-white p-[28px] rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Secure & Swift Checkout
                  </h2>
                  <p className="text-base text-neutral-500 font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum recusandae provident possimus, modi labore
                    praesentium?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 w-full">
                <div>
                  <Coffee
                    fill="black"
                    className="w-20 h-20 bg-neutral-400 text-white p-[28px] rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Enjoy your Coffee
                  </h2>
                  <p className="text-base text-neutral-500 font-medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum recusandae provident possimus, modi labore
                    praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* Download app section */}
      <section
        ref={downloadRef}
        className={`my-4 py-20 grid items-center grid-cols-4 gap-8 bg-black/10 px-16 md:px-24 ${
          downloadVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-6 col-span-2">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-4xl font-bold tracking-wider text-neutral-500">
              Download <span className="text-black">Our Uncle</span>
            </h2>
            <h2 className="text-4xl md:text-4xl font-bold tracking-wider text-black">
              Brew App <span className="text-neutral-500">Today!</span>
            </h2>
          </div>
          <p className="text-base text-neutral-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
            tenetur itaque, libero enim eveniet praesentium!
          </p>

          <div className="flex items-center gap-8">
            <div>
              <h2 className="text-3xl font-semibold">5 Million+</h2>
              <p className="text-base text-neutral-500">
                Worldwide Active Users
              </p>
            </div>
            <hr className="h-14 w-[2px] bg-neutral-500" />
            <div>
              <h2 className="text-3xl font-semibold">150+</h2>
              <p className="text-base text-neutral-500">Countries</p>
            </div>
            <hr className="h-14 w-[2px] bg-neutral-500" />
            <div>
              <h2 className="text-3xl font-semibold">7500+</h2>
              <p className="text-base text-neutral-500">Vendors</p>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden col-span-1 w-[280px] relative bg-gray-100 border-none p-4 rounded-md gap-6 flex flex-col">
          <div>
            <h2 className="text-3xl font-bold">For iOS</h2>
            <p className="text-base text-neutral-500">iOS 18.2+</p>
          </div>
          <Button className="rounded-full bg-black place-self-start">
            Download App
          </Button>
          <div className="flex items-center justify-between gap-24">
            <div className="bg-white p-3 rounded-md">
              <Image src={assets.qr_code} alt="qr-code" className="w-16 h-16" />
            </div>
            <div className="bg-white p-6 rounded-full -right-6 -bottom-6 absolute">
              <Image
                src={assets.ios_icon}
                alt="ios-icon"
                className="w-16 h-16"
              />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden col-span-1 w-[280px] relative bg-gray-100 border-none p-4 rounded-md gap-6 flex flex-col">
          <div>
            <h2 className="text-3xl font-bold">For Android</h2>
            <p className="text-base text-neutral-500">Android 12+</p>
          </div>
          <Button className="rounded-full bg-black place-self-start">
            Download App
          </Button>
          <div className="flex items-center justify-between gap-24">
            <div className="bg-white p-3 rounded-md">
              <Image src={assets.qr_code} alt="qr-code" className="w-16 h-16" />
            </div>
            <div className="bg-white p-6 rounded-full -right-6 -bottom-6 absolute">
              <Image
                src={assets.android_icon}
                alt="ios-icon"
                className="w-16 h-16"
              />
            </div>
          </div>
        </Card>
      </section>

      <Container className="px-4 md:px-12">
        <section
          ref={benefitsRef}
          className={`my-4 py-20 flex flex-col items-center gap-12 ${
            benefitsVisible ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <div className="flex items-end">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-4xl font-bold tracking-wider text-black">
                  Exclusive Benefits{" "}
                  <span className="text-neutral-500">Of</span>
                </h2>
                <h2 className="text-4xl md:text-4xl font-bold tracking-wider text-neutral-500">
                  Uncle Brew App
                </h2>
              </div>
              <p className="w-full text-start md:w-[560px] text-base text-neutral-500 my-2">
                -- Benefits of Uncle Brew App{" "}
                <span className="text-black font-semibold">
                  (Comming Soon!)
                </span>
              </p>
            </div>
            <p className="text-base text-neutral-500 border-l-[4px] border-black px-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis fugit hic velit repellendus maiores odio officiis
              error provident tempore et.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-black rounded-lg text-white w-20 h-20 items-center justify-center flex">
                <Timer className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Order Tracking
              </h2>
              <p className="text-base text-neutral-500 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                recusandae provident possimus, modi labore praesentium?
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="bg-black rounded-lg text-white w-20 h-20 items-center justify-center flex">
                <CreditCard className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Secure Payments
              </h2>
              <p className="text-base text-neutral-500 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                recusandae provident possimus, modi labore praesentium?
              </p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="bg-black rounded-lg text-white w-20 h-20 items-center justify-center flex">
                <Timer className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">
                Order Tracking
              </h2>
              <p className="text-base text-neutral-500 font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                recusandae provident possimus, modi labore praesentium?
              </p>
            </div>
          </div>
        </section>
      </Container>

      {/* Uncle Brew Features */}
      <section
        ref={featuresRef}
        className={`h-[140vh] overflow-hidden relative my-4 py-20 flex flex-col items-center gap-12 px-16 md:px-24 ${
          featuresVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="w-full h-[85vh] absolute top-0">
          <Image src={assets.features_bg} alt="features-bg" />
        </div>
        <div className="relative top-32 flex flex-col gap-12 z-49">
          <div className="flex items-end justify-center">
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white">
                  Key Features <span className="text-white/70">Of</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white/70">
                  Uncle Brew App
                </h2>
              </div>
              <p className="w-full text-start md:w-[560px] text-lg text-white/90 my-2">
                -- Best Features
              </p>
            </div>
            <p className="text-base text-white border-l-[4px] border-white px-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis fugit hic velit repellendus maiores odio officiis
              error provident tempore et.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 items-center">
            <Card className="flex flex-col items-center justify-center gap-2 py-6 px-8 border-none shadow-lg rounded-3xl">
              <h2 className="text-3xl font-semibold">Explore Nearby Cafe</h2>
              <p className="text-base text-neutral-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                illum suscipit deleniti dolorum aut? Quam?
              </p>
              <div className="mt-4 h-[480px] w-[300px] overflow-hidden bg-white">
                <Image src={assets.feature1} alt="feature1" />
              </div>
            </Card>

            <Card className="flex flex-col items-center justify-center gap-2 py-6 px-8 border-none shadow-lg rounded-3xl">
              <div className="relative mb-4 h-[480px] w-[300px] overflow-hidden bg-white">
                <Image
                  src={assets.feature2}
                  alt="feature2"
                  className="absolute -top-[27%]"
                />
              </div>
              <h2 className="text-3xl font-semibold">Track Your Order Live</h2>
              <p className="text-base text-neutral-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                illum suscipit deleniti dolorum aut? Quam?
              </p>
            </Card>

            <Card className="flex flex-col items-center justify-center gap-2 py-6 px-8 border-none shadow-lg rounded-3xl">
              <h2 className="text-3xl font-semibold">Live Chat and Call</h2>
              <p className="text-base text-neutral-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                illum suscipit deleniti dolorum aut? Quam?
              </p>
              <div className="mt-4 h-[480px] w-[300px] overflow-hidden bg-white">
                <Image src={assets.feature3} alt="feature3" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageContent;
