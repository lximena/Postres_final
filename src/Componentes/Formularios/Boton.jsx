export default function Boton({ tipo = 'button', nombre = 'button', onClick }) {
  return (
    <button type={tipo} onClick={onClick}>
      {nombre}
    </button>
  )
}
