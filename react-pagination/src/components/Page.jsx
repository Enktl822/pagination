import React from "react";
import { useParams } from "react-router-dom";
import "../styles/page.css";

export default function Page() {
  const { id } = useParams();
  return <div className="page">Page {id}</div>;
}
