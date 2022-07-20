import { memo, ReactElement } from "react";
import { IconHeart, ImageTest } from "../../assets";
import { CHART } from "./chart";
import { Chart } from "./components";

interface Props {
    image: string;
    status: string;
    description: string;
    amount: number;
    chart: CHART[];
    icon?: string;
}

export function CardProduct({
    image,
    status,
    description,
    amount,
    chart,
    icon,
}:Props): ReactElement {
    return (
        <div className="card-product border-optional">
            <div className="card-product-image">
                <img src={image} width="164px"/>
            </div>
            <div className="card-product-content">
                <div className="card-product-content-header">
                    <h6 className="card-product-content-header-text">
                        {status}
                    </h6>
                    <img src={icon === undefined ? IconHeart : icon} className="card-product-content-header-icon"/>
                </div>
                <div className="card-product-content-title">
                    <h2 className="card-product-content-title-text">
                        {description}
                    </h2>
                </div>
                <div className="card-product-content-description">
                    <span className="card-product-content-description-text">
                        Overall Capacity:
                    </span>
                    <span className="card-product-content-description-text">
                        {amount}Tons/Monthly
                    </span>
                </div>
                <div className="card-product-content-chart">
                    <Chart item={chart} />
                </div>
            </div>
        </div>
    )
}
export default memo(CardProduct);