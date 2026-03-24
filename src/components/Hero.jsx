export default function Hero({ title, subtitle, accentColor }) {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900"
          style={{ color: accentColor }}
        >
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
}