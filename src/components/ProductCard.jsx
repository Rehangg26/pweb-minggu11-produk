function formatRupiah(price) {
    return 'Rp' + price.toLocaleString('id-ID')
}

function ProductCard({ product }) {
    return (
    <div className="product-card">
        <span className="product-id">ID: {product.id}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatRupiah(product.price)}</p>
        <div className="card-actions">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Hapus</button>
        </div>
    </div>
    )
}

export default ProductCard