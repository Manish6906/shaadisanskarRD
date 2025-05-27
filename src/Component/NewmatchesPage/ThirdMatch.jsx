import React, { useState } from 'react';

const ThirdMatch = ({ totalPages = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="text-2xl text-black disabled:text-gray-300"
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            className={`text-lg ${
              currentPage === pageNumber ? 'text-[#FF5A60]' : 'text-black'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        className="text-2xl text-black disabled:text-gray-300"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default ThirdMatch;
