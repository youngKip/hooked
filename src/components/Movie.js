import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


export default function Movie({ movie }) {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className=' p-3 w-[300px] border-2 border-gray-200 rounded-lg shadow-md'>
            <h2 className=' text-lg font-bold text-center'>{movie.Title}</h2>
            <div>
                <img
                    src={poster}
                    alt={`The movie titled: ${movie.Title}`} />

            </div>
            <p className=' text-lg text-green-600 font-semibold'>{movie.Year}</p>
        </div>
    )
}
