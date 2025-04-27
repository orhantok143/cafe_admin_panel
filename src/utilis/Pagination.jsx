import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-600 text-white rounded-l-md"
      >
        <ChevronLeft />
      </button>
      <span className="px-4 py-2 bg-gray-600 text-white">{currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-600 text-white rounded-r-md"
      >
       <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
