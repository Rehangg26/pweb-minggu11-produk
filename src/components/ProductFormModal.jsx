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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {initialValues?.id && <p className="form-id">ID: {initialValues.id}</p>}
        <form onSubmit={handleSubmit} noValidate>
          <label className="form-field">
            Nama Produk
            <input
              type="text"
              placeholder="Contoh: Pulpen"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </label>

          <label className="form-field">
            Harga (Rp)
            <input
              type="number"
              placeholder="Contoh: 5000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <span className="form-error">{errors.price}</span>}
          </label>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="btn-primary">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductFormModal