import React from "react";
import { Outlet, useParams } from "react-router-dom";
import "../styles/page.css";

export default function Page() {
  const { id } = useParams();
  return <div className="container page">Page {id}</div>;
}
