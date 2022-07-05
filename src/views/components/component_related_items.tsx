import React, { memo, useState } from "react";
import CongratulationBanner from "./congratulation_banner";
import {
  CardLike,
  ComponentColors,
  ComponentColorSelect,
  ComponentFieldsetPrice,
  ComponentProductDetail,
  ComponentRadioCircle,
  ComponentRadioSquare,
  ComponentTextArea,
  TextIconVerticalDashboard,
} from "./components";
import { InputTextLabel } from "./input_text_label";
import {
  IconCalling,
  IconDanger,
  IconShop,
  ImageJuicer,
  ImageManFlying,
  ImageManWithBox,
  ImageTest,
} from "../../assets";
import Select_component_double from "./select_component_double";
import ButtonAdd from "./button_add";
import ComponentStorage from "./component_storage";
import { Divider } from "./divider";
const ComponentRelatedItems = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div>
        <div>
          <ComponentProductDetail />
        </div>
        <div className="table-box mt-3 ">
          <div className="row border-bottom d-flex align-items-center ">
            <div className="row d-flex -align-items-center ">
              <div onClick={() => setActive(0)} className="col-3 text-center ">
                <div
                  className={`item-nav py-4 ${active == 0 && "item-active"} `}
                >
                  Related Products{" "}
                </div>
              </div>
              <div onClick={() => setActive(1)} className="col-3 text-center ">
                <div
                  className={`item-nav py-4 ${active == 1 && "item-active"} `}
                >
                  Related excess capacity{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 border-bottom p-3">
            {active == 0 && (
              <div className="row">
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="col-4 p-2">
                  <CardLike />
                </div>
                <div className="p-2 mt-3"><ButtonAdd onClick={()=>{}}/></div>
              </div>
            )}
            {active == 1 && (
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
              <button className="btn-save-change p-3">Next Step</button>
              {active > 0 && (
                <div className="px-2">
                  <button
                    onClick={() => setActive(active - 1)}
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
    </div>
  );
};

export default memo(ComponentRelatedItems);
