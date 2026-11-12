import '../Styles/Tarjeta.css'

export default function Imagen({ img, alt = '' }) {
 return <img className="Imagen" src={img} alt={alt} />
}
