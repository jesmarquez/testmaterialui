import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from '../components/layout.js'
import NavBar from '../components/nav'
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const muiTheme = getMuiTheme({
      userAgent: this.props.userAgent,
      });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar />
        <Layout>
          <ul className="collection with-header">
            <li className="collection-header"><h4>Vacantes</h4></li>
            <li className="collection-item"><div>Pedagogo infantil<a href="#!" className="secondary-content"><i className="material-icons">Ver</i></a></div></li>
            <li className="collection-item"><div>Ingeniero electricista<a href="#!" className="secondary-content"><i className="material-icons">Ver</i></a></div></li>
            <li className="collection-item"><div>Sicologo<a href="#!" className="secondary-content"><i className="material-icons">Ver</i></a></div></li>
            <li className="collection-item"><div>Cocinero<a href="#!" className="secondary-content"><i className="material-icons">Ver</i></a></div></li>
          </ul>
        </Layout>
      </MuiThemeProvider>
   )
  }
}