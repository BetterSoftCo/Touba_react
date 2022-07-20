import Calendar from "react-calendar";
import { IconAddCircle, IconNotification, ImageNasa, ImageOil, IconChat, IconProfile, IconShop, IconChartRed } from "../../../../assets";
import { ButtonIconDashboard } from "../../../components/button_icon_dashboard";
import { CardGroupChat } from "../../../components/card_group_chat";
import { CardOverall } from "../../../components/card_overrall";
import { ChartSale } from "../../../components/chart_sale";
import { ComponentMessage, ComponentMessageImage } from "../../../components/components";
import Offcanvas from "../../../components/offcanvas";
import { SideNavItems } from "../../../components/side_nav_items";
import FinanceController from "../../../controllers/finance_controller";
import IncomePayCalendar from "./income_pay_caledar";
import Overview from "./overview";
import PurchasedItems from "./purchased_items";
import RedeemedInvoices from "./redeeme_invoices";
import SoldItems from "./sold_items";

export default class DashboardFinance extends FinanceController {
  render() {
    const {
      activeLink,
      active
    } = this.state;
    return (
      <div className="finance-page d-flex flex-row align-items-start">
        <div className="content mx-auto">
          <div className="title">
            <span>Finance</span>
          </div>
          <div className="row">
            <div className="left-sidebar">
              <SideNavItems
                items={this.TEST_NAV_ITEM}
                onActive={this.handleGetActiveLink}
              />
            </div>
            <div className="center-content">
              {activeLink === 0
                ? <Overview />
                : activeLink === 1
                  ? <SoldItems />
                  : activeLink === 2
                    ? <PurchasedItems />
                    : activeLink === 3
                      ? <RedeemedInvoices />
                      : activeLink === 4
                        ? <IncomePayCalendar />
                        : null}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className=" px-3 row d-flex align-items-center">
            <div className="col-12 dashboard-Nav d-flex">
              <div className="btn-Container align-items-center d-flex flex-row ">
                <button className="add-Btn d-flex align-items-center">
                  <img src={IconAddCircle} alt="add" />
                  <span>ADD NEW</span>
                </button>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconNotification} />
                  </div>
                </div>
                <div className="col-3 ">
                  <div className="mx-1">
                    <Offcanvas onActive={this.handleActiveTab}>
                      {active === 3 ? (
                        <>
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={false}
                          />
                          <CardGroupChat
                            title={"Group Title"}
                            amountMessage={7}
                            message={" message Here"}
                            images={[
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                              ImageNasa,
                            ]}
                            date={"25 MINS"}
                            disabled={true}
                          />
                        </>
                      ) : (
                        <>
                          {active === 2 ? (
                            <>
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                              <ComponentMessage />
                            </>
                          ) : (
                            <>
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                              <ComponentMessageImage
                                title={"Message Title Here"}
                                desc={"Quanzhou Laren Trading Co., Ltd."}
                                country={"CHINA"}
                                time={"1HOUR"}
                                image={ImageOil}
                              />
                            </>
                          )}
                        </>
                      )}
                    </Offcanvas>
                    <ButtonIconDashboard
                      icon={IconChat}
                      dataBsToggle="offcanvas"
                      dataBsTarget="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    />
                  </div>
                </div>
                <div className="col-2 ">
                  <div className="">
                    <ButtonIconDashboard icon={IconProfile} dropdown="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-items-start overall">
            <span className="title">Overall Summary</span>
            <CardOverall
              image={IconShop}
              type={"Product"}
              amountSold={120524}
              amountBought={35183}
            />
            <CardOverall
              image={IconChartRed}
              type={"Product"}
              amountSold={120524}
              amountBought={35183}
            />
          </div>
          <div className="my-3">
            <ChartSale />
          </div>
          <div className="calendar">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
