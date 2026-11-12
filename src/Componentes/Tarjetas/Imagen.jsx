import '../Styles/Tarjeta.css'

export default function Imagen({ img, alt = '' }) {
  if (!img) return null
  return <img className="Imagen" src={img} alt={alt} />
}
