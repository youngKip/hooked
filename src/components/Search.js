import React, { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");

    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();

    }

    return (

        <form action="">
            <input
                className=' p-2 border border-gray-600 rounded-lg'
                type="text"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <input className=' font-bold rounded-lg border ml-6 p-1 border-black cursor-pointer' type="submit" value="SEARCH" onClick={callSearchFunction} />
        </form>

    );
}

export default Search