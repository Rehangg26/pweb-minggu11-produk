import { Link } from 'react-router'

function DashboardPage({ products }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mb-4 text-gray-500">Ringkasan data produk.</p>

      <div className="mb-4 w-full max-w-xs rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-gray-500">Jumlah produk</p>
        <p className="text-3xl font-bold text-blue-700">{products.length}</p>
      </div>

      <Link to="/products" className="text-blue-700 underline">
        Lihat semua produk
      </Link>
    </div>
  )
}

export default DashboardPage
