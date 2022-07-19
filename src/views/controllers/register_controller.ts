import { Component } from "react";
import { UserDataSource } from "utilities_js";

interface IProps {}

interface IState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  code: string | number;
  confirmPassword: string;
}

export class RegisterControll extends Component<IProps, IState> {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    confirmPassword: "",
    code: 0,
  };
  userRegister = new UserDataSource("https://api.sinamn75.com/api/"); //list
  registerUser = () => {
    const userInformation = {
      userName: this.state.firstName + this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phone,
      password: this.state.password,
      sendSMS: false,
    };
    this.userRegister.userRegister(
      userInformation,
      (r: any) => {
        console.log(r);
      },
      (e: any) => {
        console.log(e);
      }
    );
  };

  getPhoneNumber = (value: string) => {
    this.setState({ phone: value });
  };
}
export default RegisterControll;
