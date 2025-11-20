import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import ListingCard from './components/ListingCard'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchListings = async (params = {}) => {
    setLoading(true)
    const qs = new URLSearchParams(Object.entries(params).filter(([_,v]) => v !== '' && v !== undefined))
    const r = await fetch(`${API}/listings?${qs.toString()}`)
    const data = await r.json()
    setItems(data.items || [])
    setTotal(data.total || 0)
    setLoading(false)
  }

  useEffect(() => {
    fetchListings({})
    // trigger seed data in background (idempotent)
    fetch(`${API}/seed`, { method: 'POST' }).catch(()=>{})
  }, [])

  const handleContact = async (item) => {
    try{ await fetch(`${API}/track/${item._id}/contact`, { method: 'POST' }) }catch(e){}
    alert('Kontakti: ' + item.kontakt)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar onPost={() => alert('Për demonstrim, hyrja dhe postimi do shtohen më vonë.')} />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-4">
          <Filters categories={["Automjete","Banesa","Elektronika","Shërbime","Punë","Pajisje Shtëpie","Të tjera"]} onSearch={fetchListings} />
        </div>

        {loading ? (
          <div className="py-12 text-center text-white/70">Duke ngarkuar…</div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg text-white/80">Rezultate: {total}</h2>
              <a href="#" className="text-sm text-cyan-300">Shiko të gjitha</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map(item => (
                <ListingCard key={item._id} item={item} onContact={handleContact} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-white/50">
        © {new Date().getFullYear()} Tregu.al – Platformë njoftimesh në Shqip
      </footer>
    </div>
  )
}
