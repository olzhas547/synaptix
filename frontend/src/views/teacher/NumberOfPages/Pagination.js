import React, { useState } from 'react';
import './Pagination.css'
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";


function Pagination({ totalItems, itemsPerPage, onPageChange }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`page-number ${i === currentPage ? 'active' : ''}`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination_all">
            <button
                className="page-number"
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <GrFormPrevious />
            </button>
            {renderPageNumbers()}
            <button
                className="page-number"
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <MdNavigateNext/>
            </button>
        </div>
    );
}

export default Pagination;
