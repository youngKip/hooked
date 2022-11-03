import React from 'react'

const Header = (props) => {
    return (
        <header className=' text-3xl font-bold text-teal-500 mb-4'>
            <h2>{props.text}</h2>
        </header>
    )
}
export default Header;