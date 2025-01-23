import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                id="searchInput"
                placeholder="ابحث عن عميل..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;