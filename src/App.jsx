import { useState } from 'react'
import { Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import DashboardPage from './pages/DashboardPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsPage from './pages/ProductsPage'

const initialProducts = [
  { id: 1, name: 'Pulpen', price: 5000 },
  { id: 2, name: 'Buku Tulis', price: 12000 },
  { id: 3, name: 'Spidol', price: 8000 },
  { id: 4, name: 'Penggaris', price: 6000 },
  { id: 5, name: 'Penghapus', price: 3000 },
]

function App() {
  const [products, setProducts] = useState(initialProducts)

  function handleAddProduct({ name, price }) {
    const nextId = Math.max(0, ...products.map((p) => p.id)) + 1
    setProducts([...products, { id: nextId, name, price }])
  }

  function handleEditProduct(id, { name, price }) {
    setProducts(products.map((p) => (p.id === id ? { ...p, name, price } : p)))
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage products={products} />} />
        <Route
          path="products"
          element={
            <ProductsPage
              products={products}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          }
        />
        <Route path="products/:id" element={<ProductDetailPage products={products} />} />
      </Route>
    </Routes>
  )
}

export default App
