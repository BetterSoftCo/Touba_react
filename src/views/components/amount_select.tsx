import React, { memo, useCallback, useState } from "react";

interface Props {
    getActive(id: number): void
}

function AmountSelect({getActive}: Props) {
    const [active, setActive] = useState(1);

    const getActiveItem = useCallback((id: number) => {
        setActive(id);
        getActive(id);
    }, [getActive]);

    return (
        <div className="amount-select">
            <div
                className={
                    active === 1 ?
                        "amount-select-item" :
                        "deactive"
                }
                onClick={() => getActiveItem(1)}
            >
                <h6 className="amount-select-item-text">
                    128GB
                </h6>
            </div>
            <div
                className={
                    active === 2 ?
                        "amount-select-item" :
                        "deactive"
                }
                onClick={() => getActiveItem(2)}
            >
                <h6 className="amount-select-item-text">
                    256GB
                </h6>
            </div>
        </div>
    );
};

export default memo(AmountSelect);
