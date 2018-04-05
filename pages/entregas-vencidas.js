import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Layout from '../components/layout.js'
import NavBar from '../components/nav'
import Page from '../components/page'
import ListaEntregasVencidas from '../components/lista-entregas-vencidas'
import fetch from 'isomorphic-fetch'

export default class extends Page {
  static async getInitialProps ({req, query}) {
    let props = await super.getInitialProps({req, query})

    const res = await fetch('http://localhost:3001/api/entregas-vencidas')
    const json = await res.json()
    json.forEach(element => {
      console.log(element.nombre)
    })

    props.entregas = json
    return props
  }

  constructor (props) {
    super(props)
  }

  render () {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent
    })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <Layout>
            <ListaEntregasVencidas entregas={this.props.entregas} />
          </Layout>
        </div>
      </MuiThemeProvider>
    )
  }
}
