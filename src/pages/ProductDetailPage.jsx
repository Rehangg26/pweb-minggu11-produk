import { Link, useParams } from 'react-router'
import { formatRupiah } from '../utils/formatRupiah'

function ProductDetailPage({ products }) {
  const { id } = useParams() // selalu string, jadi dibandingkan dengan String(p.id)
  const product = products.find((p) => String(p.id) === id)

  if (!product) {
    return (
      <div>
        <h1 className="mb-2 text-2xl font-bold">Produk tidak ditemukan</h1>
        <p className="mb-4 text-gray-500">Produk dengan ID {id} tidak ada.</p>
        <Link to="/products" className="text-blue-700 underline">
          &larr; Kembali ke Produk
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/products" className="text-blue-700 underline">
        &larr; Kembali ke Produk
      </Link>

      <div className="mt-4 max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <span className="text-xs text-gray-500">ID: {product.id}</span>
        <h1 className="mt-1 text-2xl font-bold">{product.name}</h1>
        <p className="mt-2 text-lg font-medium text-blue-700">
          {formatRupiah(product.price)}
        </p>
      </div>
    </div>
  )
}

export default ProductDetailPage
