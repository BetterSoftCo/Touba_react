import {
  ComponentProductDetail,
  ComponentRadioCircle,
  ComponentRadioSquare,
} from "../../../components/components";
import { InputTextLabel } from "../../../components/input_text_label";
import { NavLink } from "react-router-dom";
import TradeInformationController from '../../../controllers/trade_information_controller';

export default class TradeInformation extends TradeInformationController {

  render() {
    return (
        <div>
        <div>
          <div>
            <ComponentProductDetail />
          </div>
          <div className="table-box mt-3 ">
            <div className="row border-bottom d-flex align-items-center ">
              <div className="row d-flex -align-items-center ">
                <div onClick={() => this.setState({active:0})} className="col-3 text-center ">
                  <div
                    className={`item-nav py-4 ${this.state.active == 0 && "item-active"} `}
                  >
                    Trade Information{" "}
                  </div>
                </div>
                <div onClick={() => this.setState({active:1})} className="col-3 text-center ">
                  <div
                    className={`item-nav py-4 ${this.state.active == 1 && "item-active"} `}
                  >
                    Logistic Information{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 border-bottom p-3">
              {this.state.active == 0 && (
                <div className="">
                  <div className=" smalText">Accepted payment methods:</div>
                  <div className="d-flex align-items-center row mt-3">
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={true} title="Western Uniun" />
                    </div>
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={false} title="Money Gram" />
                    </div>
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={true} title="PayPal" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center row mt-3">
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={true} title="T/T" />
                    </div>
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={false} title="L/C" />
                    </div>
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={true} title="D/A" />
                    </div>
                    <div className="px-3 col-3">
                      <ComponentRadioSquare active={true} title="Other" />
                    </div>
                  </div>
                </div>
              )}
              {this.state.active == 1 && (
                <div>
                  <div className="row">
                    <div className="col-3 px-2">
                      <div className="smalText">Suply Type:</div>
                    </div>
                    <div className="col-6 px-2">
                      <div className="row">
                        <div className="col-6">
                          <ComponentRadioCircle title="OEM Price" active={true} />
                        </div>
                        <div className="col-6">
                          <ComponentRadioCircle
                            title=" In Stock"
                            active={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-4">
                      {" "}
                      <InputTextLabel
                        type="select"
                        placeholder=""
                        title="Suply Ability"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="col-4 px-2">
                      {" "}
                      <InputTextLabel
                        type="select"
                        placeholder=""
                        title="Select Unit"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                    <div className="col-4 px-2">
                      {" "}
                      <InputTextLabel
                        type="select"
                        placeholder=""
                        title="Time"
                        value=""
                        onChange={() => {}}
                        showDropDown={true}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-3 px-2">
                      <div className="smalText">Overseas Office:</div>
                    </div>
                    <div className="col-6 px-2">
                      <div className="row">
                        <div className="col-6">
                          <ComponentRadioCircle title="Yes" active={true} />
                        </div>
                        <div className="col-6">
                          <ComponentRadioCircle title="No" active={false} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex p-4 justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <NavLink to="/dashboard/profile-start">
                  <button className="btn-save-change p-3">
                    {" "}
                    Publish Product
                  </button>
                </NavLink>
                {this.state.active > 0 && (
                  <div className="px-2">
                    <button
                      onClick={() => this.setState({active:this.state.active-1})}
                      className="btn-outline  p-3"
                    >
                      {" "}
                      Back
                    </button>
                  </div>
                )}
              </div>
              <div>
                <button className="btn-cancle p-3">Save and Quit</button>
              </div>
            </div>
          </div>
        </div>
      </div>    )
  }
}
