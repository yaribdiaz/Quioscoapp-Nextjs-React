export const formatearDinero = cantidad => {
    return cantidad?.toLocaleString('en-US',{
      style: 'currency',
      currency: 'USD'
    })
}   


export const formatearFecha = fecha =>{
  const fechaNueva = new Date(fecha)

  const opciones = {
      year:'numeric',
      month:'long',
      day: '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-ES',opciones)
}

export const fechaNumerica = fecha => {
  const fechaNueva = new Date(fecha)

  const opciones = {
      year:'numeric',
      month:'numeric',
      day: '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-ES',opciones)
}