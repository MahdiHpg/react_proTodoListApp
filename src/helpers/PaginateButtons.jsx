import ReactPaginate from "react-paginate";

const PaginateButtons = ({ pageCount, setItemOffset, perPage }) => {
  const handlePageClick = (e) => {
    let newOffset = e.selected * perPage;
    // console.log(
    //   "newOffset is : " + newOffset + " typeof perPage is : " + typeof newOffset
    // );

    setTimeout(() => {
      document.documentElement.scrollTop = 0;
    }, 100);

    setItemOffset(newOffset);
  };
  return (
    <ReactPaginate
      containerClassName="myPaginate flex justify-center items-center mt-8 mb-4"
      pageClassName="block border border-solid border-lightGray w-10 
      h-10 flex items-center justify-center rounded-md mr-2"
      activeClassName="bg-palette-primary text-palette-light 
      hover:bg-palette-dark"
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount ?? pageCount}
      previousLabel={null}
      nextLabel={null}
      renderOnZeroPageCount={null}
    />
  );
};
export default PaginateButtons;
