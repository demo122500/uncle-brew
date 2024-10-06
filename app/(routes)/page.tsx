import getProducts from "@/actions/get-products";
import HomepageContent from "./HomepageContent";

export const revalidate = 0;

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });
  const newProducts = await getProducts({ isFeatured: true });

  return (
    <div>
      <HomepageContent products={products} newProducts={newProducts} />
    </div>
  );
};

export default Homepage;