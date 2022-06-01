import React, { memo } from "react";
import arrowDown from "../../assets/images/arrowdown.png";
import arrowup from "../../assets/images/arrowup.png";
import faq from '../../assets/images/faq.png'

interface open {
  open: boolean;
}
const CardFAQ = ({ open }: open) => {
  return (
    <div>
      <div className="faq-card p-4 d-flex align-items-center justify-content-between">
        <div className="">Question Title here</div>
        <div className={`${open ? "circle-faq-open" : "circle-faq"}`}>
          {open ? <img src={arrowup} /> : <img src={arrowDown} />}
        </div>
      </div>
      <div
        id="collapseOne "
        className={`collapse ${open ? "show" : "hide" } detail-faq`}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="smalText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis aute
        </div >
        <div className="mt-3">
            <img src={faq}/>
        </div>
      </div>
    </div>
  );
};

export default memo(CardFAQ);
