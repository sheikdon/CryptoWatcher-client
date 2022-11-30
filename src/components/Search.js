import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const searchCoin = (e) => {
        e.preventDefault()
        navigate(`/coins/${name}`)
    }
    return (
    <div>
    <form onSubmit={searchCoin} action="/coins/search/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search all coins</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter title here..."
            name="name"
            value={name}
            onChange={e => setName(e.target.value)} 
        />
        <button type="submit">Find Coin</button>
    </form>
    </div>
    )
}

export default Search;