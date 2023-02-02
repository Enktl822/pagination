import React from "react";
import "../styles/pageBtn.css";

export default function PageBtn({ btnName, btnClass }) {
  return <button className={btnClass}>{btnName}</button>;
}
