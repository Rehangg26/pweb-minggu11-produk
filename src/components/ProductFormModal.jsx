import { useState } from 'react'

function ProductFormModal({ title, submitLabel, initialValues, onSubmit, onClose }) {
  const [name, setName] = useState(initialValues?.name ?? '')
  const [price, setPrice] = useState(initialValues?.price?.toString() ?? '')
  const [errors, setErrors] = useState({})

  function validate() {
    const newErrors = {}
    if (name.trim() === '') {
      newErrors.name = 'Nama produk wajib diisi.'
    }
    if (price === '' || Number(price) <= 0) {
      newErrors.price = 'Harga harus lebih dari 0.'
    }
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    onSubmit({ name: name.trim(), price: Number(price) })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/45 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-3 text-xl font-bold">{title}</h2>
        {initialValues?.id && <p className="mb-3 text-xs text-gray-500">ID: {initialValues.id}</p>}
        <form onSubmit={handleSubmit} noValidate>
          <label className="mb-3 flex flex-col gap-1.5 text-sm font-semibold">
            Nama Produk
            <input
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-normal"
              type="text"
              placeholder="Contoh: Pulpen"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-xs font-normal text-red-600">{errors.name}</span>}
          </label>

          <label className="mb-3 flex flex-col gap-1.5 text-sm font-semibold">
            Harga (Rp)
            <input
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-normal"
              type="number"
              placeholder="Contoh: 5000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <span className="text-xs font-normal text-red-600">{errors.price}</span>}
          </label>

          <div className="mt-2 flex justify-end gap-2">
            <button type="button" className="rounded-lg border border-blue-700 px-4 py-2 text-sm text-blue-700 hover:bg-blue-50" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="rounded-lg bg-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-800">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductFormModal