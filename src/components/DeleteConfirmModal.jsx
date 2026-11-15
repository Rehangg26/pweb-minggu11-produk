import { formatRupiah } from '../utils/formatRupiah'

function DeleteConfirmModal({ product, onConfirm, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Hapus Produk?</h2>
        <p className="delete-warning">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="delete-summary">
          <span className="product-id">ID: {product.id}</span>
          <strong>{product.name}</strong>
          <span className="product-price">{formatRupiah(product.price)}</span>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn-cancel" onClick={onClose}>
            Batal
          </button>
          <button type="button" className="btn-danger" onClick={onConfirm}>
            Hapus Produk
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal