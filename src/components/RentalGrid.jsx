import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function RentalGrid() {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/vehicles`).then(r => r.json()).then(setVehicles).finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-emerald-50/40" id="rentals">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Rentals" title="Reliable vehicles, delivered" description="Free hotel delivery and 24/7 roadside support." />
        {loading ? (
          <div className="mt-10 text-emerald-700">Loading vehicles…</div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(v => (
              <article key={v.id} className="bg-white rounded-2xl overflow-hidden ring-1 ring-emerald-100 shadow-sm hover:shadow-md transition">
                <img src={v.image_url} alt={v.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-emerald-900">{v.name}</h3>
                    <div className="text-emerald-700 font-semibold">${v.price_per_day}/day</div>
                  </div>
                  <div className="mt-1 text-sm text-emerald-700/80">{v.type} • {v.seats} seats • {v.transmission}</div>
                  <a href={`#book?kind=vehicle&id=${v.id}`} className="mt-4 inline-block text-emerald-700 font-semibold hover:text-emerald-800">Reserve →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
