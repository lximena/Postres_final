import Boton from '../Formularios/Boton.jsx'
import Campos from '../Formularios/Campos.jsx'
import '../Styles/Formulario.css'
import Tarjeta from '../Orquestador/Tarjeta.jsx'

const Etiquetas = [
  { etiqueta: 'Nombre', tipo: 'text', holder: 'Brownie' },
  { etiqueta: 'Imagen', tipo: 'text', holder: 'Link de la imagen' },
  { etiqueta: 'Ingredientes', tipo: 'text', holder: 'Chocolate, harina, huevos' },
  { etiqueta: 'Descripcion', tipo: 'text', holder: 'Descripcion del postre' },
  { etiqueta: 'Color', tipo: 'text', holder: 'Color' },
]

export default function Formulario({ datos, postre, onCambio, onEnviar, onReset, onVolver }) {
  const Botones = [
    { tipo: 'submit', nombre: 'Enviar' },
    { tipo: 'button', nombre: 'Volver', onClick: onVolver },
    { tipo: 'reset', nombre: 'Reset' },
  ]

  return (
    <div>
      <form onSubmit={onEnviar} onReset={onReset}>
        <div>
          {Etiquetas.map((campo) => (
            <Campos
              key={campo.etiqueta}
              etiqueta={campo.etiqueta}
              tipo={campo.tipo}
              holder={campo.holder}
              valor={datos[campo.etiqueta]}
              onCambio={onCambio}
            />
          ))}
        </div>
        <div>
          {Botones.map((boton) => (
            <Boton
              key={boton.nombre}
              tipo={boton.tipo}
              nombre={boton.nombre}
              onClick={boton.onClick}
            />
          ))}
        </div>
      </form>
      <Tarjeta
        title={postre.title}
        description={postre.descripcion}
        img={postre.img}
        color={postre.color}
        ingredientes={postre.ingredientes}
      />
    </div>
  )
}
