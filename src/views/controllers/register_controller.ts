import { Component } from "react";
import { UserDataSource } from "utilities_js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json } from "stream/consumers";

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
  registerUser = async () => {
    const userInformation = {
      userName: this.state.firstName + this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phone,
      password: this.state.password,
      sendSMS: false,
    };

    await this.userRegister.userRegister(
      userInformation,
      async (r) => {
        const response = r.result;
        console.log("salam ", response);
      },
      async (e) => {
        let error = e;
        toast.error(e.response.data.message);
      }
    );
  };

  getPhoneNumber = (value: string) => {
    this.setState({ phone: value });
  };
}
export default RegisterControll;
