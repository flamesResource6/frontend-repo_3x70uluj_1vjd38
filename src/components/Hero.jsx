import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-emerald-900"
            >
              Discover Saint Lucia
              <span className="block text-emerald-600">Tours & Vehicle Rentals</span>
            </motion.h1>
            <p className="mt-6 text-lg text-emerald-900/80">
              Explore the Pitons, rainforest ziplines, waterfalls and pristine beaches. Book curated tours or rent a reliable vehicle to roam the island at your pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#tours" className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Browse Tours</a>
              <a href="#rentals" className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold ring-1 ring-emerald-200 hover:ring-emerald-300 transition">Rent a Vehicle</a>
            </div>
            <p className="mt-4 text-sm text-emerald-700/70">Locally owned • Licensed guides • Free delivery for rentals</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
              <img src="https://images.unsplash.com/photo-1676725011705-03a4799c2c44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWludCUyMEx1Y2lhJTIwY29hc3R8ZW58MHwwfHx8MTc2MzMyNDQ5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Saint Lucia coast" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl p-4 shadow ring-1 ring-emerald-100">
              <div className="text-emerald-700 font-semibold">Top pick: Gros Piton Hike</div>
              <div className="text-sm text-emerald-700/70">5 hrs • From $95</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
