import React from "react";
import './pagination.css';

const PaginationLoop = ({ totalPosts, postsPerPage, setCurrentPage , currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button key={i} onClick={() => setCurrentPage(i)}
      className={`pagination-button ${currentPage === i ? "active" : ""}`}>
        {i}
      </button>
    );
  }

  return <div className="pagination-loop">{pages}</div>;
};

export default PaginationLoop;
