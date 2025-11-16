import { useEffect, useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BookingForm() {
  const [kind, setKind] = useState('tour')
  const [itemId, setItemId] = useState('')
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#book?', ''))
    const k = params.get('kind')
    const id = params.get('id')
    if (k) setKind(k)
    if (id) setItemId(id)
  }, [])

  useEffect(() => {
    setItems([])
    const url = kind === 'tour' ? `${API}/tours` : `${API}/vehicles`
    fetch(url).then(r => r.json()).then(setItems)
  }, [kind])

  const selected = useMemo(() => items.find(i => i.id === itemId) || null, [items, itemId])

  function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      kind,
      item_id: itemId,
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      date: form.get('date'),
      notes: form.get('notes')
    }
    setStatus('loading')
    fetch(`${API}/book`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(r => r.json())
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <section className="py-16 sm:py-24" id="book">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold tracking-widest uppercase text-emerald-600">Booking</div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-emerald-900">Reserve your spot</h2>
          <p className="mt-3 text-emerald-900/80">Choose a tour or vehicle, then share your details. We'll confirm by email shortly.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-6 bg-white/70 backdrop-blur p-6 rounded-2xl ring-1 ring-emerald-100">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-emerald-800">Type</label>
              <select value={kind} onChange={e => setKind(e.target.value)} className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="tour">Tour</option>
                <option value="vehicle">Vehicle</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-emerald-800">Select</label>
              <select value={itemId} onChange={e => setItemId(e.target.value)} className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                <option value="">Choose...</option>
                {items.map(i => (
                  <option key={i.id} value={i.id}>{kind === 'tour' ? i.title : i.name}</option>
                ))}
              </select>
              {selected && (
                <div className="mt-2 text-sm text-emerald-700/80">
                  {kind === 'tour' ? `${selected.duration_hours} hrs • ${selected.location} • $${selected.price}` : `${selected.type} • ${selected.seats} seats • ${selected.transmission} • $${selected.price_per_day}/day`}
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-emerald-800">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-800">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-emerald-800">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-emerald-800">Date</label>
              <input type="date" name="date" required className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-emerald-800">Notes</label>
              <input name="notes" placeholder="Any special requests?" className="mt-1 w-full rounded-md border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button disabled={!itemId || status==='loading'} className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-50">Request booking</button>
            {status === 'success' && <span className="text-emerald-700">Thanks! We'll be in touch soon.</span>}
            {status === 'error' && <span className="text-red-600">Something went wrong. Please try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
