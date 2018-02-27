import React from 'react'
import Header from '../components/header'


export default class extends React.Component {
  static propTypes() {
    return {
      children: React.PropTypes.object.isRequired
    }
  }
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <div className="row">
          <div className="col s4"></div>
            <div className="col s4">
              <h1>Jobby</h1>
            </div>
            <div className="col s4"></div>       
          </div>
          <div className="row">
            <div className="col s1">
            </div>
            <div className="col s10">
              {this.props.children}
            </div>
            <div className="col s1">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
