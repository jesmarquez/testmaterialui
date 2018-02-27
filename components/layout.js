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
        <div class="container">
          <div class="row">
            <div class="col s4">
            </div>
            <div class="col s4">
              {this.props.children}
            </div>
            <div class="col s4">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
