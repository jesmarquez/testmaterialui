import React from 'react'
import Page from '../components/page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import NavBar from '../components/nav'
import Layout from '../components/layout.js'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class extends Page {

  constructor(props) {
    super(props)

    var single = {
      username: 'jamarquez',
      nombres: 'Jesus Alberto',
      apellidos: 'Marquez Acevedo',
      email: 'jamarquez@uao.edu.co'
    }

    this.state = {usuario: single};
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      })

    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        <NavBar />
        <Layout>          
          <div className="row">
          <div className="col s4"></div>
            <div className="col s4">
            <Card>
              <CardHeader
                title="Usuario"
                subtitle="Datos"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Ok" />
              </CardActions>
              <CardText expandable={true}>
                <p>username: { this.state.usuario.username }</p>
                <p>email: { this.state.usuario.email }</p>
                <p>nombres:{ this.state.usuario.nombres }</p>
                <p>apellido: { this.state.usuario.apellidos }</p>
              </CardText>
            </Card>
            </div>
            <div className="col s4"></div>       
          </div>
        </Layout>
        </div>
      </MuiThemeProvider>
    )
  }
}
