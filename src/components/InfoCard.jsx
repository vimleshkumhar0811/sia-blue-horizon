export default function InfoCard({ title, color, items }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      <div
        className="px-6 py-4 font-semibold text-lg text-white"
        style={{ backgroundColor: color }}
      >
        {title}
      </div>
      <div className="p-6">
        <dl className="space-y-3">
          {items.map(([label, value], i) => (
            <div key={i} className="flex justify-between">
              <dt className="text-gray-600">{label}</dt>
              <dd className="text-gray-900 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}