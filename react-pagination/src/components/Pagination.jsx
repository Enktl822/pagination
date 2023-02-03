import PageBtn from "./PageBtn";
import "../styles/pagination.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const PageNumbers = 446;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(10);
  const lastpage = 99;
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container pagination">
      {/* {currentPage > 1 && currentPage < lastpage && } */}
      {currentPage < 3 ? (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          hidden
        >
          <PageBtn btnName={"Өмнөх"} btnClass={"pageBtn"} />
        </Link>
      ) : (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={"Өмнөх"} btnClass={"pageBtn"} />
        </Link>
      )}

      {currentPage < 4 ? (
        <Link
          to={`/page/${currentPage - 3}`}
          onClick={() => setCurrentPage(currentPage - 3)}
          hidden
        >
          <PageBtn btnName={currentPage - 3} btnClass={"pageBtn"} />
        </Link>
      ) : (
        <Link
          to={`/page/${currentPage - 3}`}
          onClick={() => setCurrentPage(currentPage - 3)}
        >
          <PageBtn btnName={currentPage - 3} btnClass={"pageBtn"} />
        </Link>
      )}

      <Link
        to={`/page/${currentPage - 2}`}
        onClick={() => setCurrentPage(currentPage - 2)}
      >
        <PageBtn btnName={currentPage - 2} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <PageBtn btnName={currentPage - 1} btnClass={"pageBtn"} />
      </Link>

      <span>
        <PageBtn btnName={currentPage} btnClass={"pageBtn-active"} />
      </span>

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={currentPage + 1} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${currentPage + 2}`}
        onClick={() => setCurrentPage(currentPage + 2)}
      >
        <PageBtn btnName={currentPage + 2} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${currentPage + 3}`}
        onClick={() => setCurrentPage(currentPage + 3)}
      >
        <PageBtn btnName={currentPage + 3} btnClass={"pageBtn"} />
      </Link>

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={"Дараах"} btnClass={"pageBtn"} />
      </Link>
    </div>
  );
}
