import ProductCard from './ProductCard'

function ProductList({ products, viewMode, onEdit, onDelete }) {
  const layoutClass =
    viewMode === 'list'
      ? 'flex flex-col gap-2'
      : 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={layoutClass}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ProductList
