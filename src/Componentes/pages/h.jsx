import { useNavigate } from 'react-router-dom'
import Efecto from '../Home/Efecto.jsx'
import imgPortada from '../../img/Portada.png'
import '../Styles/h.css'

export default function H() {
  const navigate = useNavigate()

  return (
    <div className="h">
      <Efecto src={imgPortada} onFin={() => navigate('/Tarjetas')} />
    </div>
  )
}
