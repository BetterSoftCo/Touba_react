import ButtonAdd from "../../../components/button_add";
import { ComponentProductDetail, ComponentMultiInput } from "../../../components/components";
import CongratulationBanner from "../../../components/congratulation_banner";
import { InputTextLabel } from "../../../components/input_text_label";
import OtherDetailController from "../../../controllers/other_detail_controller";


export default class OtherDetail extends OtherDetailController {
  render() {
    return (
      <div>
        {" "}
        {!this.state.tab ? (
          <div style={{ width: "100%", height: "670px" }}>
            <CongratulationBanner
              onClick={() => this.setState({ tab: true })}
              activeTab="Other Details"
            />
          </div>
        ) : (
          <div>
            <div>
              <ComponentProductDetail />
            </div>
            <div className="table-box mt-3 ">
              <div className="row border-bottom d-flex align-items-center ">
                <div className="row d-flex -align-items-center ">
                  <div
                    onClick={() => this.setState({ active: 0 })}
                    className="col-3 text-center "
                  >
                    <div
                      className={`item-nav py-4 ${
                        this.state.active == 0 && "item-active"
                      } `}
                    >
                      Packaging & Shipping
                    </div>
                  </div>
                  <div
                    onClick={() => this.setState({ active: 1 })}
                    className="col-2 text-center "
                  >
                    <div
                      className={`item-nav py-4 ${
                        this.state.active == 1 && "item-active"
                      } `}
                    >
                      Certifications
                    </div>
                  </div>
                  <div
                    onClick={() => this.setState({ active: 2 })}
                    className="col-2 text-center "
                  >
                    <div
                      className={`item-nav py-4 ${
                        this.state.active == 2 && "item-active"
                      } `}
                    >
                      FAQ{" "}
                    </div>
                  </div>
                  <div
                    onClick={() => this.setState({ active: 3 })}
                    className="col-2 text-center "
                  >
                    <div
                      className={`item-nav py-4 ${
                        this.state.active == 3 && "item-active"
                      } `}
                    >
                      Other option{" "}
                    </div>
                  </div>
                  <div
                    onClick={() => this.setState({ active: 4 })}
                    className="col-2 text-center "
                  >
                    <div
                      className={`item-nav py-4 ${
                        this.state.active == 4 && "item-active"
                      }`}
                    >
                      Other option
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 border-bottom p-3">
                {this.state.active == 0 && (
                  <div className="">
                    {" "}
                    <div className="">
                      <ComponentMultiInput
                        lableOne="Feature Title:"
                        lableTwo="Feature Details:"
                        placeholderOne="Weight"
                        placeholderTwo="2800 KG"
                      />{" "}
                    </div>
                    <div className="mt-4">
                      <ComponentMultiInput
                        lableOne="Feature Title:"
                        lableTwo="Feature Details:"
                        placeholderOne="Weight"
                        placeholderTwo="2800 KG"
                      />{" "}
                    </div>
                    <div className="mt-2">
                      <ButtonAdd onClick={() => {}} />
                    </div>{" "}
                  </div>
                )}
                {this.state.active == 1 && (
                  <div>
                    <div className="row">
                      <div className="col-6 px-2">
                        <InputTextLabel
                          type="select"
                          placeholder="Certificate Name"
                          title="Certificate:"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                      <div className="col-6 px-2">
                        <InputTextLabel
                          type="select"
                          placeholder="123456"
                          title="Code::"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {this.state.active == 2 && (
                  <div className="">
                    <div className="row">
                      <div>
                        <InputTextLabel
                          type="select"
                          placeholder="Type Question Here"
                          title="Question"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                      <div className="mt-3 ">
                        <InputTextLabel
                          type="select"
                          placeholder="Type Answer"
                          title="Answer"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                      <div className="border-bottom-dashed mt-3"></div>
                      <div className="mt-3">
                        <InputTextLabel
                          type="select"
                          placeholder="Type Question Here"
                          title="Question"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                      <div className="mt-3 ">
                        <InputTextLabel
                          type="select"
                          placeholder="Type Answer"
                          title="Answer"
                          value=""
                          onChange={() => {}}
                          showDropDown={true}
                        />
                      </div>
                      <div className="border-bottom-dashed mt-3"></div>
                      <div className="mt-1">
                        <ButtonAdd onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex p-4 justify-content-between align-items-center">
                <div className="d-flex align-items-center ">
                  <button
                    className="btn-save-change p-3"
                    onClick={() =>
                      this.setState({ active: this.state.active + 1 })
                    }
                  >
                    Next Step
                  </button>
                  {this.state.active > 0 && (
                    <div className="px-2">
                      <button
                        onClick={() =>
                          this.setState({ active: this.state.active - 1 })
                        }
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
        )}
      </div>
    );
  }
}
