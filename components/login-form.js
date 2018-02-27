
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwd: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswdChange = this.handlePasswdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswdChange(event) {
    this.setState({ passwd: event.target.value })
  }
  
  handleSubmit(event) {
    alert('Usuario login: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          passwd:
          <input type="text" value={this.state.passwd} onChange={this.handlePasswdChange} />
        </label>
        <button class="btn waves-effect waves-light" type="submit" name="action">Login!</button>
      </form>
    );
  }
}
