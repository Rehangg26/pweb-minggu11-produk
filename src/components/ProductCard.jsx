import { Link } from 'react-router'
import { formatRupiah } from '../utils/formatRupiah'

function ProductCard({ product, viewMode, onEdit, onDelete }) {
  const isList = viewMode === 'list'

  return (
    <div
      className={
        isList
          ? 'flex flex-col gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between'
          : 'rounded-xl border border-gray-200 bg-white p-4 shadow-sm'
      }
    >
      <div className={isList ? 'flex items-baseline gap-3' : ''}>
        <span className="text-xs text-gray-500">ID: {product.id}</span>
        <h3 className={isList ? 'font-semibold' : 'mt-1 text-lg font-semibold'}>
          {product.name}
        </h3>
        <p className="font-medium text-blue-700">{formatRupiah(product.price)}</p>
      </div>

      <div className={isList ? 'flex gap-2' : 'mt-3 flex gap-2'}>
        <Link
          to={`/products/${product.id}`}
          className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
        >
          Detail
        </Link>
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
