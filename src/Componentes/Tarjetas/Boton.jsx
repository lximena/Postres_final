import { Link } from 'react-router-dom'
import imgBoton from '../../img/boton.jpeg'
import '../Styles/Tarjeta.css'

export default function Boton() {
  return (
    <Link to="/Formulario">
      <img className="BotonImg" src={imgBoton} alt="Botón para ir al formulario" />
    </Link>
  )
}
