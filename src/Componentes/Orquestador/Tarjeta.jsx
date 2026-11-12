import '../Styles/Tarjeta.css'
import Titulo from '../Tarjetas/Titulo.jsx'
import Descripcion from '../Tarjetas/Descripcion.jsx'
import Imagen from '../Tarjetas/Imagen.jsx'
import Ingredientes from '../Tarjetas/Ingredientes.jsx'

export default function Tarjeta({ title, img, description, color, ingredientes = [] }) {
  return (
    <div className="Centrar" style={{ background: color }}>
      <Imagen img={img} alt={title} />
      <div className="Orga">
        <Titulo title={title} />
        <Descripcion description={description} />
        <Ingredientes ingredientes={ingredientes} />
      </div>
    </div>
  )
}

