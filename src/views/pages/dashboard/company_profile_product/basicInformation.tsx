import React, { memo, Component } from "react";
import { BannerLetsStart } from "../../../components/banner_lets_start";
import {
  ComponentColors,
  ComponentColorSelect,
  ComponentFieldsetPrice,
  ComponentMultiInput,
  ComponentRadioSquare,
  ComponentTextArea,
  TextIconVerticalDashboard,
} from "../../../components/components";
import { InputTextLabel } from "../../../components/input_text_label";
import {
  IconCalling,
  IconDanger,
  IconShop,
  ImageJuicer,
  ImageManFlying,
  ImageManWithBox,
  ImageTest,
} from "../../../../assets";
import Select_component_double from "../../../components/select_component_double";
import ButtonAdd from "../../../components/button_add";
import ComponentStorage from "../../../components/component_storage";
import { Divider } from "../../../components/divider";
import UploadImage from "../../../components/upload_image";
import { CardUploadImage } from "../../../components/card_upload_image";
import BasicInformationController from "../../../controllers/basic_information_controller";

class BasicInformation extends BasicInformationController {
  render(): React.ReactNode {
    return (
      <div>
        <div>
          <BannerLetsStart />
        </div>
        <div className="table-box s ">
          <div className="row border-bottom d-flex align-items-center ">
            <div className="row d-flex -align-items-center ">
              <div
                onClick={() => this.setState({ active: 0 })}
                className="col-2 text-center "
              >
                <div
                  className={`item-nav py-4 ${
                    this.state.active == 0 && "item-active"
                  } `}
                >
                  Products
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
                  Attributes
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
                  Price & Delivery
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
                  Descriptions
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
                  Specifications
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            {this.state.active == 0 && (
              <div>
                {" "}
                <div className="row d-flex align-items-center">
                  <div className="col-6 p-2">
                    <InputTextLabel
                      type="text"
                      placeholder="Technical Support"
                      title="Product Title"
                      value=""
                      onChange={(e) => console.log(e.target.value)}
                      showDropDown={false}
                    />
                  </div>
                  <div className="col-6 text-start p-2">
                    <TextIconVerticalDashboard
                      icon={IconDanger}
                      title={"Hint text about the title"}
                    />
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-6 p-2">
                    <Select_component_double
                      items1={[{ name: "Agriculture", id: 0 }]}
                      items2={[{ name: "Machines", id: 0 }]}
                    />
                  </div>
                  <div className="col-6 text-start p-2">
                    <TextIconVerticalDashboard
                      icon={IconDanger}
                      title={"Hint text about the title"}
                    />
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-6 p-2">
                    <InputTextLabel
                      type="text"
                      placeholder="Milk Powder , Food Powders , Food raw materials"
                      title="Keywords"
                      value=""
                      onChange={(e) => {console.log(e.target.value)}}
                      showDropDown={false}
                    />
                  </div>
                  <div className="col-4 text-start p-2">
                    <div className="row mt-3">
                      <div className=" d-flex align-items-center justify-content-between">
                        <div className="smalText">Keywords Quality</div>
                        <div className="bigText">Excelent!</div>
                      </div>
                      <div className="progress progress-detail mt-2">
                        <div
                          className={`progress-bar-detail w-50`}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 d-flex justify-content-center align-self-end mb-1">
                    <div className="smalText ">Add 3 More Keywords</div>
                  </div>
                </div>
                <div className="mt-3 mb-4 p-2 col-4">
                  <CardUploadImage
                    handleGetImage={() => {}}
                    title="Product Images"
                  />
                </div>
              </div>
            )}
            {this.state.active == 1 && (
              <div className="p-2">
                <div>
                  <ComponentMultiInput
                    lableOne="Feature Title:"
                    lableTwo="Feature Details:"
                    placeholderOne="Weight"
                    placeholderTwo="2800 KG"
                  />{" "}
                </div>

                <div
                  className="
            mt-4"
                >
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the feature"}
                  />
                  <div className="mt-4">
                    <ComponentMultiInput
                      lableOne="Feature Title:"
                      lableTwo="Feature Details:"
                      placeholderOne="Weight"
                      placeholderTwo="2800 KG"
                    />{" "}
                  </div>
                </div>
                <div className="mt-3">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the feature"}
                  />
                </div>
                <div className="mt-4">
                  <ComponentMultiInput
                    lableOne="Feature Title:"
                    lableTwo="Feature Details:"
                    placeholderOne="Weight"
                    placeholderTwo="2800 KG"
                  />{" "}
                </div>
                <div className="mt-3">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the feature"}
                  />
                </div>

                <div className="p-2">
                  <ComponentColors />
                </div>
                <div className="p-2">
                  <ButtonAdd onClick={() => {}} />
                </div>
              </div>
            )}
            {this.state.active == 2 && (
              <div className="p-3">
                <div className="mt-2">
                  <ComponentColorSelect />
                </div>
                <div className="row d-flex align-items-center mt-4">
                  <div className="col-6 ">
                    <Select_component_double
                      items1={[{ name: "Select Unit", id: 0 }]}
                      items2={[{ name: "Min Order", id: 0 }]}
                    />
                  </div>
                  <div className="col-6 text-start ">
                    <TextIconVerticalDashboard
                      icon={IconDanger}
                      title={"Hint text about the title"}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <ComponentFieldsetPrice />
                  <div className=" mt-3  text-start ">
                    <TextIconVerticalDashboard
                      icon={IconDanger}
                      title={"Hint text about the delivery and price"}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <ComponentFieldsetPrice />
                  <div className=" mt-3  text-start ">
                    <TextIconVerticalDashboard
                      icon={IconDanger}
                      title={"Hint text about the delivery and price"}
                    />
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  {" "}
                  <ButtonAdd onClick={() => {}} />
                </div>
                <Divider direction="vertical" />
                <div className="mt-3">
                  <ComponentRadioSquare
                    active={true}
                    title="Do you want to add any offer for this product?"
                  />
                </div>
                <div className="mt-3 col-5">
                  <InputTextLabel
                    type="text"
                    placeholder="25"
                    title="Offer Amount(%)"
                    value=""
                    onChange={() => {}}
                    showDropDown={false}
                  />
                </div>
              </div>
            )}
            {this.state.active == 3 && (
              <div className="px-3">
                <div className="">
                  <ComponentTextArea />
                </div>
                <div className=" mt-3  text-start ">
                  <TextIconVerticalDashboard
                    icon={IconDanger}
                    title={"Hint text about the feature"}
                  />
                </div>
              </div>
            )}
            {this.state.active == 4 && (
              <div className="p-2">
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
                </div>
              </div>
            )}
          </div>
          <div className="d-flex p-4 justify-content-between align-items-center">
            <div className="d-flex align-items-center ">
              <button
                onClick={() => this.setState({ active: this.state.active + 1 })}
                className="btn-save-change p-3"
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
              <button className="btn-cancle p-3">Cancle</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInformation;
