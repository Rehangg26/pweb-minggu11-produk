import { useState } from 'react'
import ProductList from '../components/ProductList'
import ProductFormModal from '../components/ProductFormModal'
import DeleteConfirmModal from '../components/DeleteConfirmModal'

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
    <div>
      <header className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manajemen Produk</h1>
          <p className="text-gray-500">Kelola daftar produk dan harga dalam satu tempat.</p>
        </div>
        <button
          className="rounded-lg bg-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-800"
          onClick={() => setIsAddOpen(true)}
        >
          + Tambah Produk
        </button>
      </header>

      <div className="mb-4 flex items-center gap-3">
        <input
          className="w-full flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
          type="text"
          placeholder="Cari nama produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="whitespace-nowrap text-sm text-gray-500">{products.length} produk</span>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductList
          products={filteredProducts}
          onEdit={setEditingProduct}
          onDelete={setDeletingProduct}
        />
      ) : (
        <p className="py-8 text-center text-gray-500">Produk tidak ditemukan.</p>
      )}

      <p className="mt-4 text-sm text-gray-500">
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
