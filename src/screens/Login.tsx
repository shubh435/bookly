import React from "react";
import withRouter, { WithRouterProps } from "../utils/withRouter";
import withRedux, { WithReduxProps } from "../utils/withRedux";
import { loginAction } from "../redux/reducers/Auth";

interface LoginProps {
  navigation: WithRouterProps;
  reduxProps: WithReduxProps;
}

interface LoginState {
  checkbox: boolean;
  email: string;
  password: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      checkbox: false,
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    alert(
      `Login with email:- ${this.state.email} password:- ${this.state.password}`
    );

    await this.props.reduxProps.dispatch(
      loginAction({ username: this.state.email, password: this.state.password })
    );
    this.props.navigation.navigate("/");
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <h3>sign in</h3>
          <span>username</span>
          <input
            type="email"
            name="email"
            className="box"
            placeholder="enter your email"
            onChange={this.handleChange}
            value={this.state.email}
            id=""
          />
          <span>password</span>
          <input
            type="password"
            name="password"
            className="box"
            placeholder="enter your password"
            id=""
            onChange={this.handleChange}
            value={this.state.password}
          />
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onChange={this.handleChange}
              checked={this.state.checkbox}
              id="remember-me"
            />
            <label htmlFor="remember-me"> remember me</label>
          </div>
          <input type="submit" value="sign in" className="btn" />
          <p>
            forget password ? <a href="#">click here</a>
          </p>
          <p>
            don't have an account ? <a href="#">create one</a>
          </p>
        </form>
      </div>
    );
  }
}

export default withRedux(withRouter(Login));
