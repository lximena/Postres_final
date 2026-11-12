export default function Ingredientes({ ingredientes = [] }) {
  if (!ingredientes.length) return null

  return (
    <p className="IngredientesTexto">
      <strong>Ingredientes:</strong> {ingredientes.join(', ')}
    </p>
  )
}
