import { Component } from "react";
import { UserDataSource } from "utilities_js";

interface IProps { }
interface IState {
  email: string;
  password: string;
}

export class LoginControll extends Component<IProps, IState> {

  // userLogin = new UserDataSource(
  //   "https://api.sinamn75.com/api/"
  // );

  routeHome = () => {
    localStorage.setItem("token", "true");
  };

  state = {
    email: "",
    password: "",
  };
}
export default LoginControll;
