import { ProductCard } from "../ProductCard/ProductCard";

type ProductSectionProps = {
  title: string;
  products: {
    image: string;
    title: string;
    oldPrice: string;
    newPrice: string;
  }[];
};

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <>
      <div className="template-container">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
          />
        ))}
      </div>
    </>
  );
}
