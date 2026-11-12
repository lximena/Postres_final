import useFormulario from '../Hook/useFormulario.jsx'
import Formulario from '../Orquestador/Formulario.jsx'

export default function FormularioPage({ agregar }) {
  const props = useFormulario({ agregar })
  return <Formulario {...props} />
}
