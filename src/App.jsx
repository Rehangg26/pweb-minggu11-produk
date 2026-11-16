import { useState } from 'react'
import { Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import ProductList from './components/ProductList'
import ProductFormModal from './components/ProductFormModal'
import DeleteConfirmModal from './components/DeleteConfirmModal'
import './App.css'

const initialProducts = [
  { id: 1, name: 'Pulpen', price: 5000 },
  { id: 2, name: 'Buku Tulis', price: 12000 },
  { id: 3, name: 'Spidol', price: 8000 },
  { id: 4, name: 'Penggaris', price: 6000 },
  { id: 5, name: 'Penghapus', price: 3000 },
]

// Sementara: halaman produk masih di sini, dipindah ke ProductsPage di commit berikutnya
function ProductsScreen() {
  const [products, setProducts] = useState(initialProducts)
  const [search, setSearch] = useState('')
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [deletingProduct, setDeletingProduct] = useState(null)

  const keyword = search.trim().toLowerCase()
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  )

  function handleAddProduct({ name, price }) {
    const nextId = Math.max(0, ...products.map((p) => p.id)) + 1
    setProducts([...products, { id: nextId, name, price }])
    setIsAddOpen(false)
  }

  function handleEditProduct({ name, price }) {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id ? { ...p, name, price } : p
      )
    )
    setEditingProduct(null)
  }

  function handleDeleteProduct() {
    setProducts(products.filter((p) => p.id !== deletingProduct.id))
    setDeletingProduct(null)
  }

  return (
    <div className="container">
      <header className="header header-row">
        <div>
          <h1>Manajemen Produk</h1>
          <p>Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsAddOpen(true)}>
          + Tambah Produk
        </button>
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
        <ProductList
          products={filteredProducts}
          onEdit={setEditingProduct}
          onDelete={setDeletingProduct}
        />
      ) : (
        <p className="empty-message">Produk tidak ditemukan.</p>
      )}

      <p className="showing-info">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>

      {isAddOpen && (
        <ProductFormModal
          title="Tambah Produk"
          submitLabel="Simpan Produk"
          onSubmit={handleAddProduct}
          onClose={() => setIsAddOpen(false)}
        />
      )}

      {editingProduct && (
        <ProductFormModal
          key={editingProduct.id}
          title="Edit Produk"
          submitLabel="Simpan Perubahan"
          initialValues={editingProduct}
          onSubmit={handleEditProduct}
          onClose={() => setEditingProduct(null)}
        />
      )}

      {deletingProduct && (
        <DeleteConfirmModal
          product={deletingProduct}
          onConfirm={handleDeleteProduct}
          onClose={() => setDeletingProduct(null)}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<ProductsScreen />} />
      </Route>
    </Routes>
  )
}

export default App