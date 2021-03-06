import React, { memo } from "react";
import { ButtonComponent } from "./button";
import { SelectComponent, SelectText } from "./components";
import { InputTextLabel } from "./input_text_label";

const ComponentSearchBar = () => {
  return (
    <div className="d-flex align-items center row p-4 bg-white">
      <div className="col-xl-3 col-sm-12 p-2">
        <InputTextLabel value={""} title={"Product or Service"} placeholder={""} type={""} showDropDown={false} />
      </div>
      <div className="col-xl-3 col-sm-12 p-2">
        <SelectText value={""} onSelected={function (name: string): void {
          throw new Error("Function not implemented.");
        } } items={[]} />
      </div>
      <div className="col-xl-3 col-sm-12 p-2 justify-content-center">
        <SelectComponent type='one' onSelect={function (name: string): void {
          throw new Error("Function not implemented.");
        } }  />
      </div>
      <div className="col-xl-3 col-sm-12 p-2">
        <ButtonComponent title="search"  />
      </div>
    </div>
  );
};

export default memo(ComponentSearchBar);