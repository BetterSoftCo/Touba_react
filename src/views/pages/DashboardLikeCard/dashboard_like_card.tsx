import React, { Component } from "react";
import iconRing from "../../../assets/icons/icon-ring.svg";
import IconPlus from "../../../assets/icons/icon-plus.svg";
import IconChat from "../../../assets/icons/icon-chat.svg";
import IconUser from "../../../assets/icons/icon-user.svg";
import iconArrowDown from "../../../assets/images/arrowdown.png";
import { ButtonIcon } from "../../components/button_icon";
import DashboardNav from "../../components/dashboard_nav";
import { CardLike } from "../../components/components";
import DashboardLikeCardControllre from "../../controllers/dashboard_like_card_controller";
import ItemProfile from "../../components/item_profile";

export default class DashboardLikeCard extends DashboardLikeCardControllre {
  render() {
    return (
      <div>
        <div className="">
          <DashboardNav title="Liked Items" />
        </div>
        <div className=" row mt-3 justify-content-center align-items-center">
          <div className=" col-4 nav-like-box  d-flex  justify-content-center align-items-center">
            <div onClick={()=>this.handleShow(1)} className={`col-4 text-center ${this.state.filter==1 && 'active'}`}>
              <div >Products</div>
            </div>
            <div onClick={()=>this.handleShow(2)} className={`col-4 text-center ${this.state.filter==2 && 'active'}`}>
              <div>Excess Capacity</div>
            </div>

            <div onClick={()=>this.handleShow(3)} className={`col-4 text-center ${this.state.filter==3 && 'active'}`}>
              <div>Profiles</div>
            </div>
          </div>
        </div>
        {this.state.filter == 1 && (
          <>
            {" "}
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
              <div className="col-3 p-2">
                {" "}
                <CardLike />
              </div>
            </div>
          </>
        )}
        {this.state.filter == 3 && (
          <>
            {" "}
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
            </div>
            <div className="row">
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
              <div className="col-3 p-2">
                {" "}
                <ItemProfile />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
