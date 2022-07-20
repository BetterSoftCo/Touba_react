import {
  CardLike,
  ComponentProductDetail,
} from "../../../components/components";
import { InputTextLabel } from "../../../components/input_text_label";
import image_test from "../../../../assets/images/image-test.png";
import ButtonAdd from "../../../components/button_add";
import { ModalCompany } from "../../../components/modal_company";
import { CardProduct } from "../../../components/card_product";
import RelatedItemsController from '../../../controllers/related_items_controller';
import { IconMinesCircle } from "../../../../assets";

export default class RelatedItems extends RelatedItemsController {
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
                <div onClick={() => this.setState({ active: 0 })} className="col-4 text-center ">
                  <div
                    className={`item-nav py-4 ${this.state.active == 0 && "item-active"} `}
                  >
                    Related Products{" "}
                  </div>
                </div>
                <div onClick={() => this.setState({ active: 1 })} className="col-4 text-center ">
                  <div
                    className={`item-nav py-4 ${this.state.active == 1 && "item-active"} `}
                  >
                    Related excess capacity{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 border-bottom p-3">
              {this.state.active == 0 && (
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
                  <div className="p-2 mt-3">
                    <ButtonAdd onClick={() => this.setState({ shoModalProduct: true })} />
                  </div>
                  <div>
                    {this.state.shoModalProduct && (
                      <ModalCompany
                        onClose={() => this.setState({ shoModalProduct: false })}
                        onSave={() => this.setState({ shoModalProduct: false })}
                      >
                        <div className="p-2">
                          <div className="pt-3 col-5 border-bottom">
                            <div className="col-5 mb-3 ">
                              <InputTextLabel
                                type="select"
                                placeholder="Name of product"
                                title="Search Products"
                                value=""
                                onChange={() => { }}
                                showDropDown={true}
                              />
                            </div>
                          </div>
                          <div className="row mt-3">
                            {" "}
                            <div className="col-4 p-2">
                              <CardLike />
                            </div>
                            <div className="col-4 p-2">
                              <CardLike />
                            </div>
                            <div className="col-4 p-2">
                              <CardLike />
                            </div>
                          </div>
                        </div>{" "}
                      </ModalCompany>
                    )}
                  </div>
                </div>
              )}
              {this.state.active == 1 && (
                <div>
                  <div className="row">
                    <div className="col-6 p-2">
                      <CardProduct
                        image={image_test}
                        status={"exp"}
                        description={"Pomegranate Juice Pet Bottle, "}
                        chart={this.TEST}
                        amount={5}
                        icon={IconMinesCircle}
                      />{" "}
                    </div>
                    <div className="col-6 p-2">
                      <CardProduct
                        image={image_test}
                        status={"exp"}
                        description={"Pomegranate Juice Pet Bottle, "}
                        chart={this.TEST}
                        amount={5}
                        icon={IconMinesCircle}
                      />{" "}
                    </div>
                    <div className="p-2 mt-3">
                      <ButtonAdd onClick={() => this.setState({ shoModalProduct: true })} />
                    </div>
                    {this.state.shoModalProduct && (
                      <ModalCompany
                        onClose={() => this.setState({ shoModalProduct: false })}
                        onSave={() => this.setState({ shoModalProduct: false })}
                      >
                        <div className="p-2">
                          <div className="pt-3  border-bottom">
                            <div className="col-5 mb-3 ">
                              <InputTextLabel
                                type="select"
                                placeholder="Name of excess capacity"
                                title="Search Excess Capacity"
                                value=""
                                onChange={() => { }}
                                showDropDown={true}
                              />
                            </div>
                          </div>
                          <div className="row mt-3">
                            {" "}
                            <div className="col-6 p-2">
                              <CardProduct
                                image={image_test}
                                status={"exp"}
                                description={"Pomegranate Juice Pet Bottle, "}
                                chart={this.TEST}
                                amount={5}
                              />{" "}
                            </div>
                            <div className="col-6 p-2">
                              <CardProduct
                                image={image_test}
                                status={"exp"}
                                description={"Pomegranate Juice Pet Bottle, "}
                                chart={this.TEST}
                                amount={5}
                              />{" "}
                            </div>
                          </div>
                          <div className="row mt-3">
                            {" "}
                            <div className="col-6 p-2">
                              <CardProduct
                                image={image_test}
                                status={"exp"}
                                description={"Pomegranate Juice Pet Bottle, "}
                                chart={this.TEST}
                                amount={5}
                              />{" "}
                            </div>
                            <div className="col-6 p-2">
                              <CardProduct
                                image={image_test}
                                status={"exp"}
                                description={"Pomegranate Juice Pet Bottle, "}
                                chart={this.TEST}
                                amount={5}
                              />{" "}
                            </div>
                          </div>
                        </div>{" "}
                      </ModalCompany>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex p-4 justify-content-between align-items-center">
              <div className="d-flex align-items-center ">
                <button className="btn-save-change p-3" onClick={() => this.setState({ active: this.state.active + 1 })}>Publish Product</button>
                {this.state.active > 0 && (
                  <div className="px-2">
                    <button
                      onClick={() => this.setState({ active: this.state.active - 1 })}
                      className="btn-outline  p-3"
                    >
                      {" "}
                      Back
                    </button>
                  </div>
                )}
              </div>

              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
