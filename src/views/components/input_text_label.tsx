import { ChangeEvent, InputHTMLAttributes, memo, ReactElement, useCallback } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    title: string;
    placeholder: string;
    type: string;
    showDropDown: boolean;
}

export function InputTextLabel({ showDropDown, value, onChange, title, placeholder, type }: Props): ReactElement {

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event)
    }, [onChange]);

    return (
        <div className="input-text-label">
            <div className="input-text-label-title">
                <h6 className="input-text-label-title-text">
                    {title}
                </h6>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleOnChange}
                className="input-text-label-input"
            />
            {showDropDown === true ? (
                value === "" ? (null) : (
                    <div className="input-text-label-dropdown">

                    </div>
                )
            ) : (null)}
        </div>
    )
}
export default memo(InputTextLabel);