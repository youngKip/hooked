import React from 'react'

const Header = (props) => {
    return (
        <header className=' text-5xl font-bold text-center bg-slate-800 py-3 text-white mb-2'>
            <h2>{props.text}</h2>
        </header>
    )
}
export default Header;