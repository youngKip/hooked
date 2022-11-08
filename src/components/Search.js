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

        <form action="" className=' text-center'>
            <input
                className=' w-[400px] m-6 p-2 border border-gray-600 rounded-lg'
                type="text"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <input className=' font-bold w-[250px] rounded-lg border ml-6 py-2 border-black cursor-pointer' type="submit" value="SEARCH" onClick={callSearchFunction} />
        </form>

    );
}

export default Search