import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from '../components/layout.js';
import Login from '../components/login-form';
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
        <Layout>          <div className="row">
          <div className="col s4"></div>
            <div className="col s4">
              <h1>Jobby</h1>
            </div>
            <div className="col s4"></div>       
          </div>
          <Login />
        </Layout>
      </MuiThemeProvider>
   )
  }
}
