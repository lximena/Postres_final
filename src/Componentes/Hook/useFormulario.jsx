import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inicial = {Nombre:'', Imagen:'', Ingredientes:'', Descripcion:'', Color:''}

export default function useFormulario({ agregar }) {
  const navigate = useNavigate()
  const [datos, setDatos] = useState(inicial)

  const cambiar = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const postre = {
    title: datos.Nombre,
    img: datos.Imagen,
    descripcion: datos.Descripcion,
    ingredientes: datos.Ingredientes ? datos.Ingredientes.split(',').map((i) => i.trim()) : [],
    color: datos.Color,
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!datos.Nombre.trim()) return alert('Escribe al menos el nombre del postre')
    agregar({ ...postre, id: Date.now() })
    navigate('/Tarjetas')
  }

  return {
    datos,
    postre,
    onCambio: cambiar,
    onEnviar: enviar,
    onReset: () => setDatos(inicial),
    onVolver: () => navigate('/Tarjetas'),
  }
}
