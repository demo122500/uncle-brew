import Box from "@/components/box";
import Container from "@/components/container";
import { auth } from "@clerk/nextjs/server";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import CartContent from "./components/cart-content";



const CartPage = () => {
  const { userId } = auth();
  
  return (
    <div className="h-auto">
      <Container className="bg-white py-12 my-4 h-full">
        <div className="w-full px-4 md:px-12 space-y-7 h-full">
          <Box className="text-neutral-700 text-sm flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:text-pink-500 hover:underline">
              <Home className="w-5 h-5"/>
              Home Page
            </Link>

            <ChevronRight className="w-5 h-5 text-muted-foreground"/>
            <Link href="/menu" className="flex items-center gap-2 hover:text-pink-500 hover:underline">
              Products
            </Link>

            <ChevronRight className="w-5 h-5 text-muted-foreground"/>
            <p className="flex items-center gap-2">Cart</p>
          </Box>

          <CartContent userId={userId}/>
        </div>
      </Container>
    </div>
  )
};

export default CartPage;

