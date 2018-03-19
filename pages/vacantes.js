import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from '../components/layout.js'
import NavBar from '../components/nav'
import VacanteLista from '../components/vacante-lista'
import Page from '../components/page'

export default class extends Page {

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar />
          <Layout>
            <VacanteLista />
          </Layout>
        </div>
      </MuiThemeProvider>
   )
  }
}
