const options = [
  { value: 'grid', label: 'Grid', description: 'Produk tampil sebagai kartu dalam beberapa kolom.' },
  { value: 'list', label: 'List', description: 'Produk tampil sebagai baris, satu per baris.' },
]

function SettingsPage({ viewMode, onChangeViewMode }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mb-4 text-gray-500">Pilih tampilan halaman produk.</p>

      <div className="flex max-w-md flex-col gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border bg-white p-4 ${
              viewMode === option.value ? 'border-blue-700 ring-1 ring-blue-700' : 'border-gray-200'
            }`}
          >
            <input
              type="radio"
              name="viewMode"
              value={option.value}
              checked={viewMode === option.value}
              onChange={() => onChangeViewMode(option.value)}
              className="mt-1"
            />
            <span>
              <span className="block font-semibold">{option.label}</span>
              <span className="text-sm text-gray-500">{option.description}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default SettingsPage
