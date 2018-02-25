import React from 'react'
import Header from '../components/header'
import FlatButton from 'material-ui/FlatButton';

export default class extends React.Component {
  
  render() {
    return(
      <div>
        <Header />
        <div class="container">
          <div class="row">
            <div class="col s4">

            </div>
            <div class="col s4">
              <FlatButton label="Entrar" />
              <FlatButton label="Salir" />
            </div>
            <div class="col s4">

            </div>
          </div>
        </div>
      </div>
    )
  }
}