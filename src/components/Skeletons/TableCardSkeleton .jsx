import React, { useState } from "react";

const TableCardSkeleton = () => {
  return (
    <div className="p-2 rounded-xl shadow-lg bg-gradient-to-r from-gray-300 to-gray-500 animate-pulse">
      <div className="cursor-pointer rounded-xl p-2 flex justify-between items-center">
        <div className="h-5 w-1/3 bg-gray-400 rounded-md"></div>
        <div className="h-5 w-5 bg-gray-400 rounded-sm"></div>
      </div>

      <div className=" p-2 flex items-center gap-2">
      <div className="h-6 w-6 bg-gray-400 rounded-sm"></div>
      <div className="h-5 w-1/3 bg-gray-400 rounded-md"></div>

        {/* {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-400 rounded-md p-2"
          >
            <div>
              <div className="h-4 w-3/4 bg-gray-400 rounded-md mb-1"></div>
              <div className="h-3 w-1/2 bg-gray-400 rounded-md"></div>
            </div>
            <div className="h-6 w-16 bg-gray-400 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-400 rounded-md"></div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TableCardSkeleton;
