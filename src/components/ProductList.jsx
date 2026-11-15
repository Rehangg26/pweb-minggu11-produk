import ProductCard from './ProductCard'

function ProductList({ products, onEdit }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default ProductList