type ProductCardProps = {
  image: string;
  title: string;
  oldPrice: string;
  newPrice: string;
};

export function ProductCard({
  image,
  title,
  oldPrice,
  newPrice,
}: ProductCardProps) {
  return (
    <div className="card-product">
      <div className="card-product-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-product-caption">
        <h2 className="card-product-title">{title}</h2>
        <div className="row gap-1 align-center">
          <s>{oldPrice}</s>
          <p>{newPrice}</p>
        </div>
      </div>
    </div>
  );
}
