import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MovieContext } from "../../context/MovieContext";
const Pagination = ({ totalPages }) => {
  const { setCurrentPage } = useContext(MovieContext);

  function handlePageClick(event) {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
  }
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Previous"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
