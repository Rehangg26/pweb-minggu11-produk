import { useState } from 'react'
import ProductList from '../components/ProductList'
import ProductFormModal from '../components/ProductFormModal'
import DeleteConfirmModal from '../components/DeleteConfirmModal'
import '../App.css'

// products dan fungsi CRUD datang dari App lewat props
function ProductsPage({ products, onAddProduct, onEditProduct, onDeleteProduct }) {
  const [search, setSearch] = useState('')
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [deletingProduct, setDeletingProduct] = useState(null)

  const keyword = search.trim().toLowerCase()
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  )

  function handleAddProduct(data) {
    onAddProduct(data)
    setIsAddOpen(false)
  }

  function handleEditProduct(data) {
    onEditProduct(editingProduct.id, data)
    setEditingProduct(null)
  }

  function handleDeleteProduct() {
    onDeleteProduct(deletingProduct.id)
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

export default ProductsPage
