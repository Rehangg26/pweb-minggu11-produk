import { Link } from 'react-router'

function DashboardPage({ products }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Ringkasan data produk.</p>
      <p>
        Jumlah produk: <strong>{products.length}</strong>
      </p>
      <Link to="/products">Lihat semua produk</Link>
    </div>
  )
}

export default DashboardPage
