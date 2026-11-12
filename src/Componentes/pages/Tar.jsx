import Tarjeta from '../Orquestador/Tarjeta.jsx'
import Boton from '../Tarjetas/Boton.jsx'
import '../Styles/main.css'

export default function Tar({ tarjeta }) {
  return (
    <div className="Contenedor">
      {tarjeta.map((postre) => (
        <Tarjeta
          key={postre.id}
          title={postre.title}
          description={postre.descripcion}
          img={postre.img}
          color={postre.color}
          ingredientes={postre.ingredientes}
        />
      ))}

      <div className="ZonaBoton">
        <Boton />
      </div>
    </div>
  )
}
