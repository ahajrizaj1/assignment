import React from "react";

const ModalPop = (prop) => {
  return (
    <div className="modal-pop">
      <div className="first-row">
        <p className="first-row__heading">Theme Color</p>
        <div className="first-row__right">
          <p>Change Theme</p>
        </div>
      </div>
      <div className="pop-styles">
        <div className="style_row">
          <div className="left">
            <p>Font Color</p>
          </div>
          <div className="right">
            <p>#444444</p>
            <div
              className="right_box"
              style={{ backgroundColor: "#444444" }}
            ></div>
          </div>
        </div>
        <div className="style_row">
          <div className="left">
            <p>Backround Color</p>
          </div>
          <div className="right">
            <p>#FFFFFF</p>
            <div
              className="right_box"
              style={{ backgroundColor: "#ffffff", border: "1px solid #ccc" }}
            ></div>
          </div>
        </div>
        <div className="style_row">
          <div className="left">
            <p>Button Color</p>
          </div>
          <div className="right">
            <p>#2072EF</p>
            <div
              className="right_box"
              style={{ backgroundColor: "#2072EF" }}
            ></div>
          </div>
        </div>
        <div className="style_row">
          <div className="left">
            <p>Button Border Color</p>
          </div>
          <div className="right">
            <p>#2072EF</p>
            <div
              className="right_box"
              style={{ backgroundColor: "#2072EF" }}
            ></div>
          </div>
        </div>
        <div className="style_row">
          <div className="left">
            <p>Button Mouseover Color</p>
          </div>
          <div className="right">
            <p>#0053D1</p>
            <div
              className="right_box"
              style={{ backgroundColor: "#0053D1" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="pop-choices">
        <span onClick={prop.close} className="pop-btn1">Cancel</span>
        <span className="pop-btn2">Save</span>
      </div>
    </div>
  );
};

export default ModalPop;
