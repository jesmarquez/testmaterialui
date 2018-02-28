import React from 'react'

export default class VacanteLista extends React.Component {
  render() {
    const oficios = ['Economista', 'Pedagogo infantil', 'Ingeniero industrial', 'Quimico farmaceútico', 'Administracion de empresas', 'Electricidad alta tensión', 'Cheff repostería', 'Mecánico automotriz']
    const listaOficio = oficios.map((oficio, index) =>
      <li key={index} className="collection-item"><div>{ oficio }<a href="#!" className="secondary-content"><i className="material-icons">Ver</i></a></div></li>
    )
    
    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Vacantes</h4></li>
        { listaOficio }
     </ul>
    )
  }
}
