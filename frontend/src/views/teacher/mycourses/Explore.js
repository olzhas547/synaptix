import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './Explore.css';
import axios from "axios";
import Pagination from "../NumberOfPages/Pagination";

function Explore(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchItems = async (pageNumber) => {
        const offset = (pageNumber - 1) * 8;
        try {
            const response = await axios.get(`http://localhost:8000/api/courses_list?skip=${offset}&limit=8`);
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching', error);
        }
    };

    useEffect(() => {
        fetchItems(currentPage);
    }, [currentPage]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search term submitted:', searchTerm);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="Explore">
            <div className="Explore-Title">
                <h1>Explore</h1>
            </div>
            <div className="Explore-inside">
                <div className="Explore-inside-in">
                    <form className="search-explore" onSubmit={handleSearchSubmit} role="search">
                        <label htmlFor="search-input" className="visually-hidden">
                            Search the site:
                        </label>
                        <input
                            type="search"
                            id="search-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            aria-label="Search through site content"
                        />
                        <button type="submit" aria-label="Submit search">
                            <CiSearch size="20px"/>
                        </button>
                    </form>

                    <div className="explore_card_all" role="list">
                        {items.map((item, index) => (
                            <div className="card" role="listitem" aria-labelledby={`item-title-${item.id}`} aria-describedby={`item-details-${item.id}`}>
                                <div className='card_img' role="img" aria-label={`Image for ${item.title}`}>

                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className='card_details' id={`item-details-${item.id}`}>
                                    {item.details}
                                </div>
                                <div className="card_title" id={`item-title-${item.id}`}>

                                    {item.title}
                                </div>
                                <div className="card_levels">

                                    {item.courseLevel}
                                    {item.isMentor}
                                    {item.certificate}
                                </div>
                                <div className="card_price">
                                    {/* Assuming price is available in item.price */}
                                    {item.coursePrice}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination totalItems={100} itemsPerPage={8} onPageChange={handlePageChange}/>
                </div>
            </div>
        </div>
    );
}

export default Explore;