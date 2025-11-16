export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <div id={id} className="max-w-3xl">
      {eyebrow && <div className="text-sm font-semibold tracking-widest uppercase text-emerald-600">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-emerald-900">{title}</h2>
      {description && <p className="mt-3 text-emerald-900/80">{description}</p>}
    </div>
  )
}
