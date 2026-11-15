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

  return (
    <main className="container">
      <header className="header">
        <h1>Manajemen Produk</h1>
        <p>Kelola daftar produk dan harga dalam satu tempat.</p>
      </header>
      <ProductList products={products} />
    </main>
  )
}

export default App