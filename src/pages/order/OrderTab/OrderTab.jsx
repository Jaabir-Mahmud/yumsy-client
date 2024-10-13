import { useState } from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate the starting and ending item indices for the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  // Get items to display on the current page
  const currentItems = items.slice(startIdx, endIdx);

  // Change to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Change to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          className="btn btn-outline mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="btn btn-outline ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
