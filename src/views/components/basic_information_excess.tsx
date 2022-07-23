import { useState } from "react";
import { BannerLetsStart } from "./banner_lets_start";
import {
  ComponentFieldsetPrice,
  ComponentTextArea,
  TextIconVerticalDashboard,
} from "./components";
import { InputTextLabel } from "./input_text_label";
import { IconDanger } from "../../assets";
import Select_component_double from "./select_component_double";
import ButtonAdd from "./button_add";
import UploadImage from "./upload_image";
import Chart from "./chart";

const ChartTEST = [
  { name: "JAN", size: 20 },
  { name: "FEB", size: 30 },
  { name: "MAR", size: 40 },
  { name: "APR", size: 50 },
  { name: "MAY", size: 60 },
  { name: "JUN", size: 70 },
  { name: "JUL", size: 80 },
  { name: "AUG", size: 90 },
  { name: "SEP", size: 100 },
  { name: "OCT", size: 20 },
  { name: "NOV", size: 20 },
  { name: "DEC", size: 20 },
];
interface IProps {
  onClick(): void;
}
const BasicInformationExcess = ({ onClick }: IProps) => {
  const [active, setActive] = useState(0);

  const basicInformmation = () => {
    return (
      <div className="px-4 py-3">
        <div className="row d-flex align-items-center">
          <div className="col-6 p-2">
            <InputTextLabel
              type="text"
              placeholder="Technical Support"
              title="Product Title"
              value=""
              onChange={() => {}}
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
        <div className="row d-flex align-items-center select-Container">
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
          <div className="col-6 p-2 text-red">
            <InputTextLabel
              type="text"
              placeholder="Milk Powder , Food Powders , Food raw materials"
              title="Keywords"
              value=""
              onChange={() => {}}
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
        <div className="upload-image-container mt-3 mb-5">
          <UploadImage title="Product Images" />
        </div>
      </div>
    );
  };
  const priceDelivery = () => {
    return (
      <div className="py-3 px-4">
        <div className="row d-flex align-items-center mt-4">
          <div className="col-6 ">
            <Select_component_double
              items1={[{ name: "Select Unit", id: 0 }]}
              items2={[{ name: "Min Order", id: 1 }]}
              title1="Select Unit"
              title2="Overall capacity"
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
          <div className=" text-start  hint-text my-3">
            <TextIconVerticalDashboard
              icon={IconDanger}
              title={"Hint text about the delivery and price"}
            />
          </div>
        </div>
        <div className="mt-3 ">
          <ComponentFieldsetPrice />
          <div className=" mt-3 text-start hint-text">
            <TextIconVerticalDashboard
              icon={IconDanger}
              title={"Hint text about the delivery and price"}
            />
          </div>
        </div>
        <div className="mt-4 mb-4">
          <ButtonAdd onClick={() => {}} />
        </div>
      </div>
    );
  };
  const capacityDetail = () => {
    return (
      <div className="px-4 py-3">
        <div className="w-50 chart-container">
          <Chart item={ChartTEST} />
        </div>
        <div className="row pe-5">
          <div className="col-3">
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Jan Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="May Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Sep Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Feb Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Jun Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Oct Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Mar Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Jul Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Nov Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Apr Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Aug Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
            <div className="p-2">
              <InputTextLabel
                type="text"
                placeholder="80 Tons"
                title="Dec Free Capacity"
                value=""
                onChange={() => {}}
                showDropDown={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="basic-information">
      <div>
        <BannerLetsStart />
      </div>
      <div className="table-box ">
        <div className="row border-bottom d-flex align-items-center ">
          <div className="row d-flex align-items-center ">
            <div onClick={() => setActive(0)} className="col-2 text-center mx-4">
              <div className={`item-nav py-4 ${active == 0 && "item-active"} `}>
                BASIC INFORMATION
              </div>
            </div>
            <div onClick={() => setActive(1)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 1 && "item-active"} `}>
                PRICE & DELIVERY
              </div>
            </div>
            <div onClick={() => setActive(2)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 2 && "item-active"} `}>
                CAPACITY DETALS
              </div>
            </div>
            <div onClick={() => setActive(3)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 3 && "item-active"} `}>
                SPECIFICATIONS
              </div>
            </div>
            <div onClick={() => setActive(4)} className="col-2 text-center ">
              <div className={`item-nav py-4 ${active == 4 && "item-active"}`}>
                DESCRIPTIONS
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 border-bottom">
          {active == 0 && basicInformmation()}
          {active == 1 && priceDelivery()}
          {active == 2 && capacityDetail()}
          {active == 4 && (
            <div className="px-3">
              <div className="">
                <ComponentTextArea />
              </div>
              <div className=" mt-3 mb-2 text-start ">
                <TextIconVerticalDashboard
                  icon={IconDanger}
                  title={"Hint text about the feature"}
                />
              </div>
            </div>
          )}
          {active == 3 && (
            <div className="mx-5">
              <TextIconVerticalDashboard
                icon={IconDanger}
                title={"Hint text about the feature"}
              />
              <div className="mt-3">
                <TextIconVerticalDashboard
                  icon={IconDanger}
                  title={"Hint text about the feature"}
                />
              </div>
              <div className="p-2">
                <ButtonAdd onClick={() => {}} />
              </div>
            </div>
          )}
        </div>
        <div className="d-flex p-4 justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <button
              className="btn-save-change p-3"
              onClick={() => setActive(active + 1)}
            >
              {" "}
              Next Step
            </button>
            {active >= 0 && (
              <div className="px-2">
                {active === 0 ? (
                  <button onClick={onClick} className="btn-outline  p-3">
                    Back
                  </button>
                ) : (
                  <button
                    onClick={() => setActive(active - 1)}
                    className="btn-outline  p-3"
                  >
                    Back
                  </button>
                )}
              </div>
            )}
          </div>

          <div>
            <button className="btn-cancle p-3" onClick={onClick}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformationExcess;
