import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Link from 'next/link'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from '../components/layout.js';
import FlatButton from 'material-ui/FlatButton';
import Stepper from '../components/stepper';

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
        <Layout>
          <div className="divider"></div>
          <div className="section">
            <h5>Gestión!</h5>
            <p>une empresa, universidad y practicantes!...</p>
            <Stepper />
          </div>
          <div className="divider"></div>
          <div className="section">
            <h5>Ingresa!</h5>
            <p>ingresa a jobby seas empresa, practicantes o coordinador!...</p>
            <Link href="/login">
              <a class="waves-effect waves-light btn">Login!</a>
            </Link>
          </div>          
        </Layout>
      </MuiThemeProvider>
   )
  }
}
