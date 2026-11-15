import { formatRupiah } from '../utils/formatRupiah'

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <span className="product-id">ID: {product.id}</span>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{formatRupiah(product.price)}</p>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(product)}>
          Hapus
        </button>
      </div>
    </div>
  )
}

export default ProductCard