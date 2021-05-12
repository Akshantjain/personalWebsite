import React from "react";
import { createPopper } from "@popperjs/core";

const TooltipRender = ({ show = true, placement = "top", title, children }) => {
    const [tooltipShow, setTooltipShow] = React.useState(false);
    const btnRef = React.createRef();
    const tooltipRef = React.createRef();
 
    const getOffset = () => {
        if (placement === 'top-end') {
            return [40, 10];
        } else if (placement === 'right-start') {
            return [0, 20]
        } 
        // else return [0, 0]
    }

    const openLeftTooltip = () => {
        if (!show) return;
        createPopper(btnRef.current, tooltipRef.current, {
            placement: placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: getOffset(),
                    },
                },
            ],
        });
        setTooltipShow(true);
    };
    const closeLeftTooltip = () => {
        if (!show) return;
        setTooltipShow(false);
    };
    return (
        <React.Fragment>
            <div
                className={
                    (tooltipShow ? "" : "hidden ") +
                    "bg-gray-600 border-0 font-normal leading-normal text-sm text-left no-underline rounded-lg left-11"
                }
                ref={tooltipRef}>
                <div
                    className={
                        "bg-gray-600 text-white opacity-75 font-semibold p-3 border-blueGray-100 uppercase rounded-lg transition-all duration-500 ease-in-out"
                    }>
                    {title}
                </div>
            </div>
            {React.cloneElement(children, { ref: btnRef, onMouseEnter: openLeftTooltip, onMouseLeave: closeLeftTooltip })}
        </React.Fragment>
    );
};

export default function Tooltip(props) {
    return (
         <TooltipRender {...props}/>
    );
}
