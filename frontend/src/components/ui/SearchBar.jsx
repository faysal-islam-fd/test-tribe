
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({placeholder}) => {
    const [search, setSearch] = useState('')
  return (
    <div className="relative text-stone-700 w-3/5">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder={placeholder} className="w-full border-2 border-gray-300  p-2" />
            <FaSearch className={` text-black
                absolute top-1/2 right-2 transform -translate-y-1/2 
                ${search.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}
                `} />
    </div>
  )
}

export default SearchBar