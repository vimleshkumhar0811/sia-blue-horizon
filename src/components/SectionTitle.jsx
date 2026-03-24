export default function SectionTitle({ title, color }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-bold text-center mb-12"
      style={{ color }}
    >
      {title}
      <div
        className="h-1 w-20 mx-auto mt-4 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </h2>
  )
}