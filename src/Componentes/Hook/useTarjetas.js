import { useState } from 'react'
import postres from '../../data.json'

export default function useTarjetas() {
  const [tarjeta, setTarjeta] = useState(postres)
  const agregar = (nueva) => setTarjeta([...tarjeta, nueva])
  return { tarjeta, agregar }
}
