import { useState } from 'react'
import ProductList from './components/ProductList'
import './App.css'

const initialProducts = [
  { id: 1, name: 'Pulpen', price: 5000 },
  { id: 2, name: 'Buku Tulis', price: 12000 },
  { id: 3, name: 'Spidol', price: 8000 },
  { id: 4, name: 'Penggaris', price: 6000 },
  { id: 5, name: 'Penghapus', price: 3000 },
]

function App() {
  const [products] = useState(initialProducts)
  const [search, setSearch] = useState('')

  const keyword = search.trim().toLowerCase()
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  )

  return (
    <main className="container">
      <header className="header">
        <h1>Manajemen Produk</h1>
        <p>Kelola daftar produk dan harga dalam satu tempat.</p>
      </header>

      <div className="toolbar">
        <input
          className="search-input"
          type="text"
          placeholder="Cari nama produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="product-count">{products.length} produk</span>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="empty-message">Produk tidak ditemukan.</p>
      )}

      <p className="showing-info">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>
    </main>
  )
}

export default App