// @ts-nocheck
import React from "react";

export default function FlexController({children, activate, isVisible}) {


  return (
    <div className="users" >
      <div className="user">
        {children}
        <button className="button" onClick={activate}>
          {isVisible ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}
