import { IconEdit } from "../../../../assets";
import { BannerCongratulations } from "../../../components/baner_congratulations";
import { ComponentSortandSearch, CardLike } from "../../../components/components";
import DashboardNav from "../../../components/dashboard_nav";
import { SideNavItems } from "../../../components/side_nav_items";
import CompanyProfileProductController from "../../../controllers/dashboard_company_profile_controller";
import Component_basic_information from "./basicInformation";
import OtherDetail from "./other_detail";
import RelatedItems from "./related_items";
import TradeInformation from "./trade_information";

class CompanyProfileProduct extends CompanyProfileProductController {
 
  searchAndSort = () => {
    return <ComponentSortandSearch />;
  };
  cardLike = () => {
    return (
      <div className="row">
        <div className="col-3 p-2">
          <CardLike icon={IconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={IconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={IconEdit} />
        </div>
        <div className="col-3 p-2">
          <CardLike icon={IconEdit} />
        </div>
      </div>
    );
  };
  test = () => {
    console.log(4);
  };
  starterPage = () => {
    return (
      <div className="mt-5 p-3">
        <div className="mt-5">
          <BannerCongratulations onClick={() => this.handleShowSection(2)} />
        </div>
        <div className="mt-2">{this.searchAndSort()}</div>
        {this.cardLike()} {this.cardLike()}{" "}
        <div className="d-flex justify-content-center pagination mt-2">
          <div className="bigText">
            <div>1</div>
          </div>
          <div className="bigText">
            <div>2</div>
          </div>
          <div className="bigText">
            <div className="active">3</div>
          </div>
          <div className="bigText">
            <div>4</div>
          </div>
          <div className="bigText">
            <div className="">5</div>
          </div>
        </div>
      </div>
    );
  };
  addProductOne = () => {
    return (
      <div className="row">
        <div className="col-2">
          <SideNavItems
            onActive={(e) => this.handleShowSideNavItem(e)}
            items={this.TEST_NAV_ITEM}
          />
        </div>
        <div className="col-10 px-4 mt-5 ">
          {this.state.show == 0 && (
            <div>
              <Component_basic_information />
            </div>
          )}
          {this.state.show == 1 && (
            <div>
              <OtherDetail />
            </div>
          )}
          {this.state.show == 2 && (
            <div>
              <TradeInformation />
            </div>
          )}
          {this.state.show == 3 && (
            <div>
              <RelatedItems />
            </div>

            // <div style={{ width: "960px", height: "670px" }}>
            //   <CongratulationBanner activeTab="Related Items" />
            // </div>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="company-profile-product">
        <DashboardNav title="Products" />
        {this.state.status == 1 && this.starterPage()}
        {this.state.status == 2 && this.addProductOne()}
      </div>
    );
  }
}
export default CompanyProfileProduct;
