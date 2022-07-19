import { Link } from "react-router-dom";
import { ImageBackgroundLogin, IconTouba, IconEmail, IconTwiterGray, IconLinkdinGray } from "../../../../assets";
import Button from "../../../components/button";
import { ButtonOutline } from "../../../components/button_outline";
import { ComponentRadioSquare } from "../../../components/components";
import { InputTextLabel } from "../../../components/input_text_label";
import { InputTextPhoneNumber } from "../../../components/input_text_phonenumber";
import RegisterControll from "../../../controllers/register_controller";

class Register extends RegisterControll {
  render() {
    return (
      <div
        className="register"
        style={{ backgroundImage: "url(" + ImageBackgroundLogin + ")" }}
      >
        <img src={IconTouba} className="register-icon" />
        <div className="register-modal">
          <div className="register-modal-header">
            <h3 className="register-modal-header-title">Register</h3>
            <Link to="/login">
              <ButtonOutline title={"LOGIN"} />
            </Link>
          </div>
          <div className="register-modal-input-group">
            <div className="register-modal-input-group-name">
              <InputTextLabel
                value={this.state.firstName}
                title={"FirstName"}
                placeholder={""}
                type={"text"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ firstName: event.currentTarget.value });
                }}
              />
              <InputTextLabel
                value={this.state.lastName}
                title={"LastName"}
                placeholder={""}
                type={"text"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ lastName: event.currentTarget.value });
                }}
              />
            </div>
            <div className="register-modal-input-group-email">
              <InputTextLabel
                value={this.state.email}
                title={"Email"}
                placeholder={""}
                type={"email"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ email: event.currentTarget.value });
                }}
              />
            </div>
            <div className="register-modal-input-group-phone">
              <InputTextPhoneNumber
                title={"Phone Number"}
                getPhoneNumber={this.getPhoneNumber}
              />
            </div>
            <div className="register-modal-input-group-password">
              <InputTextLabel
                value={this.state.password}
                title={"Password"}
                placeholder={""}
                type={"password"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ password: event.currentTarget.value });
                }}
              />
            </div>
            <div className="register-modal-input-group-confirm-password">
              <InputTextLabel
                value={this.state.confirmPassword}
                title={"Confirm Password"}
                placeholder={""}
                type={"password"}
                showDropDown={false}
                onChange={(event) => {
                  this.setState({ confirmPassword: event.currentTarget.value });
                }}
              />
            </div>
          </div>
          <div className="register-modal-forgot-passsword">
            <ComponentRadioSquare
              title={"I’ve read and accepet Touba’s rules."}
              active={false}
            />
            <Link to="/" className="register-modal-forgot-passsword-link">
              (Condition & Rules)
            </Link>
          </div>
          <div className="register-modal-button">
            <Button onClick={this.registerUser} title="REGISTER" />
          </div>
          <div className="register-modal-divider">
            <div className="register-modal-divider-line"></div>
            <div className="register-modal-divider-text">
              <h6>OR USE</h6>
            </div>
          </div>
          <div className="register-modal-button-group">
            <button>
              <img src={IconEmail} />
            </button>
            <button>
              <img src={IconTwiterGray} />
            </button>
            <button>
              <img src={IconLinkdinGray} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
