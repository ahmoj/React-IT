/* eslint-disable react/prop-types */
import "./Pagination.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({ numOfPages, page, setPage }) {
  const arr = [];
  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }

  if (page > numOfPages) {
    setPage(numOfPages)
  }
  else if (page < 1) {
    setPage(1)
  }

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={() => setPage(page - 1)}>
        <FaChevronLeft height={25} />
      </button>
      {arr.map((num) => (
        <button
          className="pagination-btn"
          key={num}
          onClick={() => setPage(num)}
        >
          {num}
        </button>
      ))}
      <button className="pagination-btn" onClick={() => setPage(page + 1)}>
        <FaChevronRight height={25} />
      </button>
    </div>
  );
}

export default Pagination;