import { ProductCard } from "../ProductCard/Card";
import { Template } from "../Template/Template";

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
      <h2 className="section-title">{title}</h2>
      <Template>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
          />
        ))}
      </Template>
    </>
  );
}
