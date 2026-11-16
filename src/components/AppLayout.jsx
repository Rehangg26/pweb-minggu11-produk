import { NavLink, Outlet } from 'react-router'

const menus = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/products', label: 'Produk' },
  { to: '/settings', label: 'Settings' },
]

// NavLink memberi tahu apakah menu sedang aktif lewat isActive
function menuClass({ isActive }) {
  const base = 'rounded-lg px-3 py-2 text-sm font-medium'
  return isActive
    ? `${base} bg-blue-700 text-white`
    : `${base} text-gray-600 hover:bg-gray-100`
}

function AppLayout() {
  return (
    <div className="min-h-screen">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3">
          <span className="mr-4 font-bold text-blue-700">Manajemen Produk</span>
          {menus.map((menu) => (
            <NavLink key={menu.to} to={menu.to} end={menu.end} className={menuClass}>
              {menu.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
