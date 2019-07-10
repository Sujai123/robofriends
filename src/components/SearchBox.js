import React from 'react';

const SearchBox=({searchChange})=>{
    return(
        <div>
            <input 
            type="search" 
            onChange={searchChange} 
            placeholder="Enter Robots"
            className="pa3 ba b--green bg-lightest-blue"
            autoFocus/>
        </div>
    );
}

export default SearchBox;
