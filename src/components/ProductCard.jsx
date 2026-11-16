import { formatRupiah } from '../utils/formatRupiah'

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <span className="text-xs text-gray-500">ID: {product.id}</span>
      <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
      <p className="font-medium text-blue-700">{formatRupiah(product.price)}</p>
      <div className="mt-3 flex gap-2">
        <button
          className="rounded-lg border border-blue-700 px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-50"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button
          className="rounded-lg border border-red-600 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
          onClick={() => onDelete(product)}
        >
          Hapus
        </button>
      </div>
    </div>
  )
}

export default ProductCard
