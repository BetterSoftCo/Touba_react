import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";
import { Link } from "react-router-dom";
import { IconArrow } from "../../assets";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    notification?: number;
    icon: string;
    dropdown?: string;
    dataBsToggle?: string;
    dataBsTarget?: string;
}

export function ButtonIconDashboard({ onClick, notification, icon, dropdown, dataBsToggle, dataBsTarget }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);

    return (
        <>
            {dropdown === undefined ? (
                <div className="section-two">
                    <button
                        className="button-icon-two"
                        onClick={handleOnClick}
                        data-bs-toggle={dataBsToggle}
                        data-bs-target={dataBsTarget}
                    >
                        <img src={icon} alt="" className="icon" />
                    </button>
                    {notification !== undefined ? (
                        <span>
                            <span>
                                {notification}
                            </span>
                        </span>
                    ) : (null)}
                </div>
            ) : (
                <div className="section-one">
                    <button
                        className="button-icon-one"
                        onClick={handleOnClick}
                    >
                        <img src={icon} alt="" className="icon" />
                    </button>
                    <Link to={dropdown}>
                        <img src={IconArrow} className="mx-3" />
                    </Link>
                    {notification !== undefined ? (
                        <span>
                            <span>
                                {notification}
                            </span>
                        </span>
                    ) : (null)}
                </div>
            )}
        </>
    )
}

export default memo(ButtonIconDashboard);