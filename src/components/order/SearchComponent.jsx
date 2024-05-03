import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h2>ORDER NOW</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for coffee..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}export default SearchComponent;