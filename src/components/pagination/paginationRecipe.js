import React from "react";

const PaginationLoop = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button key={i} onClick={() => setCurrentPage(i)}>
        {i}
      </button>
    );
  }

  return <>{pages}</>;
};

export default PaginationLoop;
