import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="py-8 text-center">
      <p className="text-6xl font-bold text-blue-700">404</p>
      <h1 className="mt-2 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mb-4 text-gray-500">Alamat yang kamu buka tidak tersedia.</p>
      <Link to="/products" className="text-blue-700 underline">
        &larr; Kembali ke Produk
      </Link>
    </div>
  )
}

export default NotFoundPage
