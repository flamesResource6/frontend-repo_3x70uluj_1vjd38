import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function TourGrid() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/tours`).then(r => r.json()).then(setTours).finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 sm:py-24" id="tours">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Tours" title="Curated island experiences" description="Handpicked adventures led by local guides." />
        {loading ? (
          <div className="mt-10 text-emerald-700">Loading tours…</div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map(t => (
              <article key={t.id} className="bg-white rounded-2xl overflow-hidden ring-1 ring-emerald-100 shadow-sm hover:shadow-md transition">
                <img src={t.image_url} alt={t.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-emerald-900">{t.title}</h3>
                    <div className="text-emerald-700 font-semibold">${t.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-emerald-900/80 line-clamp-3">{t.description}</p>
                  <div className="mt-4 text-sm text-emerald-700/70">{t.duration_hours} hrs • {t.location}</div>
                  <a href={`#book?kind=tour&id=${t.id}`} className="mt-4 inline-block text-emerald-700 font-semibold hover:text-emerald-800">Book now →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
