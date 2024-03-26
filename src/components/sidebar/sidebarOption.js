import React from "react";
import "./sidebarOption.css";

//sidebar.jsでsidebarOptionを呼び出す際にテキストとアイコンを引数として渡す
function sidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default sidebarOption;
