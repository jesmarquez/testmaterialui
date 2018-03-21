import React from 'react'
import Page from '../components/page'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import NavBar from '../components/nav'
import Layout from '../components/layout.js'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import fetch from 'isomorphic-fetch'

export default class extends Page {

  static async getInitialProps({req, query}) {
    let props = await super.getInitialProps({req, query})
    const res = await fetch('http://localhost:3001/api/usuario')
    const json = await res.json()
    props.user = json
    return props
  }

  constructor(props) {
    super(props)

    this.state = {usuario: props.user};
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
                <p>password:{ this.state.usuario.password }</p>
                <p>lastaccess: { this.state.usuario.lastAccess }</p>
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
