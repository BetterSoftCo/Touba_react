import React, { memo } from "react";
import iconSearch from "../../assets/icons/icon-search.svg";
import Select_component from "./select_component";

const ComponentSortandSearch = () => {
  return (
    <div className="line-chart d-flex justify-content-between p-2">
      <div className="row d-flex align-items-center justify-content-between px-2">
        <div className="col-2 ">
          <div className="search-table d-flex">
            <div className="">
              <img src={iconSearch} />
            </div>
            <input className="input-search w-75" placeholder="Search in Orders" />
          </div>
        </div>
        <div className="col-2 px-2 select">
          <Select_component
            type="one"
            onSelect={() => {}}
            placeholder="Status Sorting"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ComponentSortandSearch);
