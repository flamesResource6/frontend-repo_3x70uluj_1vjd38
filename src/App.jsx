import Hero from './components/Hero'
import TourGrid from './components/TourGrid'
import RentalGrid from './components/RentalGrid'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-emerald-700 tracking-tight">Lucia Adventures</a>
          <nav className="hidden sm:flex gap-6 text-sm font-semibold text-emerald-800">
            <a href="#tours" className="hover:text-emerald-900">Tours</a>
            <a href="#rentals" className="hover:text-emerald-900">Rentals</a>
            <a href="#book" className="hover:text-emerald-900">Book</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <TourGrid />
        <RentalGrid />
        <BookingForm />
      </main>
      <footer className="border-t border-emerald-100 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-700/70">© {new Date().getFullYear()} Lucia Adventures. All rights reserved.</p>
          <p className="text-sm text-emerald-700/70">Saint Lucia • Licensed & Insured</p>
        </div>
      </footer>
    </div>
  )
}

export default App
