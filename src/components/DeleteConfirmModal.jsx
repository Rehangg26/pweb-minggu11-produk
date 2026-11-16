import { formatRupiah } from '../utils/formatRupiah'

function DeleteConfirmModal({ product, onConfirm, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/45 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-2 text-xl font-bold">Hapus Produk?</h2>
        <p className="mb-4 text-sm text-gray-500">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="mb-4 flex flex-col gap-1 rounded-lg border border-gray-200 p-3">
          <span className="text-xs text-gray-500">ID: {product.id}</span>
          <strong>{product.name}</strong>
          <span className="text-blue-700">{formatRupiah(product.price)}</span>
        </div>

        <div className="flex justify-end gap-2">
          <button type="button" className="rounded-lg border border-blue-700 px-4 py-2 text-sm text-blue-700 hover:bg-blue-50" onClick={onClose}>
            Batal
          </button>
          <button type="button" className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700" onClick={onConfirm}>
            Hapus Produk
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal